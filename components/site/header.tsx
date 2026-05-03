"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { GithubIcon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#download", label: "Download" },
  { href: "#faq", label: "FAQ" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
          "rounded-full transition-all duration-300",
          scrolled &&
            "border border-white/10 bg-white/70 px-4 py-2 backdrop-blur-xl shadow-lg shadow-black/[0.04] dark:border-white/[0.08] dark:bg-zinc-950/60 dark:shadow-black/40"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
          aria-label={`${SITE.name} home`}
        >
          <Image
            src="/terax_icon_256.png"
            alt=""
            width={28}
            height={28}
            priority
            className="rounded-md"
          />
          <span className="text-base">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            GitHub
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-full">
            <Link href="#download">
              <HugeiconsIcon icon={GithubIcon} strokeWidth={2} />
              Download
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
