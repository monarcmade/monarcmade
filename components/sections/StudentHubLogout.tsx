"use client";

export function StudentHubLogout() {
  async function handleLogout() {
    await fetch("/api/university/student-hub/logout", { method: "POST" });
    window.location.reload();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-lg border border-(--color-border-bright) px-4 py-2 text-sm font-semibold text-(--color-text-primary) transition-colors duration-250 hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3"
    >
      Sign out
    </button>
  );
}
