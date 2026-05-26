# 🔐 CipherBox — Text Encryption Using Cryptographic Algorithms

> **Slashmark Internship — Task 1 (Basic Projects)**  
> Difficulty: Beginner | Estimated Time: 2–3 hours

---

## 📌 Project Overview

**CipherBox** is a web-based text encryption and decryption application built using **Node.js** and **AES-256-CBC** cryptographic algorithm. It allows users to securely encrypt any plain text message and decrypt it back to its original form using a secret key.

The app ensures that **even identical inputs produce different encrypted outputs every time** — thanks to a randomly generated **IV (Initialization Vector)** used during each encryption.

---

## 🎯 Learning Outcomes

- Understanding **Symmetric Encryption** (AES-256-CBC)
- How **IV (Initialization Vector)** works and why it matters
- Secure **secret key storage** using environment variables
- Building a **REST API** with Node.js and Express
- Connecting a **frontend UI** to backend encryption logic

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Encryption | Node.js built-in `crypto` module |
| Frontend | HTML, CSS, JavaScript |
| Config | dotenv (.env file) |

---

## 📁 Project Structure

```
encryption-project/
│
├── encryption.js     # Core AES-256-CBC encrypt/decrypt logic
├── server.js         # Express server with /encrypt and /decrypt routes
├── index.html        # Frontend UI (textarea, buttons, output display)
├── style.css         # Dark cyberpunk styling
├── .env              # Secret encryption key (NOT uploaded to GitHub)
├── .gitignore        # Ignores node_modules and .env
└── package.json      # Project configuration and dependencies
```

---

## ⚙️ How It Works

```
User enters text
      ↓
Clicks "Encrypt" button
      ↓
Frontend sends text to POST /encrypt (server.js)
      ↓
server.js calls encrypt() from encryption.js
      ↓
Random IV generated → AES-256-CBC encryption applied
      ↓
Returns: IV:EncryptedText (hex format)
      ↓
Displayed on screen
```

**To decrypt:**
```
User pastes encrypted text (IV:CipherText)
      ↓
Clicks "Decrypt" button
      ↓
server.js calls decrypt() from encryption.js
      ↓
IV is extracted → AES-256-CBC decryption applied
      ↓
Original plain text returned and displayed
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/bukkereddiswapna/encryption-project.git
cd encryption-project
```

**2. Install dependencies**
```bash
npm install
```

**3. Create a `.env` file** in the root folder
```
ENCRYPTION_KEY=YourSecretKeyHere12345678901234
PORT=3000
```
> ⚠️ The key must be **exactly 32 characters** long!

**4. Start the server**
```bash
node server.js
```

**5. Open in browser**
```
http://localhost:3000
```

---

## 🔑 Environment Variables

| Variable | Description | Required |
|---|---|---|
| `ENCRYPTION_KEY` | 32-character secret key for AES-256 | ✅ Yes |
| `PORT` | Port to run the server (default: 3000) | Optional |

---

## 📡 API Endpoints

### `POST /encrypt`
Encrypts the provided plain text.

**Request Body:**
```json
{
  "text": "Hello, this is a secret message!"
}
```

**Response:**
```json
{
  "result": "a3f1c2d4e5b6...:7f8e9d0c1b2a..."
}
```

---

### `POST /decrypt`
Decrypts the provided encrypted text.

**Request Body:**
```json
{
  "text": "a3f1c2d4e5b6...:7f8e9d0c1b2a..."
}
```

**Response:**
```json
{
  "result": "Hello, this is a secret message!"
}
```

---

## 🔒 Security Notes

- The **secret key** is stored in a `.env` file and never hardcoded
- The `.env` file is listed in `.gitignore` — it will **never be uploaded to GitHub**
- A **new random IV** is generated for every encryption — same input always gives different output
- This project is for **educational purposes only**

---

## 📸 Screenshots

> <img width="1900" height="958" alt="image" src="https://github.com/user-attachments/assets/9971c8b1-9953-492a-b659-c0992c10eb9a" />

<img width="1892" height="973" alt="image" src="https://github.com/user-attachments/assets/23b8ce26-6f04-41a8-bbb9-b76b0e90c1a4" />


---

## 👤 Author

**BUKKE REDDISWAPNA**  
Slashmark Cybersecurity Internship  

---

## 📄 License

This project is for educational purposes as part of the Slashmark Internship Program.
