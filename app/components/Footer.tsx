export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border-subtle)] bg-surface/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted">
          Copyright © 2026 Barleen. All rights reserved.
        </p>
        <p className="text-xs text-muted/80">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
