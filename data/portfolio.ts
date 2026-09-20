export const profile = {
  name: "Y Noven Dhimas Nugroho",
  role: "Data Analysis · Machine Learning · Digital Product Development",
  location: "Semarang, Indonesia",
  email: "novendhimasnugroho@gmail.com",
  linkedin: "https://www.linkedin.com/in/y-noven-dhimas-nugroho",
  github: "https://github.com/USERNAME",
  availability: "Open to opportunities",
  hero:
    "Hello! I'm Y Noven Dhimas Nugroho",
  subheadline:
    "A passionate Data Analyst and Machine Learning enthusiast with a strong background in Digital Product Development. I specialize in transforming complex data into actionable insights and building innovative digital solutions.",
  summary:
    "I am a technology practitioner operating at the intersection of Data Science and Web Product Development. Experienced in end-to-end data pipelines—ranging from data cleaning, exploratory data analysis (EDA), and feature engineering to predictive model deployment.\n\nBeyond algorithms and statistics, I bring real-world experience building and commercializing digital products globally through CaptivDesign, fulfilling 800+ orders across 51 countries on Etsy with an average rating of 4.9 / 5.0.\n\nI hold an official certification from BNSP (Badan Nasional Sertifikasi Profesi) as an Associate Data Scientist (Ilmuan Data Madya) and graduated with distinction from the Coding Camp by DBS Foundation x Dicoding in Front-End and Back-End Web Development.",
};

export const highlights = [
  { icon: "globe", value: "800+", suffix: "", label: "Global Orders (51 Countries on Etsy)" },
  { icon: "star", value: "4.9", suffix: "/ 5.0", label: "Customer Satisfaction Rating" },
  { icon: "graduation", value: "3.76", suffix: "/ 4.00", label: "GPA S1 Teknik Informatika (UDINUS)" },
  { icon: "badge", value: "BNSP", suffix: "", label: "Certified Associate Data Scientist" },
];

export const skills = [
  { category: "Languages & Core", items: ["Python", "JavaScript / TypeScript", "SQL", "HTML5", "Tailwind CSS"] },
  { category: "Backend & APIs", items: ["Node.js", "Hapi.js", "Express", "RESTful API", "Ollama / Local LLM"] },
  { category: "Data Science & ML", items: ["scikit-learn", "XGBoost", "TensorFlow", "Streamlit", "EDA", "Feature Engineering"] },
  { category: "Security & Cryptography", items: ["Digital Watermarking", "LSB", "SHA-256", "ECDSA", "Authentication Standards"] },
  { category: "Tools & Cloud", items: ["Git", "GitHub", "MongoDB", "PostgreSQL", "Power BI", "Figma"] },
];

export const projects = [
  {
    title: "Website Skrining Kesehatan Mandiri",
    category: "Web / Healthtech",
    problem: "Masyarakat membutuhkan sarana mandiri yang praktis untuk memantau tumbuh kembang balita, deteksi dini stunting, serta skrining risiko kesehatan secara terpadu.",
    solution: "Membangun Single Page Application (SPA) arsitektur MVP dengan fitur kalkulator Z-score antropometri standar WHO/Kemenkes, pelacak siklus menstruasi, skrining kesehatan dewasa,dan informasi puskesmas.",
    stack: ["JavaScript (ES6+)", "Webpack", "PWA", "REST API", "CSS3"],
    impact: "Mempermudah masyarakat dalam melakukan deteksi dini risiko kesehatan dan stunting secara mandiri serta memperluas aksesibilitas layanan puskesmas.",
    demo: "https://healthmatedkk.netlify.app/",
    source: "#",
  },
  {
    title: "Platform Skrining Kesehatan & Analisis Data Terintegrasi",
    category: "Data Analytics",
    problem: "Dataset kesehatan publik memerlukan preprocessing, eksplorasi, dan analisis model sebelum dapat digunakan untuk skrining.",
    solution: "Mengolah data dengan cleaning, feature engineering, EDA, lalu membandingkan XGBoost, Random Forest, dan Logistic Regression untuk deteksi risiko stunting.",
    stack: ["Python", "XGBoost", "Random Forest", "EDA", "Lighthouse"],
    impact: "Model dan dashboard skrining dibangun melalui workflow analitik terstruktur.",
    demo: "#",
    source: "#",
  },
  {
    title: "Sistem Pemeliharaan Prediktif",
    category: "Machine Learning",
    problem: "Kegagalan operasional mesin pabrik yang tidak terduga menyebabkan downtime tak terencana dan biaya perbaikan tinggi.",
    solution: "Membangun sistem end-to-end dengan model XGBoost dan REST API FastAPI untuk mendeteksi potensi kegagalan mesin secara real-time.",
    stack: ["Python", "XGBoost", "FastAPI", "JavaScript", "Bootstrap 5"],
    impact: "Mengurangi downtime tak terencana dan mencegah kecelakaan operasional melalui prediksi kerusakan dan rekomendasi preventif.",
    demo: "https://predictive-maintenance-app-three.vercel.app/",
    source: "#",
  },
  {
    title: "Dashboard Business Intelligence & Sales Analytics",
    category: "Data Analytics",
    problem: "Pelaporan metrik bisnis dan retensi produk digital dapat memerlukan pekerjaan manual berulang.",
    solution: "Merancang dashboard analitik untuk merangkum metrik penjualan, performa produk, dan insight pelanggan secara lebih terstruktur.",
    stack: ["Power BI", "SQL", "Data Analysis", "Dashboard"],
    impact: "Pelaporan menjadi lebih terpusat dan insight bisnis lebih mudah dipantau.",
    demo: "#",
    source: "#",
  },
];

