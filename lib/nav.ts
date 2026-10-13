export const CHAPTER_APPLICATION_URL = "https://chapters.stem-sprouts.org"
export const DONATE_URL = "https://hcb.hackclub.com/donations/start/stem-sprouts"

export type NavItem = { label: string; href: string; external?: boolean }
export type NavEntry = { label: string; href: string } | { label: string; items: NavItem[] }

/**
 * Primary navigation. Every pre-existing page keeps its URL; this only
 * regroups them. Each destination appears once (no duplicate links, and no
 * same-page #anchor entries). Policy Fellowship is a student program, so it
 * sits under Programs; legal/privacy are "Policy / Transparency" under About.
 */
export const NAV_ENTRIES: NavEntry[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    items: [
      { label: "Our Story & Team", href: "/about" },
      { label: "Policy / Transparency", href: "/legal" },
    ],
  },
  {
    label: "Programs",
    items: [
      { label: "Programs Overview", href: "/programs" },
      { label: "Pinboard", href: "/pinboard" },
      { label: "Policy Fellowship", href: "/policy-fellowship" },
    ],
  },
  {
    label: "Chapters",
    items: [
      { label: "How Chapters Work", href: "/chapters" },
      { label: "Find a Chapter", href: "/locations" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Learning Resources", href: "/resources" },
      { label: "Guides", href: "/guides" },
    ],
  },
  { label: "News", href: "/news" },
  {
    label: "Get Involved",
    items: [
      { label: "Lead a Chapter", href: "/chapter-leadership" },
      { label: "Start a Chapter", href: CHAPTER_APPLICATION_URL, external: true },
      { label: "Partner With Us", href: "/partner" },
    ],
  },
  { label: "Contact", href: "/#contact" },
]
