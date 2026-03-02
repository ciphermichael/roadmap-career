"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ── Types ─────────────────────────────────────────── */
export interface Phase {
  id: string;
  num: string;
  label: string;
  title: string;
  duration: string;
  color: string;
  desc: string;
  topics: { label: string; items: string[] }[];
  certs: { text: string; star?: boolean }[];
}

export interface CloudService { name: string; tag: string; tagClass: string; }
export interface CloudTab {
  id: string;
  icon: string;
  label: string;
  subtitle: string;
  groups: { label: string; services: CloudService[] }[];
}

export interface SkillRole {
  title: string;
  bars: { label: string; pct: number; color: string }[];
}

interface Props {
  badge: string;
  title: React.ReactNode;
  accent: string;
  desc: string;
  stats: { val: string; label: string }[];
  phases: Phase[];
  cloudTabs: CloudTab[];
  skillRoles: SkillRole[];
  sections: React.ReactNode; // extra sections passed as children
  routeTitle: string;
}

/* ── Sidebar Item ────────────────────────────────── */
function SideItem({
  num, text, active, onClick
}: { num: string; text: string; active: boolean; onClick: () => void }) {
  return (
    <button className={`sidebar-item${active ? " active" : ""}`} onClick={onClick}>
      <span className="sidebar-num">{num}</span>
      <span className="sidebar-text">{text}</span>
      <span className="sidebar-dot" />
    </button>
  );
}

