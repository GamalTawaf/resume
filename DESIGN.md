---
name: Gamal Tawaf Resume
description: A career changelog drawn on blueprint paper.
colors:
  signal: "#2dd4b4"
  signal-dim: "#1c8f78"
  amber: "#f5a75a"
  ink: "#0b1b2e"
  ink-deep: "#081526"
  ink-raised: "#0f2439"
  paper: "#e7eef7"
  paper-dim: "#b9c8dc"
  slate: "#7c93b3"
  rule: "rgba(231, 238, 247, 0.14)"
  rule-faint: "rgba(231, 238, 247, 0.06)"
typography:
  display:
    fontFamily: "-apple-system, Segoe UI, ui-sans-serif, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 4.6vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.14
  headline:
    fontFamily: "-apple-system, Segoe UI, ui-sans-serif, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 3.4vw, 2.1rem)"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "-apple-system, Segoe UI, ui-sans-serif, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "ui-monospace, SF Mono, Cascadia Mono, JetBrains Mono, Menlo, Consolas, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  focus: "2px"
  pill: "3px"
  none: "0"
spacing:
  stack: "18px"
  gutter: "28px"
  section: "56px"
  hero-top: "88px"
  hero-bottom: "72px"
  split: "40px"
  split-wide: "56px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 18px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.signal}"
    rounded: "{rounded.none}"
    padding: "10px 18px"
  chip-status:
    backgroundColor: "transparent"
    textColor: "{colors.signal}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  card-surface:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "22px 24px"
---

# Design System: Gamal Tawaf Resume

## Overview

**Creative North Star: "The Release Notes"**

The site is one dark blueprint. A career is a changelog: home is `CHANGELOG.md`, about is `README.md`, a missing route is `404.md`. Jobs are releases (`v9.0.0`), and the only drawing on the page is a faint grid, like section paper.

Density is a reading page, not a marketing page. One sans for sentences, one mono for file names, versions, and controls. Signal teal is the action color. Amber is only the current version number. There is no light theme.

**Key Characteristics:**

- Dark blueprint ground, hairline grid, no card shadows
- Mono file labels above every page title
- One filled action: ink text on signal teal
- Line length stays near 58 characters for reading
- System fonts only

## Colors

Blueprint ink, paper, one teal signal, and amber reserved for the version tag.

### Primary

- **Signal Teal** (`#2dd4b4`): links, the current nav item, the active release date, and the filled button background.
- **Deep Signal** (`#1c8f78`): the status-pill border and the email underline.

### Secondary

- **Version Amber** (`#f5a75a`): the current release number only. Nowhere else.

### Neutral

- **Blueprint Ink** (`#0b1b2e`): page background and button label.
- **Night Ink** (`#081526`): footer.
- **Raised Panel** (`#0f2439`): cards, panels, and the links object.
- **Blueprint Paper** (`#e7eef7`): headlines and primary text.
- **Faded Paper** (`#b9c8dc`): ledes and body copy on cards.
- **Slate** (`#7c93b3`): nav, roles, dates, eyebrows.
- **Rule** (`rgba(231, 238, 247, 0.14)`): section and card borders.
- **Faint Rule** (`rgba(231, 238, 247, 0.06)`): the grid and row dividers.

**The One Signal Rule.** Teal marks an action or the current item. Amber marks the version. Do not introduce a third accent.

## Typography

**Display Font:** system sans (`-apple-system`, `Segoe UI`, `Roboto`, `Arial`)
**Body Font:** the same sans
**Label/Mono Font:** `ui-monospace`, `SF Mono`, `JetBrains Mono`, `Menlo`, `Consolas`

**Character:** Sentences are plain. Labels look like a terminal.

### Hierarchy

- **Display** (700, `clamp(2.1rem, 4.6vw, 3.4rem)`, line-height 1.14): the page headline. Max about 22 characters, 32 on lighter pages.
- **Headline** (600, `clamp(1.6rem, 3.4vw, 2.1rem)`): the name beside the version tag.
- **Body** (400, `1.08rem`, line-height 1.75): ledes and release bullets. Max 58 characters.
- **Label** (400, `0.78rem`, tracking `0.14em`, uppercase): file-name eyebrows.

**The Measure Rule.** Reading text wraps by 58 characters. Do not let a bullet run the full column.

## Layout

The page column is `1120px` with a `28px` gutter. Sections stack with `56px` of vertical padding and a hairline rule. Heroes pad `88px` on top and `72px` below. A two-column split (copy, then the links object) starts at `900px`. Below `620px` the header wraps and release rows stack.

## Elevation & Depth

Surfaces are flat. Depth is a darker footer, a slightly lighter panel, and a 1px rule. The top bar is Night Ink at 72% over the grid. There is no drop shadow.

**The Flat Surface Rule.** Do not add shadows to cards, buttons, or the header.

## Shapes

Corners are square. The status pill is the exception, at `3px`. Focus rings use a `2px` radius. The active dot is a `6px` circle and it does not pulse.

## Components

### Buttons

- **Shape:** square
- **Primary:** Signal Teal background, Blueprint Ink label, `10px 18px` padding, at least `44px` tall. A link that leaves the site shows ↗.
- **Hover / Focus:** background clears and the label turns Signal Teal. Focus is a `2px` Signal Teal ring, `3px` outside the control.

### Chips

- **Style:** no fill, Signal Teal text, Deep Signal border, `3px` radius
- **State:** the ACTIVE chip is a static dot plus the word. It does not animate.

### Cards / Containers

- **Corner Style:** square
- **Background:** Raised Panel
- **Shadow Strategy:** none
- **Border:** 1px Rule
- **Internal Padding:** `22px 24px`

### Navigation

Mono, Slate by default, Signal Teal with an underline when current. Six items wrap under `620px`. Each item is at least `44px` tall. `gamaltawaf / resume` links home.

### Release row

A version number, a company, a role, and a date. The current row uses Version Amber on the number and Signal Teal on the date. Bullets stay inside 58 characters.

## Do's and Don'ts

### Do:

- **Do** treat each page as a file in the same repo (`CHANGELOG.md`, `README.md`, `CONTACT.md`).
- **Do** set button labels to Blueprint Ink on Signal Teal. The global link color must not override it.
- **Do** keep reading text near 58 characters.
- **Do** mark links that open a new tab with ↗.

### Don't:

- **Don't** add a light theme.
- **Don't** pulse the ACTIVE dot.
- **Don't** use Version Amber for anything except the current release number.
- **Don't** write template contact copy. The voice matches the changelog.
- **Don't** add drop shadows or a second accent color.
