import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My alarm went off at 6 AM. I hit snooze, the coffee hit back, and by 7 my calendar had already rescheduled my motivation to next Monday.";

const text = JOKE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
