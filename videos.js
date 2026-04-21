// videos.js — Portfolio Data
// ═══════════════════════════════════════════════════════════════════════════
//
// Each project is a folder. Videos live inside it as children.
//
// FOLDER PROPERTIES
//   id       — unique key, keep it short (e.g. "brand-work")
//   title    — displayed on the folder card
//   size     — controls the tile size in the grid:
//                "hero"   → 2 columns × 2 rows  (featured, big)
//                "wide"   → 2 columns × 1 row   (banner)
//                "normal" → 1 column × 1 row    (default, can omit)
//
// VIDEO PROPERTIES (inside the "videos" array)
//   title    — shown on the card
//   client   — client name or "Personal Work"
//   category — "social" | "commercial" | "music" | "film"
//   year     — "2025"
//   type     — "instagram" | "youtube" | "vimeo" | "drive" | "external"
//   url      — full link to the video
//
// ═══════════════════════════════════════════════════════════════════════════

var PROJECTS = [
  {
    id: 'p1',
    title: 'Project 1',
    size: 'hero',
    videos: [
      // { title: "Reel 01", client: "Personal Work", category: "social", year: "2025", type: "instagram", url: "https://www.instagram.com/reel/XXXXX/" },
    ]
  },
  {
    id: 'p2',
    title: 'Project 2',
    size: 'normal',
    videos: []
  },
  {
    id: 'p3',
    title: 'Project 3',
    size: 'normal',
    videos: []
  },
  {
    id: 'p4',
    title: 'Project 4',
    size: 'wide',
    videos: []
  },
  {
    id: 'p5',
    title: 'Project 5',
    size: 'normal',
    videos: []
  },
  {
    id: 'p6',
    title: 'Project 6',
    size: 'normal',
    videos: []
  },
];

// ─── Marquee tags ───────────────────────────────────────────────────────────
// Edit these strings to change the scrolling ticker in the hero section.
var MARQUEE = [
  "Social Content",
  "Premiere Pro",
  "Short Films",
  "Color Grading",
  "DaVinci Resolve",
  "Music Videos",
  "Motion Graphics",
  "Reels",
];

// ─── FAQ entries ────────────────────────────────────────────────────────────
var FAQS = [
  {
    q: "What types of projects do you take on?",
    a: "I take on a variety of projects, including social media reels, promotions and long form. What I am more niched about is the style of video. I like doing clips, I DO NOT do AI content. I do voice overs but it will cost extra. I edit videos in other languages, including portuguese (native) and all other languages (via a translator), but it will cost extra."
  },
  {
    q: "How long does a typical edit take?",
    a: "It depends on scope. A social media reel is usually 1–3 days depending on complexity. A short film or commercial can take 1–3 weeks. I'll give you a clear timeline upfront before we start."
  },
  {
    q: "Do you offer revisions?",
    a: "Yes. Every project includes revision rounds. The exact number depends on the package, but I won't consider something finished until it looks right."
  },
  {
    q: "Can you handle color grading?",
    a: "Absolutely — it's a core part of my workflow. From a simple correction to a full cinematic grade, I can match any visual reference you have in mind."
  },
  {
    q: "What software do you use?",
    a: "Primarily DaVinci Resolve and Adobe Premiere Pro, with After Effects for motion graphics. I use whatever the project demands."
  }
];
