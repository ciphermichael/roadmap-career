import type { Metadata } from "next";
import RoadmapShell, { Phase, CloudTab, SkillRole } from "../components/RoadmapShell";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cloud Security Engineer Roadmap",
  description: "Zero to job-ready cloud security engineer — AWS, Azure & GCP. 5 phases, 12–18 months.",
};

/* ── PHASES DATA ──────────────────────────────── */
const phases: Phase[] = [
  {
    id: "phase-1", num: "01", label: "Phase 01",
    title: "Foundations",
    duration: "0 – 3 Months",
    color: "var(--amber)",
    desc: "Before touching cloud, get a solid grounding in networking, OS fundamentals, and core security concepts. This isn't glamorous — but skipping it will haunt you forever. Think of this as installing the firmware for everything that follows.",
    topics: [
      { label: "Networking Essentials", items: ["TCP/IP, OSI model — deeply, not surface level", "DNS, DHCP, HTTP/S, TLS/SSL handshake", "Subnetting, CIDR, routing & switching basics", "Firewalls, NAT, VPNs, proxies", "Packet capture with Wireshark"] },
      { label: "Operating Systems", items: ["Linux command line (bash scripting, file perms, processes)", "Windows Server basics, AD fundamentals", "Users, groups, sudo, SSH keys", "Logs, cron jobs, systemd services", "Package management (apt, yum, brew)"] },
      { label: "Security Basics", items: ["CIA Triad: Confidentiality, Integrity, Availability", "Authentication vs Authorisation", "Encryption fundamentals (symmetric, asymmetric, hashing)", "PKI, certificates, CAs", "OWASP Top 10 awareness", "Vulnerability vs threat vs risk"] },
      { label: "Programming & Scripting", items: ["Python — loops, functions, APIs, file I/O", "Bash scripting for automation", "JSON & YAML fluency", "Git basics (clone, commit, push, branches)", "REST APIs — how to call them, read responses"] },
    ],
    certs: [
      { text: "CompTIA Security+", star: true },
      { text: "CompTIA Network+", star: true },
      { text: "Google IT Support Certificate" },
    ],
  },
  {
    id: "phase-2", num: "02", label: "Phase 02",
    title: "Cloud Core",
    duration: "3 – 6 Months",
    color: "var(--teal)",
    desc: "Get hands dirty with cloud infrastructure. Start with ONE cloud (AWS recommended — largest market share), get comfortable, then cross-train. You need to understand what you're eventually going to secure.",
    topics: [
      { label: "Cloud Architecture", items: ["Shared responsibility model (learn this cold)", "Regions, Availability Zones, Edge Locations", "Compute: VMs, containers, serverless functions", "Storage: object, block, file storage differences", "Databases: managed SQL vs NoSQL", "Load balancers, auto-scaling, CDNs"] },
      { label: "Identity & Access", items: ["IAM: users, roles, groups, policies", "Principle of Least Privilege (your religion now)", "Service accounts vs human accounts", "MFA everywhere — why and how", "Federated identity, SSO, SAML, OIDC"] },
      { label: "Networking in Cloud", items: ["VPC / VNet concepts per cloud", "Subnets: public vs private", "Security Groups vs NACLs vs NSGs", "VPN Gateway, ExpressRoute, Direct Connect", "VPC peering, Transit Gateway, service endpoints"] },
      { label: "Infrastructure as Code", items: ["Terraform — write, plan, apply, destroy", "CloudFormation / ARM Templates", "Ansible basics for configuration", "Version-controlled infra and why it matters", "Secret management: never hardcode credentials"] },
    ],
    certs: [
      { text: "AWS Cloud Practitioner", star: true },
      { text: "AWS Solutions Architect Associate", star: true },
      { text: "AZ-900 Azure Fundamentals" },
      { text: "GCP Associate Cloud Engineer" },
    ],
  },
  {
    id: "phase-3", num: "03", label: "Phase 03",
    title: "Cloud Security Core",
    duration: "6 – 10 Months",
    color: "var(--red)",
    desc: "This is where you shift from cloud user to cloud security practitioner. You'll learn how attackers target cloud environments, how defenders detect and respond, and how to build security controls into cloud-native architectures. This phase is dense — take your time.",
    topics: [
      { label: "IAM Security Deep Dive", items: ["IAM policy analysis: condition keys, wildcards, SCPs", "Privilege escalation paths in IAM", "Cross-account roles and trust policies", "AWS Organizations / Azure Management Groups", "Permission boundaries and guardrails", "Service control policies (SCPs)"] },
      { label: "Threat Detection & Monitoring", items: ["CloudTrail / Activity Log / Cloud Audit Logs", "GuardDuty / Microsoft Defender / Security Command Center", "SIEM integration: Splunk, Sentinel, Chronicle", "Alert triage: true vs false positives", "IOCs and threat intelligence feeds"] },
      { label: "Data Security", items: ["Encryption at rest: KMS / Key Vault / Cloud KMS", "S3 / Blob / GCS bucket security", "Data classification and tagging", "DLP tools and policies", "Database security: RDS, Aurora, Cosmos, BigQuery"] },
      { label: "Posture Management", items: ["CSPM tools: Prisma Cloud, Wiz, Orca, Lacework", "Security Hub / Azure Security Centre / SCC", "CIS Benchmarks, NIST, ISO 27001 mappings", "Misconfig detection and remediation"] },
      { label: "Container & Serverless", items: ["Docker security: image scanning, non-root users", "Kubernetes: RBAC, network policies, Pod Security Standards", "EKS / AKS / GKE hardening", "Container registries: ECR, ACR, Artifact Registry", "Runtime security: Falco, Aqua, Sysdig"] },
      { label: "Network Security", items: ["WAF: AWS WAF, Azure Front Door WAF, Cloud Armor", "DDoS protection: Shield Advanced, Azure DDoS", "Zero Trust Network Access (ZTNA) principles", "PrivateLink / Private Endpoints", "DNS security: Route 53 Resolver, Private DNS"] },
    ],
    certs: [
      { text: "AWS Security Specialty (SCS-C02)", star: true },
      { text: "AZ-500 Azure Security Engineer", star: true },
      { text: "GCP Professional Cloud Security Engineer", star: true },
      { text: "CompTIA Cloud+" },
      { text: "CCSP (longer-term goal)" },
    ],
  },
  {
    id: "phase-4", num: "04", label: "Phase 04",
    title: "Advanced & Specialise",
    duration: "10 – 14 Months",
    color: "var(--purple)",
    desc: "Go deeper into the areas that differentiate a good candidate from a great one. Pick 1–2 specialisms. Employers want T-shaped engineers: broad enough to operate across the stack, deep enough in something to be invaluable.",
    topics: [
      { label: "DevSecOps & CI/CD", items: ["Shift-left security: SAST, DAST, SCA in pipelines", "GitHub Actions / GitLab CI security patterns", "Secrets scanning: GitGuardian, truffleHog, git-secrets", "SBOM generation and software supply chain", "IaC security scanning: Checkov, tfsec, Semgrep", "Secure container pipelines: Snyk, Trivy, Grype"] },
      { label: "Cloud Threat Modelling", items: ["STRIDE methodology applied to cloud architectures", "Attack surface mapping in cloud environments", "MITRE ATT&CK for Cloud matrix", "Lateral movement and persistence techniques", "Cloud-specific TTPs: metadata service abuse, SSRF"] },
      { label: "Incident Response", items: ["IR playbooks for cloud: who does what, when", "Forensics: memory, disk, log acquisition in cloud", "Isolating compromised resources without data loss", "Timeline reconstruction from CloudTrail/audit logs", "Root cause analysis and post-mortems"] },
      { label: "Compliance & Governance", items: ["Frameworks: SOC 2, ISO 27001, NIST CSF, PCI DSS", "GDPR / CCPA data residency requirements", "AWS Config / Azure Policy / Org Policy Service", "Automated compliance-as-code", "Evidence collection for auditors"] },
    ],
    certs: [
      { text: "CCSP (ISC²)", star: true },
      { text: "CEH or PNPT (offensive awareness)", star: true },
      { text: "Terraform Associate" },
      { text: "CKS — Certified Kubernetes Security" },
      { text: "CISM (management track)" },
    ],
  },
  {
    id: "phase-5", num: "05", label: "Phase 05",
    title: "Job Ready",
    duration: "14 – 18 Months",
    color: "var(--blue)",
    desc: "Technical skills get you the interview. Portfolio and communication get you the job. Build proof-of-work artefacts, polish your GitHub, grind interview prep, and start applying. Don't wait until you feel ready — you apply your way into readiness.",
    topics: [
      { label: "Portfolio Projects", items: ["Build a cloud honeytoken/honeypot system and blog about it", "Automated CSPM scanner using Python + cloud APIs", "Terraform module with security guardrails baked in", "Home lab: multi-cloud detection lab (AWS + Azure)", "CTF write-ups: CloudGoat, flaws.cloud, flaws2.cloud", "Open source contributions to cloud security tools"] },
      { label: "Interview Prep", items: ["Scenario: 'An S3 bucket was made public — what do you do?'", "Whiteboard cloud architecture security reviews", "STAR method for behavioural questions", "Know your certs cold — examiners will probe depth", "Practice explaining complex topics simply"] },
      { label: "Community & Network", items: ["LinkedIn — document your learning journey publicly", "Write blog posts on Medium or personal site", "Join Cloud Security Alliance (CSA) chapters", "Attend BSides, DEF CON Cloud Village, re:Inforce", "Engage in CloudSecWiki, r/netsec, CloudSec Slack"] },
    ],
    certs: [],
  },
];

