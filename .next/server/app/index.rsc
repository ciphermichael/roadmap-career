3:I[231,["231","static/chunks/231-bea070b1ecddfbbc.js","931","static/chunks/app/page-c1bfea09beb1ebce.js"],""]
4:I[9275,[],""]
5:I[1343,[],""]
2:T1a19,
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
      0:["YE8UlrNPWGGKxTIZtXPvw",[[["",{"children":["__PAGE__",{}]},"$undefined","$undefined",true],["",{"children":["__PAGE__",{},[["$L1",[["$","style",null,{"children":"$2"}],["$","div",null,{"className":"grid-bg"}],["$","div",null,{"className":"noise"}],["$","div",null,{"className":"page","children":[["$","div",null,{"className":"eyebrow","children":"Practitioner-Built · 2025 Edition"}],["$","h1",null,{"children":["SECURITY",["$","br",null,{}],["$","span",null,{"children":"ROADMAPS"}]]}],["$","p",null,{"className":"tagline","children":"Two career-defining roadmaps built by practitioners for practitioners. Pick your path and follow the phases to job-ready."}],["$","div",null,{"className":"cards","children":[["$","$L3",null,{"href":"/cloud-security","className":"card card-eng","children":[["$","div",null,{"className":"card-glow"}],["$","span",null,{"className":"card-badge","children":"Engineering Track"}],["$","span",null,{"className":"card-icon","children":"🛡️"}],["$","div",null,{"className":"card-title","children":["Cloud Security",["$","br",null,{}],"Engineer"]}],["$","p",null,{"className":"card-desc","children":"Hands-on technical security across AWS, Azure and GCP. From foundations through to detection engineering, IAM, DevSecOps, container security, and incident response."}],["$","div",null,{"className":"card-meta","children":[["$","div",null,{"className":"card-meta-item","children":"5 progressive phases"}],["$","div",null,{"className":"card-meta-item","children":"12–18 months to job-ready"}],["$","div",null,{"className":"card-meta-item","children":"AWS · Azure · GCP service deep-dives"}],["$","div",null,{"className":"card-meta-item","children":"SCS-C02 · AZ-500 · GCP PSE certs mapped"}]]}],["$","div",null,{"className":"card-cta","children":"View Roadmap →"}]]}],["$","$L3",null,{"href":"/grc","className":"card card-grc","children":[["$","div",null,{"className":"card-glow"}],["$","span",null,{"className":"card-badge","children":"Governance Track"}],["$","span",null,{"className":"card-icon","children":"📋"}],["$","div",null,{"className":"card-title","children":["Governance, Risk",["$","br",null,{}],"& Compliance"]}],["$","p",null,{"className":"card-desc","children":"Frameworks, auditing, risk management, and cloud compliance across ISO 27001, SOC 2, GDPR, NIST, PCI DSS and more. Six distinct career pathways covered."}],["$","div",null,{"className":"card-meta","children":[["$","div",null,{"className":"card-meta-item","children":"5 progressive phases"}],["$","div",null,{"className":"card-meta-item","children":"12–18 months to job-ready"}],["$","div",null,{"className":"card-meta-item","children":"9 framework deep-dives"}],["$","div",null,{"className":"card-meta-item","children":"CISA · CISM · CCSP · ISO LI certs mapped"}]]}],["$","div",null,{"className":"card-cta","children":"View Roadmap →"}]]}]]}],["$","div",null,{"className":"divider-wrapper","children":[["$","div",null,{"className":"divider-line"}],["$","span",null,{"className":"divider-label","children":"Built for the UK & Global Market"}],["$","div",null,{"className":"divider-line"}]]}],["$","p",null,{"className":"footer-text","children":"Security Roadmaps · 2025 · Cloud Security Engineering & GRC"}]]}]]],null],null]},[["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&family=Playfair+Display:wght@400;700;900&family=DM+Mono:wght@300;400;500&display=swap","rel":"stylesheet"}]]}],["$","body",null,{"style":{"margin":0,"padding":0},"children":["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[],"styles":null}]}]]}],null],null],[null,[null,"$L6"]]]]]
6:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Security Roadmaps"}],["$","meta","3",{"name":"description","content":"Practitioner-built roadmaps for Cloud Security Engineering and Cloud GRC — covering AWS, Azure, GCP and all major compliance frameworks."}]]
1:null
