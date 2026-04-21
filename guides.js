// guides.js — Personal Guides for editors (a little blog)
// ═══════════════════════════════════════════════════════════════════════════
//
// Each guide entry supports:
//   slug      — unique id, used for the URL hash (e.g. #guide=top-3d-courses)
//   title     — headline of the guide
//   excerpt   — one-line summary shown on the card (keep it tight)
//   tag       — short label, e.g. "Learning", "Color", "Workflow"
//   readTime  — estimated read time, e.g. "6 min" (optional)
//   date      — string like "Apr 2026" (optional)
//   cover     — (optional) URL for a card cover image
//   body      — full markdown body. Supports:
//                • standard markdown (headings, lists, links, code, quotes)
//                • ```mermaid fences for diagrams
//                • :::carousel
//                    /path/to/image1.jpg|Caption 1
//                    /path/to/image2.jpg|Caption 2
//                  :::
//                  for horizontally-scrolling image galleries
//                • ||inline spoiler|| — Discord-style: blurred until clicked
//                • :::spoiler Optional label here
//                    Any markdown can go inside.
//                    Headings, **bold**, lists, etc. all work.
//                  :::
//                  for hiding a whole block behind a click-to-reveal card.
//
// ═══════════════════════════════════════════════════════════════════════════

var GUIDES = [
  {
    slug: 'top-3d-courses-for-editors',
    title: '3D Artist: Begginer to NInja',
    excerpt: "A leveled path from zero to ninja — each level has one core course and one practice exercise to lock it in.",
    tag: 'Learning',
    readTime: '5 min',
    date: 'Apr 2026',
    body: `## Level 0: Donut Tutorial by Andrew Price (Blender Guru)

Once you finish the donut, make a different food item (like a cupcake or a burger) entirely from scratch without re-watching the videos.

Take your time.

## Level 1: Blender Basics

Do not see until level 0 completed:

(CG Cookie)  OR Grant Abbitt's Complete Beginner Series.

Once finished, model three simple household objects (like a chair, a desk lamp, and a coffee mug) focusing only on using the fewest possible "points" to keep the model clean.

## Level 2: Specialize

For Environments: Master 3D Environments by Martin Klekner (CG Boost).

For Machines/Sci-Fi: Hard-Surface Modeling by Creative Shrimp.

The jack of all trades is also an option, but you gotta be very commited if you wanna become the master of all of them.

The Practice Exercise: Create a "Modular Kit." Instead of one big building, make 5-10 individual pieces (one wall, one window, one floor tile) that can be snapped together like LEGOs to build a whole street.

## Level 3: Master

For Character Movement: The Art of Effective Rigging 2 by Pierrick Picaut.

For Procedural Logic: Geometry Nodes for Artists by Erindale.

The Practice Exercise (Rigging): Build a "Spider Robot" rig that can walk and then fold into a ball.

The Practice Exercise (Nodes): Create a "Scattering System" where you can draw with a brush to automatically grow a forest of trees on any surface.

## Level 4: Ninja

Course: Advanced Facial Rigging (Blender Studio)

The Final Practice: Build a Portfolio Kit of 6–10 polished pieces. For each piece, you must show the "guts" of the work: the wireframes, the UV layouts, and the texture maps.`
  }
];
