# 📝 DataSyncer – Rural Data Collector

DataSyncer is a lightweight, offline-friendly web application designed to collect and sync rural health data efficiently. Built for field volunteers and health workers, the app ensures reliable data collection even in low or no internet zones.

---

## 🌟 Features

- ✅ **Offline Data Entry**: Save records locally with `localStorage`
- ☁️ **Cloud Sync**: One-click sync to Google Sheets via SheetBest API
- 📋 **Real-Time Entry Display**: View saved entries immediately on screen
- 💻 **Minimal Setup**: Works directly in the browser, no installations
- 🎨 **Responsive Design**: Clean, mobile-friendly layout
- 🔐 **No Firebase Required**: Avoid complex setup, use Sheets as backend

---

## 💡 Use Case

Rural areas often lack internet access and proper software for real-time data entry. DataSyncer bridges this gap by enabling local saving and delayed syncing. Health workers can:

- Record symptoms
- Capture village-level data
- Sync it securely to a shared sheet when back online

---

## 🛠️ Tech Stack

- HTML, CSS, JavaScript
- Google Sheets + [SheetBest](https://sheet.best) API

---

## 🔄 Sync Architecture

1. Data is stored in browser using `localStorage`
2. On sync button click, the app sends entries to Google Sheet
3. Once synced, local records are cleared

---

## 🚀 How to Use

1. Clone/download the project
2. Open `index.html` in a browser
3. Fill the form, click ✅ Save Entry
4. Later, click ☁️ Sync to Cloud when online
5. Done! Entries appear in your Google Sheet

---

## 👏 Acknowledgments

- [Sheet.best](https://sheet.best) for seamless Sheets integration
- Inspired by real-world challenges in rural healthcare data entry

---

### 📌 Developed with ❤️ by Manveer Kaur
