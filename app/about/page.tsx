import React from "react";
import Image from "next/image";

const cardShell =
  "relative h-[400px] min-w-[220px] shrink-0 overflow-hidden shadow-[0_4px_20px_rgba(15,70,65,0.07)] sm:min-w-[260px]";

export default function AboutPage() {
  return (
    <div className="text-foreground">
      <section className="border-b border-[color:var(--border-subtle)] bg-surface/30 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-pretty">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-soft">
            About
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            React Native developer building polished mobile experiences.
          </h1>
          <p className="text-base leading-relaxed text-muted">
            A quick scroll through some recent visuals and brand work below.
          </p>
        </div>
      </section>

      <section className="bg-background px-4 py-10 sm:px-6 sm:py-14">
        <div className="marquee-strip mx-auto max-w-8xl p-2 sm:p-5 md:p-6 overflow-hidden">
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

export function MarqueeRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex w-max shrink-0 gap-3"
      aria-hidden={ariaHidden ? true : undefined}
    >
      <div
        className={`${cardShell} flex items-center justify-center rounded-tl-[100px] rounded-br-[100px] bg-white ring-1 ring-[color:var(--border-subtle)]`}
      >
        <Image
          src="/resumate.png"
          alt="Resumate"
          className="object-contain p-6"
          width={180}
          height={100}
        />
      </div>
      <div
        className={`${cardShell} rounded-tr-[100px] rounded-bl-[100px] bg-white ring-1 ring-[color:var(--border-subtle)]`}
      >
        <Image
          src="/Chat.png"
          alt="Match app"
          fill
          className="object-cover"
          sizes="260px"
        />
      </div>
      <div
        className={`${cardShell} flex items-center justify-center rounded-tl-[100px] rounded-br-[100px] bg-white ring-1 ring-[color:var(--border-subtle)]`}
      >
        <Image
          src="/splashLogo.png"
          alt="Splash logo"
          className="object-contain p-6"
          width={180}
          height={100}
        />
      </div>
      <div
        className={`${cardShell} rounded-tr-[100px] rounded-bl-[100px] bg-white ring-1 ring-[color:var(--border-subtle)]`}
      >
        <Image
          src="/nexda.png"
          alt="Nexda"
          fill
          className="object-cover"
          sizes="260px"
        />
      </div>
      <div
        className={`${cardShell} flex items-center justify-center rounded-tl-[100px] rounded-br-[100px] bg-white ring-1 ring-[color:var(--border-subtle)]`}
      >
        <Image
          src="/clpper.png"
          alt="Clipper"
          className="object-contain p-6"
          width={180}
          height={100}
        />
      </div>
      <div
        className={`${cardShell} rounded-tr-[100px] rounded-bl-[100px] bg-white ring-1 ring-[color:var(--border-subtle)]`}
      >
        <Image
          src="/clpper1.png"
          alt="Clipper variant"
          fill
          className="object-cover"
          sizes="260px"
        />
      </div>
      <div
        className={`${cardShell} flex items-center justify-center rounded-tl-[100px] rounded-br-[100px] bg-[color:var(--muted)] ring-1 ring-[color:var(--border-subtle)]`}
      >
        <Image
          src="/Onboarding.png"
          alt="Clipper logo"
          className="object-cover"
          fill
          // width={180}
          // height={100}
        />
      </div>
      <div
        className={`${cardShell} rounded-tr-[100px] rounded-bl-[100px] bg-white ring-1 ring-[color:var(--border-subtle)]`}
      >
        <Image
          src="/Profile_Filer.png"
          alt="Profile filter"
          fill
          className="object-cover"
          sizes="260px"
        />
      </div>
    </div>
  );
}