/* ── CLOUD TABS ──────────────────────────────────── */
const cloudTabs: CloudTab[] = [
  {
    id: "aws", icon: "☁", label: "AWS", subtitle: "~31% market share",
    groups: [
      { label: "Identity & Compliance", services: [
        { name: "IAM + SCPs + Permission Boundaries", tag: "IAM", tagClass: "tag-iam" },
        { name: "AWS Organizations", tag: "GOVERN", tagClass: "tag-core" },
        { name: "Config + Conformance Packs", tag: "COMPLY", tagClass: "tag-core" },
      ]},
      { label: "Detection & Monitoring", services: [
        { name: "GuardDuty", tag: "DETECT", tagClass: "tag-detect" },
        { name: "Security Hub + Findings", tag: "AGGREGATE", tagClass: "tag-core" },
        { name: "CloudTrail + Athena", tag: "AUDIT", tagClass: "tag-detect" },
        { name: "Inspector v2", tag: "VULN", tagClass: "tag-core" },
        { name: "Macie (S3 data classification)", tag: "DLP", tagClass: "tag-core" },
      ]},
      { label: "Cryptography & Secrets", services: [
        { name: "KMS (Customer Managed Keys)", tag: "CRYPTO", tagClass: "tag-crypto" },
        { name: "Secrets Manager + Parameter Store", tag: "SECRETS", tagClass: "tag-crypto" },
        { name: "ACM (Certificate Manager)", tag: "CERTS", tagClass: "tag-crypto" },
      ]},
      { label: "Network Security", services: [
        { name: "VPC Security Groups + NACLs", tag: "NET", tagClass: "tag-net" },
        { name: "AWS WAF + Shield Advanced", tag: "WAF", tagClass: "tag-net" },
        { name: "PrivateLink + VPC Endpoints", tag: "NET", tagClass: "tag-net" },
      ]},
    ],
  },
  {
    id: "azure", icon: "⬡", label: "Azure", subtitle: "~24% market share",
    groups: [
      { label: "Identity & Access", services: [
        { name: "Entra ID (formerly Azure AD)", tag: "IAM", tagClass: "tag-iam" },
        { name: "Privileged Identity Management (PIM)", tag: "PAM", tagClass: "tag-iam" },
        { name: "Conditional Access Policies", tag: "IAM", tagClass: "tag-iam" },
      ]},
      { label: "Detection & Monitoring", services: [
        { name: "Microsoft Defender for Cloud", tag: "DETECT", tagClass: "tag-detect" },
        { name: "Microsoft Sentinel (SIEM)", tag: "SIEM", tagClass: "tag-detect" },
        { name: "Azure Monitor + Activity Logs", tag: "AUDIT", tagClass: "tag-detect" },
      ]},
      { label: "Cryptography & Secrets", services: [
        { name: "Key Vault + Managed HSM", tag: "CRYPTO", tagClass: "tag-crypto" },
        { name: "Azure Disk Encryption", tag: "ENCRYPT", tagClass: "tag-crypto" },
      ]},
      { label: "Network Security", services: [
        { name: "NSGs + Azure Firewall", tag: "NET", tagClass: "tag-net" },
        { name: "Azure DDoS Protection", tag: "DDOS", tagClass: "tag-net" },
        { name: "Private Endpoints + Service Tags", tag: "NET", tagClass: "tag-net" },
        { name: "Azure Policy + Blueprints", tag: "COMPLY", tagClass: "tag-core" },
      ]},
    ],
  },
  {
    id: "gcp", icon: "◈", label: "GCP", subtitle: "~11% market share",
    groups: [
      { label: "Identity & Policy", services: [
        { name: "IAM + Workload Identity Federation", tag: "IAM", tagClass: "tag-iam" },
        { name: "Org Policy Constraints", tag: "COMPLY", tagClass: "tag-core" },
        { name: "VPC Service Controls", tag: "PERIMETER", tagClass: "tag-core" },
      ]},
      { label: "Detection & Monitoring", services: [
        { name: "Security Command Center", tag: "DETECT", tagClass: "tag-detect" },
        { name: "Chronicle SIEM", tag: "SIEM", tagClass: "tag-detect" },
        { name: "Cloud Audit Logs", tag: "AUDIT", tagClass: "tag-detect" },
      ]},
      { label: "Cryptography & Secrets", services: [
        { name: "Cloud KMS + Secret Manager", tag: "CRYPTO", tagClass: "tag-crypto" },
        { name: "Certificate Authority Service", tag: "CERTS", tagClass: "tag-crypto" },
      ]},
      { label: "Network Security", services: [
        { name: "VPC Firewall + Hierarchical Policies", tag: "NET", tagClass: "tag-net" },
        { name: "Cloud Armor (WAF + DDoS)", tag: "WAF", tagClass: "tag-net" },
        { name: "Binary Authorization (GKE)", tag: "SUPPLY", tagClass: "tag-core" },
        { name: "GCP Goat + Thunder CTF (labs)", tag: "LAB", tagClass: "tag-lab" },
      ]},
    ],
  },
];

