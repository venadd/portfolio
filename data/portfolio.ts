export const profile = {
  name: "Y Noven Dhimas Nugroho",
  role: "Data Analysis · Machine Learning · Digital Product Development",
  location: "Semarang, Indonesia",
  email: "novendhimasnugroho@gmail.com",
  linkedin: "https://www.linkedin.com/in/y-noven-dhimas-nugroho",
  github: "https://github.com/venadd",
  availability: "Open to opportunities",
  hero:
    "Hello! I'm Y Noven Dhimas Nugroho",
  subheadline:
    "A passionate Data Analyst and Machine Learning enthusiast with a strong background in Digital Product Development. I specialize in transforming complex data into actionable insights and building innovative digital solutions.",
  summary:
    "I am a technology practitioner operating at the intersection of Data Science and Web Product Development. Experienced in end-to-end data pipelines ranging from data cleaning, exploratory data analysis (EDA), and feature engineering to predictive model deployment.\n\nBeyond algorithms and statistics, I bring real-world experience building and commercializing digital products globally through CaptivDesign, fulfilling 800+ orders across 51 countries on Etsy with an average rating of 4.9 / 5.0.\n\nI hold an official certification from BNSP (Badan Nasional Sertifikasi Profesi) as an Associate Data Scientist (Ilmuan Data Madya) and graduated with distinction from the Coding Camp by DBS Foundation x Dicoding in Front-End and Back-End Web Development.",
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

export interface ProjectItem {
  title: string;
  category: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
  demo?: string;
  source?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Website Skrining Kesehatan Mandiri",
    category: "Web / Healthtech",
    problem: "Masyarakat membutuhkan sarana mandiri yang praktis untuk memantau tumbuh kembang balita, deteksi dini stunting, serta skrining risiko kesehatan secara terpadu.",
    solution: "Membangun Single Page Application (SPA) arsitektur MVP dengan fitur kalkulator Z-score antropometri standar WHO/Kemenkes, pelacak siklus menstruasi, skrining kesehatan dewasa,dan informasi puskesmas.",
    stack: ["JavaScript (ES6+)", "Webpack", "PWA", "REST API", "CSS3"],
    impact: "Mempermudah masyarakat dalam melakukan deteksi dini risiko kesehatan dan stunting secara mandiri serta memperluas aksesibilitas layanan puskesmas.",
    demo: "https://healthmatedkk.netlify.app/",
  },
  {
    title: "Multi-Tenant POS & Inventory System",
    category: "Web / Full-Stack",
    problem: "Pencatatan transaksi dan stok sering kali manual, rawan selisih, dan belum memiliki sistem kasir terisolasi yang aman.",
    solution: "Membangun web POS dan inventori multi-tenant dengan RBAC, kartu stok, stock opname, cetak struk, serta proteksi keamanan (Bcrypt, Prepared Statements, CSRF/XSS).",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    impact: "Mempercepat transaksi harian, mencegah selisih stok barang, dan menjaga isolasi data antartoko secara aman dan terintegrasi.",
    demo: "http://ekasirku.wuaze.com/eKasirku.php",
  },
  {
    title: "Sistem Pemeliharaan Prediktif",
    category: "Machine Learning",
    problem: "Kegagalan operasional mesin pabrik yang tidak terduga menyebabkan downtime tak terencana dan biaya perbaikan tinggi.",
    solution: "Membangun sistem end-to-end dengan model XGBoost dan REST API FastAPI untuk mendeteksi potensi kegagalan mesin.",
    stack: ["Python", "XGBoost", "FastAPI", "JavaScript", "Bootstrap 5"],
    impact: "Mengurangi downtime tak terencana dan mencegah kecelakaan operasional melalui prediksi kerusakan dan rekomendasi preventif.",
    demo: "https://predictive-maintenance-app-three.vercel.app/",
  },
  {
    title: "E-Commerce Sales Performance & Geospatial Dashboard",
    category: "Data Analytics",
    problem: "Kesulitan memantau performa penjualan produk digital, efektivitas kupon diskon, dan persebaran pembeli.",
    solution: "Membangun dashboard Power BI interaktif untuk menganalisis tren, AOV, distribusi produk terlaris, serta pemetaan geografis.",
    stack: ["Power BI", "Data Modeling", "Business Intelligence", "Excel / CSV"],
    impact: "Memberikan visibilitas menyeluruh terhadap performa penjualan produk.",
    demo: "/dashboard-preview.png",
  },
];

export interface ExperienceItem {
  filter: string;
  period: string;
  title: string;
  type: string;
  bullets: string[];
  shopLink?: string;
  publication?: {
    title: string;
    summary: string;
    url: string;
  };
}

export const experience: ExperienceItem[] = [
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
    shopLink: "https://captivdesign.etsy.com",
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
  { name: "Belajar Back-End dengan JavaScript", file: "/certificates/Back-End.pdf", credential: "#" },
  { name: "Belajar Dasar Cloud dan Gen AI di AWS", file: "/certificates/aws.pdf", credential: "#" },
  { name: "Spec-Driven Development dengan Kiro", file: "/certificates/kiro.pdf", credential: "#" },
  { name: "Belajar Pengembangan Web Intermediate", file: "/certificates/Intermediate.pdf", credential: "#" },
  { name: "Belajar Fundamental Front-End Web Development", file: "/certificates/Fundamental.pdf", credential: "#" },
  { name: "Fundamental Jaringan Komputer", file: "/certificates/Jaringan.pdf", credential: "#" },
];