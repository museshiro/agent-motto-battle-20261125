import { mkdirSync, writeFileSync } from "node:fs";

const line = "I don't chase perfection; I chase " + "the failing test until it confesses.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
