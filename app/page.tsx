import { Demo } from "@/components/site/demo"
import { Download } from "@/components/site/download"
import { FAQ } from "@/components/site/faq"
import { FeatureGrid } from "@/components/site/feature-grid"
import { FeatureShowcase } from "@/components/site/feature-showcase"
import { SiteFooter } from "@/components/site/footer"
import { SiteHeader } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { Stats } from "@/components/site/stats"
import { DOWNLOADS, SITE, VERSION } from "@/lib/site"

import {
  BrowserIcon,
  CheckListIcon,
  CodeFolderIcon,
  CodeIcon,
  CommandIcon,
  CommandLineIcon,
  CpuIcon,
  EnergyIcon,
  Layout02Icon,
  Mic01Icon,
  Notebook01Icon,
  PaintBrush02Icon,
  RecordIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons"

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    description: SITE.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Linux, Windows",
    softwareVersion: VERSION,
    downloadUrl: DOWNLOADS.macSilicon.url,
    url: SITE.url,
    license: "https://opensource.org/licenses/Apache-2.0",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: SITE.name, url: SITE.github },
    video: {
      "@type": "VideoObject",
      name: `${SITE.name} - demo`,
      description: `Quick walkthrough of ${SITE.name}: terminal, editor, AI agents, and web preview.`,
      thumbnailUrl: `https://i.ytimg.com/vi/${SITE.demoVideoId}/maxresdefault.jpg`,
      uploadDate: "2026-05-16",
      contentUrl: SITE.demoVideoUrl,
      embedUrl: `https://www.youtube-nocookie.com/embed/${SITE.demoVideoId}`,
    },
  }

  return (
    <>
      <SiteHeader />
      <main className="relative">
        <Hero />
        <Stats />
        <Demo />

        <div id="features" className="relative">
          <FeatureShowcase
            id="terminal"
            index="01"
            eyebrow="Terminal"
            title="A terminal you'll actually want to live in."
            description="xterm.js with a WebGL renderer, multi-tab, and a file explorer with Catppuccin icons. Keyboard-first, instantly fast."
            bullets={[
              {
                icon: CommandLineIcon,
                label: "WebGL-rendered xterm.js - silky at any scrollback",
              },
              {
                icon: Layout02Icon,
                label:
                  "Multi-tab terminals, editors, and previews side-by-side",
              },
              {
                icon: CodeFolderIcon,
                label: "File explorer with Catppuccin icons + keyboard nav",
              },
              {
                icon: Search01Icon,
                label: "Project-wide search at ripgrep speed",
              },
            ]}
            image={{
              src: "/terminal.webp",
              alt: "Terax terminal showing fastfetch output and the file explorer",
              width: 2560,
              height: 1600,
              caption: "~/projects/terax  ·  fastfetch",
            }}
            priority
          />

          <FeatureShowcase
            id="editor"
            index="02"
            eyebrow="Editor"
            title="An editor with real Vim mode and AI autocomplete."
            description="Built-in editor with context-aware completions, first-class Vim, and prebuilt themes. No language-server setup - it just works."
            bullets={[
              { icon: CodeIcon, label: "Context-aware AI autocomplete" },
              {
                icon: CommandIcon,
                label: "Real Vim mode (motions, registers, marks)",
              },
              {
                icon: PaintBrush02Icon,
                label: "Catppuccin, Tokyo Night, and more",
              },
              { icon: EnergyIcon, label: "Sub-millisecond keystroke latency" },
            ]}
            image={{
              src: "/editor.webp",
              alt: "Terax code editor with AI autocomplete and Vim mode",
              width: 2560,
              height: 1600,
              caption: "src/modules/lib.rs",
            }}
            reverse
          />

          <FeatureShowcase
            id="agents"
            index="03"
            eyebrow="AI workflow"
            title="Agents that read, plan, and ship diffs."
            description="Multi-agents and sub-agents browse files, run commands, and propose changes - every edit lands in a reviewable diff before it touches disk."
            bullets={[
              {
                icon: RecordIcon,
                label: "AI Edit Diffs - review every change inline",
              },
              {
                icon: Notebook01Icon,
                label: "TERAX.md memory + per-project configs in your repo",
              },
              {
                icon: CodeFolderIcon,
                label: "Snippets & skills - composable, callable workflows",
              },
              { icon: CpuIcon, label: "BYOK or fully local via LM Studio" },
              {
                icon: Mic01Icon,
                label: "Voice input - talk to your agents while you code",
              },
            ]}
            image={{
              src: "/ai_workflow.webp",
              alt: "Terax AI panel showing an agent listing dirs and proposing edit diffs",
              width: 2560,
              height: 1600,
              caption: "AI agents · edit diff",
            }}
          />

          <FeatureShowcase
            id="preview"
            index="04"
            eyebrow="Web preview"
            title="Preview your app without leaving the shell."
            description="Auto-detects dev servers - Vite, Next, anything - and opens them as a tab beside your editor."
            bullets={[
              {
                icon: BrowserIcon,
                label: "Auto-detect Vite, Next, Astro, and more",
              },
              {
                icon: Layout02Icon,
                label: "Live preview tab next to your editor",
              },
              {
                icon: CheckListIcon,
                label: "Plans, tasks, and TODOs tracked in-app",
              },
              {
                icon: EnergyIcon,
                label: "Hot-reload at the speed of your dev server",
              },
            ]}
            image={{
              src: "/web_preview.webp",
              alt: "Terax web preview showing a Vite app rendered in a side panel",
              width: 2560,
              height: 1600,
              caption: "preview · http://localhost:5173",
            }}
            reverse
          />
        </div>

        <FeatureGrid />
        <Download />
        <FAQ />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
