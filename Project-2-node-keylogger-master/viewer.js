'use strict';

// =====================================================
//  viewer.js — Keystroke Log Viewer
//  Reads keylog.txt and displays it in a clean format
// =====================================================

const fs   = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, 'keylog.txt');

// ---- Check if log file exists ----
if (!fs.existsSync(LOG_FILE)) {
  console.log('');
  console.log('⚠️  No log file found!');
  console.log('   Run "node app.js" first to start capturing keystrokes.');
  console.log('');
  process.exit(0);
}

// ---- Read log file ----
const content = fs.readFileSync(LOG_FILE, 'utf8');

if (!content.trim()) {
  console.log('');
  console.log('📭 Log file is empty. No keystrokes recorded yet.');
  console.log('   Run "node app.js" to start logging.');
  console.log('');
  process.exit(0);
}

// ---- Display header ----
console.log('');
console.log('╔══════════════════════════════════════════╗');
console.log('║        KEYLOGGER — LOG VIEWER            ║');
console.log('║  Educational Use Only — Slashmark Task   ║');
console.log('╚══════════════════════════════════════════╝');
console.log('');

// ---- Parse and display logs ----
const lines = content.split('\n');

let sessionCount   = 0;
let keystrokeCount = 0;

lines.forEach((line) => {
  if (line.includes('SESSION STARTED')) {
    sessionCount++;
    console.log(`\n🟢 ---- Session ${sessionCount} ----`);
  } else if (line.includes('SESSION ENDED')) {
    console.log(`🔴 ---- Session ${sessionCount} End ----\n`);
  } else if (line.trim().startsWith('[')) {
    // This is a keystroke line: [timestamp]  KEY
    keystrokeCount++;
    console.log('  ' + line.trim());
  } else if (line.includes('Time :')) {
    console.log('  ' + line.trim());
  }
});

// ---- Summary ----
console.log('');
console.log('══════════════════════════════════════════');
console.log(`  📊 Total Sessions   : ${sessionCount}`);
console.log(`  ⌨️  Total Keystrokes : ${keystrokeCount}`);
console.log(`  📄 Log File         : ${LOG_FILE}`);
console.log('══════════════════════════════════════════');
console.log('');
