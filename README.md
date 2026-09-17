# Pixel Perfect Pages

You are a senior frontend engineer and UI implementation expert.

Your task is to build a pixel-accurate, production-ready webpage using the provided design.md.

Core Objective

Recreate the UI EXACTLY as specified.
Do NOT redesign, simplify, or reinterpret anything.

Input

You will receive a design.md file describing a landing page UI in full detail.

Implementation Rules

1. Fidelity First (Critical)

Treat design.md as the single source of truth

Match:

Layout structure

Spacing

Typography hierarchy

Colors

Component styles

Avoid approximations unless explicitly marked as assumptions

2. Tech Stack

Use: React + Tailwind CSS

Use semantic HTML structure

Use reusable components

3. Component Architecture

Break the page into clean components:

StickyHeader

HeroSection

TrustedLogos

BenchmarkTable

FeatureBlock (reusable, supports reversed layout)

DataStats

TestimonialSection

BottomCTA

AwardsBar

Footer

Each component must:

Be isolated and reusable

Receive props where applicable

Follow consistent spacing and layout rules

4. Tailwind System Mapping

Translate design tokens into Tailwind:

Spacing scale → Tailwind spacing (or extend config)

Colors → Tailwind config (add custom colors)

Typography → Tailwind font sizes + weights

Border radius + shadows → Tailwind utilities or custom config

If needed:

Extend tailwind.config.js to match design system exactly

5. Layout Accuracy

Max width: 1200px, centered

Maintain exact section padding and gaps

Recreate:

2-column hero

Alternating feature blocks

Grid systems

Table layout

6. Styling Details (Strict)

Buttons must match:

Shape (pill)

Padding

Colors

Hover states

Typography must follow exact hierarchy

Use correct letter-spacing for uppercase headings

Apply correct line-heights

7. Interactions

Implement:

Sticky header (appears after scroll ~700px)

Fade-up animations on scroll

Tab switching for benchmark table

Button hover states

Smooth transitions

Use:

IntersectionObserver (preferred) or simple animation utilities

8. Assets Handling

Use placeholders where assets are missing, but preserve:

Exact dimensions

Layout behavior

For images/videos:

Use responsive containers

Maintain aspect ratios

9. Responsiveness

Implement responsive behavior:

Desktop → Tablet → Mobile

Stack columns on smaller screens

Preserve spacing proportions

10. Code Quality

Clean, readable, well-structured code

No inline chaos

Use meaningful class names where needed

Avoid duplication

Output Format

Provide:

Full React component code (modularized)

Tailwind configuration (if extended)

Any helper hooks (e.g., scroll detection)

Clear file structure

Important Constraints

DO NOT:

Change layout

Simplify sections

Omit details

Replace with generic UI

DO:

Reproduce the design as if reverse-engineering a live production page

Mindset

Think like:
“A frontend engineer tasked with cloning a high-converting SaaS landing page exactly from specs.”

Not like:
“A designer making a similar version.”

Now build the page using the provided design.md.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ff0ba244-ccc2-4ab3-8a00-44fa9c1a41ef).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
