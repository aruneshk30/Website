<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Arunesh Kumar — Product Manager</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;background:#f8fafc;color:#0f172a;overflow-x:hidden;}

/* ── ANIMATED BACKGROUND ── */
.bg-canvas{position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none;}
.orb{position:absolute;border-radius:50%;filter:blur(80px);opacity:0.35;animation:drift 18s ease-in-out infinite;}
.orb1{width:600px;height:600px;background:radial-gradient(circle,#c7d2fe,#818cf8);top:-200px;right:-100px;animation-delay:0s;}
.orb2{width:400px;height:400px;background:radial-gradient(circle,#bae6fd,#38bdf8);bottom:10%;left:-100px;animation-delay:-6s;}
.orb3{width:300px;height:300px;background:radial-gradient(circle,#d1fae5,#34d399);top:40%;right:20%;animation-delay:-12s;}
.grid-lines{position:absolute;inset:0;background-image:linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px);background-size:48px 48px;}
.dots{position:absolute;inset:0;background-image:radial-gradient(circle,rgba(99,102,241,0.12) 1px,transparent 1px);background-size:32px 32px;}
@keyframes drift{0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(40px,-30px) scale(1.05);}66%{transform:translate(-20px,40px) scale(0.95);}};

/* ── FLOATING PARTICLES ── */
.particles{position:fixed;inset:0;z-index:0;pointer-events:none;}
.particle{position:absolute;border-radius:50%;animation:float-up linear infinite;}
@keyframes float-up{0%{transform:translateY(100vh) scale(0);opacity:0;}10%{opacity:1;}90%{opacity:0.5;}100%{transform:translateY(-100px) scale(1);opacity:0;}}

/* ── LAYOUT ── */
main{position:relative;z-index:1;}
.container{max-width:1200px;margin:0 auto;padding:0 24px;}

/* ── NAV ── */
nav{position:sticky;top:0;z-index:100;background:rgba(248,250,252,0.85);backdrop-filter:blur(16px);border-bottom:1px solid rgba(226,232,240,0.8);padding:16px 0;}
.nav-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;justify-content:space-between;align-items:center;}
.nav-logo{font-size:17px;font-weight:800;color:#0f172a;letter-spacing:-0.5px;}
.nav-logo span{background:linear-gradient(135deg,#6366f1,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.nav-links{display:flex;gap:28px;list-style:none;}
.nav-links a{font-size:14px;color:#475569;text-decoration:none;font-weight:500;transition:color 0.2s;}
.nav-links a:hover{color:#0f172a;}
.nav-cta{background:linear-gradient(135deg,#1e293b,#4338ca);color:#fff;padding:9px 20px;border-radius:12px;font-size:13px;font-weight:600;text-decoration:none;transition:transform 0.2s,box-shadow 0.2s;}
.nav-cta:hover{transform:translateY(-1px);box-shadow:0 8px 24px rgba(99,102,241,0.3);}

/* ── HERO ── */
.hero{min-height:100vh;display:flex;align-items:center;padding:80px 0 60px;position:relative;overflow:hidden;}
.hero::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(238,242,255,0.6) 0%,rgba(248,250,252,0) 100%);}
.hero-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:1.1fr 0.9fr;gap:60px;align-items:center;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.9);border:1px solid #e2e8f0;border-radius:100px;padding:8px 16px;font-size:12px;font-weight:600;color:#64748b;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:24px;backdrop-filter:blur(8px);}
.hero-badge .dot{width:8px;height:8px;border-radius:50%;background:#22c55e;animation:pulse-dot 2s ease-in-out infinite;}
@keyframes pulse-dot{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.4);}50%{box-shadow:0 0 0 6px rgba(34,197,94,0);}}
.hero h1{font-size:clamp(42px,5.5vw,72px);font-weight:700;line-height:1.05;letter-spacing:-2px;color:#0f172a;margin-bottom:20px;}
.hero h1 .gradient{background:linear-gradient(135deg,#0f172a 0%,#4338ca 50%,#3b82f6 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.hero-sub{font-size:18px;color:#475569;line-height:1.75;max-width:520px;margin-bottom:36px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:52px;}
.btn-primary{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#1e293b,#4338ca);color:#fff;padding:14px 28px;border-radius:14px;font-size:14px;font-weight:600;text-decoration:none;transition:transform 0.2s,box-shadow 0.2s;}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(67,56,202,0.35);}
.btn-secondary{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.9);border:1px solid #e2e8f0;color:#374151;padding:14px 28px;border-radius:14px;font-size:14px;font-weight:600;text-decoration:none;backdrop-filter:blur(8px);transition:all 0.2s;}
.btn-secondary:hover{border-color:#a5b4fc;background:#eef2ff;transform:translateY(-2px);}
.stats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;}
.stat-card{background:rgba(255,255,255,0.85);border:1px solid rgba(226,232,240,0.8);border-radius:20px;padding:20px;backdrop-filter:blur(8px);transition:transform 0.2s,box-shadow 0.2s;}
.stat-card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(15,23,42,0.08);}
.stat-card:nth-child(1){background:linear-gradient(135deg,rgba(239,246,255,0.95),rgba(238,242,255,0.95));}
.stat-card:nth-child(2){background:linear-gradient(135deg,rgba(236,253,245,0.95),rgba(209,250,229,0.95));}
.stat-card:nth-child(3){background:linear-gradient(135deg,rgba(255,251,235,0.95),rgba(254,243,199,0.95));}
.stat-card:nth-child(4){background:linear-gradient(135deg,rgba(245,243,255,0.95),rgba(237,233,254,0.95));}
.stat-val{font-size:28px;font-weight:800;color:#0f172a;letter-spacing:-1px;}
.stat-label{font-size:12px;color:#64748b;margin-top:4px;line-height:1.4;}

/* Hero right */
.hero-right{position:relative;display:flex;justify-content:center;}
.hero-img-wrap{position:relative;z-index:2;}
.hero-img-wrap img{width:100%;max-width:460px;object-fit:contain;filter:drop-shadow(0 40px 60px rgba(15,23,42,0.15));border-radius:24px;}
.ring{position:absolute;border-radius:50%;border:1px solid;animation:spin linear infinite;}
.ring1{width:360px;height:360px;border-color:rgba(99,102,241,0.25);top:50%;left:50%;transform:translate(-50%,-50%);animation-duration:32s;}
.ring2{width:460px;height:460px;border-color:rgba(59,130,246,0.15);top:50%;left:50%;transform:translate(-50%,-50%);animation-duration:48s;animation-direction:reverse;}
.ring-dot{position:absolute;width:10px;height:10px;border-radius:50%;background:#818cf8;box-shadow:0 0 20px rgba(99,102,241,0.8);animation:pulse-glow 3s ease-in-out infinite;}
.ring-dot2{width:8px;height:8px;background:#38bdf8;box-shadow:0 0 16px rgba(56,189,248,0.8);animation-delay:-1.5s;}
@keyframes spin{to{transform:translate(-50%,-50%) rotate(360deg);}}
@keyframes pulse-glow{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(1.4);}}
.hero-tag{position:absolute;bottom:20px;left:-20px;z-index:10;background:rgba(255,255,255,0.95);border:1px solid #e2e8f0;border-radius:18px;padding:14px 20px;box-shadow:0 20px 40px rgba(15,23,42,0.12);backdrop-filter:blur(12px);}
.hero-tag p{font-size:13px;font-weight:700;color:#0f172a;}
.hero-tag span{font-size:12px;color:#64748b;display:block;margin-top:3px;max-width:200px;line-height:1.5;}

/* ── SECTION BASE ── */
section{padding:88px 0;}
.section-eyebrow{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.3em;color:#6366f1;margin-bottom:12px;}
.section-title{font-size:clamp(28px,3.5vw,40px);font-weight:700;letter-spacing:-1px;color:#0f172a;margin-bottom:12px;}
.section-sub{font-size:16px;color:#475569;line-height:1.7;max-width:560px;}
.section-head{margin-bottom:52px;}

/* ── CARDS ── */
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}
.card{background:#fff;border:1px solid #e2e8f0;border-radius:24px;padding:28px;transition:transform 0.2s,box-shadow 0.2s;text-decoration:none;color:inherit;display:block;}
.card:hover{transform:translateY(-4px);box-shadow:0 20px 48px rgba(15,23,42,0.1);}
.card-eyebrow{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.3em;color:#94a3b8;margin-bottom:12px;}
.card h3{font-size:22px;font-weight:700;letter-spacing:-0.5px;color:#0f172a;margin-bottom:12px;line-height:1.3;}
.card p{font-size:14px;color:#64748b;line-height:1.7;}
.card-footer{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:#0f172a;margin-top:20px;}
.card-footer svg{transition:transform 0.2s;}
.card:hover .card-footer svg{transform:translateX(4px);}
.card-badge{margin-top:16px;font-size:12px;font-weight:500;color:#64748b;}
.card-icon{width:48px;height:48px;border-radius:14px;border:1px solid #e2e8f0;background:#f8fafc;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}

/* Work cards */
.work-card{background:#fff;border:1px solid #e2e8f0;border-radius:24px;padding:28px;transition:transform 0.2s,box-shadow 0.2s;text-decoration:none;color:inherit;display:block;}
.work-card:hover{transform:translateY(-4px);box-shadow:0 20px 48px rgba(15,23,42,0.1);}
.work-card-top{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:20px;}
.work-icon{width:44px;height:44px;flex-shrink:0;border-radius:12px;border:1px solid #e2e8f0;background:#f8fafc;display:flex;align-items:center;justify-content:center;color:#475569;}
.impact-badge{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:#0f172a;margin-top:20px;}

/* AI System cards */
.ai-card{background:#f8fafc;border:1px solid #e2e8f0;border-radius:24px;padding:28px;transition:transform 0.2s,box-shadow 0.2s;text-decoration:none;color:inherit;display:block;}
.ai-card:hover{transform:translateY(-4px);box-shadow:0 20px 48px rgba(99,102,241,0.12);}

/* ── SECTIONS BG ── */
.bg-white-section{background:rgba(255,255,255,0.7);}
.bg-light-section{background:rgba(248,250,252,0.8);}

/* ── FOOTER ── */
footer{border-top:1px solid #e2e8f0;background:rgba(255,255,255,0.9);padding:60px 0;}
.footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}
.footer-brand p{font-size:14px;color:#475569;line-height:1.7;margin-top:12px;max-width:260px;}
.footer-col h4{font-size:13px;font-weight:700;color:#0f172a;padding-bottom:10px;border-bottom:1px solid #e2e8f0;margin-bottom:16px;}
.footer-col a{display:block;font-size:13px;color:#475569;text-decoration:none;margin-bottom:10px;transition:color 0.2s;}
.footer-col a:hover{color:#4338ca;}
.footer-icons{display:flex;gap:10px;flex-wrap:wrap;margin-top:4px;}
.footer-icon{width:42px;height:42px;border-radius:12px;border:1px solid #e2e8f0;background:#fff;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#475569;font-size:16px;transition:all 0.2s;}
.footer-icon:hover{border-color:#a5b4fc;color:#4338ca;transform:translateY(-2px);}
.footer-bottom{margin-top:40px;padding-top:20px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;text-align:center;}

/* ── ANIMATIONS ── */
.fade-in{opacity:0;transform:translateY(24px);transition:opacity 0.6s ease,transform 0.6s ease;}
.fade-in.visible{opacity:1;transform:translateY(0);}

/* ── RESPONSIVE ── */
@media(max-width:1024px){
  .hero-inner{grid-template-columns:1fr;gap:40px;}
  .hero-right{display:none;}
  .grid-3{grid-template-columns:repeat(2,1fr);}
  .footer-grid{grid-template-columns:1fr 1fr;}
}
@media(max-width:640px){
  .grid-3,.grid-2{grid-template-columns:1fr;}
  .stats-grid{grid-template-columns:1fr 1fr;}
  .nav-links{display:none;}
  .footer-grid{grid-template-columns:1fr;}
  .hero{padding:60px 0 40px;}
}

/* SVG arrows inline */
.arrow{display:inline-block;transition:transform 0.2s;}
.card:hover .arrow{transform:translateX(4px);}
</style>
</head>
<body>

<!-- Animated Background -->
<div class="bg-canvas">
  <div class="grid-lines"></div>
  <div class="dots"></div>
  <div class="orb orb1"></div>
  <div class="orb orb2"></div>
  <div class="orb orb3"></div>
</div>

<!-- Floating Particles -->
<div class="particles" id="particles"></div>

<!-- NAV -->
<nav>
  <div class="nav-inner">
    <div class="nav-logo">Arunesh <span>Kumar</span></div>
    <ul class="nav-links">
      <li><a href="#work">Work</a></li>
      <li><a href="#ai-systems">AI Systems</a></li>
      <li><a href="#experience">Experience</a></li>
    </ul>
    <a href="mailto:aruneshk30@gmail.com" class="nav-cta">Connect →</a>
  </div>
</nav>

<main>

<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-inner">
    <div class="hero-content fade-in">
      <div class="hero-badge"><span class="dot"></span> Arunesh Kumar · Product Manager</div>
      <h1>Product Manager<br/><span class="gradient">Growth & Digital<br/>Strategy</span></h1>
      <p class="hero-sub">I build revenue-driving product experiences across e-commerce systems, experimentation, and AI-powered workflows.</p>
      <div class="hero-btns">
        <a href="#work" class="btn-primary">View Work <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
        <a href="#connect" class="btn-secondary">Connect</a>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-val">₹1.5Cr+</div><div class="stat-label">monthly revenue impact</div></div>
        <div class="stat-card"><div class="stat-val">500+</div><div class="stat-label">bundle SKUs automated</div></div>
        <div class="stat-card"><div class="stat-val">20→14%</div><div class="stat-label">ATC diversion reduced</div></div>
        <div class="stat-card"><div class="stat-val">30%</div><div class="stat-label">sales quoting improvement</div></div>
      </div>
    </div>
    <div class="hero-right">
      <div style="position:relative;width:460px;height:520px;display:flex;align-items:center;justify-content:center;">
        <div class="ring ring1"></div>
        <div class="ring ring2"></div>
        <div class="ring-dot" style="top:60px;right:80px;"></div>
        <div class="ring-dot ring-dot2" style="bottom:100px;left:60px;"></div>
        <div class="hero-img-wrap">
          <img src="/profile.png" alt="Arunesh Kumar" onerror="this.style.display='none';this.parentElement.innerHTML='<div style=\'width:280px;height:320px;background:linear-gradient(135deg,#eef2ff,#e0e7ff);border-radius:24px;display:flex;align-items:center;justify-content:center;font-size:80px;\'>👤</div>'"/>
        </div>
        <div class="hero-tag">
          <p>Product · Growth · Systems</p>
          <span>Building revenue-driving product<br/>experiences and AI workflows.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PREVIEW SECTIONS -->
<section class="bg-white-section" style="padding:80px 0;">
  <div class="container">
    <div class="section-head fade-in">
      <p class="section-eyebrow">Overview</p>
      <h2 class="section-title">Three spaces, one story</h2>
      <p class="section-sub">Dedicated pages for projects, AI systems, and experience — scroll down for a preview of each.</p>
    </div>
    <div class="grid-3">
      <a href="#work" class="card fade-in">
        <p class="card-eyebrow">Preview</p>
        <h3>Projects</h3>
        <p>Quick glimpse of case studies. Full problem, solution, and impact story below.</p>
        <p class="card-badge">Checkout • Pricing • Calculator</p>
        <div class="card-footer">View Projects <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </a>
      <a href="#ai-systems" class="card fade-in">
        <p class="card-eyebrow">Preview</p>
        <h3>AI Systems</h3>
        <p>PM Hub and 9-Agent CRO Workflow — AI-powered tools built for leverage.</p>
        <p class="card-badge">Research hub • CRO workflow</p>
        <div class="card-footer">View Systems <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </a>
      <a href="#experience" class="card fade-in">
        <p class="card-eyebrow">Preview</p>
        <h3>Experience</h3>
        <p>Short preview of Sierra and BoostGrad. Full journey in the experience section.</p>
        <p class="card-badge">Sierra • BoostGrad</p>
        <div class="card-footer">View Experience <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </a>
    </div>
  </div>
</section>

<!-- WORK / PROJECTS -->
<section id="work" class="bg-light-section">
  <div class="container">
    <div class="section-head fade-in">
      <p class="section-eyebrow">Projects</p>
      <h2 class="section-title">Impact through product</h2>
      <p class="section-sub">Three projects, measurable outcomes. Each one driven by data, UX insight, and systematic thinking.</p>
    </div>
    <div class="grid-3">
      <div class="work-card fade-in">
        <div class="work-card-top">
          <div>
            <p class="card-eyebrow">Case Study</p>
            <h3>Checkout Funnel Optimization</h3>
          </div>
          <div class="work-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg></div>
        </div>
        <p style="font-size:14px;color:#64748b;line-height:1.7;">Reduced friction in checkout using behavioral analysis, Clarity recordings, and targeted UX improvements across the critical path.</p>
        <div class="impact-badge">ATC diversion 20% → 14% <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </div>
      <div class="work-card fade-in">
        <div class="work-card-top">
          <div>
            <p class="card-eyebrow">Case Study</p>
            <h3>Automated SKU Pricing System</h3>
          </div>
          <div class="work-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
        </div>
        <p style="font-size:14px;color:#64748b;line-height:1.7;">Automated pricing cascade for 500+ bundled SKUs with variant-level mapping and sync logic to eliminate manual errors.</p>
        <div class="impact-badge">~₹35–40L monthly exposure protected <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </div>
      <div class="work-card fade-in">
        <div class="work-card-top">
          <div>
            <p class="card-eyebrow">Case Study</p>
            <h3>Real-Time Pricing Calculator</h3>
          </div>
          <div class="work-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        </div>
        <p style="font-size:14px;color:#64748b;line-height:1.7;">Built a live quoting flow for U.S. sales to reduce quoting time from days to real-time — enabling faster deal closures.</p>
        <div class="impact-badge">~₹1.5Cr additional monthly revenue <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </div>
    </div>
  </div>
</section>

<!-- AI SYSTEMS -->
<section id="ai-systems" class="bg-white-section">
  <div class="container">
    <div class="section-head fade-in">
      <p class="section-eyebrow">AI Systems</p>
      <h2 class="section-title">AI systems built for leverage</h2>
      <p class="section-sub">Two AI-powered systems designed to amplify PM and growth workflows through structured intelligence.</p>
    </div>
    <div class="grid-2">
      <a href="/ai-systems/pm-hub" class="ai-card fade-in">
        <div style="display:flex;align-items:flex-start;gap:16px;">
          <div class="card-icon">✦</div>
          <div>
            <h3>PM Research & Strategy Hub</h3>
            <p style="font-size:14px;color:#64748b;line-height:1.7;margin-top:8px;">AI-assisted product operating system for research, PRDs, prioritization, funnel analysis, hypothesis testing, and stakeholder communication — 17 modules in one place.</p>
          </div>
        </div>
        <div class="card-footer" style="margin-top:20px;">Open system <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </a>
      <a href="/ai-systems/9-agent-cro" class="ai-card fade-in">
        <div style="display:flex;align-items:flex-start;gap:16px;">
          <div class="card-icon">⚙</div>
          <div>
            <h3>9-Agent CRO Workflow</h3>
            <p style="font-size:14px;color:#64748b;line-height:1.7;margin-top:8px;">Multi-agent workflow for conversion analysis, UX diagnosis, and experimentation planning. Each agent handles a specific layer of the CRO stack.</p>
          </div>
        </div>
        <div class="card-footer" style="margin-top:20px;">Open system <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </a>
    </div>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience" class="bg-light-section">
  <div class="container">
    <div class="section-head fade-in">
      <p class="section-eyebrow">Experience</p>
      <h2 class="section-title">Experience snapshot</h2>
      <p class="section-sub">Two roles, both focused on measurable product and growth outcomes.</p>
    </div>
    <div class="grid-2">
      <div class="card fade-in">
        <p class="card-eyebrow">Current Role</p>
        <h3>Sierra Living Concepts</h3>
        <p>Product Manager driving pricing systems, checkout improvements, and real-time sales tooling. Working across product, engineering, and growth to ship revenue-impacting features.</p>
        <div class="card-footer" style="margin-top:20px;color:#6366f1;">Product Manager <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </div>
      <div class="card fade-in">
        <p class="card-eyebrow">Previous Role</p>
        <h3>BoostGrad</h3>
        <p>Digital strategy and growth analytics work focused on insights, dashboards, and student engagement. Built data pipelines and reporting systems that informed strategic decisions.</p>
        <div class="card-footer" style="margin-top:20px;color:#6366f1;">Growth & Analytics <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </div>
    </div>
  </div>
</section>

<!-- CONNECT / FOOTER -->
<section id="connect" style="background:linear-gradient(180deg,#eef2ff 0%,#f8fafc 100%);padding:80px 0 0;">
  <div class="container">
    <div class="section-head fade-in" style="text-align:center;max-width:600px;margin:0 auto 48px;">
      <p class="section-eyebrow">Let's Talk</p>
      <h2 class="section-title">Get in touch</h2>
      <p class="section-sub" style="margin:0 auto;">Open to product roles, collaborations, and conversations about growth, systems, and AI.</p>
    </div>

    <!-- Single big connect card -->
    <div class="fade-in" style="background:#fff;border:1px solid #e2e8f0;border-radius:28px;padding:48px 52px;box-shadow:0 24px 60px rgba(15,23,42,0.08);display:grid;grid-template-columns:1.4fr 1px 1fr;gap:48px;align-items:center;max-width:900px;margin:0 auto;">

      <!-- Left: bio -->
      <div>
        <div style="font-size:22px;font-weight:800;color:#0f172a;letter-spacing:-0.5px;margin-bottom:6px;">Arunesh Kumar</div>
        <div style="font-size:13px;font-weight:600;color:#6366f1;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:16px;">Product Manager</div>
        <p style="font-size:14px;color:#475569;line-height:1.75;margin-bottom:24px;">Building revenue-driving product experiences across e-commerce systems, experimentation, and AI-powered workflows.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <a href="mailto:aruneshk30@gmail.com" style="display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#1e293b,#4338ca);color:#fff;padding:11px 22px;border-radius:12px;font-size:13px;font-weight:600;text-decoration:none;transition:transform 0.2s,box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 10px 28px rgba(67,56,202,0.3)'" onmouseout="this.style.transform='';this.style.boxShadow=''">✉ Email me</a>
          <a href="/Arunesh_Kumar_Resume.pdf" target="_blank" style="display:inline-flex;align-items:center;gap:8px;background:#f8fafc;border:1px solid #e2e8f0;color:#374151;padding:11px 22px;border-radius:12px;font-size:13px;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor='#a5b4fc';this.style.background='#eef2ff'" onmouseout="this.style.borderColor='#e2e8f0';this.style.background='#f8fafc'">↓ Resume</a>
        </div>
      </div>

      <!-- Divider -->
      <div style="background:#e2e8f0;height:100%;min-height:180px;"></div>

      <!-- Right: links -->
      <div>
        <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.2em;color:#94a3b8;margin-bottom:20px;">Find me on</div>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <a href="https://linkedin.com/in/arunesh-k" target="_blank" style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-radius:14px;border:1px solid #e2e8f0;text-decoration:none;color:#0f172a;background:#f8fafc;transition:all 0.2s;" onmouseover="this.style.borderColor='#a5b4fc';this.style.background='#eef2ff';this.style.transform='translateX(4px)'" onmouseout="this.style.borderColor='#e2e8f0';this.style.background='#f8fafc';this.style.transform=''">
            <span style="font-size:20px;">in</span>
            <div><div style="font-size:13px;font-weight:600;">LinkedIn</div><div style="font-size:12px;color:#64748b;">arunesh-k</div></div>
            <svg style="margin-left:auto;" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="https://wa.me/919012666192" target="_blank" style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-radius:14px;border:1px solid #e2e8f0;text-decoration:none;color:#0f172a;background:#f8fafc;transition:all 0.2s;" onmouseover="this.style.borderColor='#bbf7d0';this.style.background='#f0fdf4';this.style.transform='translateX(4px)'" onmouseout="this.style.borderColor='#e2e8f0';this.style.background='#f8fafc';this.style.transform=''">
            <span style="font-size:20px;">💬</span>
            <div><div style="font-size:13px;font-weight:600;">WhatsApp</div><div style="font-size:12px;color:#64748b;">+91 90126 66192</div></div>
            <svg style="margin-left:auto;" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="https://calendly.com/your-link" target="_blank" style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-radius:14px;border:1px solid #e2e8f0;text-decoration:none;color:#0f172a;background:#f8fafc;transition:all 0.2s;" onmouseover="this.style.borderColor='#fde68a';this.style.background='#fffbeb';this.style.transform='translateX(4px)'" onmouseout="this.style.borderColor='#e2e8f0';this.style.background='#f8fafc';this.style.transform=''">
            <span style="font-size:20px;">📅</span>
            <div><div style="font-size:13px;font-weight:600;">Book a call</div><div style="font-size:12px;color:#64748b;">Calendly</div></div>
            <svg style="margin-left:auto;" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom nav bar -->
    <div style="margin-top:60px;padding:24px 0;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;">
      <span style="font-size:13px;color:#94a3b8;">© 2025 Arunesh Kumar · Product Manager</span>
      <div style="display:flex;gap:24px;">
        <a href="#home" style="font-size:13px;color:#64748b;text-decoration:none;">Home</a>
        <a href="#work" style="font-size:13px;color:#64748b;text-decoration:none;">Projects</a>
        <a href="#ai-systems" style="font-size:13px;color:#64748b;text-decoration:none;">AI Systems</a>
        <a href="#experience" style="font-size:13px;color:#64748b;text-decoration:none;">Experience</a>
      </div>
    </div>
  </div>
</section>

</main>

<script>
// Particles
const container = document.getElementById('particles');
const colors = ['#c7d2fe','#bae6fd','#d1fae5','#fde68a','#fbcfe8'];
for(let i=0;i<25;i++){
  const p=document.createElement('div');
  const size=Math.random()*6+3;
  p.className='particle';
  p.style.cssText=`
    width:${size}px;height:${size}px;
    background:${colors[Math.floor(Math.random()*colors.length)]};
    left:${Math.random()*100}%;
    animation-duration:${Math.random()*20+15}s;
    animation-delay:-${Math.random()*20}s;
    opacity:${Math.random()*0.5+0.2};
  `;
  container.appendChild(p);
}

// Scroll fade-in
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');}});
},{threshold:0.12});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));
</script>
</body>
</html>
