# 🖼️ Image Encryption Tool

> **Slashmark Internship — Task 3 (Basic Projects)**  
> Difficulty: Beginner | Estimated Time: 3–4 hours

---

## 📌 Project Overview

A Python-based image encryption and decryption tool that uses **AES encryption (Fernet)** to secure image files. Only someone with the **secret key** can decrypt and view the original image.

The tool converts the image into **raw binary data**, encrypts every byte using a randomly generated key, and saves it as an unreadable encrypted file. Without the key, the image is completely unviewable!

---

## 🎯 Learning Outcomes

- How images are stored as **binary data (bytes)**
- How to encrypt **binary data** using AES (Fernet)
- **Secure key handling** — generating, saving, and loading keys
- Reading and writing **binary files** in Python
- Understanding **cipher modes and operation tradeoffs**

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Language | Python 3 |
| Encryption | `cryptography` (Fernet/AES) |
| Image Handling | `Pillow` (PIL) |
| Interface | Terminal/CLI |

---

## 📁 Project Structure

```
project-3-Image-Encryption/
│
├── image_encryption.py   # Main program with encrypt/decrypt/menu
├── test.py               # Testing Pillow image reading
├── encrypt.py            # Standalone encryption script
├── requirements.txt      # Required libraries
├── image-1.png           # Sample test image
└── README.md             # Project documentation
```

---

## ⚙️ How It Works

### Encryption
```
User provides image path
        ↓
Python reads image as raw bytes (binary data)
        ↓
Fernet generates a random secret key
        ↓
Every byte of image is encrypted using AES
        ↓
Encrypted data saved as encrypted_image.png
        ↓
Secret key saved as key.txt
        ↓
Encrypted image is completely unviewable ✅
```

### Decryption
```
User provides encrypted image path + key file
        ↓
Python reads the secret key from key.txt
        ↓
Reads encrypted image as bytes
        ↓
Fernet decrypts using the same key
        ↓
Original image data restored
        ↓
Saved as decrypted_image.png ✅
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.x installed
- pip package manager

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/bukkereddiswapna/slashmark-cybersecurity-internship.git
cd project-3-Image-Encryption
```

**2. Install required libraries**
```bash
pip install -r requirements.txt
```

**3. Run the program**
```bash
python image_encryption.py
```

---

## 📖 Usage

When you run the program you'll see:

```
================================
   Image Encryption Tool
================================
1. Encrypt Image
2. Decrypt Image
3. Exit
Enter your choice:
```

### To Encrypt:
```
Enter your choice: 1
Enter image path: C:/path/to/your/image.png

✅ Image encrypted successfully!
🔑 Key saved to key.txt
```

### To Decrypt:
```
Enter your choice: 2
Enter encrypted image path: C:/path/to/encrypted_image.png
Enter key file path: C:/path/to/key.txt

✅ Image decrypted successfully!
```

---

## 📦 Requirements

```
cryptography
Pillow
```

Install with:
```bash
pip install cryptography Pillow
```

---

## 🔒 Security Notes

- A **new random key** is generated for every encryption
- The key file (`key.txt`) must be kept **safe and secret**
- Without the key → **impossible to decrypt** the image
- Never share your `key.txt` publicly
- This project is for **educational purposes only**

---

## 🧪 How to Test

```
Step 1 → Run python image_encryption.py
Step 2 → Choose 1 (Encrypt) → Enter image path
Step 3 → Open encrypted_image.png → unviewable ✅
Step 4 → Choose 2 (Decrypt) → Enter paths
Step 5 → Open decrypted_image.png → original back! ✅
```

---

## 📸 Screenshots

<img width="1181" height="611" alt="image" src="https://github.com/user-attachments/assets/6f72c97a-1efc-4c6c-a8c9-a6c5f6ff09d5" />
<img width="1455" height="753" alt="image" src="https://github.com/user-attachments/assets/1afbde44-c47e-4d40-95e4-ddf542f6c237" />
<img width="1466" height="711" alt="image" src="https://github.com/user-attachments/assets/4a794845-222a-4c71-8dad-97fb8f2ede50" />


## 👤 Author

**BUKKE REDDISWAPNA**  
Slashmark Cybersecurity Internship

---

## 📄 License

This project is for educational purposes as part of the Slashmark Internship Program.
