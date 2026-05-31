# ⌨️ Keylogger Software

> **Slashmark Internship — Task 2 (Basic Projects)**  
> Difficulty: Beginner | Estimated Time: 2–3 hours

---

## 📌 Project Overview

A **local keylogger** built with Node.js that captures every keystroke typed on the keyboard, saves them with timestamps to a local log file, and provides a log viewer to display the captured keystrokes.

This project is built for **educational purposes only** to understand how OS input hooks work and how keyloggers function in cybersecurity.

> ⚠️ **Ethical Notice:** This tool is strictly for learning. Never use on someone else's computer without permission.

---

## 🎯 Learning Outcomes

- Understanding **OS input hooks** and keyboard event capturing
- How to **log data** to files with timestamps in Node.js
- Working with **event listeners** and **readline** module
- Understanding **ethical constraints** in security tooling

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Language | Node.js |
| Input Capture | Built-in `readline` module |
| File Logging | Built-in `fs` module |
| Interface | Terminal/CLI |

---

## 📁 Project Structure

```
Project-2-node-keylogger-master/
│
├── src/
│   ├── index.js        # Core keyboard event module (Given)
│   └── keycodes.js     # Keycode to key name mapping (Given)
│
├── app.js              # Main keylogger runner
├── viewer.js           # Log file viewer
├── package.json        # Project configuration
├── .gitignore          # Ignores node_modules and keylog.txt
└── README.md           # Project documentation
```

---

## ⚙️ How It Works

```
Run app.js
    ↓
readline listens to ALL keystrokes
    ↓
Every key press captured with timestamp
    ↓
Saved to keylog.txt
    ↓
Run viewer.js to see all logs
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/bukkereddiswapna/slashmark-cybersecurity-internship.git
cd Project-2-node-keylogger-master
```

**2. Run the keylogger**
```bash
node app.js
```

**3. Type anything** — every keystroke gets logged!

**4. Stop the keylogger**
```
Press Ctrl+C  OR  type EXIT and press Enter
```

**5. View the logs**
```bash
node viewer.js
```

---

## 📖 Usage Example

```
✅ Keylogger started! Type anything below.
📄 All keystrokes are being saved to keylog.txt
🛑 Type "EXIT" and press Enter to stop.

  ⌨  H
  ⌨  E
  ⌨  L
  ⌨  L
  ⌨  O

🛑 Keylogger stopped. Log saved to keylog.txt
   Run "node viewer.js" to view your logs.
```

---

## 📄 Log File Format

```
========================================
  KEYLOGGER SESSION STARTED
  Time : 29/05/2026, 01:00:00 pm
========================================

[29/05/2026, 01:00:01 pm]  H
[29/05/2026, 01:00:01 pm]  E
[29/05/2026, 01:00:02 pm]  L
[29/05/2026, 01:00:02 pm]  L
[29/05/2026, 01:00:03 pm]  O

========================================
  KEYLOGGER SESSION ENDED
  Time : 29/05/2026, 01:00:10 pm
========================================
```

---

## 🔒 Security & Ethics

- ✅ Runs **only on your own computer**
- ✅ For **educational purposes only**
- ✅ `keylog.txt` is in `.gitignore` — never uploaded to GitHub
- ❌ Never install on someone else's machine
- ❌ Never use to capture passwords without consent

---

## 📸 Screenshots

> *(Add screenshots of your running program here)*

---

## 👤 Author

**BUKKE REDDISWAPNA**  
Slashmark Cybersecurity Internship

---

## 📄 License

This project is for educational purposes as part of the Slashmark Internship Program.
