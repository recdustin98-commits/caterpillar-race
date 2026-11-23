# Caterpillar Race

Draw circles on the screen, like turning a wheel, to make your caterpillar crawl. Faster circles = faster caterpillar.

**Play:** https://caterpillar-race.vercel.app

## Modes
- **vs Computer** — Easy / Normal / Hard
- **1 phone, 2 players** — split screen
- **Online (2–8 players)** — create a race, share the link, everyone plays on their own phone

## How it's built
- `index.html` — page layout and styles
- `game.js` — game, drawing, controls, and online play
- Online races use Supabase Realtime (broadcast channels, no database tables)
- Hosted on Vercel as a static site (no build step)

English and Korean are both supported (auto-detected, with a toggle).
