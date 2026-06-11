/**
 * Full-bleed video backdrop for the hero. Plays an autoplay/loop/muted clip,
 * tinted with a soft navy gradient so cream serif headlines stay readable.
 *
 * `videoSrc` is overridable; drop a new mp4 into public/video/ and pass the
 * path to swap the clip with no other code changes.
 */
export function OceanBackdrop({
  videoSrc = "/video/ocean.mp4",
}: {
  videoSrc?: string;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <video
        key={videoSrc}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Navy vignette so the cream headline + copper kicker stay readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,26,40,0.18) 0%, rgba(10,26,40,0.42) 60%, rgba(10,26,40,0.74) 100%)",
        }}
      />
    </div>
  );
}
