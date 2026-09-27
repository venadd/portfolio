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
    "Informatics graduate with a background in Data Analytics, Machine Learning, and Web Development, combined with practical experience growing a website template store on Etsy (800+ global orders). Passionate about exploratory data analysis, practical AI integration, and building user-oriented web applications.",
  summary:
    "I graduated from Dian Nuswantoro University with a degree in Informatics, focusing on data analysis, machine learning workflows, and web development. My background combines academic data science projects with practical web implementations.\n\nDuring my internship at the Semarang City Health Office, I created HealBot a health chatbot using Flask that integrates rule-based calculations with RAG pipelines and LLM model APIs. In web development, I build responsive applications, such as a story-sharing Progressive Web App (PWA) using React.js, Leaflet, and REST APIs.\n\nAlongside my studies, I manage CaptivDesign, designing and selling website templates on Etsy, where I have fulfilled over 800 orders in 51 countries with an average rating of 4.9/5.0. I hold a BNSP Associate Data Scientist certification and completed the Coding Camp program by DBS Foundation x Dicoding.",
};

export const highlights = [
  { icon: "globe", value: "800+", suffix: "", label: "Global Orders (51 Countries on Etsy)" },
  { icon: "star", value: "4.9", suffix: "/ 5.0", label: "Customer Satisfaction Rating" },
  { icon: "graduation", value: "900+", suffix: " Hours", label: "Intensive Coding Camp (DBS x Dicoding)" },
  { icon: "badge", value: "BNSP", suffix: "", label: "Certified Associate Data Scientist" },
];

export const skills = [
  {
    category: "Languages & Core",
    items: [
      "Python",
      "JavaScript (ES6+)",
      "PHP",
      "SQL",
      "HTML5 & CSS3"
    ]
  },
  {
    category: "Frontend & Web",
    items: [
      "React.js",
      "Vite",
      "Progressive Web Apps (PWA)",
      "Workbox",
      "Leaflet.js",
      "Bootstrap",
      "Webpack"
    ]
  },
  {
    category: "Backend & Applied AI",
    items: [
      "Flask",
      "FastAPI",
      "Node.js",
      "RESTful API",
      "Retrieval-Augmented Generation (RAG)",
      "API Model LLM",
      "Deterministic Rule Engines"
    ]
  },
  {
    category: "Data Science & ML",
    items: [
      "scikit-learn",
      "Pandas & NumPy",
      "Supervised Learning (Random Forest, SVM, Decision Tree)",
      "Unsupervised Learning (PCA, Clustering)",
      "Exploratory Data Analysis (EDA)",
      "Feature Engineering",
      "Matplotlib & Seaborn"
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git & GitHub",
      "Postman",
      "Power BI",
      "MySQL",
      "Figma",
      "WIX Studio",
      "Squarespace",
      "Canva"
    ]
  }
];

export interface ProjectItem {
  id?: string;
  title: string;
  category: string;
  images: string[];
  problem: string;
  solution: string | string[];
  stack: string[];
  impact?: string;
  demo?: string;
  source?: string;
}

export interface OtherProjectItem {
  id?: string;
  title: string;
  category?: string;
  images: string[];
  description: string;
  stack: string[];
  link?: {
    label: string;
    url: string;
  };
}

export const projects: ProjectItem[] = [
  {
    id: "healthmate-healbot",
    title: "HealthMate & HealBot",
    category: "Applied AI",
    images: ["/healtmate-1.png", "/healtmate-2.png"],
    problem:
      "Model LLM murni memiliki risiko halusinasi perhitungan medis, serta ketiadaan personalisasi terhadap pedoman klinis kesehatan wilayah setempat.",
    solution:
      "Merancang chatbot skrining kesehatan berarsitektur Hybrid (Rule-Based Engine + RAG LLM) berbasis Flask RESTful API. Mengembangkan pipeline RAG dokumen lokal dengan integrasi model LLM untuk rekomendasi terstruktur dan terpersonalisasi.",
    stack: [
      "Python",
      "Flask",
      "Google Gemini API",
      "RAG Engine",
      "REST API",
      "Gunicorn",
    ],
    demo: "https://healthmate-3ps6w8eq9-venadd.vercel.app/",
  },
  {
    id: "dicoding-story-app",
    title: "DicoStory - Dicoding Sharing Platform",
    category: "Full-Stack StoryApp",
    images: ["/storyApp-1.png", "/storyApp-2.png"],
    problem:
      "Kebutuhan platform berbagi cerita visual yang responsif, dapat diinstal di perangkat (installable), andal saat jaringan lambat/offline, dan memetakan lokasi konten secara visual.",
    solution:
      "Membangun antarmuka berbasis React.js dan Vite yang terintegrasi dengan REST API autentikasi token. Mengintegrasikan peta interaktif Leaflet.js, notifikasi SweetAlert2, serta konfigurasi PWA (Service Worker via Workbox) untuk caching aset dan kapabilitas offline.",
    stack: [
      "React.js",
      "Vite",
      "Leaflet",
      "SweetAlert2",
      "PWA / Workbox",
      "REST API",
      "Netlify",
    ],
    demo: "https://dicostory.netlify.app/",
  },
  {
    id: "multi-tenant-pos",
    title: "Multi-Tenant POS & Inventory Management System",
    category: "Full-Stack Web / Enterprise System",
    images: [
      "/Multi-Tenant-POS-1.png",
      "/Multi-Tenant-POS-2.png",
      "/Multi-Tenant-POS-3.png",
    ],
    problem:
      "Pencatatan kasir dan mutasi inventori bisnis ritel manual memicu selisih stok, inefisiensi transaksi, dan risiko kebocoran data antartoko.",
    solution:
      "Mengembangkan sistem web POS dan inventori multi-tenant dengan kontrol akses berbasis peran (RBAC), kartu stok otomatis, stock opname, cetak struk, serta proteksi keamanan (password hashing, prepared statements, mitigasi CSRF/XSS).",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    demo: "http://ekasirku.wuaze.com/eKasirku.php",
    source: "https://github.com/venadd",
  },
  {
    id: "predictive-maintenance",
    title: "Machine Predictive Maintenance System",
    category: "Machine Learning / Industrial IoT",
    images: ["/predictive-maintaince-1.png", "/predictive-maintaince-2.png"],
    problem:
      "Kerusakan mesin industri yang tidak terdeteksi sejak awal mengakibatkan unplanned downtime dan tingginya biaya perbaikan.",
    solution:
      "Membangun sistem analitik end-to-end yang memanfaatkan model klasifikasi XGBoost untuk mendeteksi potensi anomali dan kegagalan komponen mekanis berdasarkan parameter sensor, disajikan melalui REST API FastAPI dan dasbor interaktif.",
    stack: ["Python", "XGBoost", "FastAPI", "JavaScript", "Bootstrap 5"],
    demo: "https://predictive-maintenance-app-three.vercel.app/",
    source: "https://github.com/venadd",
  },
];

