import Link from "next/link";

export default function Home() {
  return (
    <>
      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: #07090f;
          min-height: 100vh;
          font-family: 'JetBrains Mono', monospace;
          color: #e2eaf5;
          overflow-x: hidden;
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        .noise {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
          opacity: 0.35;
        }

        .page {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 24px;
        }

        .eyebrow {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #00d4ff;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .eyebrow::before, .eyebrow::after {
          content: '';
          width: 40px;
          height: 1px;
          background: #00d4ff;
          opacity: 0.4;
        }

        h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(40px, 8vw, 96px);
          font-weight: 800;
          text-align: center;
          line-height: 0.95;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          animation: fadeUp 0.7s ease both;
        }

        h1 span { color: #00d4ff; }

        .tagline {
          font-size: 13px;
          color: #6b8aaa;
          text-align: center;
          max-width: 520px;
          line-height: 1.8;
          margin-bottom: 64px;
          animation: fadeUp 0.7s ease 0.15s both;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          width: 100%;
          max-width: 900px;
          animation: fadeUp 0.7s ease 0.3s both;
        }

        .card {
          display: block;
          text-decoration: none;
          background: #0d1520;
          border: 1px solid #1a2d45;
          padding: 48px 40px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s;
          color: inherit;
          cursor: pointer;
        }

        .card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .card:hover::before { transform: scaleX(1); }

        .card-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0;
          filter: blur(60px);
          transition: opacity 0.4s;
          pointer-events: none;
        }

        .card:hover .card-glow { opacity: 0.08; }

        .card-eng { --accent: #00d4ff; }
        .card-grc { --accent: #8b1a1a; }

        .card-badge {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: 1px solid;
          border-color: var(--accent);
          color: var(--accent);
          padding: 3px 10px;
          display: inline-block;
          margin-bottom: 24px;
        }

        .card-icon {
          font-size: 36px;
          margin-bottom: 20px;
          display: block;
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 12px;
          color: var(--accent);
        }

        .card-desc {
          font-size: 11px;
          color: #6b8aaa;
          line-height: 1.8;
          margin-bottom: 28px;
        }

        .card-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 32px;
        }

        .card-meta-item {
          font-size: 10px;
          color: #3a5068;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .card-meta-item::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.5;
          flex-shrink: 0;
        }

        .card-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          transition: gap 0.2s;
        }

        .card:hover .card-cta { gap: 14px; }

        .divider-label {
          font-size: 10px;
          color: #1a2d45;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0 20px;
          background: #07090f;
          position: relative;
          z-index: 1;
        }

        .divider-wrapper {
          display: flex;
          align-items: center;
          gap: 0;
          width: 100%;
          max-width: 900px;
          margin: 48px 0;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: #1a2d45;
        }

        .footer-text {
          font-size: 10px;
          color: #1a2d45;
          letter-spacing: 0.1em;
          text-align: center;
          margin-top: 48px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .cards { grid-template-columns: 1fr; }
          .card { padding: 32px 24px; }
        }
      `}</style>

      <div className="grid-bg" />
      <div className="noise" />

      <div className="page">
        <div className="eyebrow">Practitioner-Built · 2025 Edition</div>

        <h1>
          SECURITY<br />
          <span>ROADMAPS</span>
        </h1>

        <p className="tagline">
          Two career-defining roadmaps built by practitioners for practitioners.
          Pick your path and follow the phases to job-ready.
        </p>

        <div className="cards">
          <Link href="/cloud-security" className="card card-eng">
            <div className="card-glow" />
            <span className="card-badge">Engineering Track</span>
            <span className="card-icon">🛡️</span>
            <div className="card-title">Cloud Security<br />Engineer</div>
            <p className="card-desc">
              Hands-on technical security across AWS, Azure and GCP. From foundations through
              to detection engineering, IAM, DevSecOps, container security, and incident response.
            </p>
            <div className="card-meta">
              <div className="card-meta-item">5 progressive phases</div>
              <div className="card-meta-item">12–18 months to job-ready</div>
              <div className="card-meta-item">AWS · Azure · GCP service deep-dives</div>
              <div className="card-meta-item">SCS-C02 · AZ-500 · GCP PSE certs mapped</div>
            </div>
            <div className="card-cta">View Roadmap →</div>
          </Link>

          <Link href="/grc" className="card card-grc">
            <div className="card-glow" />
            <span className="card-badge">Governance Track</span>
            <span className="card-icon">📋</span>
            <div className="card-title">Governance, Risk<br />&amp; Compliance</div>
            <p className="card-desc">
              Frameworks, auditing, risk management, and cloud compliance across ISO 27001,
              SOC 2, GDPR, NIST, PCI DSS and more. Six distinct career pathways covered.
            </p>
            <div className="card-meta">
              <div className="card-meta-item">5 progressive phases</div>
              <div className="card-meta-item">12–18 months to job-ready</div>
              <div className="card-meta-item">9 framework deep-dives</div>
              <div className="card-meta-item">CISA · CISM · CCSP · ISO LI certs mapped</div>
            </div>
            <div className="card-cta">View Roadmap →</div>
          </Link>
        </div>

        <div className="divider-wrapper">
          <div className="divider-line" />
          <span className="divider-label">Built for the UK &amp; Global Market</span>
          <div className="divider-line" />
        </div>

        <p className="footer-text">
          Security Roadmaps · 2025 · Cloud Security Engineering &amp; GRC
        </p>
      </div>
    </>
  );
}
