"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

const ANIM_CLASS = "animate-drop-in";

/**
 * Restarts the CSS drop-in on every mount (client navigations) and when the
 * page is restored from the back/forward cache (bfcache), where animations
 * otherwise stay at their end state until a full reload.
 */
export default function HeroHiImage() {
  const wrapRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const replay = () => {
      el.classList.remove(ANIM_CLASS);
      void el.offsetWidth;
      el.classList.add(ANIM_CLASS);
    };

    replay();

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) replay();
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return (
    <span
      ref={wrapRef}
      className={`inline-block w-full will-change-transform lg:flex lg:justify-end ${ANIM_CLASS}`}
    >
      <Image
        src="/hi.png"
        alt="Hello"
        width={360}
        height={360}
        className="mx-auto h-auto w-[min(280px,88vw)] select-none sm:w-[min(320px,70vw)] lg:mx-0 lg:ml-auto lg:w-[min(380px,100%)]"
        priority
      />
    </span>
  );
}
