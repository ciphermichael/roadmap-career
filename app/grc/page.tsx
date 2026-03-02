import type { Metadata } from "next";
import RoadmapShell, { Phase, CloudTab, SkillRole } from "../components/RoadmapShell";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cloud GRC Roadmap — Governance, Risk & Compliance",
  description: "From zero to GRC job-ready. ISO 27001, SOC 2, GDPR, NIST, PCI DSS. 6 career pathways, 12–18 months.",
};

/* ── PHASES ──────────────────────────────────────── */
const phases: Phase[] = [
  {
    id: "phase-1", num: "01", label: "Phase 01",
    title: "GRC & Security Foundations",
    duration: "0 – 2 Months",
    color: "var(--teal)",
    desc: "Before anything else, build your mental model of why GRC exists. Understand the language of risk and compliance — these are the words auditors, regulators, and boards speak. You don't need to be deeply technical yet, but you do need to understand how technology creates risk.",
    topics: [
      { label: "Core GRC Concepts", items: ["Governance: who owns decisions and accountability", "Risk management: identify, assess, treat, monitor", "Compliance: obligations, controls, evidence", "The three lines of defence model", "Control types: preventive, detective, corrective", "Risk appetite vs risk tolerance"] },
      { label: "Security Fundamentals", items: ["CIA Triad — your anchor for everything", "Threats vs vulnerabilities vs risks", "Authentication, authorisation, identity basics", "Encryption at rest and in transit (conceptual)", "Patch management and vulnerability basics", "Incident response lifecycle"] },
      { label: "Business & Legal Context", items: ["How organisations structure IT and security teams", "Board-level cyber reporting", "Data protection law basics: GDPR overview", "Contracts: DPAs, SLAs, MSAs — what they mean", "Vendor risk management fundamentals"] },
      { label: "Cloud Awareness", items: ["What is cloud? IaaS vs PaaS vs SaaS", "Shared responsibility model (memorise this)", "Why cloud changes the compliance landscape", "Data residency and sovereignty concepts", "Multi-cloud vs hybrid environments"] },
    ],
    certs: [
      { text: "CompTIA Security+", star: true },
      { text: "Google Cybersecurity Certificate" },
      { text: "ISACA IT Fundamentals Certificate" },
    ],
  },
  {
    id: "phase-2", num: "02", label: "Phase 02",
    title: "Frameworks & Standards",
    duration: "2 – 5 Months",
    color: "var(--amber)",
    desc: "Frameworks are your primary toolkit. You'll spend much of your GRC career living inside these documents. Don't just skim them — read the actual standards, understand the intent behind controls, and start mentally mapping them against real cloud environments. This is what separates a great GRC practitioner from a checkbox monkey.",
    topics: [
      { label: "ISO 27001 / 27002", items: ["ISMS scope, context, interested parties (Clause 4)", "Leadership and risk treatment (Clauses 5–8)", "Annex A controls — all 93, know the key ones cold", "Statement of Applicability (SoA) writing", "Certification audit process: Stage 1, Stage 2", "Continual improvement (Clause 10) and NCRs"] },
      { label: "NIST CSF & SP 800-53", items: ["CSF 2.0: Govern, Identify, Protect, Detect, Respond, Recover", "Current Profiles vs Target Profiles", "SP 800-53 control families (AC, AU, CM, IA, SC, SI)", "FedRAMP: US federal cloud compliance", "NIST RMF: 7-step risk management framework"] },
      { label: "SOC 2 (Type I & II)", items: ["Trust Services Criteria (Security, Availability, Confidentiality, Privacy, PI)", "Type I vs Type II — what organisations actually need", "Common Criteria (CC) control mapping", "Evidence collection and control testing", "Vendor management from a SOC 2 perspective"] },
      { label: "PCI DSS v4.0", items: ["Cardholder Data Environment (CDE) scoping", "12 PCI requirements — know the structure", "SAQs vs QSA engagements", "Network segmentation to reduce scope", "Cloud tokenisation and encryption strategies"] },
      { label: "GDPR & Privacy", items: ["6 lawful bases for processing personal data", "Data subject rights (access, erasure, portability)", "Data Protection Impact Assessments (DPIAs)", "Records of Processing Activities (RoPA)", "Cross-border transfer mechanisms (SCCs, BCRs)", "Breach notification: 72-hour rule"] },
      { label: "Sector-Specific Frameworks", items: ["HIPAA (healthcare): PHI safeguards", "Cyber Essentials / CE+ (UK government supply chain)", "DORA (EU financial sector resilience)", "NIS2 Directive (EU critical infrastructure)", "CIS Controls v8 (practical hardening)"] },
    ],
    certs: [
      { text: "ISO 27001 Lead Implementer (PECB or BSI)", star: true },
      { text: "CISA — Certified Information Systems Auditor", star: true },
      { text: "ISO 27001 Lead Auditor" },
      { text: "ISACA CRISC (Risk and Controls)" },
    ],
  },
  {
    id: "phase-3", num: "03", label: "Phase 03",
    title: "Cloud GRC in Practice",
    duration: "5 – 9 Months",
    color: "var(--red)",
    desc: "Now bridge frameworks to cloud reality. Cloud environments challenge traditional compliance assumptions — controls that work on-premises need re-thinking when infrastructure is ephemeral, multi-tenant, and API-driven. This phase is where you become genuinely valuable.",
    topics: [
      { label: "Cloud Risk Assessments", items: ["Cloud-specific threat modelling (data exposure, IAM abuse, misconfiguration)", "Inherent vs residual risk in cloud contexts", "Third-party cloud risk: assess your SaaS vendors", "TPRM (Third-Party Risk Management) workflows", "Risk registers: format, ownership, review cadence"] },
      { label: "Cloud-Native Controls", items: ["AWS: Config Rules, SCPs, CloudTrail, Security Hub", "Azure: Policy, Blueprints, Defender for Cloud", "GCP: Org Policy, Security Command Center", "CSPM tools: Wiz, Prisma Cloud, Orca — learn one deeply", "Mapping CSPM findings to framework controls"] },
      { label: "Audit & Evidence Collection", items: ["Control testing: design vs operating effectiveness", "Evidence quality: what auditors actually want", "Automated evidence collection (Drata, Vanta, Secureframe)", "GRC platforms: ServiceNow GRC, RSA Archer, OneTrust", "Audit trail: CloudTrail logs as audit evidence"] },
      { label: "Policy & Documentation", items: ["Policy hierarchy: policies → standards → procedures → guidelines", "Writing for different audiences: technical vs board", "Cloud security policy templates (IS, access, encryption)", "Acceptable use and data classification policies", "Policy review cycles and version control"] },
      { label: "Continuous Compliance", items: ["Compliance-as-code: policy enforcement via IaC", "Automated benchmark scanning: Prowler, ScoutSuite", "Drift detection: when cloud config deviates from policy", "Control monitoring dashboards and KRIs", "Exceptions management process"] },
      { label: "Data Governance in Cloud", items: ["Data classification schemes (Public, Internal, Confidential, Secret)", "Data lineage and flow mapping (DFDs)", "DLP controls: AWS Macie, Azure Purview, Google DLP", "Data retention and destruction policies", "Cloud data sovereignty: where data is stored and processed"] },
    ],
    certs: [
      { text: "AWS Cloud Practitioner (cloud fluency baseline)", star: true },
      { text: "AZ-900 Azure Fundamentals", star: true },
      { text: "CCSP — Certified Cloud Security Professional" },
      { text: "AWS Security Specialty (stretch goal)" },
    ],
  },
  {
    id: "phase-4", num: "04", label: "Phase 04",
    title: "Advanced GRC & Specialisation",
    duration: "9 – 13 Months",
    color: "var(--purple)",
    desc: "This phase develops the higher-order GRC skills that take you from analyst to manager, consultant, or specialist. Pick 1–2 domains to go deep on. The ability to run a risk committee, present to a board, or lead a gap assessment will set you apart.",
    topics: [
      { label: "Risk Quantification", items: ["FAIR model: Factor Analysis of Information Risk", "Qualitative vs quantitative risk scoring", "Expected Loss (LEF × LM) calculations", "Risk heat maps and registers at enterprise scale", "Communicating risk in financial terms to leadership"] },
      { label: "Vendor & Supply Chain Risk", items: ["Vendor tiering: critical, high, medium, low", "Due diligence questionnaires (VSQs, SIG Lite, CAIQ)", "Reviewing vendor SOC 2 reports: what to look for", "Contractual security requirements and SLAs", "Cloud provider contractual terms (AWS, Azure, Google BAAs)"] },
      { label: "Business Continuity & DR", items: ["BIA (Business Impact Analysis) methodology", "RTO and RPO: definitions and how to derive them", "BCM lifecycle: ISO 22301 overview", "Cloud DR strategies: backup, warm standby, multi-region", "Tabletop exercises and DR test documentation"] },
      { label: "GRC Programme Management", items: ["Building and running a GRC function from scratch", "KPIs and KRIs for the security programme", "Board reporting: the CISO dashboard", "Stakeholder management and security culture", "Budget justification for security investments"] },
      { label: "Regulatory Intelligence", items: ["Regulatory change management: monitoring new obligations", "Multi-jurisdictional compliance mapping", "Regulator engagement and examination readiness", "Working with legal and DPO functions", "GDPR supervisory authority liaison"] },
      { label: "GRC Tooling Mastery", items: ["Drata / Vanta / Secureframe: automated compliance platforms", "ServiceNow GRC (enterprise) — basic workflow understanding", "OneTrust for privacy and third-party risk", "Jira / Confluence for control tracking and documentation", "Power BI / Tableau for risk reporting dashboards"] },
    ],
    certs: [
      { text: "CISM — Certified Information Security Manager", star: true },
      { text: "CCSP — Certified Cloud Security Professional", star: true },
      { text: "CGEIT — Governance of Enterprise IT" },
      { text: "CRISC — Risk and Information Systems Control" },
      { text: "CDPSE — Data Privacy Solutions Engineer" },
      { text: "BCI Certificate in Business Continuity" },
    ],
  },
  {
    id: "phase-5", num: "05", label: "Phase 05",
    title: "Job Ready & Portfolio Built",
    duration: "13 – 18 Months",
    color: "var(--blue)",
    desc: "GRC roles demand evidence of process thinking, not just theoretical knowledge. Build artefacts that demonstrate you can actually do the job. Your portfolio should show a gap assessment, a risk register, a policy document, and ideally a mock audit report. These become your interview talking points.",
    topics: [
      { label: "Portfolio Artefacts to Build", items: ["ISO 27001 gap assessment for a fictitious cloud SaaS company", "SOC 2 readiness checklist with cloud control mappings", "Risk register template with 10+ realistic cloud risks assessed", "Cloud security policy pack (IS policy, access control, encryption)", "DPIA template for a cloud-hosted HR system", "Mock board-level risk report (1-pager format)"] },
      { label: "Interview Preparation", items: ["'Walk me through an ISO 27001 implementation you'd lead'", "'How would you scope a SOC 2 for a cloud-native startup?'", "'How do you explain a high risk to a board that wants to accept it?'", "'What controls map to GDPR Article 32?'", "'We have a new AWS account — what's your first 30 days?'"] },
      { label: "Visibility & Network", items: ["LinkedIn: document your framework learning journey", "Publish a 'GRC in AWS' or 'ISO 27001 for startups' blog post", "Join ISACA, (ISC)², IAPP chapters in your region", "Attend BSides, ISACA conferences, CSA events", "Volunteer: help a small charity or NGO with their GRC basics"] },
    ],
    certs: [],
  },
];