export const experience = [
  {
    filter: "work",
    period: "2023 — Sekarang",
    title: "CaptivDesign — Freelance",
    type: "Digital Product Development",
    bullets: [
      "Mengelola dan mengembangkan bisnis produk digital di marketplace Etsy, dengan spesialisasi pada pengembangan template website menggunakan WIX Studio, Squarespace dan Canva.",
      "Melakukan evaluasi kelayakan desain serta pengujian alur navigasi untuk memastikan fungsionalitas dan kemudahan penggunaan sebelum produk dirilis.",
      "Berhasil mendapatkan lebih dari 800 pesanan dari pelanggan di 51 negara dengan tingkat kepuasan pelanggan rata-rata 4,9/5.",
      "Melakukan riset pasar dan analisis kompetitor, serta mengoptimalkan performa produk menggunakan riset kata kunci dan strategi SEO pada marketplace Etsy.",
      "Menganalisis umpan balik pelanggan untuk meningkatkan kualitas produk dan pengalaman pengguna.",
    ],
  },
  {
    filter: "work",
    period: "Agustus 2025 — September 2025",
    title: "Magang — Dinas Kesehatan Kota Semarang",
    type: "Technical Internship",
    bullets: [
      "Mengolah dan membersihkan dataset menggunakan Python dengan menerapkan feature engineering, serta menangani baris data duplikat dan missing values guna menjaga kualitas data sebelum diproses oleh model.",
      "Melakukan analisis eksplorasi data (EDA) untuk memetakan korelasi antar fitur gizi anak, serta melatih dan membandingkan performa beberapa model klasifikasi prediktif (XGBoost, Random Forest, dan Logistic Regression) untuk mendeteksi risiko stunting.",
      "Berkolaborasi aktif dalam tim untuk merancang dan membangun antarmuka (front-end) website skrining kesehatan, serta melakukan pengujian fungsional menggunakan metode blackbox testing dan audit performa website menggunakan Lighthouse.",
    ],
  },
  {
    filter: "education",
    period: "Februari — Juli 2025",
    title: "Coding Camp by DBS Foundation",
    type: "Cohort / Independent Study",
    bullets: [
      "Mengikuti program pelatihan intensif melalui Studi Independen Bersertifikat yang berfokus pada pengembangan web Front-End dan Back-End.",
      "Mempelajari dan menerapkan praktik aplikasi web dinamis dengan RESTful API berbasis Node.js, JavaScript, implementasi PWA, serta manajemen repositori Git/GitHub.",
      "Berkolaborasi dalam tim lintas fungsi untuk merancang, serta membangun antarmuka aplikasi web deteksi dini depresi sebagai proyek capstone.",
    ],
  },
  {
    filter: "education",
    period: "2022 — 2026",
    title: "S1 Teknik Informatika — Universitas Dian Nuswantoro",
    type: "Education",
    bullets: [
      "IPK: 3.76",
    ],
    publication: {
      title: "Deteksi Manipulasi Citra Medis MRI Menggunakan Watermarking Least Significant Bit dengan Autentikasi SHA-256 dan ECDSA",
      summary: "Metode watermarking untuk mendeteksi manipulasi pada citra medis MRI menggunakan teknik LSB dan autentikasi kriptografi SHA-256 serta ECDSA.",
      url: "https://ejurnal.seminar-id.com/index.php/bits/article/view/8967",
    },
  },
  {
    filter: "organization",
    period: "Agustus 2024 — Mei 2025",
    title: "Inventaris — Pelayanan Kerasulan Keluarga Mahasiswa Katolik",
    type: "Organisasi",
    bullets: [
      "Mengelola data inventaris organisasi secara terstruktur untuk memastikan akurasi dan ketersediaan aset.",
      "Berkoordinasi dengan berbagai divisi dalam perencanaan dan pemenuhan kebutuhan perlengkapan kegiatan.",
      "Melakukan monitoring penggunaan aset serta menyusun laporan inventaris secara berkala.",
    ],
  },
];

export const certifications = [
  { name: "BNSP Ilmuan Data Madya (Associate Data Scientist)", file: "/certificates/sertifikasi.pdf", credential: "#" },
  { name: "Certificate of Completion — Coding Camp Front-End & Back-End Developer", file: "/certificates/coding-camp.pdf", credential: "#" },
  { name: "Belajar Back-End dengan JavaScript", file: "/certificates/sertifikasi.pdf", credential: "#" },
  { name: "Belajar Pengembangan Web Intermediate", file: "/certificates/sertifikasi.pdf", credential: "#" },
  { name: "Belajar Fundamental Front-End Web Development", file: "/certificates/sertifikasi.pdf", credential: "#" },
  { name: "Fundamental Jaringan Komputer", file: "/certificates/sertifikasi.pdf", credential: "#" },
];