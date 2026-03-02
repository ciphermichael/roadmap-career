import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Security Engineer Roadmap",
  description: "A practitioner-built roadmap from zero to job-ready covering AWS, Azure and GCP security. 5 progressive phases, 12–18 months.",
};

export default function CloudSecurityPage() {
  return (
    <>
      <style>{`
        :root {
          --bg: #060a10;
          --surface: #0d1520;
          --surface2: #111c2d;
          --border: #1a2d45;
          --accent-cyan: #00d4ff;
          --accent-green: #00ff9d;
          --accent-amber: #ffb800;
          --accent-red: #ff4d6d;
          --accent-purple: #9d6eff;
          --text: #e2eaf5;
          --text-dim: #6b8aaa;
          --text-dimmer: #3a5068;
        }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--bg);color:var(--text);font-family:'JetBrains Mono',monospace;min-height:100vh;overflow-x:hidden;}
        body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;z-index:1000;opacity:0.4;}
        body::after{content:'';position:fixed;inset:0;background-image:linear-gradient(rgba(0,212,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.03) 1px,transparent 1px);background-size:40px 40px;pointer-events:none;z-index:0;}
        .container{max-width:1200px;margin:0 auto;padding:0 24px;position:relative;z-index:1;}
        .back-link{display:inline-flex;align-items:center;gap:8px;font-size:11px;color:var(--text-dim);text-decoration:none;letter-spacing:0.05em;padding:16px 24px;border-bottom:1px solid var(--border);width:100%;transition:color 0.2s;}
        .back-link:hover{color:var(--accent-cyan);}
        header{padding:60px 0 40px;border-bottom:1px solid var(--border);position:relative;overflow:hidden;}
        .header-glow{position:absolute;top:-100px;left:50%;transform:translateX(-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(0,212,255,0.12) 0%,transparent 70%);pointer-events:none;}
        .badge{display:inline-flex;align-items:center;gap:8px;padding:4px 12px;border:1px solid var(--accent-cyan);color:var(--accent-cyan);font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:20px;animation:fadeInDown 0.6s ease;}
        .badge::before{content:'';width:6px;height:6px;background:var(--accent-cyan);border-radius:50%;animation:pulse 2s infinite;}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.4;transform:scale(0.7);}}
        h1{font-family:'Syne',sans-serif;font-size:clamp(36px,6vw,72px);font-weight:800;line-height:1.0;letter-spacing:-0.02em;animation:fadeInDown 0.7s ease 0.1s both;}
        h1 .highlight{color:var(--accent-cyan);}
        .subtitle{margin-top:16px;color:var(--text-dim);font-size:13px;line-height:1.7;max-width:600px;animation:fadeInDown 0.7s ease 0.2s both;}
        .meta-row{display:flex;gap:24px;margin-top:28px;flex-wrap:wrap;animation:fadeInDown 0.7s ease 0.3s both;}
        .meta-item{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--text-dim);letter-spacing:0.05em;}
        .meta-dot{width:8px;height:8px;border-radius:50%;}
        .timeline{padding:60px 0;}
        .timeline-header{display:flex;align-items:center;gap:16px;margin-bottom:48px;}
        .section-label{font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--text-dimmer);}
        .section-line{flex:1;height:1px;background:var(--border);}
        .phase{display:grid;grid-template-columns:200px 1fr;gap:0;margin-bottom:2px;animation:fadeIn 0.5s ease both;}
        @keyframes fadeIn{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
        .phase:nth-child(1){animation-delay:0.1s;}.phase:nth-child(2){animation-delay:0.2s;}.phase:nth-child(3){animation-delay:0.3s;}.phase:nth-child(4){animation-delay:0.4s;}.phase:nth-child(5){animation-delay:0.5s;}
        .phase-sidebar{padding:32px 24px 32px 0;border-right:1px solid var(--border);position:relative;display:flex;flex-direction:column;gap:8px;}
        .phase-sidebar::after{content:'';position:absolute;right:-5px;top:36px;width:9px;height:9px;background:var(--bg);border:1px solid;border-radius:50%;transform:translateX(50%);}
        .phase-number{font-size:10px;letter-spacing:0.15em;color:var(--text-dimmer);}
        .phase-title{font-family:'Syne',sans-serif;font-size:18px;font-weight:700;line-height:1.2;}
        .phase-duration{font-size:11px;padding:3px 8px;display:inline-block;margin-top:4px;border:1px solid;width:fit-content;}
        .phase-body{padding:32px 0 32px 40px;}
        .phase-desc{font-size:12px;color:var(--text-dim);line-height:1.7;margin-bottom:24px;max-width:700px;}
        .topic-groups{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-bottom:24px;}
        .topic-group{background:var(--surface);border:1px solid var(--border);padding:20px;position:relative;transition:border-color 0.2s,transform 0.2s;}
        .topic-group:hover{transform:translateY(-2px);border-color:var(--accent-cyan);}
        .topic-group-label{font-size:10px;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--border);}
        .topic-list{list-style:none;display:flex;flex-direction:column;gap:6px;}
        .topic-list li{font-size:11px;color:var(--text-dim);display:flex;align-items:flex-start;gap:8px;line-height:1.5;}
        .topic-list li::before{content:'→';color:var(--accent-cyan);opacity:0.5;flex-shrink:0;margin-top:1px;}
        .certs{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;}
        .cert-chip{font-size:10px;padding:4px 10px;border:1px solid var(--border);color:var(--text-dim);letter-spacing:0.05em;transition:all 0.2s;cursor:default;}
        .cert-chip::before{content:'🏆 ';}
        .cert-chip.priority{border-color:var(--accent-amber);color:var(--accent-amber);}
        .cert-chip.priority::before{content:'⭐ ';}
        .cert-chip:hover{background:rgba(0,212,255,0.05);border-color:var(--accent-cyan);color:var(--accent-cyan);}
        .clouds-section{padding:60px 0;border-top:1px solid var(--border);}
        .clouds-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;margin-top:40px;}
        .cloud-card{background:var(--surface);border:1px solid var(--border);padding:28px;position:relative;overflow:hidden;transition:all 0.3s;}
        .cloud-card:hover{border-color:currentColor;z-index:2;}
        .cloud-card.aws{--cloud-color:#ff9900;}
        .cloud-card.azure{--cloud-color:#0078d4;}
        .cloud-card.gcp{--cloud-color:#4285f4;}
        .cloud-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--cloud-color);transform:scaleX(0);transform-origin:left;transition:transform 0.3s;}
        .cloud-card:hover::before{transform:scaleX(1);}
        .cloud-header{display:flex;align-items:center;gap:12px;margin-bottom:20px;}
        .cloud-icon{width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;border:1px solid var(--border);}
        .cloud-name{font-family:'Syne',sans-serif;font-size:20px;font-weight:700;color:var(--cloud-color);}
        .cloud-subtitle{font-size:10px;color:var(--text-dimmer);margin-top:2px;letter-spacing:0.05em;}
        .service-list{display:flex;flex-direction:column;gap:4px;}
        .service-item{display:flex;justify-content:space-between;align-items:baseline;padding:6px 0;border-bottom:1px solid var(--border);font-size:11px;}
        .service-item:last-child{border-bottom:none;}
        .service-name{color:var(--text-dim);font-family:'JetBrains Mono',monospace;}
        .service-tag{font-size:9px;padding:2px 6px;border:1px solid;letter-spacing:0.1em;}
        .tag-core{border-color:var(--accent-green);color:var(--accent-green);}
        .tag-iam{border-color:var(--accent-cyan);color:var(--accent-cyan);}
        .tag-monitor{border-color:var(--accent-purple);color:var(--accent-purple);}
        .tag-network{border-color:var(--accent-amber);color:var(--accent-amber);}
        .skills-section{padding:60px 0;border-top:1px solid var(--border);}
        .skills-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2px;margin-top:40px;}
        .skill-cat{background:var(--surface);border:1px solid var(--border);padding:24px;}
        .skill-cat-title{font-family:'Syne',sans-serif;font-size:14px;font-weight:600;margin-bottom:16px;display:flex;align-items:center;gap:10px;}
        .skill-bars{display:flex;flex-direction:column;gap:10px;}
        .skill-bar-item{display:flex;flex-direction:column;gap:4px;}
        .skill-bar-header{display:flex;justify-content:space-between;font-size:10px;color:var(--text-dim);}
        .skill-bar-track{height:3px;background:var(--border);position:relative;overflow:hidden;}
        .skill-bar-fill{position:absolute;inset-y:0;left:0;background:var(--accent-cyan);animation:fillBar 1.2s ease both;}
        @keyframes fillBar{from{width:0;}}
        .readiness-section{padding:60px 0;border-top:1px solid var(--border);}
        .readiness-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;margin-top:40px;}
        .readiness-card{background:var(--surface);border:1px solid var(--border);padding:28px;}
        .readiness-number{font-family:'Syne',sans-serif;font-size:48px;font-weight:800;line-height:1;margin-bottom:8px;opacity:0.15;}
        .readiness-title{font-family:'Syne',sans-serif;font-size:16px;font-weight:600;margin-bottom:12px;}
        .readiness-items{list-style:none;display:flex;flex-direction:column;gap:6px;}
        .readiness-items li{font-size:11px;color:var(--text-dim);display:flex;gap:8px;line-height:1.5;}
        .readiness-items li::before{content:'✓';color:var(--accent-green);flex-shrink:0;}
        .resources-section{padding:60px 0;border-top:1px solid var(--border);}
        .resources-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin-top:40px;}
        .resource-card{background:var(--surface);border:1px solid var(--border);padding:20px;transition:all 0.2s;}
        .resource-card:hover{border-color:var(--accent-cyan);background:var(--surface2);}
        .resource-type{font-size:9px;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-dimmer);margin-bottom:8px;}
        .resource-name{font-family:'Syne',sans-serif;font-size:13px;font-weight:600;margin-bottom:6px;line-height:1.3;}
        .resource-desc{font-size:10px;color:var(--text-dim);line-height:1.6;}
        footer{border-top:1px solid var(--border);padding:32px 0;display:flex;justify-content:space-between;align-items:center;font-size:10px;color:var(--text-dimmer);letter-spacing:0.05em;}
        .phase-1 .phase-sidebar::after,.phase-1 .phase-sidebar{border-color:var(--accent-cyan);}
        .phase-1 .phase-title{color:var(--accent-cyan);}
        .phase-1 .phase-duration{border-color:var(--accent-cyan);color:var(--accent-cyan);}
        .phase-2 .phase-sidebar::after,.phase-2 .phase-sidebar{border-color:var(--accent-green);}
        .phase-2 .phase-title{color:var(--accent-green);}
        .phase-2 .phase-duration{border-color:var(--accent-green);color:var(--accent-green);}
        .phase-3 .phase-sidebar::after,.phase-3 .phase-sidebar{border-color:var(--accent-amber);}
        .phase-3 .phase-title{color:var(--accent-amber);}
        .phase-3 .phase-duration{border-color:var(--accent-amber);color:var(--accent-amber);}
        .phase-4 .phase-sidebar::after,.phase-4 .phase-sidebar{border-color:var(--accent-purple);}
        .phase-4 .phase-title{color:var(--accent-purple);}
        .phase-4 .phase-duration{border-color:var(--accent-purple);color:var(--accent-purple);}
        .phase-5 .phase-sidebar::after,.phase-5 .phase-sidebar{border-color:var(--accent-red);}
        .phase-5 .phase-title{color:var(--accent-red);}
        .phase-5 .phase-duration{border-color:var(--accent-red);color:var(--accent-red);}
        @keyframes fadeInDown{from{opacity:0;transform:translateY(-12px);}to{opacity:1;transform:translateY(0);}}
        @media(max-width:768px){
          .phase{grid-template-columns:1fr;}
          .phase-sidebar{border-right:none;border-bottom:1px solid var(--border);padding:20px 0;}
          .phase-body{padding:20px 0;}
          .clouds-grid,.skills-grid,.readiness-grid,.resources-grid{grid-template-columns:1fr;}
          .phase-sidebar::after{display:none;}
        }
      `}</style>

      <Link href="/" className="back-link">← Back to All Roadmaps</Link>

      <header>
        <div className="header-glow" />
        <div className="container">
          <div className="badge">Cloud Security Engineer Roadmap v2025</div>
          <h1>CLOUD<br /><span className="highlight">SECURITY</span><br />ENGINEER</h1>
          <p className="subtitle">A battle-tested roadmap from zero to job-ready — covering AWS, Azure &amp; GCP security. Built by a practitioner, for practitioners. No fluff, no filler.</p>
          <div className="meta-row">
            <div className="meta-item"><div className="meta-dot" style={{background:"var(--accent-cyan)"}}></div> 12–18 months to job-ready</div>
            <div className="meta-item"><div className="meta-dot" style={{background:"var(--accent-green)"}}></div> 5 progressive phases</div>
            <div className="meta-item"><div className="meta-dot" style={{background:"var(--accent-amber)"}}></div> All 3 major clouds</div>
            <div className="meta-item"><div className="meta-dot" style={{background:"var(--accent-purple)"}}></div> Certs + hands-on labs</div>
          </div>
        </div>
      </header>

      <div className="container">
        <section className="timeline">
          <div className="timeline-header">
            <span className="section-label">Learning Phases</span>
            <div className="section-line"></div>
          </div>

          {/* Phase 1 */}
          <div className="phase phase-1">
            <div className="phase-sidebar">
              <span className="phase-number">PHASE 01</span>
              <span className="phase-title">FOUNDATIONS</span>
              <span className="phase-duration">0 – 3 Months</span>
            </div>
            <div className="phase-body">
              <p className="phase-desc">Before touching cloud, you need a solid grounding in networking, OS fundamentals, and basic security concepts. This isn&apos;t glamorous — but skipping it will haunt you forever. Think of this as installing the firmware for everything that follows.</p>
              <div className="topic-groups">
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-cyan)"}}>Networking Essentials</div>
                  <ul className="topic-list">
                    <li>TCP/IP, OSI model — deeply, not surface level</li>
                    <li>DNS, DHCP, HTTP/S, TLS/SSL handshake</li>
                    <li>Subnetting, CIDR, routing &amp; switching basics</li>
                    <li>Firewalls, NAT, VPNs, proxies</li>
                    <li>Packet capture with Wireshark</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-cyan)"}}>Operating Systems</div>
                  <ul className="topic-list">
                    <li>Linux command line (bash scripting, file perms, processes)</li>
                    <li>Windows Server basics, AD fundamentals</li>
                    <li>Users, groups, sudo, SSH keys</li>
                    <li>Logs, cron jobs, systemd services</li>
                    <li>Package management (apt, yum, brew)</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-cyan)"}}>Security Basics</div>
                  <ul className="topic-list">
                    <li>CIA Triad: Confidentiality, Integrity, Availability</li>
                    <li>Authentication vs Authorisation</li>
                    <li>Encryption fundamentals (symmetric, asymmetric, hashing)</li>
                    <li>PKI, certificates, CAs</li>
                    <li>OWASP Top 10 awareness</li>
                    <li>Vulnerability vs threat vs risk</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-cyan)"}}>Programming &amp; Scripting</div>
                  <ul className="topic-list">
                    <li>Python — loops, functions, APIs, file I/O</li>
                    <li>Bash scripting for automation</li>
                    <li>JSON &amp; YAML fluency</li>
                    <li>Git basics (clone, commit, push, branches)</li>
                    <li>REST APIs — how to call them, read responses</li>
                  </ul>
                </div>
              </div>
              <div className="certs">
                <span className="cert-chip priority">CompTIA Security+</span>
                <span className="cert-chip priority">CompTIA Network+</span>
                <span className="cert-chip">Google IT Support Certificate</span>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="phase phase-2">
            <div className="phase-sidebar">
              <span className="phase-number">PHASE 02</span>
              <span className="phase-title">CLOUD CORE</span>
              <span className="phase-duration">3 – 6 Months</span>
            </div>
            <div className="phase-body">
              <p className="phase-desc">Get your hands dirty with cloud infrastructure. Start with ONE cloud (AWS recommended — largest market share), get comfortable, then cross-train. Learn how cloud is architected: compute, storage, identity, networking. You need to understand what you&apos;re eventually going to secure.</p>
              <div className="topic-groups">
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-green)"}}>Cloud Architecture Concepts</div>
                  <ul className="topic-list">
                    <li>Shared responsibility model (critical — learn this cold)</li>
                    <li>Regions, Availability Zones, Edge Locations</li>
                    <li>Compute: VMs, containers, serverless functions</li>
                    <li>Storage: object, block, file storage differences</li>
                    <li>Databases: managed SQL vs NoSQL</li>
                    <li>Load balancers, auto-scaling, CDNs</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-green)"}}>Identity &amp; Access Fundamentals</div>
                  <ul className="topic-list">
                    <li>IAM: users, roles, groups, policies</li>
                    <li>Principle of Least Privilege (your religion now)</li>
                    <li>Service accounts vs human accounts</li>
                    <li>MFA everywhere — why and how</li>
                    <li>Federated identity, SSO, SAML, OIDC</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-green)"}}>Networking in Cloud</div>
                  <ul className="topic-list">
                    <li>VPC / VNet / VPC concepts per cloud</li>
                    <li>Subnets: public vs private</li>
                    <li>Security Groups vs NACLs vs NSGs</li>
                    <li>VPN Gateway, ExpressRoute, Direct Connect</li>
                    <li>VPC peering, Transit Gateway, service endpoints</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-green)"}}>Infrastructure as Code</div>
                  <ul className="topic-list">
                    <li>Terraform — write, plan, apply, destroy</li>
                    <li>CloudFormation (AWS) / ARM Templates (Azure)</li>
                    <li>Ansible basics for configuration</li>
                    <li>Version-controlled infra — why it matters for security</li>
                    <li>Secret management: never hardcode credentials</li>
                  </ul>
                </div>
              </div>
              <div className="certs">
                <span className="cert-chip priority">AWS Cloud Practitioner</span>
                <span className="cert-chip priority">AWS Solutions Architect Associate</span>
                <span className="cert-chip">AZ-900 Azure Fundamentals</span>
                <span className="cert-chip">GCP Associate Cloud Engineer</span>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="phase phase-3">
            <div className="phase-sidebar">
              <span className="phase-number">PHASE 03</span>
              <span className="phase-title">CLOUD SECURITY CORE</span>
              <span className="phase-duration">6 – 10 Months</span>
            </div>
            <div className="phase-body">
              <p className="phase-desc">This is where you shift from cloud user to cloud security practitioner. You&apos;ll learn how attackers target cloud environments, how defenders detect and respond, and how to build security controls into cloud-native architectures. This phase is dense — take your time.</p>
              <div className="topic-groups">
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-amber)"}}>IAM Security Deep Dive</div>
                  <ul className="topic-list">
                    <li>IAM policy analysis: condition keys, wildcards, SCPs</li>
                    <li>Privilege escalation paths in IAM</li>
                    <li>Cross-account roles and trust policies</li>
                    <li>AWS Organizations / Azure Management Groups</li>
                    <li>Permission boundaries and guardrails</li>
                    <li>Service control policies (SCPs)</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-amber)"}}>Threat Detection &amp; Monitoring</div>
                  <ul className="topic-list">
                    <li>CloudTrail / Activity Log / Cloud Audit Logs</li>
                    <li>GuardDuty / Microsoft Defender / Security Command Center</li>
                    <li>SIEM integration: Splunk, Sentinel, Chronicle</li>
                    <li>Cloud-native SIEM: AWS Security Lake</li>
                    <li>Alert triage: true vs false positives</li>
                    <li>IOCs and threat intelligence feeds</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-amber)"}}>Data Security</div>
                  <ul className="topic-list">
                    <li>Encryption at rest: KMS / Key Vault / Cloud KMS</li>
                    <li>Encryption in transit: TLS enforcement</li>
                    <li>S3 / Blob / GCS bucket security</li>
                    <li>Data classification and tagging</li>
                    <li>DLP tools and policies</li>
                    <li>Database security: RDS, Aurora, Cosmos, BigQuery</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-amber)"}}>Vulnerability &amp; Posture Management</div>
                  <ul className="topic-list">
                    <li>CSPM tools: Prisma Cloud, Wiz, Orca, Lacework</li>
                    <li>Security Hub / Azure Security Centre / SCC</li>
                    <li>Benchmark frameworks: CIS, NIST, ISO 27001</li>
                    <li>Misconfig detection and remediation</li>
                    <li>Inspector / Defender for Cloud vulnerability scanning</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-amber)"}}>Container &amp; Serverless Security</div>
                  <ul className="topic-list">
                    <li>Docker security: image scanning, non-root users</li>
                    <li>Kubernetes: RBAC, network policies, Pod Security Standards</li>
                    <li>EKS / AKS / GKE hardening</li>
                    <li>Container image registries: ECR, ACR, Artifact Registry</li>
                    <li>Lambda / Functions / Cloud Functions security</li>
                    <li>Runtime security: Falco, Aqua, Sysdig</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-amber)"}}>Network Security</div>
                  <ul className="topic-list">
                    <li>WAF: AWS WAF, Azure Front Door WAF, Cloud Armor</li>
                    <li>DDoS protection: Shield Advanced, Azure DDoS</li>
                    <li>Network segmentation and micro-segmentation</li>
                    <li>Zero Trust Network Access (ZTNA) principles</li>
                    <li>PrivateLink / Private Endpoints</li>
                    <li>DNS security: Route 53 Resolver, Private DNS</li>
                  </ul>
                </div>
              </div>
              <div className="certs">
                <span className="cert-chip priority">AWS Security Specialty (SCS-C02)</span>
                <span className="cert-chip priority">AZ-500 Azure Security Engineer</span>
                <span className="cert-chip priority">GCP Professional Cloud Security Engineer</span>
                <span className="cert-chip">CompTIA Cloud+</span>
                <span className="cert-chip">CCSP (longer-term goal)</span>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="phase phase-4">
            <div className="phase-sidebar">
              <span className="phase-number">PHASE 04</span>
              <span className="phase-title">ADVANCED &amp; SPECIALISE</span>
              <span className="phase-duration">10 – 14 Months</span>
            </div>
            <div className="phase-body">
              <p className="phase-desc">Now you go deeper into the areas that differentiate a good candidate from a great one. Pick 1–2 specialisms to dive deep. Employers want T-shaped engineers: broad enough to operate across the stack, deep enough in something to be invaluable.</p>
              <div className="topic-groups">
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-purple)"}}>DevSecOps &amp; CI/CD Security</div>
                  <ul className="topic-list">
                    <li>Shift-left security: SAST, DAST, SCA in pipelines</li>
                    <li>GitHub Actions / GitLab CI security patterns</li>
                    <li>Secrets scanning: GitGuardian, truffleHog, git-secrets</li>
                    <li>SBOM generation and software supply chain</li>
                    <li>IaC security scanning: Checkov, tfsec, Semgrep</li>
                    <li>Secure container pipelines: Snyk, Trivy, Grype</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-purple)"}}>Cloud Threat Modelling</div>
                  <ul className="topic-list">
                    <li>STRIDE methodology applied to cloud architectures</li>
                    <li>Attack surface mapping in cloud environments</li>
                    <li>MITRE ATT&amp;CK for Cloud matrix</li>
                    <li>Lateral movement and persistence techniques</li>
                    <li>Cloud-specific TTPs: metadata service abuse, SSRF</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-purple)"}}>Incident Response in Cloud</div>
                  <ul className="topic-list">
                    <li>IR playbooks for cloud: who does what, when</li>
                    <li>Forensics: memory, disk, log acquisition in cloud</li>
                    <li>Isolating compromised resources without data loss</li>
                    <li>Timeline reconstruction from CloudTrail/audit logs</li>
                    <li>Root cause analysis and post-mortems</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-purple)"}}>Compliance &amp; Governance</div>
                  <ul className="topic-list">
                    <li>Frameworks: SOC 2, ISO 27001, NIST CSF, PCI DSS</li>
                    <li>GDPR / CCPA data residency requirements</li>
                    <li>AWS Config / Azure Policy / Org Policy Service</li>
                    <li>Automated compliance-as-code</li>
                    <li>Evidence collection for auditors</li>
                  </ul>
                </div>
              </div>
              <div className="certs">
                <span className="cert-chip priority">CCSP (ISC²)</span>
                <span className="cert-chip priority">CEH or PNPT (offensive awareness)</span>
                <span className="cert-chip">Terraform Associate</span>
                <span className="cert-chip">CKS — Certified Kubernetes Security</span>
                <span className="cert-chip">CISM (management track)</span>
              </div>
            </div>
          </div>

          {/* Phase 5 */}
          <div className="phase phase-5">
            <div className="phase-sidebar">
              <span className="phase-number">PHASE 05</span>
              <span className="phase-title">JOB READY</span>
              <span className="phase-duration">14 – 18 Months</span>
            </div>
            <div className="phase-body">
              <p className="phase-desc">Technical skills get you the interview. Portfolio and communication get you the job. In this phase, build proof-of-work artefacts, polish your GitHub, grind interview prep, and start applying. Don&apos;t wait until you feel &quot;ready&quot; — you apply your way into readiness.</p>
              <div className="topic-groups">
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-red)"}}>Portfolio Projects</div>
                  <ul className="topic-list">
                    <li>Build a cloud honeytoken/honeypot system and blog about it</li>
                    <li>Automated CSPM scanner using Python + cloud APIs</li>
                    <li>Terraform module with security guardrails baked in</li>
                    <li>Home lab: multi-cloud detection lab (AWS + Azure)</li>
                    <li>CTF write-ups: CloudGoat, flaws.cloud, flaws2.cloud</li>
                    <li>Open source contributions to cloud security tools</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-red)"}}>Interview Preparation</div>
                  <ul className="topic-list">
                    <li>Scenario: &quot;An S3 bucket was made public — what do you do?&quot;</li>
                    <li>Whiteboard cloud architecture security reviews</li>
                    <li>STAR method for behavioural questions</li>
                    <li>Know your certs cold — examiners will probe depth</li>
                    <li>Practice explaining complex topics simply</li>
                  </ul>
                </div>
                <div className="topic-group">
                  <div className="topic-group-label" style={{color:"var(--accent-red)"}}>Community &amp; Network</div>
                  <ul className="topic-list">
                    <li>LinkedIn — document your learning journey publicly</li>
                    <li>Write blog posts on Medium or personal site</li>
                    <li>Join Cloud Security Alliance (CSA) chapters</li>
                    <li>Attend BSides, DEF CON Cloud Village, re:Inforce</li>
                    <li>Engage in CloudSecWiki, r/netsec, CloudSec Slack</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud-Specific Services */}
        <section className="clouds-section">
          <div className="timeline-header">
            <span className="section-label">Cloud-Specific Security Services</span>
            <div className="section-line"></div>
          </div>
          <div className="clouds-grid">
            <div className="cloud-card aws">
              <div className="cloud-header">
                <div className="cloud-icon">☁</div>
                <div>
                  <div className="cloud-name">AWS</div>
                  <div className="cloud-subtitle">Amazon Web Services · ~31% market share</div>
                </div>
              </div>
              <div className="service-list">
                {[
                  ["IAM + SCPs + Permission Boundaries","IAM","tag-iam"],
                  ["GuardDuty","DETECT","tag-monitor"],
                  ["Security Hub + Findings","CORE","tag-core"],
                  ["CloudTrail + Athena","AUDIT","tag-monitor"],
                  ["KMS + Secrets Manager","CRYPTO","tag-core"],
                  ["VPC Security Groups + NACLs","NET","tag-network"],
                  ["Inspector v2","VULN","tag-core"],
                  ["WAF + Shield Advanced","NET","tag-network"],
                  ["Config + Conformance Packs","COMPLY","tag-core"],
                  ["Macie (S3 data classification)","DATA","tag-core"],
                  ["flaws.cloud + CloudGoat labs","LAB","tag-iam"],
                ].map(([name, tag, cls]) => (
                  <div key={name} className="service-item">
                    <span className="service-name">{name}</span>
                    <span className={`service-tag ${cls}`}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cloud-card azure">
              <div className="cloud-header">
                <div className="cloud-icon">⬡</div>
                <div>
                  <div className="cloud-name">AZURE</div>
                  <div className="cloud-subtitle">Microsoft Azure · ~24% market share</div>
                </div>
              </div>
              <div className="service-list">
                {[
                  ["Entra ID (formerly AAD) + RBAC","IAM","tag-iam"],
                  ["Microsoft Defender for Cloud","DETECT","tag-monitor"],
                  ["Microsoft Sentinel (SIEM)","SIEM","tag-monitor"],
                  ["Azure Monitor + Activity Logs","AUDIT","tag-monitor"],
                  ["Key Vault + Managed HSM","CRYPTO","tag-core"],
                  ["NSGs + Azure Firewall + DDoS","NET","tag-network"],
                  ["Azure Policy + Blueprints","COMPLY","tag-core"],
                  ["Privileged Identity Management (PIM)","IAM","tag-iam"],
                  ["Private Endpoints + Service Tags","NET","tag-network"],
                  ["Conditional Access Policies","IAM","tag-iam"],
                  ["SANS Azure CTF labs","LAB","tag-iam"],
                ].map(([name, tag, cls]) => (
                  <div key={name} className="service-item">
                    <span className="service-name">{name}</span>
                    <span className={`service-tag ${cls}`}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cloud-card gcp">
              <div className="cloud-header">
                <div className="cloud-icon">◈</div>
                <div>
                  <div className="cloud-name">GCP</div>
                  <div className="cloud-subtitle">Google Cloud Platform · ~11% market share</div>
                </div>
              </div>
              <div className="service-list">
                {[
                  ["IAM + Workload Identity Federation","IAM","tag-iam"],
                  ["Security Command Center","DETECT","tag-monitor"],
                  ["Chronicle SIEM","SIEM","tag-monitor"],
                  ["Cloud Audit Logs + Log Analytics","AUDIT","tag-monitor"],
                  ["Cloud KMS + Secret Manager","CRYPTO","tag-core"],
                  ["VPC Firewall + Hierarchical Policies","NET","tag-network"],
                  ["Org Policy Constraints","COMPLY","tag-core"],
                  ["VPC Service Controls","NET","tag-network"],
                  ["Cloud Armor (WAF + DDoS)","NET","tag-network"],
                  ["Binary Authorization (GKE)","SUPPLY","tag-core"],
                  ["GCP Goat + Thunder CTF","LAB","tag-iam"],
                ].map(([name, tag, cls]) => (
                  <div key={name} className="service-item">
                    <span className="service-name">{name}</span>
                    <span className={`service-tag ${cls}`}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Matrix */}
        <section className="skills-section">
          <div className="timeline-header">
            <span className="section-label">Skills Depth by Role Type</span>
            <div className="section-line"></div>
          </div>
          <div className="skills-grid">
            {[
              { title:"🔐 Cloud Security Analyst", bars:[
                {label:"Threat Detection & SIEM",pct:90,color:"var(--accent-cyan)"},
                {label:"Alert Triage & IR",pct:85,color:"var(--accent-cyan)"},
                {label:"IAM & Posture Review",pct:70,color:"var(--accent-cyan)"},
                {label:"Scripting & Automation",pct:60,color:"var(--accent-cyan)"},
                {label:"Architecture Design",pct:40,color:"var(--accent-cyan)"},
              ]},
              { title:"🛡 Cloud Security Engineer", bars:[
                {label:"Security Architecture",pct:90,color:"var(--accent-green)"},
                {label:"IAM & Policy Engineering",pct:85,color:"var(--accent-green)"},
                {label:"IaC & DevSecOps",pct:80,color:"var(--accent-green)"},
                {label:"Threat Detection",pct:70,color:"var(--accent-green)"},
                {label:"Scripting & Automation",pct:85,color:"var(--accent-green)"},
              ]},
              { title:"🔴 Cloud Penetration Tester", bars:[
                {label:"IAM Privilege Escalation",pct:95,color:"var(--accent-red)"},
                {label:"Attack Tooling (Pacu, Prowler)",pct:85,color:"var(--accent-red)"},
                {label:"Cloud Misconfig Exploitation",pct:90,color:"var(--accent-red)"},
                {label:"Report Writing",pct:80,color:"var(--accent-red)"},
                {label:"Architecture Design",pct:50,color:"var(--accent-red)"},
              ]},
              { title:"📋 GRC / Cloud Compliance", bars:[
                {label:"Compliance Frameworks",pct:95,color:"var(--accent-amber)"},
                {label:"Risk Assessment",pct:90,color:"var(--accent-amber)"},
                {label:"Policy Writing",pct:85,color:"var(--accent-amber)"},
                {label:"Cloud Technical Knowledge",pct:60,color:"var(--accent-amber)"},
                {label:"Stakeholder Communication",pct:90,color:"var(--accent-amber)"},
              ]},
            ].map((cat) => (
              <div key={cat.title} className="skill-cat">
                <div className="skill-cat-title">{cat.title}</div>
                <div className="skill-bars">
                  {cat.bars.map((b) => (
                    <div key={b.label} className="skill-bar-item">
                      <div className="skill-bar-header">
                        <span>{b.label}</span>
                        <span style={{color:b.color}}>{b.pct}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <div className="skill-bar-fill" style={{width:`${b.pct}%`,background:b.color}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Readiness */}
        <section className="readiness-section">
          <div className="timeline-header">
            <span className="section-label">Job Readiness Checklist</span>
            <div className="section-line"></div>
          </div>
          <div className="readiness-grid">
            {[
              {num:"01",color:"var(--accent-cyan)",title:"Certifications",items:["CompTIA Security+ achieved","AWS Solutions Architect Associate achieved","One cloud security specialty cert (SCS-C02, AZ-500, or GCP PSE)","Cert PDFs ready for upload on applications"]},
              {num:"02",color:"var(--accent-green)",title:"Hands-On Evidence",items:["GitHub with 3+ security projects (IaC, automation, lab write-ups)","Completed flaws.cloud and flaws2.cloud labs","Completed CloudGoat at least once","At least one CTF participation with write-up","Home lab with detection capabilities documented"]},
              {num:"03",color:"var(--accent-amber)",title:"Knowledge Depth",items:["Can explain shared responsibility model cold","Can whiteboard a secure VPC architecture","Can describe an IAM privilege escalation scenario","Knows 5+ MITRE ATT&CK for Cloud techniques","Can articulate CIS Benchmark hardening steps"]},
              {num:"04",color:"var(--accent-purple)",title:"Soft Skills & Presence",items:["LinkedIn profile optimised with security keywords","At least 2 technical blog posts published publicly","Active in at least one security community/Slack","Can explain technical risks to a business audience","Elevator pitch for 'why cloud security?' rehearsed"]},
              {num:"05",color:"var(--accent-red)",title:"Interview Ready",items:["10 behavioural STAR stories prepared","Common cloud security scenarios practiced aloud","Researched target companies' cloud stack","Reverse questions prepared for interviewers","Salary band researched for your region/role"]},
              {num:"06",color:"var(--accent-cyan)",title:"Target Roles to Apply For",items:["Junior Cloud Security Engineer","Cloud Security Analyst (SOC with cloud focus)","DevSecOps Engineer","Security Operations (Cloud) Analyst","GRC Analyst (Cloud / SaaS focus)","Associate Cloud Security Consultant"]},
            ].map((card) => (
              <div key={card.num} className="readiness-card">
                <div className="readiness-number" style={{color:card.color}}>{card.num}</div>
                <div className="readiness-title">{card.title}</div>
                <ul className="readiness-items">
                  {card.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="resources-section">
          <div className="timeline-header">
            <span className="section-label">Key Resources &amp; Labs</span>
            <div className="section-line"></div>
          </div>
          <div className="resources-grid">
            {[
              {type:"🔴 Attack Labs",name:"flaws.cloud & flaws2.cloud",desc:"Scott Piper's legendary AWS-specific CTF labs. Free. Non-negotiable. Do both."},
              {type:"🔴 Attack Labs",name:"CloudGoat by Rhino Security",desc:"Deliberately vulnerable AWS environment. Scenario-based IAM and service exploitation practice."},
              {type:"📚 Learning Platform",name:"A Cloud Guru / Pluralsight",desc:"Best structured cloud security courses with sandboxed lab environments included."},
              {type:"📚 Learning Platform",name:"TryHackMe — Cloud Path",desc:"Beginner-friendly cloud security rooms. Good for building confidence before harder labs."},
              {type:"📖 Reading",name:"Hacking the Cloud",desc:"hackingthe.cloud — free attacker-focused cloud TTPs wiki. Bookmark this permanently."},
              {type:"🛠 Open Source Tools",name:"Prowler, ScoutSuite, Pacu",desc:"Run these against your own accounts. Read the source code. Understand what they check and why."},
              {type:"🎧 Podcast",name:"Cloud Security Podcast by Google",desc:"Real practitioner conversations. Great for staying current on how professionals think."},
              {type:"🌐 Community",name:"Cloud Security Alliance (CSA)",desc:"Free research papers, STAR registry, and local chapters. Join for free resources and networking."},
              {type:"📖 Reading",name:"AWS Well-Architected Security Pillar",desc:"Read the actual AWS docs. Free, authoritative, directly maps to exam and job requirements."},
              {type:"🔴 Attack Labs",name:"GCP Goat + Thunder CTF",desc:"GCP-specific vulnerable environments. Essential for multi-cloud exposure beyond AWS."},
              {type:"📺 YouTube",name:"NetworkChuck, John Savill, fwd:cloudsec",desc:"Free, high-quality content for building cloud and security foundations from trusted creators."},
              {type:"📖 Books",name:"Hacking Kubernetes + AWS Security Cookbook",desc:"Go deeper on container security and practical AWS security configurations used in production."},
            ].map((r) => (
              <div key={r.name} className="resource-card">
                <div className="resource-type">{r.type}</div>
                <div className="resource-name">{r.name}</div>
                <div className="resource-desc">{r.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <span>Cloud Security Roadmap · 2025 Edition</span>
          <span style={{color:"var(--accent-cyan)"}}>// Learn → Build → Prove → Apply</span>
          <span>12–18 months · All clouds · Job ready</span>
        </footer>
      </div>
    </>
  );
}