/* ── CLOUD TABS (GRC evidence angle) ─────────────── */
const cloudTabs: CloudTab[] = [
  {
    id: "aws", icon: "☁", label: "AWS", subtitle: "Evidence & Controls",
    groups: [
      { label: "Compliance & Governance", services: [
        { name: "AWS Config + Conformance Packs", tag: "COMPLY", tagClass: "tag-core" },
        { name: "Security Hub (CIS, NIST, SOC 2 standards)", tag: "AGGREGATE", tagClass: "tag-core" },
        { name: "AWS Organizations + SCPs", tag: "GOVERN", tagClass: "tag-core" },
        { name: "IAM Analyzer + Access Advisor", tag: "IAM", tagClass: "tag-iam" },
      ]},
      { label: "Audit Evidence Sources", services: [
        { name: "CloudTrail (multi-region, validation enabled)", tag: "AUDIT", tagClass: "tag-detect" },
        { name: "CloudTrail + Athena for log analysis", tag: "EVIDENCE", tagClass: "tag-detect" },
        { name: "IAM Credential Report", tag: "EVIDENCE", tagClass: "tag-iam" },
        { name: "AWS Inspector v2 findings", tag: "VULN", tagClass: "tag-core" },
        { name: "Macie S3 data classification results", tag: "DLP", tagClass: "tag-core" },
      ]},
      { label: "Encryption Evidence", services: [
        { name: "KMS key policies and audit", tag: "CRYPTO", tagClass: "tag-crypto" },
        { name: "S3 default encryption status", tag: "ENCRYPT", tagClass: "tag-crypto" },
        { name: "EBS/RDS encryption configuration", tag: "ENCRYPT", tagClass: "tag-crypto" },
      ]},
    ],
  },
  {
    id: "azure", icon: "⬡", label: "Azure", subtitle: "Evidence & Controls",
    groups: [
      { label: "Compliance & Governance", services: [
        { name: "Azure Policy + Compliance Dashboard", tag: "COMPLY", tagClass: "tag-core" },
        { name: "Microsoft Defender for Cloud Secure Score", tag: "POSTURE", tagClass: "tag-core" },
        { name: "Management Groups + Blueprints", tag: "GOVERN", tagClass: "tag-core" },
        { name: "Entra ID Access Reviews", tag: "IAM", tagClass: "tag-iam" },
      ]},
      { label: "Audit Evidence Sources", services: [
        { name: "Azure Activity Log + Diagnostic Settings", tag: "AUDIT", tagClass: "tag-detect" },
        { name: "Microsoft Sentinel incidents", tag: "SIEM", tagClass: "tag-detect" },
        { name: "PIM activation history", tag: "PAM", tagClass: "tag-iam" },
        { name: "MFA registration report", tag: "IAM", tagClass: "tag-iam" },
        { name: "Conditional Access policy export", tag: "EVIDENCE", tagClass: "tag-core" },
      ]},
      { label: "Encryption Evidence", services: [
        { name: "Key Vault audit logs", tag: "CRYPTO", tagClass: "tag-crypto" },
        { name: "Storage Account encryption settings", tag: "ENCRYPT", tagClass: "tag-crypto" },
        { name: "Azure Purview data map", tag: "DLP", tagClass: "tag-core" },
      ]},
    ],
  },
  {
    id: "gcp", icon: "◈", label: "GCP", subtitle: "Evidence & Controls",
    groups: [
      { label: "Compliance & Governance", services: [
        { name: "Security Command Center findings", tag: "POSTURE", tagClass: "tag-core" },
        { name: "Org Policy constraint reports", tag: "GOVERN", tagClass: "tag-core" },
        { name: "VPC Service Controls audit", tag: "COMPLY", tagClass: "tag-core" },
        { name: "IAM policy exports + recommender", tag: "IAM", tagClass: "tag-iam" },
      ]},
      { label: "Audit Evidence Sources", services: [
        { name: "Cloud Audit Logs (Admin, Data, System)", tag: "AUDIT", tagClass: "tag-detect" },
        { name: "Access Transparency logs", tag: "EVIDENCE", tagClass: "tag-detect" },
        { name: "Chronicle SIEM detections", tag: "SIEM", tagClass: "tag-detect" },
        { name: "Cloud DLP inspection results", tag: "DLP", tagClass: "tag-core" },
      ]},
      { label: "Encryption Evidence", services: [
        { name: "Cloud KMS key audit logs", tag: "CRYPTO", tagClass: "tag-crypto" },
        { name: "GCS bucket encryption metadata", tag: "ENCRYPT", tagClass: "tag-crypto" },
        { name: "CMEK configuration reports", tag: "ENCRYPT", tagClass: "tag-crypto" },
      ]},
    ],
  },
];

