import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Michael Lawrence",
  description:
    "Senior Security Engineer with 10+ years building cloud security programmes across AWS, Azure and GCP. Creator of the Security Roadmaps project.",
};

/* ─── DATA ──────────────────────────────────────────── */
const jobs = [
  {
    title: "Cloud Security Engineer",
    company: "Indicina",
    location: "Lagos",
    period: "Mar 2021 – Present",
    current: true,
    bullets: [
      "Lead development and execution of comprehensive cloud security strategies for AWS environments, ensuring adherence to industry standards and best practices.",
      "Collaborate with DevOps and development teams to integrate security throughout the DevSecOps pipeline, fostering a security-first culture.",
      "Design and implement AWS security solutions including IAM, AWS Config, AWS WAF, and AWS Security Hub.",
      "Conduct security assessments, vulnerability scans, and penetration testing to identify and remediate risks.",
      "Implement and manage security controls, encryption, and key management to protect data at rest and in transit.",
      "Provide guidance and mentorship to junior security engineers on cloud security best practices.",
    ],
  },
  {
    title: "Senior Cloud Security Engineer",
    company: "Cassbana",
    location: "Consultant",
    period: "Jan 2022 – Jan 2023",
    current: false,
    bullets: [
      "Spearheaded design and implementation of secure, scalable cloud architectures for clients across various industries.",
      "Conducted in-depth security assessments and risk analysis for cloud environments, recommending remediation strategies.",
      "Worked with development teams to incorporate security into CI/CD pipelines and automate security testing.",
      "Led security incident response efforts, minimising the impact of breaches and ensuring compliance with data protection regulations.",
      "Collaborated with clients to define security requirements, create security policies, and oversee compliance audits.",
    ],
  },
  {
    title: "Cloud Security Engineer & DevSecOps",
    company: "Deimos",
    location: "",
    period: "Apr 2020 – Dec 2021",
    current: false,
    bullets: [
      "Managed AWS security groups, network ACLs, and IAM policies adhering to NIST and ISO 27001 standards.",
      "Developed and implemented security monitoring and alerting solutions using AWS CloudWatch and CloudTrail.",
      "Conducted security assessments and audits, identifying gaps and recommending remediation in compliance with NIST and ISO 27001.",
      "Collaborated with cross-functional teams to define security requirements for new cloud projects considering NIST, PCI DSS, and ISO 27001 guidelines.",
      "Assisted in development of disaster recovery plans and participated in tabletop exercises.",
    ],
  },
  {
    title: "Enterprise Security Engineer (Lead)",
    company: "Konga Online Shopping Ltd",
    location: "",
    period: "Aug 2017 – Mar 2020",
    current: false,
    bullets: [
      "Threat modelling of projects before development, improving security at the initial phase.",
      "Performed functional testing of security solutions including RSA two-factor authentication, SSO, DLP, and SIEM.",
      "Created ISO 27001:2013 internal audit reports in accordance with ISO/IEC 27001 requirements.",
      "Performed risk and vulnerability assessments and provided results and recommendations to senior management.",
      "Created and implemented security network framework across 120 devices.",
    ],
  },
  {
    title: "IT Network Security Analyst",
    company: "MainOne Service Company",
    location: "",
    period: "Oct 2016 – Jul 2017",
    current: false,
    bullets: [
      "Planned and conducted ISO 27001:2013 compliance assessments for cloud services and internal network.",
      "Maintained the Statement of Applicability (SoA), ISMS controls mapping to risk register, and continuous monitoring procedures.",
      "Provided network security architecture support including routers, switches, firewalls, proxies, VPNs, and load balancers.",
      "Deployed and maintained Cisco ISE across enterprise infrastructure.",
    ],
  },
  {
    title: "Windows Server / Network Specialist",
    company: "Konga Online Shopping Ltd",
    location: "",
    period: "Oct 2015 – Sep 2016",
    current: false,
    bullets: [
      "Installed firewalls and VPNs to increase and manage client network security.",
      "Implemented security strategies on private networks across a 3-state corporate WAN.",
      "Reviewed network settings and made updates that improved overall security measures.",
    ],
  },
];

const certs = [
  { code: "CEH",  full: "Certified Ethical Hacker",          org: "EC-Council",   color: "var(--red)" },
  { code: "CCNP", full: "Cisco Certified Network Professional", org: "Cisco",     color: "var(--blue)" },
  { code: "CCNA", full: "Cisco Certified Network Associate",   org: "Cisco",      color: "var(--blue)" },
  { code: "GCP",  full: "Professional Cloud Security Engineer", org: "Google",    color: "var(--teal)" },
  { code: "GCP",  full: "Professional Network Engineer",       org: "Google",     color: "var(--teal)" },
];

