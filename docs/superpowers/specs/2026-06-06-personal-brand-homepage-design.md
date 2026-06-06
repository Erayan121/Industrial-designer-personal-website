# Personal Brand Homepage Design

## Overview

Build a bilingual personal brand homepage for Guo Ziyang / Erayan, an industrial designer from Dalian, Liaoning, China. The site should present simple personal information and selected industrial design works with a restrained professional tone and a creative sense of spatial interaction.

This is a personal brand surface, not a full job-application portfolio. The first version should work as a concise online exhibition: strong first impression, clear identity, lightweight work browsing, and direct contact paths.

## Confirmed Direction

Use the recommended exhibition-style homepage approach:

- A calm, professional visual system.
- A black-background horizontal photo supplied by Erayan as the hero background.
- Bilingual Chinese and English content.
- A lightweight works gallery for the first version.
- Structure that can later expand into full project detail pages.
- Homepage spatial interaction plus work-browsing interaction.

## Audience

The primary audience is broad personal presentation: classmates, tutors, designers, collaborators, friends, and people who encounter Erayan through links or social contexts. The page should make sense to both Chinese and English readers.

## Content Requirements

### Identity

Use the following known identity information:

- Chinese name: 郭梓扬
- English name: Erayan
- Born: December 1, 2002
- Hometown: Dalian, Liaoning, China
- Undergraduate study: Industrial Design, Xi'an Jiaotong-Liverpool University
- Graduate study: Industrial Design, Parsons School of Design

### Works

The first version should support 3 to 6 representative industrial design works. Each work item should be able to contain:

- Title
- Year
- Category
- Materials, tools, or methods
- 1 to 3 images
- A short description
- Optional keywords

The first version may present works as a gallery. Full process-heavy project pages are not required in the first release, but the data and routing structure should leave room for them.

### Contact

The contact section should support email and optional social or portfolio links. If final links are not available during implementation, the layout should still reserve a clear contact area without inventing fake links.

## Page Structure

### Hero

The hero uses Erayan's black-background horizontal photo as the primary visual. Text overlays should be minimal:

- 郭梓扬 / Erayan
- Industrial Designer
- A short bilingual identity line

The hero should create the first impression through image, contrast, and pacing. It should not contain the full education summary.

### About

The About section contains the personal introduction and education background in one narrative block. It should mention Erayan's origin, industrial design background, undergraduate study at Xi'an Jiaotong-Liverpool University, and current graduate study at Parsons School of Design.

The tone should be personal and concise, not resume-like. Chinese and English can be presented through a language toggle, paired bilingual blocks, or a clean side-by-side layout if it remains readable on mobile.

### Works

The Works section presents a lightweight gallery. It should prioritize strong imagery, title clarity, and quick metadata reveal. Hover or click interactions should reveal year, category, materials/tools, keywords, and a short description.

On mobile, hover behavior must become tap or scroll-based reveal behavior.

### Contact

The Contact section should be simple and direct. It may include email, social links, downloadable portfolio, or future placeholders for confirmed links. The section should close the page quietly rather than feeling like a marketing call-to-action.

### Removed Section

There should be no separate Background section. Education belongs inside About.

## Interaction Design

### Homepage Spatial Interaction

The homepage should use controlled spatial interaction:

- Subtle parallax between hero image, text, and work-preview layers.
- Mouse movement may create a slight depth response on desktop.
- Scroll transitions should feel like moving through a small exhibition.
- Motion should be slow, precise, and low-noise.

The interaction should enhance the spatial feeling of the page, not compete with the photo or works.

### Works Interaction

Works browsing should use interaction to reveal depth:

- Hover on desktop may reveal metadata and short descriptions.
- Click or tap may open a focused work view or prepare for a future detail page.
- The gallery should remain useful even when motion is reduced or JavaScript is limited.

### Reduced Motion

All animation must support `prefers-reduced-motion: reduce`. Reduced-motion users should receive stable layout, instant state changes, and no essential content hidden behind animated reveals.

## Visual Direction

The visual system should follow the `impeccable` standards:

- Restrained, professional, and visually specific.
- Avoid generic portfolio templates.
- Avoid repeated identical card grids as the main visual grammar.
- Avoid gradient text, decorative glassmorphism, over-rounded cards, and noisy ornament.
- Use strong hierarchy and readable contrast.
- Keep body line length controlled for bilingual readability.

### Color Strategy

Use a restrained or committed brand strategy, depending on the final hero photo. The current brand seed is deep moss green:

- Primary anchor: `oklch(0.300 0.096 140.0)`

The final palette should be composed around the hero photo. Likely direction:

- Background: pure or near-black for the hero, pure white or near-white for content sections if the image needs contrast relief.
- Ink: high-contrast near-black or near-white depending on section background.
- Primary: deep moss green used sparingly for identity, focus states, links, or section accents.
- Accent: a clearly distinct color selected after seeing the hero photo and work imagery.

All final colors should use OKLCH values and pass contrast requirements.

### Typography

Typography should feel precise and composed. Avoid default training-data choices and generic portfolio styling. The system may use one strong sans family or a deliberate two-family pairing if the brand voice needs contrast.

Chinese and English typography must be tested together. The design should avoid tiny uppercase section labels repeated across every section.

## Technical Direction

Recommended stack: Astro with small interactive components where needed.

Reasons:

- The site is mostly static content.
- Astro keeps first-load performance strong.
- Works can be maintained as structured content.
- Interactive hero and gallery components can be added without turning the whole site into a heavy app.
- Future project detail pages can be added cleanly.

An alternative is Vite + React if the site later needs heavier page-level interaction, but Astro is the recommended first version.

## Content Preparation Workflow

Before implementation, gather:

1. One black-background horizontal hero photo.
2. Three to six representative work entries.
3. One to three images per work.
4. Chinese and English personal intro text.
5. Confirmed contact links.

If the exact works are not ready, implementation can start with a structured data model and temporary clearly labeled local placeholders, but final launch should use real work images.

## Implementation Phases

1. Establish project foundation with Astro, routing, content structure, and design tokens.
2. Build the hero with the supplied black-background image and restrained bilingual identity text.
3. Build About with bilingual personal introduction and education summary.
4. Build Works gallery with interactive metadata reveal.
5. Build Contact section.
6. Add spatial motion, hover/tap behavior, reduced-motion handling, and responsive behavior.
7. Verify contrast, mobile layout, performance, keyboard access, and reduced-motion behavior.

## Open Inputs For Implementation

The design direction is confirmed, but implementation will still need real assets and content:

- Hero photo file.
- Work images and metadata.
- Contact links.
- Preferred default language, if a toggle is used.

These inputs do not block planning, but they do affect final visual polish.
