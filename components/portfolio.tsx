"use client";

import Image from "next/image";

import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  Star,
  ShoppingBag,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  profile,
  highlights,
  skills,
  projects,
  experience,
  certifications,
} from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";
import { SectionHeading } from "./section-heading";

export default function Portfolio() {
  const [openMenu, setOpenMenu] = useState(false);
  const [cert, setCert] = useState<(typeof certifications)[number] | null>(
    null,
  );
  const [expFilter, setExpFilter] = useState<string>("all");

  const expFilters = [
    { key: "all", label: "All" },
    { key: "work", label: "Work & Internship" },
    { key: "education", label: "Education & Cohort" },
    { key: "organization", label: "Organisasi" },
  ];

  const filteredExperience = expFilter === "all"
    ? experience
    : experience.filter((e) => e.filter === expFilter);

  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <button
            className="mobile-menu"
            aria-label={openMenu ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <X /> : <Menu />}
          </button>
          <nav
            className={openMenu ? "nav-links open" : "nav-links"}
            aria-label="Navigasi utama"
          >
            {[
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Credentials",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpenMenu(false)}
              >
                {item}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="availability">
            <span /> {profile.availability}
          </div>
          <p></p>
          <h1>{profile.hero}</h1>
          <p className="hero-sub">{profile.subheadline}</p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">
              Lihat Portofolio <ArrowUpRight size={17} />
            </a>
            <a
              className="btn secondary"
              href="/CV_Y_Noven_Dhimas_Nugroho.pdf"
              download
            >
              Unduh CV <Download size={17} />
            </a>
          </div>
          <div className="social-row">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} /> Contact
            </a>
          </div>
        </div>
        <div className="hero-card profile-card" aria-label="Foto profil">
          <Image
            src="/profile.jpg"
            alt="Y Noven Dhimas Nugroho"
            width={600}
            height={700}
            priority
            className="profile-image"
          />
        </div>
      </section>

      <section id="about" className="section container">
        <SectionHeading
          eyebrow="01 / Profile"
          title="About Me"
        />
        <div className="about-grid">
          <div className="prose">
            {profile.summary.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
          <div className="highlight-grid">
            {highlights.map((h) => {
              const IconMap: Record<string, React.ElementType> = {
                globe: Globe,
                star: Star,
                graduation: GraduationCap,
                badge: BadgeCheck,
              };
              const Icon = IconMap[h.icon] || Globe;
              return (
                <div className="stat-card" key={h.label}>
                  <div className={`stat-icon stat-icon--${h.icon}`}>
                    <Icon size={18} />
                  </div>
                  <strong>
                    {h.value}
                    {h.suffix && <span className="stat-suffix">{h.suffix}</span>}
                  </strong>
                  <span className="stat-label">{h.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="section container">
        <SectionHeading
          eyebrow="02 / SKILLS"
          title="Tools I use to turn problems into working systems."
        />
        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.category}>
              <div className="skill-icon">
                <Code2 size={18} />
              </div>
              <h3>{group.category}</h3>
              <div className="tags">
                {group.items.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section container">
        <SectionHeading
          eyebrow="03 / SELECTED PROJECTS"
          title="Case studies."
        />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <article className="project-card" key={p.title}>
              <div className="project-top">
                <span className="project-number">0{i + 1}</span>
                <span className="category">{p.category}</span>
              </div>
              <h3>{p.title}</h3>
              <div className="case-copy">
                <p>
                  <b>Problem.</b> {p.problem}
                </p>
                <p>
                  <b>Solution.</b> {p.solution}
                </p>
              </div>
              <div className="tags">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="impact">
                <CheckCircle2 size={17} />
                <span>{p.impact}</span>
              </div>
              <div className="project-links">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    {p.demo.match(/\.(jpeg|jpg|gif|png)$/) != null ? "Lihat Gambar" : "Live Demo"} <ExternalLink size={15} />
                  </a>
                )}
                {p.source && (
                  <a href={p.source} target="_blank" rel="noreferrer">
                    Source Code <Github size={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section container">
        <div className="experience-header">
          <SectionHeading
            eyebrow="// 02. CAREER & ACADEMIA"
            title="Experience & Education"
          />
          <div className="filter-bar">
            {expFilters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn${expFilter === f.key ? " filter-btn--active" : ""}`}
                onClick={() => setExpFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="timeline">
          {filteredExperience.map((e) => (
            <article className="timeline-item" key={e.title}>
              <div className="timeline-dot" />
              <div className="timeline-period">{e.period}</div>
              <div className="timeline-content">
                <span className="category">{e.type}</span>
                <h3>{e.title}</h3>
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {e.shopLink && (
                  <div style={{ marginTop: "14px" }}>
                    <a
                      href={e.shopLink}
                      target="_blank"
                      rel="noreferrer"
                      className="publication-link"
                    >
                      View on Etsy <ExternalLink size={13} />
                    </a>
                  </div>
                )}
                {e.publication && (
                  <div className="publication-card">
                    <div className="publication-header">
                      <FileText size={16} />
                      <span className="eyebrow">PUBLIKASI</span>
                    </div>
                    <h4>{e.publication.title}</h4>
                    <p>{e.publication.summary}</p>
                    <a href={e.publication.url} target="_blank" rel="noreferrer" className="publication-link">
                      View Publication <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="credentials" className="section container">
        <SectionHeading
          eyebrow="05 / CERTIFICATIONS"
          title="Certifications & Professional Learning"
        />
        <div className="cert-list">
          {certifications.map((c) => (
            <button
              className="cert-row"
              key={c.name}
              onClick={() => setCert(c)}
            >
              <span>
                <CheckCircle2 size={17} />
                <b>{c.name}</b>
              </span>
              <ArrowUpRight size={17} />
            </button>
          ))}
        </div>
      </section>

      <section id="contact" className="section container contact-section">
        <div className="contact-card">
          <div>
            <span className="eyebrow">06 / CONTACT</span>
            <h2>Let’s build something useful.</h2>
            <p>
              Terbuka untuk peluang kerja, kolaborasi, dan proyek yang
              menggabungkan data, software, dan digital product.
            </p>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={17} /> {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
            </div>
          </div>
          <form
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
          >
            <label>
              Nama
              <input name="name" required placeholder="Nama Anda" />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="email@domain.com"
              />
            </label>
            <label>
              Pesan
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Ceritakan kebutuhan atau peluangnya..."
              />
            </label>
            <button className="btn primary" type="submit">
              Kirim Pesan <ArrowUpRight size={17} />
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span> Open to opportunities</span>
        </div>
      </footer>

      {cert && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setCert(null)}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={cert.name}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setCert(null)}
              aria-label="Tutup"
            >
              <X />
            </button>
            <span className="eyebrow">CREDENTIAL</span>
            <h2>{cert.name}</h2>
            <div className="modal-actions">
              <a
                className="btn primary"
                href={cert.file}
                target="_blank"
                rel="noreferrer"
              >
                Preview PDF <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
