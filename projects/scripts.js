// projects/scripts.js — Scripts per project
// ═══════════════════════════════════════════════════════════════════════════
//
// SCRIPTS is keyed by the project `id` from projects/videos.js.
// If a project has no entry here, the "Scripts" tab is hidden for it.
//
// Each entry supports:
//   title    — script name (shown on card + reader header)
//   excerpt  — one-line summary (optional, shown on card)
//   date     — string like "Feb 2026" or "2026" (optional)
//   tag      — short label, e.g. "Voiceover", "Storyboard" (optional)
//   readTime — estimated read time, e.g. "3 min" (optional)
//   body     — full markdown body. Supports:
//                • standard markdown (headings, lists, links, code, quotes)
//                • ```mermaid fences for diagrams
//                • :::carousel
//                    /path/to/image1.jpg|Caption 1
//                    /path/to/image2.jpg|Caption 2
//                  :::
//                  for horizontally-scrolling image galleries
//
// ─── Example ────────────────────────────────────────────────────────────────
// var SCRIPTS = {
//   p1: [
//     {
//       title: "Tournament voiceover",
//       excerpt: "V/O pacing + scene cues for the opener.",
//       date:  "Feb 2026",
//       tag:   "Voiceover",
//       readTime: "4 min",
//       body: `## Scene 1\n\n**V/O:** "It started with a bracket..."`
//     },
//   ]
// };
//
// ═══════════════════════════════════════════════════════════════════════════

var SCRIPTS = {
  // Add your scripts here, keyed by project id. Leaving this empty is fine —
  // each project's "Scripts" tab will simply be hidden until you populate it.
};
