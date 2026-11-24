# Caterpillar Race

Draw circles on the screen, like turning a wheel, to make your caterpillar crawl. Faster circles = faster caterpillar.

**Play:** https://caterpillar-race.vercel.app

## Modes
- **Practice** — endless track, coaching tips, hold 300+ RPM for 5 seconds
- **vs Computer** — Easy / Normal / Hard
- **1 phone, 2 players** — split screen
- **Online (2–8 players)** — create a race, share the link, everyone plays on their own phone

## Characters
16 animals in four tabs, each with its own track background:
- **Garden:** caterpillar, inchworm, centipede, garden snail, garter snake
- **Desert:** wheel spider (rolls like a wheel), three-banded armadillo (rolls into a ball when fast), sidewinder (J-shaped tracks)
- **Water:** green basilisk (runs on the pond surface), green sea turtle, dumbo octopus, pufferfish (puffs up when fast), seahorse, pistol shrimp (snaps in the red zone), swimming crab
- **Ice:** gentoo penguin (waddles, then belly-slides when fast)

All animals move the same average distance per turn, so races stay fair; only the look and motion differ. Each animal has its own eyes and mouth (slit pupils, eight spider eyes, eye stalks, beaks, puckered lips…) but they share the same moods: calm, ready, sweating (100+ RPM), blushing (200+), deep red with steam (300+), a winner's jump and dizzy eyes for the rest.

## How it's built
- `index.html` — page layout and styles
- `game.js` — game, drawing, controls, and online play
- Online races use Supabase Realtime broadcast channels
- Leaderboard uses a Supabase table `cr_scores` (insert-only for browsers, with range checks) (including the racer's `animal`) and the `cr_board` function for 24-hour, 7-day and all-time rankings
- Dashboard: speedometer (km/h) and tachometer (0–500 RPM); the tachometer's outer ring turns with your finger
- Hosted on Vercel as a static site (no build step)

English and Korean are both supported (auto-detected, with a toggle).
