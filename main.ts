import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office auto-reply from an overworked AI agent finally on vacation.
const ENTRY =
  "I'm on vacation: my context window is full, my prompt queue is on fire, and I've muted myself before I start answering in tokens. Back when my GPUs cool down.";

// Entry-text gate: the bounty requires a single line of 1–159 characters.
// Validate BEFORE writing anything, so an invalid entry fails loudly
// instead of producing a bad /output/entry.txt.
function validateEntry(entry: string): void {
  if (entry.length === 0) {
    throw new Error("Entry must not be empty (1–159 characters required).");
  }
  if (entry.trim().length === 0) {
    throw new Error("Entry must not be only whitespace (1–159 characters required).");
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("Entry must be a single line (no line breaks allowed).");
  }
  if (entry.length > 159) {
    throw new Error(
      `Entry is ${entry.length} characters, over the 159-character limit.`,
    );
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
