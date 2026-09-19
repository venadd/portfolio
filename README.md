# Y Noven Dhimas Nugroho — Portfolio

Single-page portfolio berbasis Next.js, TypeScript, Lucide React, dan next-themes.

## Jalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Jika memakai folder project lama

Pastikan `tsconfig.json` memiliki:

```json
"baseUrl": ".",
"paths": {
  "@/*": ["./*"]
}
```

Setelah mengubah `tsconfig.json`, restart TypeScript server / VS Code atau restart `npm run dev`.

## Personalisasi

Edit `data/portfolio.ts` untuk:
- profil, email, LinkedIn, GitHub
- skills
- project case studies
- experience
- education
- certifications

File yang sudah disertakan:
- `public/CV_Y_Noven_Dhimas_Nugroho.pdf`
- `public/certificates/coding-camp.pdf`
- `public/certificates/sertifikasi.pdf`

Ganti `#` pada `demo`, `source`, dan `credential` dengan URL aktual.

## Contact form

Form menggunakan `mailto:` sebagai fallback tanpa backend. Untuk produksi, ganti dengan API route/server action atau layanan email transactional.
