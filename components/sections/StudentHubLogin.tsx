"use client";

import { useState } from "react";

export function StudentHubLogin({ configured }: { configured: boolean }) {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!password.trim()) return;

    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/university/student-hub/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Access could not be verified.");

      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Access could not be verified.");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-lg flex-col gap-5 rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 text-left md:p-8"
    >
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-(--color-accent)">Student access</p>
        <h1 className="text-3xl font-bold leading-tight text-(--color-text-primary) md:text-4xl">
          Monarc University student hub
        </h1>
        <p className="text-sm leading-relaxed text-(--color-text-secondary)">
          Enter the shared cohort password from your onboarding email to view live links, Week 1 materials, and student resources.
        </p>
      </div>

      <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wide text-(--color-text-secondary)">
        Access password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={!configured || status === "loading"}
          className="w-full rounded-lg border border-(--color-border) bg-(--color-bg-elevated) px-4 py-3 text-sm normal-case tracking-normal text-(--color-text-primary) placeholder:text-(--color-text-muted) transition-all duration-250 hover:border-(--color-border-bright) focus-visible:border-(--color-accent) focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-60"
          placeholder={configured ? "Enter password" : "Password not configured yet"}
          required
        />
      </label>

      <button
        type="submit"
        disabled={!configured || status === "loading"}
        className="w-full rounded-lg bg-(--color-accent) px-6 py-3 text-sm font-semibold text-(--color-text-inverse) shadow-[0_0_20px_var(--color-accent-glow)] transition-all duration-250 hover:bg-(--color-accent-dim) disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3"
      >
        {status === "loading" ? "Checking..." : "Enter student hub"}
      </button>

      {!configured && (
        <p className="text-sm leading-relaxed text-(--color-error)">
          Add MONARC_UNIVERSITY_STUDENT_PASSWORD in the site environment variables before sharing this hub.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm leading-relaxed text-(--color-error)">
          {error}
        </p>
      )}
    </form>
  );
}
