"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

import { usePageTransition } from "@/components/ui/PageTransition";

type TransitionLinkProps = ComponentProps<typeof Link>;

export default function TransitionLink({ href, onClick, ...props }: TransitionLinkProps) {
  const { navigate } = usePageTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || event.button !== 0) return;

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const anchor = event.currentTarget;

    if (anchor.target && anchor.target !== "_self") return;
    if (anchor.hasAttribute("download")) return;

    const destination = new URL(anchor.href);

    if (destination.origin !== window.location.origin) return;

    if (destination.pathname === window.location.pathname) return;

    event.preventDefault();

    navigate(`${destination.pathname}${destination.search}${destination.hash}`);
  };

  return <Link {...props} href={href} onClick={handleClick} />;
}
