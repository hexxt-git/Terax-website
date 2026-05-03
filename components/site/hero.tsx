"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  GithubIcon,
  AppleIcon,
  ComputerIcon,
  MicrosoftIcon,
} from "@hugeicons/core-free-icons"

import { SITE, VERSION, DOWNLOADS } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/text-typing"
import { usePlatform } from "./platform-detect"

export function Hero() {
  const platform = usePlatform()

  const primary =
    platform === "linux"
      ? {
          label: "Download for Linux",
          href: DOWNLOADS.linuxAppImage.url,
          icon: ComputerIcon,
        }
      : platform === "windows"
        ? {
            label: "Windows · coming soon",
            href: "#download",
            icon: MicrosoftIcon,
            disabled: true,
          }
        : {
            label: "Download for macOS",
            href: DOWNLOADS.macSilicon.url,
            icon: AppleIcon,
          }

  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Hero-only soft accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href={`${SITE.githubReleases}/tag/v${VERSION}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase backdrop-blur-md transition-colors hover:text-foreground"
          >
            <span className="size-1.5 rounded-full bg-foreground/70" />
            <span>v{VERSION} — out now</span>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="size-3 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-7 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-foreground/55">The AI-native</span>
          <br className="hidden sm:inline" />{" "}
          <TypingAnimation
            words={["terminal.", "editor.", "AI workflow.", "everything."]}
            loop
            typeSpeed={70}
            deleteSpeed={40}
            pauseDelay={1700}
            className="text-foreground"
            cursorStyle="line"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-7 max-w-xl text-base text-balance text-muted-foreground sm:text-lg"
        >
          A fast terminal with a built-in editor, AI agents, and live web
          preview. 10&nbsp;MB on disk. 300&nbsp;ms cold start. BYOK or fully
          local.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-5"
            disabled={primary.disabled}
          >
            <Link
              href={primary.href}
              {...(primary.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <HugeiconsIcon icon={primary.icon} strokeWidth={2} />
              {primary.label}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-5"
          >
            <Link href={SITE.github} target="_blank" rel="noreferrer">
              <HugeiconsIcon icon={GithubIcon} strokeWidth={2} />
              View on GitHub
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-muted-foreground/70 uppercase"
        >
          <span>macOS</span>
          <span className="size-1 rounded-full bg-muted-foreground/40" />
          <span>Linux</span>
          <span className="size-1 rounded-full bg-muted-foreground/40" />
          <span className="opacity-60">Windows · soon</span>
          <span className="size-1 rounded-full bg-muted-foreground/40" />
          <span>MIT</span>
        </motion.div>
      </div>
    </section>
  )
}
