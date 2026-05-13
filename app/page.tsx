import Link from "next/link";
import { MarqueeRow } from "./about/page";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-glow), transparent 55%)",
        }}
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent-soft">
          Portfolio
        </p>
        <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Designing and developing mobile experiences with clarity and motion Hi
        </h1>
        <p className="mb-10 max-w-xl text-lg text-muted">
          React Native developer specializing in modern UI and product visuals.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-8px_var(--accent-glow)] transition hover:bg-accent-soft hover:shadow-[0_0_48px_-6px_var(--accent-glow)]"
        >
          View work
        </Link>
      </div>

      <section className="bg-background px-4 pb-14 pt-2 sm:px-6 sm:pb-16">
        <div className="marquee-strip mx-auto max-w-8xl p-4 sm:p-5 md:p-6 overflow-hidden">
          {/* <div className="marquee-strip-inner overflow-hidden py-5 sm:py-6"> */}
            <div className="flex w-max animate-marquee gap-3">
              <MarqueeRow />
              <MarqueeRow ariaHidden />
            </div>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}
