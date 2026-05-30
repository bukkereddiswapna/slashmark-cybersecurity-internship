from cryptography.fernet import Fernet

def encrypt_image():
    # Step 1: Ask user for image path
    path = input("Enter image path: ")
    
    # Step 2: Read image as bytes
    with open(path, "rb") as f:
        image_data = f.read()
    
    # Step 3: Generate key and encrypt
    key = Fernet.generate_key()
    fernet = Fernet(key)
    encrypted_data = fernet.encrypt(image_data)
    
    # Step 4: Save encrypted image
    with open("encrypted_image.png", "wb") as f:
        f.write(encrypted_data)
    
    # Step 5: Save key
    with open("key.txt", "wb") as f:
        f.write(key)
    
    print("✅ Image encrypted successfully!")
    print("🔑 Key saved to key.txt")

def decrypt_image():
    # Step 1: Ask user for encrypted image path
    path = input("Enter encrypted image path: ")

    # Step 2: Ask user for key file path
    key_path = input("Enter key file path: ")
    
    # Step 3: Read the key
    with open(key_path, "rb") as f:
        key = f.read()
    
    # Step 4: Read encrypted image
    with open(path, "rb") as f:
        encrypted_data = f.read()
    
    # Step 5: Decrypt
    fernet = Fernet(key)
    decrypted_data = fernet.decrypt(encrypted_data)
    
    # Step 6: Save decrypted image
    with open("decrypted_image.png", "wb") as f:
        f.write(decrypted_data)
    
    print("✅ Image decrypted successfully!")
    print("🖼️  Saved as decrypted_image.png")

def main():
    while True:
        print("\n================================")
        print("   Image Encryption Tool")
        print("   Slashmark Internship Task 3")
        print("================================")
        print("1. Encrypt Image")
        print("2. Decrypt Image")
        print("3. Exit")
        
        choice = input("Enter your choice: ")
        
        if choice == "1":
            encrypt_image()
        elif choice == "2":
            decrypt_image()
        elif choice == "3":
            print("Goodbye! 👋")
            break
        else:
            print("❌ Invalid choice! Please enter 1, 2, or 3.")

main()
