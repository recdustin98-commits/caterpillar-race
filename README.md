# Caterpillar Race

Draw circles on the screen, like turning a wheel, to make your caterpillar crawl. Faster circles = faster caterpillar.

**Play:** https://caterpillar-race.vercel.app

## Home screen
Your animal and name at the top (✏️ Change), then a big **Mission** button, **Play anyone** and **Play friends**, and smaller **Practice** and **Same phone** buttons (these two are not saved to the leaderboard), plus Leaderboard. Every other screen has a 🏠 button in the top-left corner. ✕ Quit and Race again go back to the mode you were playing, not home.

## Names
Everyone gets a fun name such as "Zippy Snail 27" (adjective + animal + number, 16 letters at most), kept on the phone. 🎲 picks a new one, or you can type your own (16 letters max, checked against a bad-word list). Play anyone always shows fun names.

## Modes
- **Mission — 6 worlds × 5 missions.** An illustrated map from Garden through Pond, Sea, Desert and Ice to the Waterfall. Each world has beat-the-computer races, finish-under-a-time races, an RPM zone or sprint mission, and a 👑 boss. Every mission has 3 stars (1 star passes). The final boss is the **Imugi (이무기)**, a serpent from Korean legend that wants to become a dragon. The computer averages 80 RPM in mission 1 and 500 RPM in mission 30.
- **Play anyone** — joins whoever is waiting online. Starts right away with 8 racers, 15 seconds after a 2nd racer joins, or 10 seconds if you are alone. Computer racers with fun names join one by one before the start so every race has at least 4 racers.
- **Play friends** — the host picks 2–8 players and gets a 4-digit code and a link. The race starts once the room is full and everyone is ready; the host can start early with 2 or more. Friends only, no computers.
- **Same phone** — two players, split screen.
- **Practice** — endless track with a pace panel: 3-second average RPM, the race time at that pace, steadiness dots, and a bar with Lv 1/10/20/25/30 marks and your best pace.

## Animals
You start with the caterpillar, inchworm, garden snail and green sea turtle. Missions open more: M3 centipede, M5 garter snake, M10 green basilisk, M13 swimming crab, M15 pufferfish and pistol shrimp, M20 frilled lizard, M25 gentoo penguin, M30 the Imugi. The **Golden Dragon** opens at 75 of 90 stars. A popup celebrates every new animal. Each animal races on its own background.

All animals move the same average distance per turn, so races stay fair; only the look and motion differ.

## Result picture
A 1080×1350 picture with your animal holding a trophy (or a medal), confetti, a headline and your time, top speed and top RPM. Mission headlines: "MISSION COMPLETE! ★", "SUPER SPEEDY! ★★", "PERFECT! ★★★", and "I BEAT THE IMUGI!" for mission 30.

## Sound
Music and sound effects are synthesised in the browser (no audio files): countdown beeps, an engine hum that rises with RPM, huffing in the red zone, animal sounds (shrimp snap, pufferfish puff, lizard frill boing, penguin whoosh, basilisk splash), finish bell, then when the results appear a fanfare with clapping (a bigger fanfare with fireworks for level 30 and the Golden Dragon) or a funny sad trombone, plus a short 8-bit tune that plays quieter during a race. Music and sounds can each be turned off at the top; the choice is remembered.

## How it's built
- `index.html` — page layout and styles
- `game.js` — game, drawing, controls, and online play
- Online races use Supabase Realtime broadcast channels
- Leaderboard uses a Supabase table `cr_scores` (insert-only for browsers, with range checks; stores the racer's `animal` and computer `level`) and the `cr_board` function for 24-hour, 7-day and all-time rankings (columns: Racer, Time — ranked by time only)
- Dashboard: speedometer (km/h) and tachometer (0–500 RPM); the tachometer has a comet-tail ball that follows your finger; the tail grows with RPM and turns green / yellow / red
- Hosted on Vercel as a static site (no build step)

The game is in English.
