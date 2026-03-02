import Link from "next/link";

export default function Home() {
  return (
    <div className="landing">
      {/* Background */}
      <div className="landing-bg" aria-hidden>
        <div className="landing-grid" />
        <div className="landing-glow-1" />
        <div className="landing-glow-2" />
      </div>

      {/* Nav */}
      <nav className="landing-nav">
        <div className="landing-logo">SECURITY<span style={{ color: "var(--amber)" }}>_</span>ROADMAPS</div>
        <div className="landing-nav-pill">2025 Edition · Practitioner Built</div>
      </nav>

      {/* Hero */}
      <section className="landing-hero">
        <div className="landing-pre">Career Roadmaps</div>
        <h1 className="landing-h1">SECURITY</h1>
        <div className="landing-h1-sub">ROADMAPS</div>
        <p className="landing-tagline">
          Two battle-tested paths from zero to job-ready. Pick your track — technical
          engineering or governance &amp; compliance. Both lead to roles.
        </p>

        {/* Cards */}
        <div className="landing-cards">
          {/* Cloud Security Card */}
          <Link href="/cloud-security" className="landing-card lc-amber">
            <div className="lc-accent-line" />
            <div className="landing-card-glow" />
            <span className="lc-track">Engineering Track</span>
            <span className="lc-icon">🛡️</span>
            <div className="lc-title">CLOUD SECURITY<br />ENGINEER</div>
            <p className="lc-desc">
              Hands-on technical security across AWS, Azure and GCP. Detection engineering,
              IAM hardening, DevSecOps, container security and incident response.
            </p>
            <div className="lc-meta">
              <div className="lc-meta-item">5 phases · 12–18 months to job-ready</div>
              <div className="lc-meta-item">AWS · Azure · GCP service deep-dives</div>
              <div className="lc-meta-item">SCS-C02 · AZ-500 · GCP PSE mapped</div>
              <div className="lc-meta-item">Labs: flaws.cloud, CloudGoat, GCP Goat</div>
            </div>
            <div className="lc-cta">View Roadmap →</div>
          </Link>

          {/* GRC Card */}
          <Link href="/grc" className="landing-card lc-teal">
            <div className="lc-accent-line" />
            <div className="landing-card-glow" />
            <span className="lc-track">Governance Track</span>
            <span className="lc-icon">📋</span>
            <div className="lc-title">GOVERNANCE<br />RISK &amp; COMPLIANCE</div>
            <p className="lc-desc">
              Frameworks, audit methodology, risk management and cloud compliance.
              ISO 27001, SOC 2, GDPR, NIST and PCI DSS — with six career pathways.
            </p>
            <div className="lc-meta">
              <div className="lc-meta-item">5 phases · 12–18 months to job-ready</div>
              <div className="lc-meta-item">9 framework deep-dives</div>
              <div className="lc-meta-item">CISA · CISM · CCSP · ISO LI mapped</div>
              <div className="lc-meta-item">6 distinct GRC career pathways</div>
            </div>
            <div className="lc-cta">View Roadmap →</div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <span>Security Roadmaps · 2025</span>
        <span style={{ color: "var(--amber)" }}>// Learn → Build → Prove → Apply</span>
        <span>Cloud Security &amp; GRC Tracks</span>
      </footer>
    </div>
  );
}