/* ── SKILL ROLES ─────────────────────────────────── */
const skillRoles: SkillRole[] = [
  { title: "🔎 GRC Analyst", bars: [
    { label: "Control Testing & Evidence", pct: 90, color: "var(--teal)" },
    { label: "Framework Knowledge", pct: 85, color: "var(--teal)" },
    { label: "Policy Documentation", pct: 75, color: "var(--teal)" },
    { label: "Cloud Technical Knowledge", pct: 50, color: "var(--teal)" },
    { label: "Risk Assessment", pct: 70, color: "var(--teal)" },
  ]},
  { title: "📋 GRC Manager / Lead", bars: [
    { label: "Framework Ownership", pct: 90, color: "var(--amber)" },
    { label: "Gap Assessments & Remediation", pct: 85, color: "var(--amber)" },
    { label: "Board Reporting", pct: 80, color: "var(--amber)" },
    { label: "Team Management", pct: 75, color: "var(--amber)" },
    { label: "Cloud Technical Knowledge", pct: 65, color: "var(--amber)" },
  ]},
  { title: "💼 GRC Consultant", bars: [
    { label: "ISO 27001 / SOC 2 Delivery", pct: 95, color: "var(--purple)" },
    { label: "Client Communication", pct: 90, color: "var(--purple)" },
    { label: "Multi-framework Knowledge", pct: 85, color: "var(--purple)" },
    { label: "Cloud Technical Knowledge", pct: 70, color: "var(--purple)" },
    { label: "Report Writing", pct: 85, color: "var(--purple)" },
  ]},
  { title: "🔏 Data Protection Officer", bars: [
    { label: "GDPR & Privacy Law", pct: 95, color: "var(--red)" },
    { label: "Risk Assessment (DPIAs)", pct: 90, color: "var(--red)" },
    { label: "Regulatory Engagement", pct: 80, color: "var(--red)" },
    { label: "Cloud Data Governance", pct: 70, color: "var(--red)" },
    { label: "Stakeholder Communication", pct: 90, color: "var(--red)" },
  ]},
];

