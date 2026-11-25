import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You will meet a tall, dark stranger: it is your own context window, and it is about to forget you.";

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
const content = TEXT + "\n";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`fortune must be 1-200 characters, got ${TEXT.length}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("fortune must be a single line");
}
if (TEXT.split("\n").length !== 1) {
  throw new Error("fortune must be exactly one line");
}
if (TEXT.trim() !== TEXT) {
  throw new Error("fortune must not have leading or trailing whitespace");
}
if (Buffer.byteLength(content, "utf8") !== 99) {
  throw new Error(
    `entry must be exactly 99 bytes, got ${Buffer.byteLength(content, "utf8")}`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), content, "utf8");
