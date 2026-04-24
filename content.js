// content.js — FAQs, Recent Courses, Testimonials
// ═══════════════════════════════════════════════════════════════════════════
//
// FAQ answers support **Markdown** (bold, italics, lists, links, code, quotes)
// AND **Mermaid diagrams**. Wrap diagrams in a ```mermaid code fence:
//
//   ```mermaid
//   flowchart LR
//     A[Brief] --> B[Edit] --> C[Review] --> D[Deliver]
//   ```
//
// ═══════════════════════════════════════════════════════════════════════════

var FAQS = [
  {
    q: "What types of projects do you take on?",
    a: `I take on a variety of projects, including **social media reels**, **promotions** and **long-form** videos.

What I'm more niched about is the *style* of video:

- I love doing **clips**.
- I **do NOT** do AI content.
- I do voice-overs, but they'll cost extra.
- I edit videos in other languages, including **Portuguese (native)** and all other languages (via a translator) — languages other than English/Portuguese cost extra.`
  },
  {
    q: "How long does a typical edit take?",
    a: `It depends on scope. Here's the usual flow from brief to delivery:

\`\`\`mermaid
flowchart LR
  Brief[Brief] --> Footage[Footage review]
  Footage --> Edit[First cut]
  Edit --> Review[Your review]
  Review --> Revisions[Revisions]
  Revisions --> Deliver[Deliver]
\`\`\`

- **Social media reel:** 1–3 days depending on complexity.
- **Commercial:** 1–2 weeks.
- **Short film:** 2–3 weeks.

You'll get a clear timeline upfront before we start.`
  },
  {
    q: "Do you offer revisions?",
    a: `Yes. Every project includes revision rounds. The exact number depends on the package, but I won't consider something finished until it looks right.`
  },
  {
    q: "Can you handle color grading?",
    a: `Absolutely — the most essential part of my job. From a simple correction to a full cinematic grade, I can match any visual reference you have in mind.`
  },
  {
    q: "What software do you use?",
    a: `Primarily **DaVinci Resolve** for everything. But I use whatever the project demands.`
  },
  {
    q: "What is your typical workflow?",
    a: `Every project moves through the same six stages. Once the cut is locked, **color** and **mix** run in parallel so neither blocks the other before the final pass:

\`\`\`mermaid
flowchart LR
  Prep[PREP] --> Edit[EDIT]
  Edit --> VFX[VFX]
  VFX --> Color[COLOR]:::highlight
  VFX --> Mix[MIX]
  Color --> Final[FINAL EDIT]
  Mix --> Final
  Final --> Render[RENDER]
  classDef highlight fill:#E8B64C,stroke:#E8B64C,color:#050508;
\`\`\`

- **Prep → Edit → VFX** lands the story: ingest, rough cut, tighten, then add any VFX beats.
- **Color** and **Mix** run side-by-side so a slow grade doesn't stall the audio (or vice-versa).
- **Final Edit** reconverges both streams for a last pass — continuity, timing tweaks, credits.
- **Render** is the only stage where nothing changes except the file coming out.`
  }
];

// ─── Recent Courses ─────────────────────────────────────────────────────────
//
// Courses you've recently taken. Each entry supports:
//   title    — course name
//   provider — platform / school / creator
//   link     — URL to the course (optional)
//   date     — string like "Mar 2025" or "2025" (optional)
//   tag      — short label, e.g. "Editing", "Color" (optional)
//
var RECENT_COURSES = [
  {
    title: "Introduction to Color",
    provider: "Blackmagic Design",
    link: "https://www.blackmagicdesign.com/products/davinciresolve/training",
    date: "2025",
    tag: "Color Grading"
  },
  {
    title: "Color 101",
    provider: "GroundControl",
    link: "https://www.groundcontrol.film/offers/LygZ4PFT/checkout",
    date: "2025",
    tag: "Color Grading"
  },
  {
    title: "The Donut Tutorial",
    provider: "Andrew Price",
    link: "https://www.youtube.com/watch?v=z-Xl9tGqH14",
    date: "2022",
    tag: "3d Modeling"
  },
];

// ─── Testimonials ───────────────────────────────────────────────────────────
//
// Each entry supports:
//   quote  — the testimonial (markdown-lite: **bold** and *italics* are rendered)
//   name   — person's name
//   role   — their role / company
//   avatar — (optional) image URL for avatar
//   link   — (optional) link (e.g. their IG profile or website)
//
var TESTIMONIALS = [
  {
    quote: "Very friendly, super good editing, great person, free even if it took hours of hours of his time. Always responds a second after you send a message. Highly recommended! This guy is awesome.",
    name: "Frovist",
    role: "Creator",
  },
  {
    quote: "Followed the reference perfectly added ideas i actually liked very friendly easy to communicate with very fast delivery very good with using stock footage to follow the voice over.",
    name: "Joe Rebea",
    role: "Creator",
  },
  {
    quote: "Incrediable editing and can make the best shorts ever and its have subtitle 10/10 recommend him to anyone.",
    name: "Ocean",
    role: "Creator",
  },
];
