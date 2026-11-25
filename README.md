# Caterpillar Race

Draw circles on the screen, like turning a wheel, to make your caterpillar crawl. Faster circles = faster caterpillar.

**Play:** https://caterpillar-race.vercel.app

## Home screen
Your animal and name at the top (✏️ Change), then four big buttons that each start a mode in one tap: **vs Computer**, **Race anyone**, **Race friends**, **Same phone**. Practice and Leaderboard sit below. Every other screen has a 🏠 button in the top-left corner (in a race it is the ✕ Quit button; in an online lobby 🏠 asks before leaving).

## Names
Everyone gets a fun name such as "Zippy Snail 27" (adjective + animal + number, 16 letters at most), kept on the phone. 🎲 picks a new one, or you can type your own (16 letters max, checked against a bad-word list). Race anyone always shows fun names.

## Modes
- **vs Computer — 30 levels.** The computer averages 80 RPM at level 1 and 500 RPM at level 30 (L10 160, L20 250, L25 330, then +34 per level). A win moves you up one level; a big win jumps up to 5 levels (to the highest level your time beats the computer's average by 5%). Cleared levels can be replayed from 📋 Levels. Level 30 is the Dragon King boss.
- **Race anyone** — joins whoever is waiting online. Starts right away with 8 racers, or 15 seconds after a 2nd racer joins. If nobody is around: race the computer, keep waiting, or cancel; if someone shows up during a computer race you can switch.
- **Race friends** — the host picks 2–8 players and gets a 4-digit code and a link. The race starts once the room is full and everyone is ready (the Ready button pulses until you tap it); the host can start early with 2 or more.
- **Same phone** — two players, split screen.
- **Practice** — endless track with a pace panel: 3-second average RPM, the race time at that pace, steadiness dots, and a bar with Lv 1/10/20/25/30 marks and your best pace.

## Animals
You start with the caterpillar, inchworm, garden snail and green sea turtle. Clearing levels opens more: L3 centipede, L6 swimming crab, L9 garter snake, L12 green basilisk, L15 pufferfish, L18 pistol shrimp, L21 gentoo penguin, L24 frilled lizard, L29 the **Golden Dragon** (fire trail at 300+ RPM, volcano track). A popup celebrates every new animal. Each animal races on its own background (garden, desert, pond, underwater, ice, volcano).

All animals move the same average distance per turn, so races stay fair; only the look and motion differ.

## Result picture
A 1080×1350 picture with your animal holding a trophy (or a medal), confetti, a headline and your time, top speed and top RPM. Level headlines: Lv 1–9 "I BEAT THE COMPUTER!", 10–19 "SUPER SPEEDY WIN!", 20–25 "TOO FAST TO CATCH!", 26–29 "UNSTOPPABLE!", 30 "I BEAT THE DRAGON KING!" (crown, gold-and-purple sky, every other animal clapping). A big win adds a "⚡ LEVEL JUMP +N!" ribbon.

## Sound
Music and sound effects are synthesised in the browser (no audio files): countdown beeps, an engine hum that rises with RPM, huffing in the red zone, animal sounds (shrimp snap, pufferfish puff, lizard frill boing, penguin whoosh, basilisk splash), finish bell, then when the results appear a fanfare with clapping (a bigger fanfare with fireworks for level 30 and the Golden Dragon) or a funny sad trombone, plus a short 8-bit tune that plays quieter during a race. Music and sounds can each be turned off at the top; the choice is remembered.

## How it's built
- `index.html` — page layout and styles
- `game.js` — game, drawing, controls, and online play
- Online races use Supabase Realtime broadcast channels
- Leaderboard uses a Supabase table `cr_scores` (insert-only for browsers, with range checks; stores the racer's `animal` and computer `level`) and the `cr_board` function for 24-hour, 7-day and all-time rankings (columns: Racer, Time, Level — online races show "Online")
- Dashboard: speedometer (km/h) and tachometer (0–500 RPM); the tachometer has a comet-tail ball that follows your finger; the tail grows with RPM and turns green / yellow / red
- Hosted on Vercel as a static site (no build step)

The game is in English.