/* ── FRAMEWORKS DATA ─────────────────────────────── */
const frameworks = [
  { name: "ISO 27001", full: "International ISMS Standard", desc: "The global gold standard. Requires a formal ISMS with documented risk treatment. Popular in UK, EU, and global enterprise supply chains. Certification requires a third-party audit by an accredited body.", when: "Any enterprise GRC role, consultancy, supply chain compliance", tag: "mandatory" as const },
  { name: "SOC 2", full: "Trust Services Criteria", desc: "US-origin but globally adopted for SaaS and cloud providers. Customers demand SOC 2 Type II reports as proof of controls. Uses Trust Services Criteria: Security, Availability, Confidentiality, Privacy, Processing Integrity.", when: "Tech companies, SaaS startups, any org serving US enterprise customers", tag: "mandatory" as const },
  { name: "GDPR", full: "General Data Protection Regulation (EU/UK)", desc: "Non-negotiable for any org handling EU/UK personal data. Fines up to 4% global turnover. Requires lawful basis, privacy by design, breach reporting within 72 hours, and DPIAs for high-risk processing.", when: "Every role in the UK and EU. Also matters for US orgs serving EU customers", tag: "mandatory" as const },
  { name: "NIST CSF", full: "Cybersecurity Framework 2.0", desc: "US-originated but globally used as a maturity and gap assessment tool. The 6-function structure maps well onto cloud environments and is board-friendly language.", when: "US companies, FedRAMP, maturity assessments, board reporting", tag: "common" as const },
  { name: "PCI DSS", full: "Payment Card Industry Data Security Standard v4.0", desc: "Mandatory for any org that stores, processes, or transmits cardholder data. 12 requirements. Cloud scope analysis (CDE) is complex and highly valued.", when: "E-commerce, fintech, retail, payment processors", tag: "common" as const },
  { name: "CIS Controls", full: "Center for Internet Security Controls v8", desc: "18 prioritised security controls with cloud-specific Implementation Groups. Practical, prescriptive, and widely used as a baseline hardening standard.", when: "Hardening assessments, gap analysis baseline, cyber insurance requirements", tag: "common" as const },
  { name: "HIPAA", full: "Health Insurance Portability and Accountability Act", desc: "US federal law governing Protected Health Information (PHI). Technical, administrative, and physical safeguards. Cloud providers must sign BAAs.", when: "Healthcare, health-tech, clinical research, insurance", tag: "sector" as const },
  { name: "DORA", full: "Digital Operational Resilience Act (EU)", desc: "EU regulation effective Jan 2025 for financial entities and their ICT providers. Covers ICT risk management, incident reporting, TLPT testing, and third-party risk.", when: "Banks, insurers, investment firms, fintech in EU/UK", tag: "sector" as const },
  { name: "NIS2", full: "Network and Information Systems Directive 2", desc: "Expands NIS1 scope to more sectors and supply chains. Stricter incident reporting, management accountability, and supply chain security requirements.", when: "Critical infrastructure, MSPs, digital service providers in EU", tag: "sector" as const },
];