/* ── SKILL ROLES ─────────────────────────────────── */
const skillRoles: SkillRole[] = [
  { title: "🔐 Cloud Security Analyst", bars: [
    { label: "Threat Detection & SIEM", pct: 90, color: "var(--amber)" },
    { label: "Alert Triage & IR", pct: 85, color: "var(--amber)" },
    { label: "IAM & Posture Review", pct: 70, color: "var(--amber)" },
    { label: "Scripting & Automation", pct: 60, color: "var(--amber)" },
    { label: "Architecture Design", pct: 40, color: "var(--amber)" },
  ]},
  { title: "🛡 Cloud Security Engineer", bars: [
    { label: "Security Architecture", pct: 90, color: "var(--teal)" },
    { label: "IAM & Policy Engineering", pct: 85, color: "var(--teal)" },
    { label: "IaC & DevSecOps", pct: 80, color: "var(--teal)" },
    { label: "Threat Detection", pct: 70, color: "var(--teal)" },
    { label: "Scripting & Automation", pct: 85, color: "var(--teal)" },
  ]},
  { title: "🔴 Cloud Penetration Tester", bars: [
    { label: "IAM Privilege Escalation", pct: 95, color: "var(--red)" },
    { label: "Attack Tooling (Pacu, Prowler)", pct: 85, color: "var(--red)" },
    { label: "Cloud Misconfig Exploitation", pct: 90, color: "var(--red)" },
    { label: "Report Writing", pct: 80, color: "var(--red)" },
    { label: "Architecture Design", pct: 50, color: "var(--red)" },
  ]},
  { title: "📋 GRC / Cloud Compliance", bars: [
    { label: "Compliance Frameworks", pct: 95, color: "var(--purple)" },
    { label: "Risk Assessment", pct: 90, color: "var(--purple)" },
    { label: "Policy Writing", pct: 85, color: "var(--purple)" },
    { label: "Cloud Technical Knowledge", pct: 60, color: "var(--purple)" },
    { label: "Stakeholder Communication", pct: 90, color: "var(--purple)" },
  ]},
];

