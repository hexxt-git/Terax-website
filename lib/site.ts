export const VERSION = "0.5.8"

export const SITE = {
  name: "Terax",
  domain: "terax.app",
  url: "https://terax.app",
  tagline: "A terminal, editor, and AI — in one 10 MB binary.",
  description:
    "Terax is a fast terminal with a built-in editor, AI agents, voice input, and live web preview. 10 MB on disk, 300 ms cold start. Free and open source. BYOK or fully local via LM Studio.",
  github: "https://github.com/crynta/terax-ai",
  githubReleases: "https://github.com/crynta/terax-ai/releases",
  issues: "https://github.com/crynta/terax-ai/issues",
  twitter: "@terax_ai",
} as const

const releaseBase = `${SITE.githubReleases}/download/v${VERSION}`

export const DOWNLOADS = {
  macSilicon: {
    label: "macOS · Apple Silicon",
    file: `Terax_${VERSION}_aarch64.dmg`,
    arch: "Apple Silicon (M1+)",
    url: `${releaseBase}/Terax_${VERSION}_aarch64.dmg`,
    available: true,
  },
  macIntel: {
    label: "macOS · Intel",
    file: `Terax_${VERSION}_x64.dmg`,
    arch: "Intel (x86_64)",
    url: `${releaseBase}/Terax_${VERSION}_x64.dmg`,
    available: true,
  },
  linuxAppImage: {
    label: "Linux · AppImage",
    file: `Terax_${VERSION}_amd64.AppImage`,
    arch: "x86_64",
    url: `${releaseBase}/Terax_${VERSION}_amd64.AppImage`,
    available: true,
  },
  linuxDeb: {
    label: "Linux · .deb",
    file: `Terax_${VERSION}_amd64.deb`,
    arch: "Debian / Ubuntu",
    url: `${releaseBase}/Terax_${VERSION}_amd64.deb`,
    available: true,
  },
  linuxRpm: {
    label: "Linux · .rpm",
    file: `Terax-${VERSION}-1.x86_64.rpm`,
    arch: "Fedora / RHEL",
    url: `${releaseBase}/Terax-${VERSION}-1.x86_64.rpm`,
    available: true,
  },
  windows: {
    label: "Windows",
    file: "",
    arch: "Coming soon",
    url: "",
    available: false,
  },
} as const

export type DownloadKey = keyof typeof DOWNLOADS
