import Link from "next/link";
import HeroHiImage from "./components/HeroHiImage";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-glow), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Copy: stacked on mobile; left column on large screens */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent-soft">
              Portfolio
            </p>
            <h1 className="mb-6 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:max-w-none">
              Designing and developing mobile experiences with clarity and motion
            </h1>
            <p className="mb-10 max-w-xl text-lg text-muted">
              React Native developer specializing in modern UI and product
              visuals.
            </p>
          </div>

          {/* Image: below all copy on mobile; beside headline block on lg+ */}
          <div className="flex justify-center overflow-visible pt-4 lg:justify-end lg:pt-0">
            <div className="w-full max-w-[min(360px,90vw)] overflow-visible pt-10 lg:max-w-none lg:pt-8 transform transition-transform duration-300 hover:scale-150 ">
              <HeroHiImage />
            </div>
          </div>
        </div>
         <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-8px_var(--accent-glow)] transition hover:bg-accent-soft hover:shadow-[0_0_48px_-6px_var(--accent-glow)]"
            >
              View work
            </Link>
    </div>
      </div>
       
  );
}