const skills = [
  { label: "AWS (EC2, EBS, S3, IAM, VPC, Security Hub, WAF, Config)",  pct: 96, color: "var(--amber)"  },
  { label: "Azure Cloud Security (Defender, Sentinel, Entra ID)",        pct: 88, color: "var(--blue)"   },
  { label: "Google Cloud Platform Security (SCC, Chronicle, KMS)",       pct: 85, color: "var(--teal)"   },
  { label: "Security Architecture & Design",                              pct: 95, color: "var(--amber)"  },
  { label: "DevSecOps (Jenkins, Ansible, Terraform, CI/CD)",             pct: 92, color: "var(--purple)" },
  { label: "Container Security (Docker, Kubernetes, EKS/AKS/GKE)",      pct: 90, color: "var(--teal)"   },
  { label: "Python & PowerShell Scripting",                               pct: 88, color: "var(--green)"  },
  { label: "Penetration Testing & Vulnerability Assessment",              pct: 85, color: "var(--red)"    },
  { label: "Compliance (ISO 27001, NIST, PCI DSS, GDPR)",               pct: 90, color: "var(--amber)"  },
];

const edu = [
  { degree: "MSc Cybersecurity", school: "University of Sunderland", year: "2023 – 2024", flag: "🇬🇧" },
  { degree: "BSc Information Communication Technology", school: "Crawford University", year: "2008 – 2012", note: "Second Class Upper", flag: "🇳🇬" },
];

