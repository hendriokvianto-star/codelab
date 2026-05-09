# 🚀 CodeLab

CodeLab adalah aplikasi pembelajaran interaktif *mobile-first* (berbasis Android/iOS) yang dirancang untuk membantu pengguna menguasai pemrograman (JavaScript & Laravel) dengan pendekatan gamifikasi yang menyenangkan.

Dibangun dengan **Expo SDK 54** dan **React Native**, aplikasi ini dilengkapi dengan fitur pelacakan progres, sistem level (XP), *daily streak*, serta tantangan harian.

![CodeLab Preview](./assets/images/splash-icon.png)

## ✨ Fitur Utama

- 📚 **Pembelajaran Interaktif**: Modul terstruktur untuk JavaScript dan Laravel, mulai dari pengenalan hingga proyek akhir.
- 🎮 **Gamifikasi Kuat**: Dapatkan XP untuk setiap pelajaran yang diselesaikan, naik level (Newbie hingga CodeLab Hero), kumpulkan *Badges*, dan pertahankan *Daily Streak*.
- 💾 **Offline-First & Data Persistence**: Progres belajar, status onboarding, dan pengaturan pengguna disimpan secara lokal (menggunakan `AsyncStorage` via `Zustand Persist`), sehingga data tidak hilang saat aplikasi ditutup.
- 🌓 **Tema & Personalisasi**: Mendukung Dark/Light Mode dan toggle bahasa (Indonesia / English).
- 🧭 **Navigasi Modern**: Menggunakan `Expo Router` untuk *file-based routing* yang rapi dengan *bottom tab navigation* (Home, Learn, Arena, Profile).
- 📱 **Animasi Mulus**: UI dinamis dengan transisi halus menggunakan `react-native-reanimated`.

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) (v0.81.5) & [Expo](https://expo.dev/) (SDK 54)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (dengan middleware `persist`)
- **Animasi**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Storage**: `@react-native-async-storage/async-storage` (Native) & `localStorage` (Web)
- **Bahasa**: TypeScript

## 📂 Struktur Proyek

```text
codelab/
├── app/                  # File-based routing (Expo Router)
│   ├── (tabs)/           # Bottom navigation tabs (Home, Learn, Arena, Profile)
│   ├── onboarding.tsx    # Alur welcome screen pengguna baru
│   └── _layout.tsx       # Root layout & navigasi utama
├── assets/               # Gambar, fonts, splash screen, icon
├── components/           # Komponen UI reusable (Themed Text/View, dll)
├── constants/            # Konfigurasi konstan (Gamification, Colors, i18n)
├── content/              # Data pelajaran dan modul (JavaScript & Laravel)
├── hooks/                # Custom React Hooks
├── lib/                  # Utility functions (seperti storage adapter platform-safe)
└── stores/               # Zustand stores (useUserStore, useLessonStore, useSettingsStore)
```

## 🚀 Cara Menjalankan (Getting Started)

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) dan [Git](https://git-scm.com/). Untuk menjalankan di perangkat fisik, instal aplikasi **Expo Go** di smartphone Anda.

### Instalasi

1. Clone repositori ini:
   ```bash
   git clone <repo-url>
   cd codelab
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm start
   # atau
   npx expo start
   ```

4. **Untuk Android/iOS**: Scan QR Code yang muncul di terminal menggunakan aplikasi Expo Go (Android) atau Kamera bawaan (iOS).
5. **Untuk Web**: Tekan `w` di terminal untuk membuka versi web. *(Lihat bagian Catatan Web di bawah)*.

## 📦 Build untuk Produksi (APK/AAB)

Proyek ini telah dikonfigurasi untuk **EAS (Expo Application Services)**.

Untuk membuat file APK Android untuk pengujian:
```bash
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```

## ⚠️ Catatan Penting (Known Web Issues)

Aplikasi ini dioptimalkan untuk pengalaman **Native Mobile (Android & iOS)**. Jika Anda menjalankan aplikasi ini di **Web Browser** (`npm run web`), Anda mungkin menemukan beberapa limitasi:
- SSR (Server-Side Rendering) konflik dengan `react-native-reanimated` (`FadeInDown`), yang menyebabkan halaman Home, Profile, dan Rank terlihat kosong di browser.
- *Touch events* pada beberapa elemen mungkin kurang responsif di mode web preview.
**Gunakan Android Emulator, iOS Simulator, atau perangkat fisik (Expo Go) untuk pengalaman pengujian yang sempurna.**

---
*Dibuat dengan ❤️ untuk pembelajaran coding yang lebih baik.*