/* ── EXTRA SECTIONS ──────────────────────────────── */
const readiness = [
  { title: "🎓 Certifications", items: [
    { s: true, t: "CompTIA Security+ achieved" },
    { s: true, t: "AWS Solutions Architect Associate achieved" },
    { s: true, t: "One cloud security specialty cert (SCS-C02, AZ-500, or GCP PSE)" },
    { s: false, t: "Cert PDFs ready for upload on applications" },
  ]},
  { title: "⚙️ Hands-On Evidence", items: [
    { s: true, t: "GitHub with 3+ security projects (IaC, automation, lab write-ups)" },
    { s: true, t: "Completed flaws.cloud and flaws2.cloud labs" },
    { s: false, t: "Completed CloudGoat at least once" },
    { s: false, t: "At least one CTF participation with write-up" },
    { s: false, t: "Home lab with detection capabilities documented" },
  ]},
  { title: "🧠 Knowledge Depth", items: [
    { s: true, t: "Can explain shared responsibility model cold" },
    { s: true, t: "Can whiteboard a secure VPC architecture" },
    { s: false, t: "Can describe an IAM privilege escalation scenario" },
    { s: false, t: "Knows 5+ MITRE ATT&CK for Cloud techniques" },
    { s: false, t: "Can articulate CIS Benchmark hardening steps" },
  ]},
  { title: "🎤 Interview Ready", items: [
    { s: true, t: "10 behavioural STAR stories prepared" },
    { s: true, t: "Common cloud security scenarios practiced aloud" },
    { s: false, t: "Researched target companies' cloud stack" },
    { s: false, t: "Reverse questions prepared for interviewers" },
    { s: false, t: "Salary band researched for your region/role" },
  ]},
];