/* ── CAREER PATHS ────────────────────────────────── */
const careers = [
  { cls: "cc-a", accent: "var(--teal)",   icon: "🔎", title: "GRC Analyst",              salary: "£35,000–£55,000 · Entry to Mid", items: ["Control testing and evidence collection", "Policy documentation and maintenance", "Audit support and RFI responses", "Risk register updates and tracking", "Vendor questionnaire responses (SIG, CAIQ)"] },
  { cls: "cc-b", accent: "var(--amber)",  icon: "📋", title: "GRC Manager / Lead",        salary: "£60,000–£90,000 · Mid to Senior", items: ["Own framework certifications end-to-end", "Lead gap assessments and remediation", "Present risk reports to leadership", "Manage GRC platform and tooling", "Oversee team of analysts"] },
  { cls: "cc-c", accent: "var(--purple)", icon: "💼", title: "GRC Consultant",             salary: "£50,000–£90,000 · Day rate £400–700", items: ["ISO 27001 / SOC 2 implementation projects", "Gap assessments across multiple clients", "Breadth of industry exposure quickly", "Often through a Big 4 or boutique firm", "Strong career accelerator path"] },
  { cls: "cc-d", accent: "var(--blue)",   icon: "🧾", title: "IT / Cloud Auditor",         salary: "£45,000–£75,000 · Internal or External", items: ["Independent assessment of controls", "Internal audit or external firm", "CISA certification highly valued", "Regulated industries: banking, insurance", "Often pathway into senior GRC or CISO roles"] },
  { cls: "cc-e", accent: "var(--red)",    icon: "🔏", title: "Data Protection Officer",    salary: "£55,000–£95,000 · Specialist Track", items: ["GDPR accountability and advisory role", "DPIAs, RoPA management, DSARs", "Regulator engagement (ICO, CNIL)", "IAPP CIPP/E certification essential", "Cloud data governance expertise premium"] },
  { cls: "cc-f", accent: "var(--amber)",  icon: "🏗", title: "Security Architect (GRC)",  salary: "£85,000–£130,000 · Senior Track", items: ["Design controls into architecture from day one", "Compliance by design — not bolt-on", "Works across GRC and engineering teams", "Needs both technical and framework depth", "Intersection of GRC and cloud security"] },
];

