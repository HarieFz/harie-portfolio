"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type AnchorLinkProps = ComponentProps<typeof Link>;

export default function AnchorLink({ href, onClick, ...props }: AnchorLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || event.button !== 0) return;

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const anchor = event.currentTarget;

    if (anchor.target && anchor.target !== "_self") return;

    const url = new URL(anchor.href);

    if (url.origin !== window.location.origin) return;
    if (url.pathname !== window.location.pathname) return;
    if (!url.hash) return;

    const id = decodeURIComponent(url.hash.slice(1));
    const target = document.getElementById(id);

    if (!target) return;

    event.preventDefault();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    target.scrollIntoView({
      behavior: reducedMotion ? "instant" : "smooth",
      block: "start",
    });

    window.history.pushState(null, "", url.hash);
  };

  return <Link {...props} href={href} onClick={handleClick} />;
}
