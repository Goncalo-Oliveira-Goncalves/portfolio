// projects/videos.js — Projects + their Edits (videos)
// ═══════════════════════════════════════════════════════════════════════════
//
// Each project is a folder. Videos live inside it as children.
// Thumbnails and scripts for the same project live in the sibling files:
//   • projects/thumbnails.js → THUMBNAILS[projectId]
//   • projects/scripts.js    → SCRIPTS[projectId]
//
// FOLDER PROPERTIES
//   id       — unique key, keep it short (e.g. "brand-work"). Also used as
//              the lookup key in THUMBNAILS and SCRIPTS.
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
//   type     — "instagram" | "youtube" | "vimeo" | "drive" | "external" | "hosted" | "wistia"
//   url      — full link to the video (or Instagram post when you also stream / Wistia + IG)
//   wistiaId — Wistia media id (e.g. from embed URL). Opens inline player in modal; card uses Wistia swatch.
//   stream   — (OPTIONAL) direct URL to an MP4 or HLS (.m3u8) — plays in-site in the modal.
//              `src` is accepted as an alias. Works with Cloudflare Stream, Bunny, Mux, S3+CDN, etc.
//              When set alongside type "instagram", the grid still uses IG thumbnails; the modal
//              streams your file and can show "View on Instagram" from `url`.
//   thumb    — (OPTIONAL) preview image URL. You usually DON'T need this:
//                • YouTube → thumbnail is auto-fetched from the video ID.
//                • Instagram → thumbnail is auto-fetched via the IG URL
//                  (the site appends `/media/?size=l` under the hood, so just
//                  paste the reel/post URL and it works).
//              Only set `thumb` to override the auto preview with your own image.
//   format   — (optional) "vertical" | "horizontal" (Instagram defaults to vertical)
//
// IN-SITE VIDEO: add `stream: "https://…/file.mp4"` (or .m3u8) on each clip you want to play
// in the modal. Without `stream`, Instagram/Drive entries only show an external link.
// The file must be a direct URL (HTTPS), publicly readable, with CORS if you use HLS in Chrome.
//
// ═══════════════════════════════════════════════════════════════════════════

var PROJECTS = [
  {
    id: 'p1',
    title: 'Personal Favorites',
    size: 'hero',
    videos: [
      {
        title: "Tournament Video",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "wistia",
        wistiaId: "zzr48cyoil",
        url: "https://www.instagram.com/p/DWuGvJ0gttC/",
        format: "vertical"
      },
      {
        title: "TOFU, MOFU or TOFU?",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "instagram",
        url: "https://www.instagram.com/p/DWzNIy8Aj6Y/"
      },
      {
        title: "100 vs 100K vs 1M",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "instagram",
        url: "https://www.instagram.com/p/DWv5R2UAjyO/"
      },
      {
        title: "Conversion vs Views",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "instagram",
        url: "https://www.instagram.com/p/DWnlb53gluq/"
      },
      {
        title: "Good vs Bad vs Great",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "instagram",
        url: "https://www.instagram.com/p/DWmRC_iAqP6/"
      },
      // Example — no `thumb` needed, the preview is auto-fetched from the URL:
      // {
      //   title: "Reel 01",
      //   client: "Personal Work",
      //   category: "social",
      //   year: "2025",
      //   type: "instagram",
      //   url: "https://www.instagram.com/reel/XXXXX/"
      // },
      // Stream on-site (MP4 or HLS) and keep the Instagram link for attribution:
      // {
      //   title: "My reel",
      //   client: "Personal Work",
      //   category: "social",
      //   year: "2026",
      //   type: "instagram",
      //   url: "https://www.instagram.com/p/XXXX/",
      //   stream: "https://YOUR_CDN/exports/reel.mp4",
      //   format: "vertical",
      // },
    ]
  },
  {
    id: 'p2',
    title: 'Recent Batch',
    size: 'normal',
    videos: [
      {
        title: "Educational vs Storytelling vs Authority",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "instagram",
        url: "https://www.instagram.com/p/DW9W1VRgpFu/"
      },
      {
        title: "Cult vs Personal Brand",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "instagram",
        url: "https://www.instagram.com/p/DW8iYinjGI1/"
      },
      {
        title: "4 Types of Content",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "instagram",
        url: "https://www.instagram.com/p/DW7MwylgpNa/"
      },
    ]
  },
  {
    id: 'p3',
    title: 'Oldest Work😬',
    size: 'normal',
    videos: [
      {
        title: "Instagram Bios",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "instagram",
        url: "https://www.instagram.com/p/DVmFF5lgkN6/"
      },
      {
        title: "Data Analysis 1",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "instagram",
        url: "https://www.instagram.com/p/DWB7OWLiXVg/"
      },
      {
        title: "Visual Brand",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "instagram",
        url: "https://www.instagram.com/p/DV_WW3JiIRB/"
      },
      {
        title: "Background Music",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "instagram",
        url: "https://www.instagram.com/p/DV6Mx_xDCMw/"
      },
    ]
  },
  {
    id: 'p4',
    title: 'Discontinued Work❓',
    size: 'wide',
    videos: [
      {
        title: "Skai Jackson - Discontinued Documentary",
        client: "Personal Work",
        category: "social",
        year: "2026",
        type: "drive",
        url: "https://drive.google.com/file/d/1ai8jHSZm6kphlZSoxJye6IadCaBk0lz1/view?usp=sharing",
        format: "horizontal"
      },
    ]
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
