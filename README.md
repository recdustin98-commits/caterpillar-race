# Caterpillar Race

Draw circles on the screen, like turning a wheel, to make your caterpillar crawl. Faster circles = faster caterpillar.

**Play:** https://caterpillar-race.vercel.app

## Modes
- **Practice** — endless track, coaching tips, hold 300+ RPM for 5 seconds
- **vs Computer** — Easy (100 RPM) / Normal (160) / Hard (250) / Champion (330, unlocked by beating Hard)
- **1 phone, 2 players** — split screen
- **Online (2–8 players)** — create a race, share the link, everyone plays on their own phone

## Characters
12 animals, each racing on its own background (garden, desert, pond surface, underwater or ice):
caterpillar, inchworm, centipede, garden snail, garter snake, frilled lizard (walks on four legs, sprints upright at 150+ RPM and pops its frill open in the red zone), green basilisk (runs on the pond surface), green sea turtle, pufferfish (puffs up when fast), pistol shrimp (snaps in the red zone), swimming crab and gentoo penguin (belly-slides when fast).

All animals move the same average distance per turn, so races stay fair; only the look and motion differ. Each animal has its own eyes and mouth, and they share the same moods: calm, sweating (100+ RPM), blushing (200+), deep red with steam (300+), a winner's jump and dizzy eyes for the rest.

## Menu
Step by step: game mode → animal → name (and difficulty or race room). Against the computer, the computer picks a different animal. On the same phone, player 2 picks an animal too. Every race has a Quit button (with a confirm step); quitting records nothing.

## Online rooms
The host picks the number of players (2–8) and gets a 4-digit code and a link. Friends open the link (or type the code), pick an animal and a name, then join. A full room turns extra people away. The race starts automatically once the room is full and everyone is ready; the host can start early with whoever is there (2 or more). Two players race on a split screen like the computer mode; 3–4 players get a one-line-per-player standings strip and 5–8 a two-column strip, with each player's animal as their marker.

## Sound
Music and sound effects are synthesised in the browser (no audio files): countdown beeps, an engine hum that rises with RPM, huffing in the red zone, animal sounds (shrimp snap, pufferfish puff, lizard frill boing, penguin whoosh, basilisk splash), finish bell, win fanfare and a "wah-wah" for the rest, plus a short 8-bit tune that plays quieter during a race. Music and sounds can each be turned off at the top; the choice is remembered.

## How it's built
- `index.html` — page layout and styles
- `game.js` — game, drawing, controls, and online play
- Online races use Supabase Realtime broadcast channels
- Leaderboard uses a Supabase table `cr_scores` (insert-only for browsers, with range checks) (including the racer's `animal`) and the `cr_board` function for 24-hour, 7-day and all-time rankings
- Dashboard: speedometer (km/h) and tachometer (0–500 RPM); the tachometer's outer ring turns with your finger
- Hosted on Vercel as a static site (no build step)

The game is in English.
