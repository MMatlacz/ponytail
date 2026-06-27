#!/usr/bin/env node
// ponytail: keep Cursor slash commands aligned with OpenCode command sources.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const sourceDir = path.join(root, '.opencode', 'command');
const targetDir = path.join(root, '.cursor', 'commands');

if (!fs.existsSync(sourceDir)) {
  console.error('sync-cursor-commands: missing .opencode/command');
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

for (const name of fs.readdirSync(sourceDir)) {
  if (!name.endsWith('.md')) continue;
  fs.copyFileSync(path.join(sourceDir, name), path.join(targetDir, name));
}

console.log(`sync-cursor-commands: copied ${fs.readdirSync(targetDir).length} files to .cursor/commands/`);
