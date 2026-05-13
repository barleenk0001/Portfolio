import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border-subtle)] bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground transition-colors hover:text-accent-soft"
        >
          Barleen
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <Link
            href="/about"
            className="transition-colors hover:text-accent-soft"
          >
            Work
          </Link>
        </nav>
      </div>
    </header>
  );
}
