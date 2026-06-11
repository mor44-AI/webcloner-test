"use client";

import { useState } from "react";

export type FormspreeStatus = "idle" | "submitting" | "ok" | "error";

/**
 * AJAX submission to a Formspree endpoint with inline status instead of the
 * hosted Formspree thank-you redirect. Keep `action`/`method` on the form as
 * a no-JS fallback; this handler preventDefaults when JS is available.
 */
export function useFormspree(endpoint: string) {
  const [status, setStatus] = useState<FormspreeStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return { status, handleSubmit };
}
