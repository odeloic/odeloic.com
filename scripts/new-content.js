// Usage: npm run new -- <type>
// Creates a pre-populated content stub for today's date.
// type: blog | project | learning

import { mkdir, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const COLLECTIONS = {
  blog: "src/content/blog",
  project: "src/content/projects",
  learning: "src/content/learning",
};

const today = () => new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD, local time

const TEMPLATES = {
  blog: (date) => `\
---
title: ""
description: ""
publishedAt: ${date}
tags: []
draft: true
featured: false
---
`,
  project: (date) => `\
---
title: ""
description: ""
status: "idea"
startedAt: ${date}
version: "0.1.0"
tags: []
stack: []
featured: false
draft: true
---
`,
  learning: (date) => `\
---
title: ""
description: ""
startedAt: ${date}
status: "in-progress"
tags: []
---

## ${date}

`,
};

const type = process.argv[2];

if (!type || !COLLECTIONS[type]) {
  console.error(
    `Usage: npm run new -- <type>\nValid types: ${Object.keys(COLLECTIONS).join(", ")}`
  );
  process.exit(1);
}

const date = today();
const dir = resolve(ROOT, COLLECTIONS[type]);
const filePath = resolve(dir, `${date}.md`);

await mkdir(dir, { recursive: true });

try {
  await writeFile(filePath, TEMPLATES[type](date), { flag: "wx" });
} catch (err) {
  if (err.code === "EEXIST") {
    console.error(`File already exists: ${filePath}`);
    process.exit(1);
  }
  throw err;
}

console.log(filePath);
