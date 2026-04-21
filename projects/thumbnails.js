// projects/thumbnails.js — Thumbnails per project
// ═══════════════════════════════════════════════════════════════════════════
//
// THUMBNAILS is keyed by the project `id` from projects/videos.js.
// If a project has no entry here, the "Thumbnails" tab is hidden for it.
//
// Each entry supports:
//   title    — label shown under the image (optional)
//   image    — URL or relative path (e.g. "assets/thumbs/p1-01.jpg")
//   client   — (optional) client name shown as metadata
//   year     — (optional) year shown as metadata
//   alt      — (optional) alt-text override for accessibility
//
// ─── Example ────────────────────────────────────────────────────────────────
// var THUMBNAILS = {
//   p1: [
//     { title: "Tournament cover", image: "assets/thumbs/p1-01.jpg",
//       client: "Personal", year: "2026" },
//     { title: "100 vs 100K vs 1M",  image: "assets/thumbs/p1-02.jpg",
//       client: "Personal", year: "2026" },
//   ],
//   p2: [
//     { title: "Cult vs Personal Brand", image: "assets/thumbs/p2-01.jpg" },
//   ],
// };
//
// ═══════════════════════════════════════════════════════════════════════════

var THUMBNAILS = {
  // Add your thumbnails here, keyed by project id. Leaving this empty is fine —
  // each project's "Thumbnails" tab will simply be hidden until you populate it.
};