/* ─── PAGE ──────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-page { min-height: 100vh; background: var(--bg); color: var(--text); font-family: var(--font-head); }

        /* ── TOP NAV ── */
        .about-nav {
          position: sticky; top: 0; z-index: 100;
          height: 56px; background: rgba(6,8,14,0.88); backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px;
        }
        .about-nav-logo { font-family: var(--font-display); font-size: 21px; letter-spacing: 0.08em; }
        .about-nav-logo span { color: var(--amber); }
        .about-nav-links { display: flex; gap: 8px; }
        .about-nav-link {
          font-family: var(--font-mono); font-size: 17px; letter-spacing: 0.05em;
          padding: 6px 14px; border: 1px solid var(--border); border-radius: 6px;
          color: var(--text-mid); transition: all 0.18s;
        }
        .about-nav-link:hover { color: var(--amber); border-color: var(--amber-dim); background: var(--amber-glow); }
        .about-nav-link.active { color: var(--amber); border-color: var(--amber-dim); background: var(--amber-glow); }

        /* ── HERO ── */
        .about-hero {
          position: relative; overflow: hidden;
          padding: 80px 80px 72px;
          border-bottom: 1px solid var(--border);
        }
        .hero-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(245,160,48,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,160,48,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .hero-glow {
          position: absolute; top: -60px; right: 80px;
          width: 360px; height: 360px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(245,160,48,0.1) 0%, transparent 70%);
          filter: blur(40px); pointer-events: none;
        }
        .hero-inner {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: 1fr auto;
          gap: 48px; align-items: start;
          max-width: 1100px;
        }
        .hero-eyebrow {
          font-family: var(--font-mono); font-size: 16px; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--amber);
          display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
        }
        .hero-eyebrow::before { content: ''; width: 28px; height: 1px; background: var(--amber); opacity: 0.5; }
        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(56px, 7vw, 96px);
          line-height: 0.9; letter-spacing: 0.04em;
          margin-bottom: 8px;
        }
        .hero-title {
          font-family: var(--font-display); font-size: clamp(22px, 3vw, 32px);
          letter-spacing: 0.06em; color: var(--amber); margin-bottom: 28px;
        }
        .hero-bio {
          font-size: 20px; color: var(--text-mid); line-height: 1.8;
          max-width: 620px; margin-bottom: 36px;
        }
        .hero-contacts { display: flex; gap: 12px; flex-wrap: wrap; }
        .contact-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 17px; letter-spacing: 0.06em;
          padding: 8px 16px; border: 1px solid var(--border); border-radius: 6px;
          color: var(--text-mid); transition: all 0.18s; text-decoration: none;
        }
        .contact-btn:hover { border-color: var(--amber-dim); color: var(--amber); background: var(--amber-glow); }

        /* stats panel */
        .hero-stats-panel {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 12px; padding: 28px 24px;
          display: flex; flex-direction: column; gap: 20px;
          min-width: 200px;
        }
        .hs-item { display: flex; flex-direction: column; gap: 3px; }
        .hs-val { font-family: var(--font-display); font-size: 38px; letter-spacing: 0.04em; line-height: 1; color: var(--amber); }
        .hs-label { font-family: var(--font-mono); font-size: 16px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-dim); }
        .hs-divider { height: 1px; background: var(--border); }

        /* ── BODY ── */
        .about-body { max-width: 1100px; margin: 0 auto; padding: 0 80px 80px; }

        .about-section { padding: 56px 0 0; border-top: 1px solid var(--border); margin-top: 56px; }
        .about-section:first-child { margin-top: 0; border-top: none; padding-top: 56px; }
        .as-header { display: flex; align-items: center; gap: 16px; margin-bottom: 40px; }
        .as-num { font-family: var(--font-display); font-size: 19px; letter-spacing: 0.08em; color: var(--text-faint); }
        .as-title { font-size: 21px; font-weight: 700; }
        .as-rule { flex: 1; height: 1px; background: var(--border); }

        /* ── TIMELINE ── */
        .timeline { position: relative; }
        .timeline::before {
          content: ''; position: absolute; left: 11px; top: 8px; bottom: 0;
          width: 1px; background: var(--border);
        }
        .job { display: grid; grid-template-columns: 24px 1fr; gap: 20px; margin-bottom: 36px; position: relative; }
        .job-dot {
          width: 24px; height: 24px; border-radius: 50%;
          border: 2px solid var(--border); background: var(--bg);
          position: relative; z-index: 1; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s;
          margin-top: 2px;
        }
        .job:hover .job-dot { border-color: var(--amber); }
        .job-dot.current { border-color: var(--amber); background: var(--amber-glow); }
        .job-dot.current::after {
          content: ''; width: 8px; height: 8px; border-radius: 50%;
          background: var(--amber); animation: blip 2s infinite;
        }
        @keyframes blip { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.6)} }

        .job-body { padding-bottom: 4px; }
        .job-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 6px; flex-wrap: wrap; }
        .job-title { font-size: 21px; font-weight: 700; margin-bottom: 2px; }
        .job-company { font-family: var(--font-mono); font-size: 18px; color: var(--amber); }
        .job-period {
          font-family: var(--font-mono); font-size: 16px; letter-spacing: 0.08em;
          color: var(--text-dim); padding: 3px 10px; border: 1px solid var(--border);
          border-radius: 100px; white-space: nowrap; flex-shrink: 0;
        }
        .job-period.current-badge { border-color: var(--amber-dim); color: var(--amber); background: var(--amber-glow); }
        .job-bullets { list-style: none; display: flex; flex-direction: column; gap: 5px; margin-top: 10px; }
        .job-bullets li { font-size: 18px; color: var(--text-mid); display: flex; gap: 9px; line-height: 1.6; }
        .job-bullets li::before { content: '›'; color: var(--text-dim); flex-shrink: 0; font-size: 20px; line-height: 1.3; }

        /* ── SKILLS ── */
        .skills-grid { display: flex; flex-direction: column; gap: 14px; }
        .skill-row { display: flex; flex-direction: column; gap: 5px; }
        .skill-row-head { display: flex; justify-content: space-between; font-size: 18px; color: var(--text-mid); }
        .skill-pct { font-family: var(--font-mono); font-size: 17px; }
        .skill-track { height: 4px; background: var(--border); border-radius: 2px; overflow: hidden; }
        .skill-fill { height: 100%; border-radius: 2px; animation: barFill 1.2s var(--ease) both; }

        /* ── CERTS ── */
        .certs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
        .cert-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 8px;
          padding: 20px; position: relative; overflow: hidden; transition: all 0.2s var(--ease);
        }
        .cert-card:hover { border-color: var(--border-mid); transform: translateY(-3px); box-shadow: 0 8px 32px rgba(0,0,0,0.4); }
        .cert-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          opacity: 0; transition: opacity 0.2s;
        }
        .cert-card:hover::before { opacity: 1; }
        .cert-code { font-family: var(--font-display); font-size: 31px; letter-spacing: 0.04em; margin-bottom: 8px; }
        .cert-full { font-size: 18px; font-weight: 600; margin-bottom: 4px; line-height: 1.3; }
        .cert-org { font-family: var(--font-mono); font-size: 16px; color: var(--text-dim); letter-spacing: 0.08em; }

        /* ── EDUCATION ── */
        .edu-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .edu-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 8px;
          padding: 24px; transition: all 0.2s;
        }
        .edu-card:hover { border-color: var(--border-mid); box-shadow: 0 4px 24px rgba(0,0,0,0.3); }
        .edu-flag { font-size: 31px; margin-bottom: 12px; display: block; }
        .edu-degree { font-size: 20px; font-weight: 700; margin-bottom: 4px; line-height: 1.3; }
        .edu-school { font-family: var(--font-mono); font-size: 18px; color: var(--amber); margin-bottom: 6px; }
        .edu-year { font-family: var(--font-mono); font-size: 16px; color: var(--text-dim); }
        .edu-note { font-size: 17px; color: var(--teal); margin-top: 6px; }

        /* ── PROJECT ORIGIN ── */
        .origin-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 12px;
          padding: 40px; position: relative; overflow: hidden;
        }
        .origin-glow {
          position: absolute; top: -40px; right: -40px;
          width: 240px; height: 240px; border-radius: 50%;
          background: radial-gradient(ellipse, var(--amber-glow) 0%, transparent 70%);
          filter: blur(30px); pointer-events: none;
        }
        .origin-body { position: relative; z-index: 1; max-width: 720px; }
        .origin-label {
          font-family: var(--font-mono); font-size: 16px; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--amber); margin-bottom: 14px;
        }
        .origin-heading { font-family: var(--font-display); font-size: 38px; letter-spacing: 0.04em; margin-bottom: 16px; line-height: 1.05; }
        .origin-text { font-size: 19px; color: var(--text-mid); line-height: 1.8; margin-bottom: 12px; }
        .origin-links { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }
        .origin-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 17px; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 10px 20px;
          border: 1px solid; border-radius: 6px; transition: all 0.18s; text-decoration: none;
        }
        .origin-btn.primary { border-color: var(--amber); color: var(--amber); background: var(--amber-glow); }
        .origin-btn.primary:hover { background: rgba(245,160,48,0.2); }
        .origin-btn.secondary { border-color: var(--border); color: var(--text-mid); }
        .origin-btn.secondary:hover { border-color: var(--border-mid); color: var(--text); }

        /* ── FOOTER ── */
        .about-footer {
          border-top: 1px solid var(--border); padding: 28px 80px;
          display: flex; justify-content: space-between; align-items: center;
          font-family: var(--font-mono); font-size: 16px; color: var(--text-faint);
          letter-spacing: 0.05em;
        }

        @media(max-width:900px) {
          .about-hero { padding: 48px 24px; }
          .hero-inner { grid-template-columns: 1fr; }
          .hero-stats-panel { flex-direction: row; flex-wrap: wrap; gap: 16px; }
          .about-body { padding: 0 24px 60px; }
          .edu-grid { grid-template-columns: 1fr; }
          .about-footer { padding: 20px 24px; flex-direction: column; gap: 8px; }
          .about-nav { padding: 0 20px; }
        }
      `}</style>

      <div className="about-page">

        {/* NAV */}
        <nav className="about-nav">
          <Link href="/" className="about-nav-logo">
            SEC<span>_</span>MAP
          </Link>
          <div className="about-nav-links">
            <Link href="/cloud-security" className="about-nav-link">Engineering</Link>
            <Link href="/grc" className="about-nav-link">GRC</Link>
            <Link href="/about" className="about-nav-link active">About</Link>
          </div>
        </nav>

        {/* HERO */}
        <div className="about-hero">
          <div className="hero-grid-bg" />
          <div className="hero-glow" />
          <div className="hero-inner">
            <div>
              <div className="hero-eyebrow">Creator &amp; Author</div>
              <h1 className="hero-name">MICHAEL<br />LAWRENCE</h1>
              <div className="hero-title">SENIOR SECURITY ENGINEER</div>
              <p className="hero-bio">
                Watchful security professional with 10+ years of hands-on experience across cloud
                security, DevSecOps, and enterprise security engineering. Built comprehensive
                cloud security programmes spanning AWS, Azure, and GCP. Passionate about
                growing the next generation of cloud security practitioners — which is exactly
                why this project exists.
              </p>
              <div className="hero-contacts">
                <a href="mailto:ciphermichael@gmail.com" className="contact-btn">
                  ✉ ciphermichael@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/michael-lawrence-17178"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                >
                  ↗ LinkedIn
                </a>
              </div>
            </div>
            <div className="hero-stats-panel">
              <div className="hs-item">
                <div className="hs-val">10+</div>
                <div className="hs-label">Years in Security</div>
              </div>
              <div className="hs-divider" />
              <div className="hs-item">
                <div className="hs-val">3</div>
                <div className="hs-label">Major Clouds</div>
              </div>
              <div className="hs-divider" />
              <div className="hs-item">
                <div className="hs-val">5+</div>
                <div className="hs-label">Certifications</div>
              </div>
              <div className="hs-divider" />
              <div className="hs-item">
                <div className="hs-val">MSc</div>
                <div className="hs-label">Cybersecurity</div>
              </div>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="about-body">

          {/* PROJECT ORIGIN */}
          <div className="about-section">
            <div className="origin-card">
              <div className="origin-glow" />
              <div className="origin-body">
                <div className="origin-label">Why this project exists</div>
                <div className="origin-heading">BUILT FROM<br />THE TRENCHES</div>
                <p className="origin-text">
                  After a decade working across cloud security engineering, DevSecOps, and enterprise
                  security — from Lagos to London — I kept seeing the same problem: talented people
                  trying to break into cloud security with no clear map. Generic online guides either
                  oversimplified the field or buried people in theory before they'd touched a terminal.
                </p>
                <p className="origin-text">
                  These roadmaps are built on what I actually use day-to-day. The tools, the
                  frameworks, the certifications that hiring managers recognise, and the hands-on
                  labs that build the muscle memory you need to operate in a real environment.
                  No fluff, no filler — just the path I wish I'd had.
                </p>
                <p className="origin-text">
                  Whether you're targeting a technical Cloud Security Engineer role or building
                  a career in GRC and compliance, the goal is the same: give you a structured,
                  realistic, practitioner-validated path to your first role in cloud security.
                </p>
                <div className="origin-links">
                  <Link href="/cloud-security" className="origin-btn primary">View Engineering Roadmap →</Link>
                  <Link href="/grc" className="origin-btn secondary">View GRC Roadmap →</Link>
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="about-section">
            <div className="as-header">
              <span className="as-num" style={{ fontFamily: "var(--font-display)" }}>01</span>
              <span className="as-title">Technical Skills</span>
              <div className="as-rule" />
            </div>
            <div className="skills-grid">
              {skills.map(s => (
                <div key={s.label} className="skill-row">
                  <div className="skill-row-head">
                    <span>{s.label}</span>
                    <span className="skill-pct" style={{ color: s.color }}>{s.pct}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ width: `${s.pct}%`, background: s.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="about-section">
            <div className="as-header">
              <span className="as-num" style={{ fontFamily: "var(--font-display)" }}>02</span>
              <span className="as-title">Certifications</span>
              <div className="as-rule" />
            </div>
            <div className="certs-grid">
              {certs.map((c, i) => (
                <div
                  key={i}
                  className="cert-card"
                  style={{ ["--c" as string]: c.color } as React.CSSProperties}
                >
                  <style>{`.cert-card:hover::before { background: ${c.color}; }`}</style>
                  <div className="cert-code" style={{ color: c.color }}>{c.code}</div>
                  <div className="cert-full">{c.full}</div>
                  <div className="cert-org">{c.org}</div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="about-section">
            <div className="as-header">
              <span className="as-num" style={{ fontFamily: "var(--font-display)" }}>03</span>
              <span className="as-title">Work History</span>
              <div className="as-rule" />
            </div>
            <div className="timeline">
              {jobs.map((job, i) => (
                <div key={i} className="job">
                  <div className={`job-dot${job.current ? " current" : ""}`} />
                  <div className="job-body">
                    <div className="job-header">
                      <div>
                        <div className="job-title">{job.title}</div>
                        <div className="job-company">
                          {job.company}{job.location ? ` · ${job.location}` : ""}
                        </div>
                      </div>
                      <span className={`job-period${job.current ? " current-badge" : ""}`}>
                        {job.current ? "🟢 " : ""}{job.period}
                      </span>
                    </div>
                    <ul className="job-bullets">
                      {job.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div className="about-section">
            <div className="as-header">
              <span className="as-num" style={{ fontFamily: "var(--font-display)" }}>04</span>
              <span className="as-title">Education</span>
              <div className="as-rule" />
            </div>
            <div className="edu-grid">
              {edu.map((e, i) => (
                <div key={i} className="edu-card">
                  <span className="edu-flag">{e.flag}</span>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-school">{e.school}</div>
                  <div className="edu-year">{e.year}</div>
                  {e.note && <div className="edu-note">✓ {e.note}</div>}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <footer className="about-footer">
          <span>Michael Lawrence · Senior Security Engineer</span>
          <span style={{ color: "var(--amber)" }}>// Security Roadmaps · 2025</span>
          <span>ciphermichael@gmail.com</span>
        </footer>
      </div>
    </>
  );
}
