(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9344:(e,a,r)=>{"use strict";r.r(a),r.d(a,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>l,routeModule:()=>x,tree:()=>d}),r(908),r(1506),r(5866);var t=r(3191),i=r(8716),s=r(7922),n=r.n(s),o=r(5231),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);r.d(a,c);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,908)),"/workspaces/roadmap-career/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,1506)),"/workspaces/roadmap-career/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],l=["/workspaces/roadmap-career/app/page.tsx"],p="/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new t.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4641:(e,a,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},8430:(e,a,r)=>{Promise.resolve().then(r.t.bind(r,9404,23))},5303:()=>{},1506:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>s,metadata:()=>i});var t=r(9510);let i={title:"Security Roadmaps",description:"Practitioner-built roadmaps for Cloud Security Engineering and Cloud GRC — covering AWS, Azure, GCP and all major compliance frameworks."};function s({children:e}){return(0,t.jsxs)("html",{lang:"en",children:[(0,t.jsxs)("head",{children:[t.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),t.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),t.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&family=Playfair+Display:wght@400;700;900&family=DM+Mono:wght@300;400;500&display=swap",rel:"stylesheet"})]}),t.jsx("body",{style:{margin:0,padding:0},children:e})]})}},908:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>s});var t=r(9510),i=r(7371);function s(){return(0,t.jsxs)(t.Fragment,{children:[t.jsx("style",{children:`
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
      `}),t.jsx("div",{className:"grid-bg"}),t.jsx("div",{className:"noise"}),(0,t.jsxs)("div",{className:"page",children:[t.jsx("div",{className:"eyebrow",children:"Practitioner-Built \xb7 2025 Edition"}),(0,t.jsxs)("h1",{children:["SECURITY",t.jsx("br",{}),t.jsx("span",{children:"ROADMAPS"})]}),t.jsx("p",{className:"tagline",children:"Two career-defining roadmaps built by practitioners for practitioners. Pick your path and follow the phases to job-ready."}),(0,t.jsxs)("div",{className:"cards",children:[(0,t.jsxs)(i.default,{href:"/cloud-security",className:"card card-eng",children:[t.jsx("div",{className:"card-glow"}),t.jsx("span",{className:"card-badge",children:"Engineering Track"}),t.jsx("span",{className:"card-icon",children:"\uD83D\uDEE1️"}),(0,t.jsxs)("div",{className:"card-title",children:["Cloud Security",t.jsx("br",{}),"Engineer"]}),t.jsx("p",{className:"card-desc",children:"Hands-on technical security across AWS, Azure and GCP. From foundations through to detection engineering, IAM, DevSecOps, container security, and incident response."}),(0,t.jsxs)("div",{className:"card-meta",children:[t.jsx("div",{className:"card-meta-item",children:"5 progressive phases"}),t.jsx("div",{className:"card-meta-item",children:"12–18 months to job-ready"}),t.jsx("div",{className:"card-meta-item",children:"AWS \xb7 Azure \xb7 GCP service deep-dives"}),t.jsx("div",{className:"card-meta-item",children:"SCS-C02 \xb7 AZ-500 \xb7 GCP PSE certs mapped"})]}),t.jsx("div",{className:"card-cta",children:"View Roadmap →"})]}),(0,t.jsxs)(i.default,{href:"/grc",className:"card card-grc",children:[t.jsx("div",{className:"card-glow"}),t.jsx("span",{className:"card-badge",children:"Governance Track"}),t.jsx("span",{className:"card-icon",children:"\uD83D\uDCCB"}),(0,t.jsxs)("div",{className:"card-title",children:["Governance, Risk",t.jsx("br",{}),"& Compliance"]}),t.jsx("p",{className:"card-desc",children:"Frameworks, auditing, risk management, and cloud compliance across ISO 27001, SOC 2, GDPR, NIST, PCI DSS and more. Six distinct career pathways covered."}),(0,t.jsxs)("div",{className:"card-meta",children:[t.jsx("div",{className:"card-meta-item",children:"5 progressive phases"}),t.jsx("div",{className:"card-meta-item",children:"12–18 months to job-ready"}),t.jsx("div",{className:"card-meta-item",children:"9 framework deep-dives"}),t.jsx("div",{className:"card-meta-item",children:"CISA \xb7 CISM \xb7 CCSP \xb7 ISO LI certs mapped"})]}),t.jsx("div",{className:"card-cta",children:"View Roadmap →"})]})]}),(0,t.jsxs)("div",{className:"divider-wrapper",children:[t.jsx("div",{className:"divider-line"}),t.jsx("span",{className:"divider-label",children:"Built for the UK & Global Market"}),t.jsx("div",{className:"divider-line"})]}),t.jsx("p",{className:"footer-text",children:"Security Roadmaps \xb7 2025 \xb7 Cloud Security Engineering & GRC"})]})]})}}};var a=require("../webpack-runtime.js");a.C(e);var r=e=>a(a.s=e),t=a.X(0,[819,783],()=>r(9344));module.exports=t})();