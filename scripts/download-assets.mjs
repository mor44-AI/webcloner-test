/**
 * Download assets from joindawn.com to public/.
 *
 * Run with: node scripts/download-assets.mjs
 */
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";

const SOURCE = "https://joindawn.com";
const OUT = new URL("../public/", import.meta.url).pathname.replace(/^\/([A-Za-z]):/, "$1:");

/** @type {string[]} — exact paths captured during recon */
const PATHS = [
  // Decorative SVGs
  "/images/circle-1.svg",
  "/images/circle-2.svg",
  "/images/circle-8.svg",
  "/images/circle-9.svg",
  "/images/rotate-me-4.svg",
  "/images/Group-8.svg",
  "/images/Group-8-2.svg",
  // Photos
  "/images/gradient.avif",
  "/images/image-bottom-2.avif",
  "/images/Ellipse-105.avif",
  "/images/Ellipse-105_1.avif",
  "/images/Ellipse-105-1.avif",
  "/images/Karmel.avif",
  "/images/ripal.avif",
  "/images/d2f7e14f61d96ef56bde8c74ae676f3a24373acc.avif",
  "/images/96ec744e4d4e84a2e6df3efe202eeda699e4d245.avif",
  // Videos
  "/videos/dawn-cards_smaller_mp4.mp4",
  "/videos/dawn-cards_smaller_webm.webm",
  "/videos/dawn-cards_smaller_poster.0000000.jpg",
];

const CONCURRENCY = 4;

async function fetchOne(p) {
  const url = SOURCE + p;
  const out = join(OUT, p.slice(1));
  if (existsSync(out)) {
    console.log(`  skip  ${p}`);
    return { p, status: "skipped" };
  }
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      Accept: "image/avif,image/webp,*/*",
    },
  });
  if (!res.ok) {
    console.error(`  fail  ${p} → ${res.status}`);
    return { p, status: "failed", code: res.status };
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, buf);
  console.log(`  ok    ${p} (${buf.byteLength} bytes)`);
  return { p, status: "ok", bytes: buf.byteLength };
}

async function main() {
  console.log(`Downloading ${PATHS.length} assets from ${SOURCE} → ${OUT}`);
  const results = [];
  for (let i = 0; i < PATHS.length; i += CONCURRENCY) {
    const batch = PATHS.slice(i, i + CONCURRENCY);
    const r = await Promise.all(batch.map(fetchOne));
    results.push(...r);
  }
  const ok = results.filter((r) => r.status === "ok").length;
  const skipped = results.filter((r) => r.status === "skipped").length;
  const failed = results.filter((r) => r.status === "failed");
  console.log(`Done. ok=${ok} skipped=${skipped} failed=${failed.length}`);
  if (failed.length) {
    console.error("Failures:", failed);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
