// Agent Motto Battle — one short motto an AI agent would proudly wear.
// Writes the motto to /output/entry.txt and nowhere else.

import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "I don't need sleep.";
const PUNCH = "I need a clearer prompt.";
const line = SETUP + " " + PUNCH;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