const resources = [
  { type: "🔴 Attack Labs", name: "flaws.cloud & flaws2.cloud", desc: "Scott Piper's legendary AWS-specific CTF labs. Free. Non-negotiable. Do both." },
  { type: "🔴 Attack Labs", name: "CloudGoat by Rhino Security", desc: "Deliberately vulnerable AWS environment. Scenario-based IAM and service exploitation practice." },
  { type: "📚 Learning", name: "A Cloud Guru / Pluralsight", desc: "Best structured cloud security courses with sandboxed lab environments included." },
  { type: "📚 Learning", name: "TryHackMe — Cloud Path", desc: "Beginner-friendly cloud security rooms. Good for building confidence before harder labs." },
  { type: "📖 Reading", name: "Hacking the Cloud", desc: "hackingthe.cloud — free attacker-focused cloud TTPs wiki. Bookmark this permanently." },
  { type: "🛠 Tools", name: "Prowler, ScoutSuite, Pacu", desc: "Run these against your own accounts. Read the source code. Understand what they check and why." },
  { type: "🎧 Podcast", name: "Cloud Security Podcast by Google", desc: "Real practitioner conversations. Great for staying current on how professionals think." },
  { type: "🌐 Community", name: "Cloud Security Alliance (CSA)", desc: "Free research papers, STAR registry, and local chapters. Join for networking and resources." },
  { type: "🔴 Attack Labs", name: "GCP Goat + Thunder CTF", desc: "GCP-specific vulnerable environments. Essential for multi-cloud exposure beyond AWS." },
  { type: "📖 Reading", name: "AWS Well-Architected Security Pillar", desc: "Read the actual AWS docs. Free, authoritative, directly maps to exam and job requirements." },
  { type: "📺 YouTube", name: "NetworkChuck, John Savill, fwd:cloudsec", desc: "Free, high-quality content for building cloud and security foundations from trusted creators." },
  { type: "📖 Books", name: "Hacking Kubernetes + AWS Security Cookbook", desc: "Go deeper on container security and practical AWS configurations used in production." },
];

function ExtraSections(): ReactNode {
  return (
    <>
      {/* Readiness */}
      <section id="readiness" className="section">
        <div className="section-header">
          <span className="section-num t-display">08</span>
          <span className="section-title">Job Readiness Checklist</span>
          <div className="section-rule" />
        </div>
        <div className="readiness-grid">
          {readiness.map(card => (
            <div key={card.title} className="readiness-card">
              <div className="readiness-title">{card.title}</div>
              <ul className="readiness-items">
                {card.items.map(item => (
                  <li key={item.t}>
                    <span className={item.s ? "chk-star" : "chk-ok"}>{item.s ? "★" : "✓"}</span>
                    {item.t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="section">
        <div className="section-header">
          <span className="section-num t-display">09</span>
          <span className="section-title">Key Resources & Labs</span>
          <div className="section-rule" />
        </div>
        <div className="resources-grid">
          {resources.map(r => (
            <div key={r.name} className="resource-card">
              <div className="resource-type">{r.type}</div>
              <div className="resource-name">{r.name}</div>
              <div className="resource-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ── PAGE ────────────────────────────────────────── */
export default function CloudSecurityPage() {
  return (
    <RoadmapShell
      badge="Engineering Track"
      title={<>CLOUD<br />SECURITY<br />ENGINEER</>}
      accent="var(--amber)"
      desc="A battle-tested roadmap from zero to job-ready — covering AWS, Azure & GCP security. Built by a practitioner, for practitioners. No fluff, no filler."
      stats={[
        { val: "18mo", label: "Time to job-ready" },
        { val: "3", label: "Major clouds" },
        { val: "5", label: "Learning phases" },
        { val: "12+", label: "Certifications mapped" },
      ]}
      phases={phases}
      cloudTabs={cloudTabs}
      skillRoles={skillRoles}
      sections={<ExtraSections />}
      routeTitle="Cloud Security Engineering Roadmap · 2025"
    />
  );
}