export const otherProjects: OtherProjectItem[] = [
  {
    id: "child-nutritional-status",
    title: "Child Nutritional Status Prediction (Multiclass Classification)",
    images: ["/gizi-1.png", "/gizi-2.png"],
    description:
      "Mengolah data antropometri anak dan melatih 5 model machine learning (Random Forest, SVM, Decision Tree, Logistic Regression, KNN) untuk mendeteksi risiko gangguan gizi.",
    stack: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    link: {
      label: "View Notebook",
      url: "",
    },
  },
  {
    id: "customer-personality-analysis",
    title: "Customer Personality Analysis & Segmentation",
    images: [
      "/marketing_campaign-1.png",
      "/marketing_campaign-2.png",
      "/marketing_campaign-3.png",
    ],
    description:
      "Menganalisis karakteristik dan kebiasaan belanja pelanggan menggunakan clustering untuk memetakan segmen konsumen yang berbeda serta mengevaluasi efektivitas respons kampanye promosi produk.",
    stack: [
      "Python",
      "scikit-learn",
      "PCA",
      "Agglomerative Clustering",
      "Seaborn",
    ],
    link: {
      label: "View Notebook",
      url: "",
    },
  },
  {
    id: "depredict",
    title: "DepPredict: Web-Based Depression Risk Screening",
    images: ["/Depredict-1.png", "/Depredict-2.png"],
    description:
      "Proyek capstone kolaboratif yang mengintegrasikan model machine learning untuk memprediksi indikasi dini depresi berdasarkan instrumen kuesioner terstruktur dengan antarmuka web interaktif.",
    stack: ["JavaScript", "Node.js", "Machine Learning", "Web APIs"],
    link: {
      label: "View Project",
      url: "",
    },
  },
  {
    id: "wholesale-customers-clustering",
    title: "Wholesale Customers Clustering Analysis",
    images: [
      "/wholesale-customers-data-1.png",
      "/wholesale-customers-data-2.png",
    ],
    description:
      "Analisis pengeluaran tahunan klien grosir lintas berbagai kategori produk (Fresh, Milk, Grocery, Frozen, dsb.) menggunakan metode clustering untuk membedah pola pembelian antarsaluran penjualan.",
    stack: ["Python", "Pandas", "scikit-learn", "Clustering", "Matplotlib"],
    link: {
      label: "View Notebook",
      url: "",
    },
  },
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Sales Performance & Geospatial Dashboard",
    images: ["/dashboard-preview.png"],
    description:
      "Dashboard analitik bisnis Power BI untuk mengevaluasi metrik omzet penjualan produk, tren AOV (Average Order Value), produk terlaris, dan pemetaan sebaran pembeli internasional.",
    stack: ["Power BI", "DAX Measures", "Data Modeling", "Excel/CSV"],
    link: {
      label: "View Dashboard",
      url: "",
    },
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
      "Merancang chatbot skrining kesehatan berbasis Rule-Based Engine + RAG LLM dengan Flask RESTful API untuk mendukung platform skrining mandiri masyarakat.",
      "Mengintegrasikan alur Retrieval-Augmented Generation (RAG) berbasis dokumen pedoman kesehatan lokal, direktori Puskesmas, dan program intervensi wilayah setempat dengan model LLM untuk menyajikan respons konsultasi yang terstruktur dan kontekstual.",
      "Berkolaborasi dalam antarmuka web, melaksanakan pengujian fungsionalitas sistem menggunakan metode blackbox testing, serta mengaudit performa website menggunakan Lighthouse.",
    ],
  },
  {
    filter: "education",
    period: "Februari — Juli 2025",
    title: "Coding Camp by DBS Foundation",
    type: "Cohort / Independent Study",
    bullets: [
      "Mengikuti program pelatihan intensif melalui Studi Independen Bersertifikat yang berfokus pada pengembangan web Front-End dan Back-End.",
      "Mengembangkan aplikasi web dinamis seperti Dicoding Story App berbasis React.js dengan implementasi Progressive Web Apps (PWA), caching Service Worker, integrasi peta interaktif Leaflet.js, serta konsumsi RESTful API berbasis Node.js/Hapi.js.",
      "Berkolaborasi dalam tim lintas fungsi menggunakan alur kerja Git/GitHub untuk merancang dan membangun antarmuka web platform deteksi dini depresi (DepPredict) sebagai proyek capstone.",
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