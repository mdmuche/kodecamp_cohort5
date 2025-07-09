#!/usr/bin/env

import { fileURLToPath } from "url";
import path from "path";
import { spawn } from "child_process";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const mainPath = path.join(__dirName, "..", "src", "index.js");
const child = spawn("node", [mainPath, ...process.argv.slice(2)], {
  stdio: "inherit",
  shell: true,
});

child.on("close", (code) => {
  console.log("Child code", code);
  process.exit(code);
});

child.on("error", (error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});
