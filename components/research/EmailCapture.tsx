"use client";

import { useState, type FormEvent } from "react";

import { cn } from "@/lib/utils";

import { trackResearchPixel } from "./meta-pixel";

type Status = "idle" | "loading" | "success" | "error";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "research" }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      trackResearchPixel("Lead");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-xl">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
        noValidate
      >
        <label htmlFor="research-email" className="sr-only">
          Email address
        </label>
        <input
          id="research-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error" || status === "success") setStatus("idle");
          }}
          placeholder="Email address"
          aria-invalid={status === "error"}
          className={cn(
            "h-11 flex-1 rounded-md border border-neutral-700 bg-neutral-950 px-4 text-sm text-neutral-100 placeholder:text-neutral-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60",
            status === "error" && "border-red-500/70",
          )}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-11 shrink-0 rounded-md bg-sky-400 px-6 text-sm font-medium text-neutral-950 transition-colors hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Submitting…" : "Subscribe"}
        </button>
      </form>

      {status === "success" ? (
        <p className="mt-3 text-sm text-sky-300" role="status">
          Confirmed.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-3 text-sm text-red-400" role="alert">
          Enter a valid email address.
        </p>
      ) : null}

      <p className="mt-4 text-xs text-neutral-500">
        No medical or health information is collected. Email only.
      </p>
    </div>
  );
}