/* ── Phase Card ──────────────────────────────────── */
function PhaseCard({ phase }: { phase: Phase }) {
  const [open, setOpen] = useState(false);
  return (
    <div id={phase.id} className={`phase-card${open ? " open" : ""}`} data-phase={phase.id}>
      <div className="phase-card-header" onClick={() => setOpen(!open)}>
        <div className="phase-big-num" style={{ color: phase.color }}>{phase.num}</div>
        <div className="phase-card-meta">
          <span className="phase-label t-mono">{phase.label}</span>
          <span className="phase-name">{phase.title}</span>
          <span className="phase-duration t-mono">{phase.duration}</span>
        </div>
        <span className="phase-chevron">⌄</span>
      </div>
      <div className="phase-card-body">
        <p className="phase-desc">{phase.desc}</p>
        <div className="topic-grid">
          {phase.topics.map(t => (
            <div key={t.label} className="topic-box">
              <div className="topic-box-label" style={{ color: phase.color }}>{t.label}</div>
              <ul className="topic-items">
                {t.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="cert-row">
          {phase.certs.map(c => (
            <span key={c.text} className={`cert-chip${c.star ? " star" : ""}`}>{c.text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Cloud Tabs ──────────────────────────────────── */
function CloudTabs({ tabs }: { tabs: CloudTab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="cloud-tabs-header">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            className={`cloud-tab-btn${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="cloud-tab-icon">{t.icon}</span>
            {t.label}
            <span style={{ fontSize: 10, color: "var(--text-faint)", marginLeft: 4 }}>
              {t.subtitle}
            </span>
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div key={t.id} className={`cloud-tab-panel${i === active ? " active" : ""}`}>
          {t.groups.map(g => (
            <div key={g.label} className="service-group">
              <div className="service-group-label">{g.label}</div>
              <div className="service-list">
                {g.services.map(s => (
                  <div key={s.name} className="service-row">
                    <span className="service-name">{s.name}</span>
                    <span className={`service-tag ${s.tagClass}`}>{s.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ── Skill Bars ──────────────────────────────────── */
function SkillBars({ roles }: { roles: SkillRole[] }) {
  return (
    <div className="skill-grid">
      {roles.map(r => (
        <div key={r.title} className="skill-card">
          <div className="skill-card-title">{r.title}</div>
          <div className="skill-bars">
            {r.bars.map(b => (
              <div key={b.label} className="skill-bar-wrap">
                <div className="skill-bar-info">
                  <span>{b.label}</span>
                  <span style={{ color: b.color, fontFamily: "var(--font-mono)", fontSize: 10 }}>{b.pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${b.pct}%`, background: b.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Progress Bar ────────────────────────────────── */
function ProgressBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="nav-progress-bar" style={{ width: `${pct}%` }} />;
}

/* ── Main Shell ──────────────────────────────────── */
export default function RoadmapShell({
  badge, title, accent, desc, stats,
  phases, cloudTabs, skillRoles, sections, routeTitle
}: Props) {
  const [activePhase, setActivePhase] = useState<string>("");

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActivePhase(e.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    document.querySelectorAll("[data-phase]").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const sidebarSections = [
    { label: "Phases", items: phases.map(p => ({ id: p.id, num: p.num, text: p.title })) },
    { label: "Deep Dives", items: [
      { id: "cloud-services", num: "06", text: "Cloud Services" },
      { id: "skill-matrix", num: "07", text: "Skill Matrix" },
    ]},
  ];

  return (
    <div className="page-shell">
      {/* Top Nav */}
      <nav className="topnav" style={{ position: "sticky", gridRow: 1 }}>
        <ProgressBar />
        <div className="topnav-left">
          <Link href="/" className="nav-logo">SEC<span style={{ color: "var(--amber)" }}>_</span>MAP</Link>
          <span className="nav-badge">{badge}</span>
        </div>
        <div className="topnav-right">
          <Link href="/" className="nav-back">← All Roadmaps</Link>
        </div>
      </nav>

      {/* Body */}
      <div className="content-shell">
        {/* Sidebar */}
        <aside className="sidebar">
          {sidebarSections.map(sec => (
            <React.Fragment key={sec.label}>
              <div className="sidebar-section-label">{sec.label}</div>
              {sec.items.map(item => (
                <SideItem
                  key={item.id}
                  num={item.num}
                  text={item.text}
                  active={activePhase === item.id || (activePhase === "" && item.id === phases[0].id)}
                  onClick={() => scrollTo(item.id)}
                />
              ))}
            </React.Fragment>
          ))}
        </aside>

        {/* Main */}
        <main className="main">
          {/* Hero */}
          <div className="roadmap-hero" style={{ ["--hero-accent" as string]: accent }}>
            <div
              className="roadmap-hero"
              style={{
                padding: 0,
                border: "none",
                position: "absolute",
                inset: 0,
                pointerEvents: "none"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -80, right: -80,
                  width: 400, height: 400,
                  borderRadius: "50%",
                  background: `radial-gradient(ellipse, ${accent}18 0%, transparent 70%)`,
                  filter: "blur(40px)",
                }}
              />
            </div>
            <div style={{ padding: "60px 56px 48px", borderBottom: "1px solid var(--border)", position: "relative" }}>
              <div className="hero-eyebrow">
                <span />
                {routeTitle}
                <span />
              </div>
              <h1 className="t-display" style={{ fontSize: "clamp(52px,6vw,80px)", marginBottom: 20, color: accent }}>
                {title}
              </h1>
              <p className="hero-desc">{desc}</p>
              <div className="hero-stats">
                {stats.map(s => (
                  <div key={s.label} className="hero-stat">
                    <div className="stat-val t-display" style={{ color: accent }}>{s.val}</div>
                    <div className="stat-label t-mono">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phases */}
          <section id="phases" className="section">
            <div className="section-header">
              <span className="section-num t-display">01</span>
              <span className="section-title">Learning Phases</span>
              <div className="section-rule" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {phases.map(p => <PhaseCard key={p.id} phase={p} />)}
            </div>
          </section>

          {/* Cloud Tabs */}
          <section id="cloud-services" className="section" data-phase="cloud-services">
            <div className="section-header">
              <span className="section-num t-display">06</span>
              <span className="section-title">Cloud-Specific Services</span>
              <div className="section-rule" />
            </div>
            <CloudTabs tabs={cloudTabs} />
          </section>

          {/* Skill Matrix */}
          <section id="skill-matrix" className="section" data-phase="skill-matrix">
            <div className="section-header">
              <span className="section-num t-display">07</span>
              <span className="section-title">Skills by Role Type</span>
              <div className="section-rule" />
            </div>
            <SkillBars roles={skillRoles} />
          </section>

          {/* Extra sections */}
          {sections}

          {/* Footer */}
          <footer className="page-footer">
            <span>Security Roadmaps · 2025 Edition</span>
            <span style={{ color: accent, fontFamily: "var(--font-mono)" }}>
              // Learn → Build → Prove → Apply
            </span>
            <span>12–18 months · All clouds · Job ready</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
