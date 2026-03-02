import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud GRC Roadmap — Governance, Risk & Compliance",
  description: "A practitioner-built guide for transitioning into Cloud GRC roles. ISO 27001, SOC 2, GDPR, NIST, PCI DSS and 6 career pathways. 12–18 months to job-ready.",
};

export default function GRCPage() {
  return (
    <>
      <style>{`
        :root {
          --bg: #f5f0e8;
          --bg2: #ede8dc;
          --surface: #faf8f3;
          --border: #d4c9b0;
          --border-dark: #b8a98a;
          --ink: #1a1409;
          --ink-mid: #4a3f2a;
          --ink-dim: #8a7a5a;
          --ink-faint: #c4b898;
          --red: #8b1a1a;
          --green: #1a5c2a;
          --blue: #1a2e5c;
          --gold: #8b6914;
          --purple: #3d1a5c;
          --teal: #0f4040;
        }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--bg);color:var(--ink);font-family:'DM Mono',monospace;min-height:100vh;position:relative;}
        body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");pointer-events:none;z-index:1000;}
        body::after{content:'';position:fixed;inset:0;background-image:repeating-linear-gradient(transparent,transparent 27px,rgba(180,160,120,0.15) 28px);pointer-events:none;z-index:0;}
        .back-link{display:inline-flex;align-items:center;gap:8px;font-size:11px;color:var(--ink-dim);text-decoration:none;letter-spacing:0.05em;padding:16px 32px;border-bottom:1px solid var(--border);width:100%;transition:color 0.2s;position:relative;z-index:1;}
        .back-link:hover{color:var(--red);}
        .container{max-width:1180px;margin:0 auto;padding:0 32px;position:relative;z-index:1;}
        header{padding:56px 0 40px;border-bottom:2px solid var(--ink);position:relative;}
        .header-inner{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:end;}
        .stamp{display:inline-block;border:1.5px solid var(--red);color:var(--red);font-size:10px;letter-spacing:0.2em;padding:5px 14px;text-transform:uppercase;margin-bottom:20px;transform:rotate(-1deg);position:relative;}
        .stamp::before{content:'';position:absolute;inset:2px;border:1px solid var(--red);opacity:0.3;}
        h1{font-family:'Playfair Display',serif;font-size:clamp(40px,7vw,82px);font-weight:900;line-height:0.95;letter-spacing:-0.02em;}
        h1 em{font-style:italic;color:var(--red);}
        .subtitle{margin-top:18px;color:var(--ink-mid);font-size:12px;line-height:1.8;max-width:560px;}
        .header-meta{text-align:right;flex-shrink:0;}
        .big-stat{font-family:'Playfair Display',serif;font-size:72px;font-weight:900;line-height:1;color:var(--red);opacity:0.15;}
        .stat-label{font-size:10px;letter-spacing:0.1em;color:var(--ink-dim);text-transform:uppercase;margin-top:4px;}
        .meta-pills{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px;}
        .pill{font-size:10px;padding:4px 12px;border:1px solid var(--border-dark);color:var(--ink-mid);letter-spacing:0.08em;}
        .sec-header{display:flex;align-items:center;gap:16px;margin-bottom:40px;}
        .sec-label{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;white-space:nowrap;}
        .sec-rule{flex:1;height:1.5px;background:var(--ink);opacity:0.15;}
        .sec-num{font-size:10px;color:var(--ink-faint);letter-spacing:0.15em;white-space:nowrap;}
        .phases-section{padding:56px 0;border-bottom:1px solid var(--border);}
        .phase{display:grid;grid-template-columns:220px 1fr;border-top:1px solid var(--border);padding:36px 0;position:relative;animation:slideUp 0.5s ease both;}
        @keyframes slideUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
        .phase:nth-child(1){animation-delay:0.05s;}.phase:nth-child(2){animation-delay:0.1s;}.phase:nth-child(3){animation-delay:0.15s;}.phase:nth-child(4){animation-delay:0.2s;}.phase:nth-child(5){animation-delay:0.25s;}
        .phase-left{padding-right:36px;border-right:1.5px solid var(--border);display:flex;flex-direction:column;gap:10px;position:relative;}
        .phase-marker{width:10px;height:10px;border:1.5px solid;position:absolute;right:-5px;top:4px;background:var(--bg);transform:rotate(45deg);}
        .phase-num{font-size:9px;letter-spacing:0.2em;color:var(--ink-faint);text-transform:uppercase;}
        .phase-title{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;line-height:1.2;}
        .phase-duration{font-size:10px;color:var(--ink-dim);border:1px solid var(--border);padding:3px 9px;width:fit-content;}
        .phase-right{padding-left:40px;}
        .phase-desc{font-size:12px;color:var(--ink-mid);line-height:1.8;max-width:760px;margin-bottom:28px;border-left:3px solid;padding-left:16px;}
        .topic-cols{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;margin-bottom:24px;}
        .topic-box{background:var(--surface);border:1px solid var(--border);padding:18px;position:relative;transition:box-shadow 0.2s,border-color 0.2s;}
        .topic-box:hover{box-shadow:4px 4px 0 var(--border-dark);border-color:var(--border-dark);}
        .topic-box-label{font-size:9px;letter-spacing:0.18em;text-transform:uppercase;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--border);font-weight:500;}
        .topic-items{list-style:none;display:flex;flex-direction:column;gap:5px;}
        .topic-items li{font-size:11px;color:var(--ink-mid);display:flex;gap:8px;line-height:1.5;}
        .topic-items li::before{content:'—';color:var(--ink-faint);flex-shrink:0;}
        .cert-row{display:flex;flex-wrap:wrap;gap:8px;}
        .cert{font-size:10px;padding:4px 12px;border:1px solid var(--border-dark);color:var(--ink-mid);transition:all 0.2s;cursor:default;}
        .cert.star{border-color:var(--gold);color:var(--gold);font-weight:500;}
        .cert.star::before{content:'★ ';}
        .cert:not(.star)::before{content:'◇ ';color:var(--ink-faint);}
        .cert:hover{background:var(--bg2);box-shadow:2px 2px 0 var(--border-dark);}
        .p1 .phase-marker,.p1 .phase-title{color:var(--blue);}.p1 .phase-desc{border-color:var(--blue);}.p1 .topic-box-label{color:var(--blue);}
        .p2 .phase-marker,.p2 .phase-title{color:var(--teal);}.p2 .phase-desc{border-color:var(--teal);}.p2 .topic-box-label{color:var(--teal);}
        .p3 .phase-marker,.p3 .phase-title{color:var(--red);}.p3 .phase-desc{border-color:var(--red);}.p3 .topic-box-label{color:var(--red);}
        .p4 .phase-marker,.p4 .phase-title{color:var(--purple);}.p4 .phase-desc{border-color:var(--purple);}.p4 .topic-box-label{color:var(--purple);}
        .p5 .phase-marker,.p5 .phase-title{color:var(--green);}.p5 .phase-desc{border-color:var(--green);}.p5 .topic-box-label{color:var(--green);}
        .frameworks-section{padding:56px 0;border-bottom:1px solid var(--border);}
        .fw-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1.5px solid var(--ink);margin-top:40px;}
        .fw-card{padding:28px;border-right:1px solid var(--border);position:relative;transition:background 0.2s;}
        .fw-card:hover{background:var(--bg2);}
        .fw-card:last-child{border-right:none;}
        .fw-card:nth-child(3n){border-right:none;}
        .fw-card:nth-child(n+4){border-top:1px solid var(--border);}
        .fw-name{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;margin-bottom:4px;}
        .fw-full{font-size:10px;color:var(--ink-dim);letter-spacing:0.05em;margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid var(--border);}
        .fw-desc{font-size:11px;color:var(--ink-mid);line-height:1.7;margin-bottom:14px;}
        .fw-when{font-size:10px;color:var(--ink-dim);border-top:1px solid var(--border);padding-top:12px;margin-top:12px;}
        .fw-when strong{color:var(--red);font-weight:500;}
        .fw-tag{position:absolute;top:16px;right:16px;font-size:9px;padding:2px 7px;letter-spacing:0.1em;text-transform:uppercase;}
        .fw-tag.mandatory{background:var(--red);color:#fff;}
        .fw-tag.common{background:var(--blue);color:#fff;}
        .fw-tag.sector{background:var(--gold);color:#fff;}
        .tools-section{padding:56px 0;border-bottom:1px solid var(--border);}
        .tools-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border:1.5px solid var(--ink);margin-top:40px;}
        .tool-col{border-right:1px solid var(--border);}
        .tool-col:last-child{border-right:none;}
        .tool-col-header{font-family:'Playfair Display',serif;font-size:15px;font-weight:700;padding:18px 20px;border-bottom:1px solid var(--border);background:var(--bg2);display:flex;align-items:center;gap:8px;}
        .tool-entry{padding:14px 20px;border-bottom:1px solid var(--border);font-size:11px;transition:background 0.15s;cursor:default;}
        .tool-entry:hover{background:var(--bg2);}
        .tool-entry:last-child{border-bottom:none;}
        .tool-name{color:var(--ink);font-weight:500;margin-bottom:3px;}
        .tool-desc{color:var(--ink-dim);font-size:10px;line-height:1.5;}
        .evidence-section{padding:56px 0;border-bottom:1px solid var(--border);}
        .evidence-table{width:100%;border-collapse:collapse;margin-top:40px;font-size:11px;}
        .evidence-table thead tr{background:var(--ink);color:var(--bg);}
        .evidence-table thead th{padding:12px 16px;text-align:left;font-family:'DM Mono',monospace;font-weight:400;letter-spacing:0.08em;font-size:10px;text-transform:uppercase;}
        .evidence-table tbody tr{border-bottom:1px solid var(--border);transition:background 0.15s;}
        .evidence-table tbody tr:hover{background:var(--bg2);}
        .evidence-table tbody td{padding:11px 16px;color:var(--ink-mid);vertical-align:top;line-height:1.5;}
        .evidence-table tbody td:first-child{color:var(--ink);font-weight:500;}
        .effort-badge{font-size:9px;padding:2px 7px;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;}
        .effort-high{background:var(--red);color:#fff;}
        .effort-med{background:var(--gold);color:#fff;}
        .effort-low{background:var(--green);color:#fff;}
        .career-section{padding:56px 0;border-bottom:1px solid var(--border);}
        .career-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px;}
        .career-card{background:var(--surface);border:1px solid var(--border);padding:28px;position:relative;overflow:hidden;transition:all 0.2s;}
        .career-card:hover{box-shadow:6px 6px 0 var(--border-dark);transform:translate(-2px,-2px);}
        .career-card::before{content:'';position:absolute;top:0;left:0;width:4px;bottom:0;}
        .cc-analyst::before{background:var(--blue);}
        .cc-manager::before{background:var(--red);}
        .cc-consultant::before{background:var(--gold);}
        .cc-auditor::before{background:var(--purple);}
        .cc-dpo::before{background:var(--teal);}
        .cc-architect::before{background:var(--green);}
        .career-icon{font-size:24px;margin-bottom:12px;}
        .career-title{font-family:'Playfair Display',serif;font-size:17px;font-weight:700;margin-bottom:6px;line-height:1.2;}
        .career-salary{font-size:11px;color:var(--green);font-weight:500;margin-bottom:14px;}
        .career-items{list-style:none;display:flex;flex-direction:column;gap:5px;}
        .career-items li{font-size:10px;color:var(--ink-dim);display:flex;gap:7px;line-height:1.4;}
        .career-items li::before{content:'→';color:var(--ink-faint);}
        .readiness-section{padding:56px 0;border-bottom:1px solid var(--border);}
        .readiness-cols{display:grid;grid-template-columns:repeat(2,1fr);gap:2px;margin-top:40px;}
        .rc{background:var(--surface);border:1px solid var(--border);padding:28px;}
        .rc-title{font-family:'Playfair Display',serif;font-size:16px;font-weight:700;margin-bottom:18px;padding-bottom:12px;border-bottom:1px solid var(--border);}
        .rc-list{list-style:none;display:flex;flex-direction:column;gap:8px;}
        .rc-list li{font-size:11px;color:var(--ink-mid);display:flex;gap:10px;line-height:1.5;align-items:flex-start;}
        .rc-check{font-size:11px;flex-shrink:0;margin-top:1px;}
        .check-yes{color:var(--green);}
        .check-pri{color:var(--red);}
        .resources-section{padding:56px 0;}
        .res-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:40px;}
        .res-card{border:1px solid var(--border);padding:18px;background:var(--surface);transition:all 0.2s;cursor:default;}
        .res-card:hover{border-color:var(--border-dark);box-shadow:3px 3px 0 var(--border);}
        .res-type{font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:var(--ink-faint);margin-bottom:8px;}
        .res-name{font-family:'Playfair Display',serif;font-size:14px;font-weight:700;margin-bottom:6px;line-height:1.3;}
        .res-desc{font-size:10px;color:var(--ink-dim);line-height:1.6;}
        footer{border-top:2px solid var(--ink);padding:28px 0;display:flex;justify-content:space-between;align-items:center;font-size:10px;color:var(--ink-dim);letter-spacing:0.06em;}
        footer strong{font-family:'Playfair Display',serif;color:var(--red);font-size:13px;}
        @media(max-width:768px){
          .phase{grid-template-columns:1fr;}
          .phase-left{border-right:none;border-bottom:1px solid var(--border);padding:0 0 20px;}
          .phase-right{padding:20px 0 0;}
          .fw-grid,.tools-grid,.career-grid{grid-template-columns:1fr;}
          .fw-card{border-right:none;border-bottom:1px solid var(--border);}
          .readiness-cols{grid-template-columns:1fr;}
          .res-grid{grid-template-columns:repeat(2,1fr);}
          .header-inner{grid-template-columns:1fr;}
          .evidence-table{font-size:10px;}
          .evidence-table thead th,.evidence-table tbody td{padding:8px;}
        }
      `}</style>

      <Link href="/" className="back-link">← Back to All Roadmaps</Link>

      <header>
        <div className="container">
          <div className="header-inner">
            <div>
              <div className="stamp">GRC Practitioner Roadmap · 2025 Edition</div>
              <h1>GOVERNANCE<br />RISK &amp;<br /><em>Compliance</em></h1>
              <p className="subtitle">A practitioner-built guide for transitioning into Cloud GRC roles — covering frameworks, tools, audit skills, and everything you need to compete for positions at consultancies, enterprises, and regulators.</p>
              <div className="meta-pills">
                <span className="pill">12–18 months to job-ready</span>
                <span className="pill">5 progressive phases</span>
                <span className="pill">AWS · Azure · GCP</span>
                <span className="pill">ISO 27001 · SOC 2 · NIST · PCI DSS · GDPR</span>
                <span className="pill">Multiple career paths</span>
              </div>
            </div>
            <div className="header-meta">
              <div className="big-stat">GRC</div>
              <div className="stat-label">Your entry point to<br />cloud security leadership</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">

        {/* PHASES */}
        <section className="phases-section">
          <div className="sec-header">
            <span className="sec-label">Learning Phases</span>
            <div className="sec-rule"></div>
            <span className="sec-num">01 / 06</span>
          </div>

          {/* Phase 1 */}
          <div className="phase p1">
            <div className="phase-left">
              <div className="phase-marker"></div>
              <span className="phase-num">Phase 01</span>
              <span className="phase-title">GRC &amp;<br />Security Foundations</span>
              <span className="phase-duration">0 – 2 Months</span>
            </div>
            <div className="phase-right">
              <p className="phase-desc">Before anything else, build your mental model of why GRC exists. Understand the language of risk and compliance — these are the words auditors, regulators, and boards speak. You don&apos;t need to be deeply technical yet, but you do need to understand how technology creates risk.</p>
              <div className="topic-cols">
                <div className="topic-box">
                  <div className="topic-box-label">Core GRC Concepts</div>
                  <ul className="topic-items">
                    <li>Governance: who owns decisions and accountability</li>
                    <li>Risk management: identify, assess, treat, monitor</li>
                    <li>Compliance: obligations, controls, evidence</li>
                    <li>The three lines of defence model</li>
                    <li>Control types: preventive, detective, corrective</li>
                    <li>Risk appetite vs risk tolerance</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Security Fundamentals</div>
                  <ul className="topic-items">
                    <li>CIA Triad — your anchor for everything</li>
                    <li>Threats vs vulnerabilities vs risks</li>
                    <li>Authentication, authorisation, identity basics</li>
                    <li>Encryption at rest and in transit (conceptual)</li>
                    <li>Patch management and vulnerability basics</li>
                    <li>Incident response lifecycle</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Business &amp; Legal Context</div>
                  <ul className="topic-items">
                    <li>How organisations structure IT and security teams</li>
                    <li>Board-level cyber reporting</li>
                    <li>Data protection law basics: GDPR overview</li>
                    <li>Contracts: DPAs, SLAs, MSAs — what they mean</li>
                    <li>Vendor risk management fundamentals</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Cloud Awareness</div>
                  <ul className="topic-items">
                    <li>What is cloud? IaaS vs PaaS vs SaaS</li>
                    <li>Shared responsibility model (memorise this)</li>
                    <li>Why cloud changes the compliance landscape</li>
                    <li>Data residency and sovereignty concepts</li>
                    <li>Multi-cloud vs hybrid environments</li>
                  </ul>
                </div>
              </div>
              <div className="cert-row">
                <span className="cert star">CompTIA Security+ (validates security fundamentals)</span>
                <span className="cert">Google Cybersecurity Certificate</span>
                <span className="cert">ISACA IT Fundamentals Certificate</span>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="phase p2">
            <div className="phase-left">
              <div className="phase-marker"></div>
              <span className="phase-num">Phase 02</span>
              <span className="phase-title">Frameworks &amp;<br />Standards Deep Dive</span>
              <span className="phase-duration">2 – 5 Months</span>
            </div>
            <div className="phase-right">
              <p className="phase-desc">Frameworks are your primary toolkit. You&apos;ll spend much of your GRC career living inside these documents. Don&apos;t just skim them — read the actual standards, understand the intent behind controls, and start mentally mapping them against real cloud environments. This is what separates a great GRC practitioner from a checkbox monkey.</p>
              <div className="topic-cols">
                <div className="topic-box">
                  <div className="topic-box-label">ISO 27001 / 27002</div>
                  <ul className="topic-items">
                    <li>ISMS scope, context, interested parties (Clause 4)</li>
                    <li>Leadership and risk treatment (Clauses 5–8)</li>
                    <li>Annex A controls — all 93, know the key ones cold</li>
                    <li>Statement of Applicability (SoA) writing</li>
                    <li>Certification audit process: Stage 1, Stage 2</li>
                    <li>Continual improvement (Clause 10) and NCRs</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">NIST CSF &amp; SP 800-53</div>
                  <ul className="topic-items">
                    <li>CSF 2.0: Govern, Identify, Protect, Detect, Respond, Recover</li>
                    <li>Current Profiles vs Target Profiles</li>
                    <li>SP 800-53 control families (AC, AU, CM, IA, SC, SI)</li>
                    <li>FedRAMP: US federal cloud compliance</li>
                    <li>NIST RMF: 7-step risk management framework</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">SOC 2 (Type I &amp; II)</div>
                  <ul className="topic-items">
                    <li>Trust Services Criteria (Security, Availability, Confidentiality, Privacy, PI)</li>
                    <li>Type I vs Type II — what organisations actually need</li>
                    <li>Common Criteria (CC) control mapping</li>
                    <li>Evidence collection and control testing</li>
                    <li>Vendor management from a SOC 2 perspective</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">PCI DSS v4.0</div>
                  <ul className="topic-items">
                    <li>Cardholder Data Environment (CDE) scoping</li>
                    <li>12 PCI requirements — know the structure</li>
                    <li>SAQs vs QSA engagements</li>
                    <li>Network segmentation to reduce scope</li>
                    <li>Cloud tokenisation and encryption strategies</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">GDPR &amp; Privacy</div>
                  <ul className="topic-items">
                    <li>6 lawful bases for processing personal data</li>
                    <li>Data subject rights (access, erasure, portability)</li>
                    <li>Data Protection Impact Assessments (DPIAs)</li>
                    <li>Records of Processing Activities (RoPA)</li>
                    <li>Cross-border transfer mechanisms (SCCs, BCRs)</li>
                    <li>Breach notification: 72-hour rule</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Sector-Specific Frameworks</div>
                  <ul className="topic-items">
                    <li>HIPAA (healthcare): PHI safeguards</li>
                    <li>Cyber Essentials / CE+ (UK government supply chain)</li>
                    <li>DORA (EU financial sector resilience)</li>
                    <li>NIS2 Directive (EU critical infrastructure)</li>
                    <li>CIS Controls v8 (practical hardening)</li>
                  </ul>
                </div>
              </div>
              <div className="cert-row">
                <span className="cert star">ISO 27001 Lead Implementer (PECB or BSI)</span>
                <span className="cert star">CISA — Certified Information Systems Auditor</span>
                <span className="cert">ISO 27001 Lead Auditor</span>
                <span className="cert">ISACA CRISC (Risk and Controls)</span>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="phase p3">
            <div className="phase-left">
              <div className="phase-marker"></div>
              <span className="phase-num">Phase 03</span>
              <span className="phase-title">Cloud GRC<br />in Practice</span>
              <span className="phase-duration">5 – 9 Months</span>
            </div>
            <div className="phase-right">
              <p className="phase-desc">Now bridge frameworks to cloud reality. Cloud environments challenge traditional compliance assumptions — controls that work on-premises need re-thinking when infrastructure is ephemeral, multi-tenant, and API-driven. This phase is where you become genuinely valuable.</p>
              <div className="topic-cols">
                <div className="topic-box">
                  <div className="topic-box-label">Cloud Risk Assessments</div>
                  <ul className="topic-items">
                    <li>Cloud-specific threat modelling (data exposure, IAM abuse, misconfiguration)</li>
                    <li>Inherent vs residual risk in cloud contexts</li>
                    <li>Third-party cloud risk: assess your SaaS vendors</li>
                    <li>TPRM (Third-Party Risk Management) workflows</li>
                    <li>Risk registers: format, ownership, review cadence</li>
                    <li>Cloud asset inventory and classification</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Cloud-Native Controls</div>
                  <ul className="topic-items">
                    <li>AWS: Config Rules, SCPs, CloudTrail, Security Hub</li>
                    <li>Azure: Policy, Blueprints, Defender for Cloud</li>
                    <li>GCP: Org Policy, Security Command Center</li>
                    <li>CSPM tools: Wiz, Prisma Cloud, Orca — learn one deeply</li>
                    <li>Mapping CSPM findings to framework controls</li>
                    <li>Evidence extraction from cloud-native tooling</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Audit &amp; Evidence Collection</div>
                  <ul className="topic-items">
                    <li>Control testing: design vs operating effectiveness</li>
                    <li>Evidence quality: what auditors actually want</li>
                    <li>Automated evidence collection (Drata, Vanta, Secureframe)</li>
                    <li>GRC platforms: ServiceNow GRC, RSA Archer, OneTrust</li>
                    <li>Walkthrough interviews: preparing technical teams</li>
                    <li>Audit trail: CloudTrail logs as audit evidence</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Policy &amp; Documentation</div>
                  <ul className="topic-items">
                    <li>Policy hierarchy: policies → standards → procedures → guidelines</li>
                    <li>Writing for different audiences: technical vs board</li>
                    <li>Cloud security policy templates (IS, access, encryption)</li>
                    <li>Acceptable use and data classification policies</li>
                    <li>Policy review cycles and version control</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Continuous Compliance</div>
                  <ul className="topic-items">
                    <li>Compliance-as-code: policy enforcement via IaC</li>
                    <li>Automated benchmark scanning: Prowler, ScoutSuite</li>
                    <li>Drift detection: when cloud config deviates from policy</li>
                    <li>Control monitoring dashboards and KRIs</li>
                    <li>Exceptions management process</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Data Governance in Cloud</div>
                  <ul className="topic-items">
                    <li>Data classification schemes (Public, Internal, Confidential, Secret)</li>
                    <li>Data lineage and flow mapping (DFDs)</li>
                    <li>DLP controls: AWS Macie, Azure Purview, Google DLP</li>
                    <li>Data retention and destruction policies</li>
                    <li>Cloud data sovereignty: where is data stored and processed</li>
                  </ul>
                </div>
              </div>
              <div className="cert-row">
                <span className="cert star">AWS Cloud Practitioner (cloud fluency baseline)</span>
                <span className="cert star">AZ-900 Azure Fundamentals</span>
                <span className="cert">CCSP — Certified Cloud Security Professional</span>
                <span className="cert">AWS Security Specialty (stretch goal)</span>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="phase p4">
            <div className="phase-left">
              <div className="phase-marker"></div>
              <span className="phase-num">Phase 04</span>
              <span className="phase-title">Advanced GRC<br />&amp; Specialisation</span>
              <span className="phase-duration">9 – 13 Months</span>
            </div>
            <div className="phase-right">
              <p className="phase-desc">This phase develops the higher-order GRC skills that take you from analyst to manager, consultant, or specialist. Pick 1–2 domains to go deep on. The ability to run a risk committee, present to a board, or lead a gap assessment will set you apart.</p>
              <div className="topic-cols">
                <div className="topic-box">
                  <div className="topic-box-label">Risk Quantification</div>
                  <ul className="topic-items">
                    <li>FAIR model: Factor Analysis of Information Risk</li>
                    <li>Qualitative vs quantitative risk scoring</li>
                    <li>Expected Loss (LEF × LM) calculations</li>
                    <li>Risk heat maps and registers at enterprise scale</li>
                    <li>Communicating risk in financial terms to leadership</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Vendor &amp; Supply Chain Risk</div>
                  <ul className="topic-items">
                    <li>Vendor tiering: critical, high, medium, low</li>
                    <li>Due diligence questionnaires (VSQs, SIG Lite, CAIQ)</li>
                    <li>Reviewing vendor SOC 2 reports: what to look for</li>
                    <li>Contractual security requirements and SLAs</li>
                    <li>Cloud provider contractual terms (AWS, Azure, Google BAAs)</li>
                    <li>Offboarding and data deletion assurance</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Business Continuity &amp; DR</div>
                  <ul className="topic-items">
                    <li>BIA (Business Impact Analysis) methodology</li>
                    <li>RTO and RPO: definitions and how to derive them</li>
                    <li>BCM lifecycle: ISO 22301 overview</li>
                    <li>Cloud DR strategies: backup, warm standby, multi-region</li>
                    <li>Tabletop exercises and DR test documentation</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">GRC Programme Management</div>
                  <ul className="topic-items">
                    <li>Building and running a GRC function from scratch</li>
                    <li>KPIs and KRIs for the security programme</li>
                    <li>Board reporting: the CISO dashboard</li>
                    <li>Stakeholder management and security culture</li>
                    <li>Budget justification for security investments</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Regulatory Intelligence</div>
                  <ul className="topic-items">
                    <li>Regulatory change management: monitoring new obligations</li>
                    <li>Multi-jurisdictional compliance mapping</li>
                    <li>Regulator engagement and examination readiness</li>
                    <li>Working with legal and DPO functions</li>
                    <li>GDPR supervisory authority liaison</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">GRC Tooling Mastery</div>
                  <ul className="topic-items">
                    <li>Drata / Vanta / Secureframe: automated compliance platforms</li>
                    <li>ServiceNow GRC (enterprise) — basic workflow understanding</li>
                    <li>OneTrust for privacy and third-party risk</li>
                    <li>Jira / Confluence for control tracking and documentation</li>
                    <li>Power BI / Tableau for risk reporting dashboards</li>
                  </ul>
                </div>
              </div>
              <div className="cert-row">
                <span className="cert star">CISM — Certified Information Security Manager</span>
                <span className="cert star">CCSP — Certified Cloud Security Professional</span>
                <span className="cert">CGEIT — Governance of Enterprise IT</span>
                <span className="cert">CRISC — Risk and Information Systems Control</span>
                <span className="cert">CDPSE — Data Privacy Solutions Engineer</span>
                <span className="cert">BCI Certificate in Business Continuity</span>
              </div>
            </div>
          </div>

          {/* Phase 5 */}
          <div className="phase p5">
            <div className="phase-left">
              <div className="phase-marker"></div>
              <span className="phase-num">Phase 05</span>
              <span className="phase-title">Job Ready &amp;<br />Portfolio Built</span>
              <span className="phase-duration">13 – 18 Months</span>
            </div>
            <div className="phase-right">
              <p className="phase-desc">GRC roles demand evidence of process thinking, not just theoretical knowledge. Build artefacts that demonstrate you can actually do the job. Your portfolio should show a gap assessment, a risk register, a policy document, and ideally a mock audit report. These become your interview talking points.</p>
              <div className="topic-cols">
                <div className="topic-box">
                  <div className="topic-box-label">Portfolio Artefacts to Build</div>
                  <ul className="topic-items">
                    <li>ISO 27001 gap assessment for a fictitious cloud SaaS company</li>
                    <li>SOC 2 readiness checklist with cloud control mappings</li>
                    <li>Risk register template with 10+ realistic cloud risks assessed</li>
                    <li>Cloud security policy pack (IS policy, access control, encryption)</li>
                    <li>DPIA template for a cloud-hosted HR system</li>
                    <li>Mock board-level risk report (1-pager format)</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Interview Preparation</div>
                  <ul className="topic-items">
                    <li>&quot;Walk me through an ISO 27001 implementation you&apos;d lead&quot;</li>
                    <li>&quot;How would you scope a SOC 2 for a cloud-native startup?&quot;</li>
                    <li>&quot;How do you explain a high risk to a board that wants to accept it?&quot;</li>
                    <li>&quot;What controls map to GDPR Article 32?&quot;</li>
                    <li>&quot;We have a new AWS account — what&apos;s your first 30 days?&quot;</li>
                    <li>Know your cert content cold — interviewers will probe</li>
                  </ul>
                </div>
                <div className="topic-box">
                  <div className="topic-box-label">Visibility &amp; Network</div>
                  <ul className="topic-items">
                    <li>LinkedIn: document your framework learning journey</li>
                    <li>Publish a &quot;GRC in AWS&quot; or &quot;ISO 27001 for startups&quot; blog post</li>
                    <li>Join ISACA, (ISC)², IAPP chapters in your region</li>
                    <li>Attend BSides, ISACA conferences, CSA events</li>
                    <li>Volunteer: help a small charity or NGO with their GRC basics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FRAMEWORKS */}
        <section className="frameworks-section">
          <div className="sec-header">
            <span className="sec-label">Key Compliance Frameworks</span>
            <div className="sec-rule"></div>
            <span className="sec-num">02 / 06</span>
          </div>
          <div className="fw-grid">
            {[
              {name:"ISO 27001",full:"International Standard for Information Security Management Systems",desc:"The global gold standard. Requires building a formal ISMS with documented risk treatment. Popular in UK, EU, and global enterprise supply chains. Certification requires a third-party audit by an accredited body.",when:"Any enterprise GRC role, consultancy, supply chain compliance, vendor assessments",tag:"mandatory"},
              {name:"SOC 2",full:"System and Organisation Controls — Trust Services Criteria",desc:"US-origin but globally adopted for SaaS and cloud providers. Customers demand SOC 2 Type II reports as proof of controls. Uses Trust Services Criteria: Security, Availability, Confidentiality, Privacy, Processing Integrity.",when:"Tech companies, SaaS startups, any org serving US enterprise customers",tag:"mandatory"},
              {name:"GDPR",full:"General Data Protection Regulation (EU/UK)",desc:"Non-negotiable for any org handling EU/UK personal data. Fines up to 4% global turnover. Requires lawful basis for processing, privacy by design, breach reporting within 72 hours, and DPIAs for high-risk processing.",when:"Every role in the UK and EU. Also matters for US orgs serving EU customers",tag:"mandatory"},
              {name:"NIST CSF",full:"NIST Cybersecurity Framework 2.0",desc:"US-originated but globally used as a maturity and gap assessment tool. The 6-function structure (Govern, Identify, Protect, Detect, Respond, Recover) maps well onto cloud environments and is board-friendly language.",when:"US companies, FedRAMP, maturity assessments, board reporting",tag:"common"},
              {name:"PCI DSS",full:"Payment Card Industry Data Security Standard v4.0",desc:"Mandatory for any org that stores, processes, or transmits cardholder data. 12 requirements covering network security, access control, monitoring, and testing. Cloud scope analysis (CDE) is complex and highly valued.",when:"E-commerce, fintech, retail, payment processors",tag:"common"},
              {name:"CIS Controls",full:"Center for Internet Security Controls v8",desc:"18 prioritised security controls with cloud-specific Implementation Groups. Practical, prescriptive, and widely used as a baseline hardening standard. Strong overlap with ISO 27001 Annex A and SOC 2 criteria.",when:"Hardening assessments, gap analysis baseline, cyber insurance requirements",tag:"common"},
              {name:"HIPAA",full:"Health Insurance Portability and Accountability Act (US)",desc:"US federal law governing Protected Health Information (PHI). Technical, administrative, and physical safeguards. Cloud providers must sign Business Associate Agreements (BAAs). AWS, Azure, GCP all offer HIPAA-eligible services.",when:"Healthcare, health-tech, clinical research, insurance",tag:"sector"},
              {name:"DORA",full:"Digital Operational Resilience Act (EU Financial Sector)",desc:"EU regulation effective Jan 2025 for financial entities and their ICT providers. Covers ICT risk management, incident reporting, resilience testing (TLPT), and third-party risk. Cloud providers to financial firms fall within scope.",when:"Banks, insurers, investment firms, fintech in EU/UK",tag:"sector"},
              {name:"NIS2",full:"Network and Information Systems Directive 2 (EU)",desc:"Expands NIS1 scope to more sectors and supply chains. Stricter incident reporting (24hr initial report), management accountability, and supply chain security requirements. Sectors: energy, transport, health, digital infrastructure.",when:"Critical infrastructure, MSPs, digital service providers in EU",tag:"sector"},
            ].map((fw) => (
              <div key={fw.name} className="fw-card">
                <span className={`fw-tag ${fw.tag}`}>{fw.tag === "mandatory" ? "Mandatory Know" : fw.tag === "common" ? "Very Common" : "Sector-Specific"}</span>
                <div className="fw-name">{fw.name}</div>
                <div className="fw-full">{fw.full}</div>
                <div className="fw-desc">{fw.desc}</div>
                <div className="fw-when"><strong>When you&apos;ll use it:</strong> {fw.when}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TOOLS */}
        <section className="tools-section">
          <div className="sec-header">
            <span className="sec-label">GRC Tools Ecosystem</span>
            <div className="sec-rule"></div>
            <span className="sec-num">03 / 06</span>
          </div>
          <div className="tools-grid">
            <div className="tool-col">
              <div className="tool-col-header">🤖 Automated Compliance</div>
              {[{name:"Drata",desc:"SOC 2, ISO 27001, HIPAA automation. Integrates with cloud APIs for evidence collection. Most popular startup choice."},{name:"Vanta",desc:"Similar to Drata. Strong for SOC 2 and ISO 27001. Good UX. Popular in UK/EU markets."},{name:"Secureframe",desc:"Multi-framework automation including HIPAA, PCI DSS. Strong vendor trust portal feature."},{name:"Sprinto",desc:"Growing platform, strong in ISO 27001 for SMEs and scaleups. Good value."}].map(t=>(
                <div key={t.name} className="tool-entry"><div className="tool-name">{t.name}</div><div className="tool-desc">{t.desc}</div></div>
              ))}
            </div>
            <div className="tool-col">
              <div className="tool-col-header">🏢 Enterprise GRC Platforms</div>
              {[{name:"ServiceNow GRC",desc:"Enterprise standard. Policy, risk, audit, vendor modules. Large orgs require it — learning it is highly marketable."},{name:"RSA Archer",desc:"Legacy enterprise GRC still common in large banks and regulated industries. Complex but widely deployed."},{name:"OneTrust",desc:"Privacy, third-party risk, and ESG. Industry leader for GDPR/CCPA compliance workflows and DPIA management."},{name:"LogicGate",desc:"Flexible workflow-based GRC platform. Common in US mid-market firms. Good for custom risk workflows."}].map(t=>(
                <div key={t.name} className="tool-entry"><div className="tool-name">{t.name}</div><div className="tool-desc">{t.desc}</div></div>
              ))}
            </div>
            <div className="tool-col">
              <div className="tool-col-header">☁️ Cloud-Native GRC Controls</div>
              {[{name:"AWS Security Hub",desc:"Aggregates findings, runs CIS benchmarks, maps to NIST and PCI controls. Essential for AWS evidence."},{name:"Azure Policy + Defender",desc:"Policy assignment, compliance reporting, and Defender for Cloud Secure Score for evidence generation."},{name:"Google Security Command Center",desc:"GCP's centralised security findings, compliance monitoring, and misconfiguration alerts."},{name:"Wiz / Prisma Cloud / Orca",desc:"CSPM tools that map cloud misconfigurations directly to framework controls. Learn at least one of these."}].map(t=>(
                <div key={t.name} className="tool-entry"><div className="tool-name">{t.name}</div><div className="tool-desc">{t.desc}</div></div>
              ))}
            </div>
            <div className="tool-col">
              <div className="tool-col-header">🛠 Practical &amp; Open Source</div>
              {[{name:"Prowler",desc:"Open source CSPM for AWS, Azure, GCP. Outputs CIS/NIST/SOC 2/GDPR findings. Run it against your lab accounts."},{name:"OpenCSPM",desc:"Open source cloud security posture management. Good for understanding how CSPM tools work internally."},{name:"GRC Spreadsheets",desc:"Don't underestimate Excel/Sheets. Risk registers, control trackers, and SoAs all live in spreadsheets in the real world."},{name:"Confluence + Jira",desc:"Policy documentation and control/finding tracking. Most organisations use Atlassian. Get comfortable with both."}].map(t=>(
                <div key={t.name} className="tool-entry"><div className="tool-name">{t.name}</div><div className="tool-desc">{t.desc}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* EVIDENCE TABLE */}
        <section className="evidence-section">
          <div className="sec-header">
            <span className="sec-label">Control Evidence Mapping</span>
            <div className="sec-rule"></div>
            <span className="sec-num">04 / 06</span>
          </div>
          <p style={{fontSize:"12px",color:"var(--ink-mid)",marginTop:"-16px",marginBottom:"8px"}}>What auditors ask for — and where to find it in cloud environments.</p>
          <table className="evidence-table">
            <thead>
              <tr>
                <th>Control Area</th>
                <th>ISO 27001 / SOC 2</th>
                <th>Evidence in AWS</th>
                <th>Evidence in Azure</th>
                <th>Evidence in GCP</th>
                <th>Effort</th>
              </tr>
            </thead>
            <tbody>
              {[
                {area:"Access Control",ref:"A.8.3 / CC6.1",aws:"IAM policies, Access Analyser, CloudTrail login events",azure:"Entra ID access reviews, PIM reports, sign-in logs",gcp:"IAM policy exports, Access Transparency logs",effort:"med"},
                {area:"MFA Enforcement",ref:"A.8.5 / CC6.1",aws:"IAM credential report, Config rule: mfa-enabled-for-iam-console-access",azure:"Conditional Access policy export, MFA registration report",gcp:"2-step verification enforcement policy export",effort:"low"},
                {area:"Encryption at Rest",ref:"A.8.24 / CC6.7",aws:"S3 default encryption, EBS volume encryption status, RDS config",azure:"Storage Account encryption settings, Azure Disk encryption reports",gcp:"GCS bucket encryption metadata, CMEK configs",effort:"low"},
                {area:"Audit Logging",ref:"A.8.15 / CC7.2",aws:"CloudTrail multi-region trail status, log file validation enabled",azure:"Diagnostic settings, Activity Log retention configuration",gcp:"Cloud Audit Logs configuration, retention settings",effort:"med"},
                {area:"Vulnerability Management",ref:"A.8.8 / CC7.1",aws:"Inspector v2 findings report, patch compliance dashboard",azure:"Defender for Cloud vulnerability findings, update compliance",gcp:"Security Command Center vulnerability findings",effort:"high"},
                {area:"Incident Management",ref:"A.5.24–26 / CC7.3",aws:"GuardDuty findings, incident tickets, IR runbook documentation",azure:"Sentinel incidents, Defender alert history, IR documentation",gcp:"SCC findings history, incident post-mortems",effort:"high"},
                {area:"Change Management",ref:"A.8.32 / CC8.1",aws:"CloudTrail API events, Config change history, IaC PR history",azure:"Activity Log change events, Azure DevOps PR records",gcp:"Audit Logs admin activity, Git history via Cloud Source Repos",effort:"med"},
                {area:"Data Classification",ref:"A.5.12–13 / C1.1",aws:"Macie S3 scan results, resource tagging reports",azure:"Purview data map, sensitivity label reports",gcp:"Cloud DLP inspection results, label taxonomy",effort:"high"},
                {area:"Backup & Recovery",ref:"A.8.13 / A1.2",aws:"AWS Backup job reports, RDS snapshot status, DR test records",azure:"Azure Backup reports, Site Recovery test failover records",gcp:"Cloud Backup reports, snapshot policies",effort:"med"},
                {area:"Supplier Security",ref:"A.5.19–23 / CC9.2",aws:"AWS Service Terms, BAA signing confirmation, vendor questionnaire records",azure:"Microsoft DPA / BAA confirmation, supplier questionnaire records",gcp:"Google Cloud DPA, CAIQ documentation",effort:"high"},
              ].map((row) => (
                <tr key={row.area}>
                  <td>{row.area}</td>
                  <td>{row.ref}</td>
                  <td>{row.aws}</td>
                  <td>{row.azure}</td>
                  <td>{row.gcp}</td>
                  <td><span className={`effort-badge effort-${row.effort}`}>{row.effort === "high" ? "High" : row.effort === "med" ? "Medium" : "Low"}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* CAREERS */}
        <section className="career-section">
          <div className="sec-header">
            <span className="sec-label">GRC Career Paths</span>
            <div className="sec-rule"></div>
            <span className="sec-num">05 / 06</span>
          </div>
          <div className="career-grid">
            {[
              {cls:"cc-analyst",icon:"🔎",title:"GRC Analyst",salary:"£35,000–£55,000 · Entry to Mid",items:["Control testing and evidence collection","Policy documentation and maintenance","Audit support and RFI responses","Risk register updates and tracking","Vendor questionnaire responses (SIG, CAIQ)"]},
              {cls:"cc-manager",icon:"📋",title:"GRC Manager / Lead",salary:"£60,000–£90,000 · Mid to Senior",items:["Own framework certifications end-to-end","Lead gap assessments and remediation","Present risk reports to leadership","Manage GRC platform and tooling","Oversee team of analysts"]},
              {cls:"cc-consultant",icon:"💼",title:"GRC Consultant",salary:"£50,000–£90,000 · Day rate £400–700",items:["ISO 27001 / SOC 2 implementation projects","Gap assessments across multiple clients","Breadth of industry exposure quickly","Often through a Big 4 or boutique firm","Strong career accelerator path"]},
              {cls:"cc-auditor",icon:"🧾",title:"IT / Cloud Auditor",salary:"£45,000–£75,000 · Internal or External",items:["Independent assessment of controls","Internal audit function or external firm","CISA certification highly valued","Regulated industries: banking, insurance","Often pathway into senior GRC or CISO roles"]},
              {cls:"cc-dpo",icon:"🔏",title:"Data Protection Officer",salary:"£55,000–£95,000 · Specialist Track",items:["GDPR accountability and advisory role","DPIAs, RoPA management, DSARs","Regulator engagement (ICO, CNIL)","IAPP CIPP/E certification essential","Cloud data governance expertise premium"]},
              {cls:"cc-architect",icon:"🏗",title:"Security Architect (GRC Focus)",salary:"£85,000–£130,000 · Senior Track",items:["Design controls into architecture from day one","Compliance by design — not bolt-on","Works across GRC and engineering teams","Needs both technical and framework depth","Often the intersection of GRC and cloud security"]},
            ].map((c) => (
              <div key={c.title} className={`career-card ${c.cls}`}>
                <div className="career-icon">{c.icon}</div>
                <div className="career-title">{c.title}</div>
                <div className="career-salary">{c.salary}</div>
                <ul className="career-items">
                  {c.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* READINESS */}
        <section className="readiness-section">
          <div className="sec-header">
            <span className="sec-label">Job Readiness Checklist</span>
            <div className="sec-rule"></div>
            <span className="sec-num">06a / 06</span>
          </div>
          <div className="readiness-cols">
            {[
              {title:"🎓 Certifications & Education",items:[
                {pri:true,text:"CompTIA Security+ achieved"},
                {pri:true,text:"At least one framework cert: ISO 27001 Lead Implementer or CISA"},
                {pri:false,text:"AWS Cloud Practitioner or AZ-900 achieved (cloud fluency)"},
                {pri:false,text:"CCSP in progress or planned (validates cloud + security depth)"},
                {pri:false,text:"IAPP CIPP/E if targeting privacy/DPO track"},
              ]},
              {title:"📁 Portfolio Evidence",items:[
                {pri:true,text:"Written ISO 27001 gap assessment for a fictitious cloud org"},
                {pri:true,text:"Sample risk register with 10+ risks assessed and treated"},
                {pri:false,text:"Cloud security policy (Information Security + Access Control)"},
                {pri:false,text:"Sample DPIA completed for a cloud data processing scenario"},
                {pri:false,text:"Run Prowler against a personal AWS/Azure account; mapped findings to CIS"},
                {pri:false,text:"Signed up for a free tier on Drata or Vanta to understand the UI"},
              ]},
              {title:"🧠 Knowledge Depth",items:[
                {pri:true,text:"Can explain shared responsibility model for all three clouds"},
                {pri:true,text:"Can describe ISO 27001 certification journey end to end"},
                {pri:false,text:"Can map a control to ISO 27001, SOC 2, and NIST simultaneously"},
                {pri:false,text:"Knows GDPR breach notification process cold (72 hours)"},
                {pri:false,text:"Understands control design vs operating effectiveness testing"},
                {pri:false,text:"Can name three cloud-native evidence sources per control area"},
              ]},
              {title:"🎤 Interview Readiness",items:[
                {pri:true,text:"8 STAR-format stories prepared for behavioural questions"},
                {pri:true,text:"Can walk through an ISO 27001 implementation plan in 5 minutes"},
                {pri:false,text:"Researched target company's compliance posture (public trust page)"},
                {pri:false,text:"Can explain risk to a non-technical stakeholder clearly"},
                {pri:false,text:"LinkedIn profile lists frameworks, tools, and certs prominently"},
                {pri:false,text:"Salary benchmarks researched: Glassdoor, LinkedIn, ISACA survey"},
              ]},
            ].map((rc) => (
              <div key={rc.title} className="rc">
                <div className="rc-title">{rc.title}</div>
                <ul className="rc-list">
                  {rc.items.map((item) => (
                    <li key={item.text}>
                      <span className={`rc-check ${item.pri ? "check-pri" : "check-yes"}`}>{item.pri ? "★" : "✓"}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* RESOURCES */}
        <section className="resources-section">
          <div className="sec-header">
            <span className="sec-label">Key Resources</span>
            <div className="sec-rule"></div>
            <span className="sec-num">06b / 06</span>
          </div>
          <div className="res-grid">
            {[
              {type:"📄 Primary Source",name:"ISO 27001:2022 Standard",desc:"Read the actual standard, not just summaries. BSI offers access. Non-negotiable for ISO roles."},
              {type:"📄 Primary Source",name:"NIST CSF 2.0 (free)",desc:"Download from NIST directly at csrc.nist.gov. Free, authoritative, and referenced in almost every US-adjacent role."},
              {type:"🌐 Website",name:"CSA Cloud Controls Matrix",desc:"Free CCM and CAIQ from cloudsecurityalliance.org — the definitive cloud-specific control framework. Cross-maps to ISO and SOC 2."},
              {type:"🌐 Website",name:"ICO Guidance (GDPR)",desc:"ico.org.uk publishes plain-English GDPR guidance. Better than most paid training for understanding practical application."},
              {type:"📚 Course Platform",name:"ISACA Learning",desc:"Official CISA, CISM, CRISC, CGEIT prep. Expensive but the best structured prep for ISACA certifications."},
              {type:"📚 Course Platform",name:"IAPP Training",desc:"Essential for CIPP/E (EU privacy) and CIPM. iapp.org — join as a member for access to research and model clauses."},
              {type:"📚 Course Platform",name:"A Cloud Guru / Pluralsight",desc:"Best for cloud fundamentals (AWS, Azure, GCP) with hands-on sandboxes. Bridges the GRC-to-cloud knowledge gap quickly."},
              {type:"📖 Book",name:"The Privacy Engineer's Manifesto",desc:"Best practical book on operationalising privacy by design in technology systems. Pairs perfectly with GDPR work."},
              {type:"🎧 Podcast",name:"Risky Business",desc:"Weekly security news and interviews. Keeps you current on breaches, regulations, and industry thinking."},
              {type:"🎧 Podcast",name:"IAPP Privacy Advisor Podcast",desc:"Regulatory updates, DPA decisions, enforcement trends. Essential listening for any privacy or GRC professional."},
              {type:"🌐 Community",name:"ISACA & (ISC)² Chapters",desc:"Free events, mentoring, and networking. Dundee/Edinburgh chapters in Scotland — attend even as a student member."},
              {type:"🛠 Free Tool",name:"Prowler (Open Source)",desc:"Run against your AWS free tier. Outputs CIS, GDPR, SOC 2, ISO 27001 findings. Best free tool to bridge cloud and compliance."},
            ].map((r) => (
              <div key={r.name} className="res-card">
                <div className="res-type">{r.type}</div>
                <div className="res-name">{r.name}</div>
                <div className="res-desc">{r.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <span>Cloud GRC Roadmap · 2025 Edition</span>
          <strong>Govern → Assess → Evidence → Certify → Apply</strong>
          <span>12–18 months · All frameworks · All clouds</span>
        </footer>
      </div>
    </>
  );
}
