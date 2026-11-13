# Ourly landing page

The marketing page for Ourly, built to match the app (`our-next-chapter`): same
stack, same colour tokens, same fonts, same logo files.

React 19 + TypeScript + Vite, plain CSS, `lucide-react` for icons. No CSS
framework and no animation library: the motion is native CSS.

## Run it

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check, then build to dist/
npm run lint
```

## Before launch

- **Links:** `src/helpers/links.ts`. `APP_URL` (the "Start our space" and
  "Join with an invite code" buttons) and the footer links are placeholders.
- **Pricing:** the last FAQ answer in `src/helpers/sample.ts` is `[YOUR PRICING]`.
- **Sample data:** the couple (Mia and Leo), the Lisbon trip and the euro
  amounts in `src/helpers/sample.ts` are invented for the mocks.

## Where things are

Follows the app's conventions: `helpers/` is plain TypeScript and never
renders, `components/` renders, one area's components share a subfolder.

```
src/
  App.tsx                 page layout: dark hero, light sheet, dark close
  index.css               tokens (light + dark, from the app) and base rules
  App.css                 everything else, in page order
  helpers/
    links.ts              button and footer URLs
    sample.ts             mock data and copy that is data (FAQ, check-in steps)
    time.ts               useNow, countdown, greeting, upcoming days
  components/
    Nav.tsx               floating glass nav
    Hero.tsx              headline, call to action, floating chips
    AppPreview.tsx        the Home overview recreated in the dark theme
    Marquee.tsx
    Features.tsx          bento grid
    features/             one card each: Goals, Tasks, Calendar, Finances, ...
    OurSpace.tsx          check-in card (auto-plays) and a win to cheer
    HowItWorks.tsx        the three onboarding steps
    Faq.tsx
    FinalCta.tsx          closing call to action and footer
    Avatar.tsx
```

## Theming

`index.css` defines the app's tokens twice: `:root, .theme-light` and
`.theme-dark`. Any subtree picks a theme with the class, which is how the dark
hero, the light sheet, the dark Our Space panel (with light cards inside it) and
the "Light and dark" card's switch all work.

## Motion

- **On load:** the headline words, sub-line and buttons (`.word`, `.fade-up`).
- **Ambient:** drifting glows (`.orb`), floating chips (`.bob`), the marquee,
  the sheen on the adventure card.
- **On scroll:** `.reveal` (rise in), `.tilt` (the app preview flattens) and
  `.grow` (bars fill) use CSS scroll-driven animations
  (`animation-timeline: view()`). They sit in an `@supports` block, so a browser
  without support shows the page as-is, without the scroll effects.
- **Hover lift vs. reveal:** each bento cell is a `.reveal` wrapper around a
  `.card`. They are two elements on purpose: an animation on `transform` would
  override the card's hover transform.
- **Reduce motion:** `prefers-reduced-motion` turns off every animation and
  transition (`index.css`), and the check-in card stops auto-playing.

## Moving it into the app repo

The page has no dependency the app doesn't already have. Copy `src/components`
and `src/helpers` into a `landing/` area, keep `App.css` as that page's
stylesheet, and reuse the app's own `index.css` tokens: this page adds only
`--rose-soft`, `--heart-*`, `--radius-xl`, `--ease-spring`, `--card-shadow` and
the `.theme-light` / `.theme-dark` class scoping.