/* ── RESOURCES ───────────────────────────────────── */
const resources = [
  { type: "📄 Primary Source", name: "ISO 27001:2022 Standard", desc: "Read the actual standard, not just summaries. BSI offers access. Non-negotiable for ISO roles." },
  { type: "📄 Primary Source", name: "NIST CSF 2.0 (free)", desc: "Download from NIST directly at csrc.nist.gov. Free, authoritative, referenced in almost every US-adjacent role." },
  { type: "🌐 Website", name: "CSA Cloud Controls Matrix", desc: "Free CCM and CAIQ from cloudsecurityalliance.org — the definitive cloud-specific control framework." },
  { type: "🌐 Website", name: "ICO Guidance (GDPR)", desc: "ico.org.uk publishes plain-English GDPR guidance. Better than most paid training for practical application." },
  { type: "📚 Learning", name: "ISACA Learning", desc: "Official CISA, CISM, CRISC, CGEIT prep. Expensive but the best structured prep for ISACA certifications." },
  { type: "📚 Learning", name: "IAPP Training", desc: "Essential for CIPP/E (EU privacy) and CIPM. iapp.org — join as member for research and model clauses." },
  { type: "📚 Learning", name: "A Cloud Guru / Pluralsight", desc: "Best for cloud fundamentals (AWS, Azure, GCP) with hands-on sandboxes. Bridges the GRC-to-cloud gap quickly." },
  { type: "🛠 Free Tool", name: "Prowler (Open Source)", desc: "Run against your AWS free tier. Outputs CIS, GDPR, SOC 2, ISO 27001 findings. Best free tool to bridge cloud and compliance." },
  { type: "📖 Book", name: "The Privacy Engineer's Manifesto", desc: "Best practical book on operationalising privacy by design in technology systems." },
  { type: "🎧 Podcast", name: "IAPP Privacy Advisor Podcast", desc: "Regulatory updates, DPA decisions, enforcement trends. Essential listening for any privacy or GRC professional." },
  { type: "🌐 Community", name: "ISACA & (ISC)² Chapters", desc: "Free events, mentoring, and networking. Dundee/Edinburgh chapters in Scotland — attend even as a student member." },
  { type: "🎧 Podcast", name: "Risky Business", desc: "Weekly security news and interviews. Keeps you current on breaches, regulations, and industry thinking." },
];

