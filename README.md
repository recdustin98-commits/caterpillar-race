# Caterpillar Race

Draw circles on the screen, like turning a wheel, to make your caterpillar crawl. Faster circles = faster caterpillar.

**Play:** https://caterpillar-race.vercel.app

## Modes
- **Practice** — endless track, coaching tips, hold 300+ RPM for 5 seconds
- **vs Computer** — Easy / Normal / Hard
- **1 phone, 2 players** — split screen
- **Online (2–8 players)** — create a race, share the link, everyone plays on their own phone

## How it's built
- `index.html` — page layout and styles
- `game.js` — game, drawing, controls, and online play
- Online races use Supabase Realtime broadcast channels
- Leaderboard uses a Supabase table `cr_scores` (insert-only for browsers, with range checks) and the `cr_board` function for 24-hour, 7-day and all-time rankings
- Dashboard: speedometer (km/h) and tachometer (0–500 RPM); the tachometer's outer ring turns with your finger
- Hosted on Vercel as a static site (no build step)

English and Korean are both supported (auto-detected, with a toggle).
