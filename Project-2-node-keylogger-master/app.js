'use strict';

// =====================================================
//  app.js — Windows Keylogger
//  Uses @hurdlegroup/robotjs-compatible approach
//  with built-in readline for Windows compatibility
//  Logs all keystrokes to keylog.txt with timestamps
// =====================================================

const fs       = require('fs');
const path     = require('path');
const readline = require('readline');

// Import keycodes from the given src/keycodes.js
const keycodes = require('./src/keycodes');

// ---- Config ----
const LOG_FILE = path.join(__dirname, 'keylog.txt');

// ---- Helper: Get readable timestamp ----
function getTimestamp() {
  const now = new Date();
  return now.toLocaleString('en-IN', {
    year:   'numeric',
    month:  '2-digit',
    day:    '2-digit',
    hour:   '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

// ---- Helper: Write log entry to file ----
function writeLog(entry) {
  fs.appendFileSync(LOG_FILE, entry);
}

// ---- Start Session ----
const sessionStart = `
========================================
  KEYLOGGER SESSION STARTED
  Time : ${getTimestamp()}
  File : ${LOG_FILE}
========================================\n`;

writeLog(sessionStart);

console.log('');
console.log('╔══════════════════════════════════════════╗');
console.log('║       KEYLOGGER — Slashmark Task 2       ║');
console.log('║      Educational Use Only                ║');
console.log('╚══════════════════════════════════════════╝');
console.log('');
console.log('✅ Keylogger started! Type anything below.');
console.log('📄 All keystrokes are being saved to keylog.txt');
console.log('🛑 Type "EXIT" and press Enter to stop.\n');
console.log('─────────────────────────────────────────────');

// ---- Setup readline to capture input ----
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
  terminal: false
});

// Enable raw keypresses
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

// ---- Listen to every keypress ----
process.stdin.on('keypress', (str, key) => {

  // Exit on Ctrl+C or if user types EXIT
  if ((key && key.ctrl && key.name === 'c')) {
    stopLogger();
    return;
  }

  let keyName = '';

  if (key && key.name) {
    // Map key names to readable format
    const specialMap = {
      'space':     '[SPACE]',
      'return':    '[ENTER]',
      'enter':     '[ENTER]',
      'backspace': '[BACKSPACE]',
      'tab':       '[TAB]',
      'escape':    '[ESC]',
      'delete':    '[DELETE]',
      'up':        '[UP]',
      'down':      '[DOWN]',
      'left':      '[LEFT]',
      'right':     '[RIGHT]',
      'home':      '[HOME]',
      'end':       '[END]',
      'pageup':    '[PAGEUP]',
      'pagedown':  '[PAGEDOWN]',
      'insert':    '[INSERT]',
      'f1':  '[F1]',  'f2':  '[F2]',  'f3':  '[F3]',
      'f4':  '[F4]',  'f5':  '[F5]',  'f6':  '[F6]',
      'f7':  '[F7]',  'f8':  '[F8]',  'f9':  '[F9]',
      'f10': '[F10]', 'f11': '[F11]', 'f12': '[F12]',
    };

    if (key.ctrl)  keyName = `[CTRL+${key.name.toUpperCase()}]`;
    else if (key.meta) keyName = `[ALT+${key.name.toUpperCase()}]`;
    else keyName = specialMap[key.name.toLowerCase()] || (str || key.name).toUpperCase();

  } else if (str) {
    keyName = str;
  }

  if (!keyName) return;

  const time     = getTimestamp();
  const logEntry = `[${time}]  ${keyName}\n`;

  // Print to terminal
  process.stdout.write(`  ⌨  ${keyName}\n`);

  // Write to keylog.txt
  writeLog(logEntry);

  // Check for EXIT command (track last 4 chars)
  stopBuffer += keyName;
  if (stopBuffer.length > 10) stopBuffer = stopBuffer.slice(-10);
  if (stopBuffer.includes('EXIT')) {
    stopLogger();
  }
});

let stopBuffer = '';

function stopLogger() {
  const sessionEnd = `\n========================================
  KEYLOGGER SESSION ENDED
  Time : ${getTimestamp()}
========================================\n\n`;

  writeLog(sessionEnd);
  console.log('\n\n🛑 Keylogger stopped. Log saved to keylog.txt');
  console.log('   Run "node viewer.js" to view your logs.\n');
  process.exit(0);
}