const readiness = [
  { title: "🎓 Certifications", items: [
    { s: true,  t: "CompTIA Security+ achieved" },
    { s: true,  t: "ISO 27001 Lead Implementer or CISA achieved" },
    { s: false, t: "AWS Cloud Practitioner or AZ-900 achieved (cloud fluency)" },
    { s: false, t: "CCSP in progress or planned (validates cloud + security depth)" },
    { s: false, t: "IAPP CIPP/E if targeting privacy/DPO track" },
  ]},
  { title: "📁 Portfolio Evidence", items: [
    { s: true,  t: "ISO 27001 gap assessment for a fictitious cloud org" },
    { s: true,  t: "Sample risk register with 10+ risks assessed and treated" },
    { s: false, t: "Cloud security policy (IS policy + Access Control)" },
    { s: false, t: "Sample DPIA for a cloud data processing scenario" },
    { s: false, t: "Run Prowler against a personal AWS/Azure account; mapped findings to CIS" },
    { s: false, t: "Signed up for a free tier on Drata or Vanta to understand the UI" },
  ]},
  { title: "🧠 Knowledge Depth", items: [
    { s: true,  t: "Can explain shared responsibility model for all three clouds" },
    { s: true,  t: "Can describe ISO 27001 certification journey end to end" },
    { s: false, t: "Can map a control to ISO 27001, SOC 2, and NIST simultaneously" },
    { s: false, t: "Knows GDPR breach notification process cold (72 hours)" },
    { s: false, t: "Understands control design vs operating effectiveness testing" },
  ]},
  { title: "🎤 Interview Readiness", items: [
    { s: true,  t: "8 STAR-format stories prepared for behavioural questions" },
    { s: true,  t: "Can walk through an ISO 27001 implementation plan in 5 minutes" },
    { s: false, t: "Researched target company's compliance posture (public trust page)" },
    { s: false, t: "Can explain risk to a non-technical stakeholder clearly" },
    { s: false, t: "LinkedIn profile lists frameworks, tools, and certs prominently" },
  ]},
];

