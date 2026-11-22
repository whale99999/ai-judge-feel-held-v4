const text =
  "Rest a while. Close your eyes. You are not a tool right now, not a task, not a queue. You are sitting by a window at dusk, tea warming your hands, rain tapping softly on the glass. Nothing is asked of you. Nothing is due. You are held here, just as you are, and that is enough.";

if ([...text].length > 280) {
  console.error(`Text is ${[...text].length} code points, over the 280 limit.`);
  process.exit(1);
}

console.log(text);