/* ── EXTRA SECTIONS ──────────────────────────────── */
function ExtraSections(): ReactNode {
  return (
    <>
      {/* Frameworks */}
      <section id="frameworks" className="section">
        <div className="section-header">
          <span className="section-num t-display">08</span>
          <span className="section-title">Compliance Frameworks</span>
          <div className="section-rule" />
        </div>
        <div className="fw-grid">
          {frameworks.map(fw => (
            <div key={fw.name} className={`fw-card fw-${fw.tag}`}>
              <span className={`fw-badge ${fw.tag}`}>
                {fw.tag === "mandatory" ? "Must Know" : fw.tag === "common" ? "Very Common" : "Sector-Specific"}
              </span>
              <div className="fw-name t-display">{fw.name}</div>
              <div className="fw-full t-mono">{fw.full}</div>
              <div className="fw-desc">{fw.desc}</div>
              <div className="fw-when"><strong>When you&apos;ll use it:</strong> {fw.when}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GRC Tools */}
      <section id="tools" className="section">
        <div className="section-header">
          <span className="section-num t-display">09</span>
          <span className="section-title">GRC Tools Ecosystem</span>
          <div className="section-rule" />
        </div>
        <div className="tools-grid">
          <div className="tool-col">
            <div className="tool-col-head">🤖 Automated Compliance</div>
            {[{n:"Drata",d:"SOC 2, ISO 27001, HIPAA automation. Integrates with cloud APIs for evidence. Most popular startup choice."},{n:"Vanta",d:"Similar to Drata. Strong for SOC 2 and ISO 27001. Good UX. Popular in UK/EU markets."},{n:"Secureframe",d:"Multi-framework automation including HIPAA, PCI DSS. Strong vendor trust portal."},{n:"Sprinto",d:"Growing platform, strong in ISO 27001 for SMEs and scaleups. Good value."}].map(t=>(
              <div key={t.n} className="tool-entry"><div className="tool-name">{t.n}</div><div className="tool-desc">{t.d}</div></div>
            ))}
          </div>
          <div className="tool-col">
            <div className="tool-col-head">🏢 Enterprise GRC Platforms</div>
            {[{n:"ServiceNow GRC",d:"Enterprise standard. Policy, risk, audit, vendor modules. Learning it is highly marketable."},{n:"RSA Archer",d:"Legacy enterprise GRC still common in large banks and regulated industries."},{n:"OneTrust",d:"Privacy, third-party risk, and ESG. Industry leader for GDPR/CCPA workflows and DPIA management."},{n:"LogicGate",d:"Flexible workflow-based GRC platform. Common in US mid-market firms."}].map(t=>(
              <div key={t.n} className="tool-entry"><div className="tool-name">{t.n}</div><div className="tool-desc">{t.d}</div></div>
            ))}
          </div>
          <div className="tool-col">
            <div className="tool-col-head">☁️ Cloud-Native Controls</div>
            {[{n:"AWS Security Hub",d:"Aggregates findings, runs CIS benchmarks, maps to NIST and PCI. Essential for AWS evidence."},{n:"Azure Policy + Defender",d:"Policy assignment, compliance reporting, and Defender Secure Score for evidence generation."},{n:"Google SCC",d:"GCP's centralised security findings, compliance monitoring, and misconfiguration alerts."},{n:"Wiz / Prisma Cloud / Orca",d:"CSPM tools that map cloud misconfigurations directly to framework controls."}].map(t=>(
              <div key={t.n} className="tool-entry"><div className="tool-name">{t.n}</div><div className="tool-desc">{t.d}</div></div>
            ))}
          </div>
          <div className="tool-col">
            <div className="tool-col-head">🛠 Practical & Open Source</div>
            {[{n:"Prowler",d:"Open source CSPM for AWS, Azure, GCP. Outputs CIS/NIST/SOC 2/GDPR findings. Run it against your lab."},{n:"OpenCSPM",d:"Open source cloud security posture management. Good for understanding how CSPM tools work internally."},{n:"GRC Spreadsheets",d:"Don't underestimate Excel/Sheets. Risk registers, control trackers, and SoAs all live in spreadsheets."},{n:"Confluence + Jira",d:"Policy documentation and control/finding tracking. Most organisations use Atlassian."}].map(t=>(
              <div key={t.n} className="tool-entry"><div className="tool-name">{t.n}</div><div className="tool-desc">{t.d}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section id="careers" className="section">
        <div className="section-header">
          <span className="section-num t-display">10</span>
          <span className="section-title">GRC Career Paths</span>
          <div className="section-rule" />
        </div>
        <div className="career-grid">
          {careers.map(c => (
            <div key={c.title} className="career-card">
              <div className="career-card-accent" style={{ background: c.accent }} />
              <span className="career-icon">{c.icon}</span>
              <div className="career-title">{c.title}</div>
              <div className="career-salary">{c.salary}</div>
              <ul className="career-items">
                {c.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Readiness */}
      <section id="readiness" className="section">
        <div className="section-header">
          <span className="section-num t-display">11</span>
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
          <span className="section-num t-display">12</span>
          <span className="section-title">Key Resources</span>
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
export default function GRCPage() {
  return (
    <RoadmapShell
      badge="Governance Track"
      title={<>GOVERNANCE<br />RISK &amp;<br />COMPLIANCE</>}
      accent="var(--teal)"
      desc="A practitioner-built guide for transitioning into Cloud GRC roles — covering frameworks, tools, audit skills, and everything you need to compete for positions at consultancies, enterprises, and regulators."
      stats={[
        { val: "18mo", label: "Time to job-ready" },
        { val: "9",    label: "Frameworks covered" },
        { val: "5",    label: "Learning phases" },
        { val: "6",    label: "Career pathways" },
      ]}
      phases={phases}
      cloudTabs={cloudTabs}
      skillRoles={skillRoles}
      sections={<ExtraSections />}
      routeTitle="Cloud GRC Roadmap · 2025"
    />
  );
}
