"use client";
import { useState, useRef, useEffect } from "react";

const MODULES = [
  {id:"dashboard",label:"Dashboard",icon:"🏠"},
  {id:"funnel",label:"Funnel Analysis",icon:"📉"},
  {id:"feature-research",label:"Feature Research",icon:"🔍"},
  {id:"hypothesis",label:"Hypothesis Builder",icon:"🧪"},
  {id:"analysis",label:"Qual & Quant Analysis",icon:"📊"},
  {id:"brainstorm",label:"Feature Brainstorm",icon:"💡"},
  {id:"prd",label:"PRD Writer",icon:"📝"},
  {id:"persona",label:"Persona Builder",icon:"👤"},
  {id:"competitive",label:"Competitive Intel",icon:"🎯"},
  {id:"okr",label:"OKR & Metrics",icon:"🏆"},
  {id:"journey",label:"User Journey",icon:"🗺️"},
  {id:"experiment",label:"A/B Test Planner",icon:"⚡"},
  {id:"repository",label:"Insight Repository",icon:"📚"},
  {id:"prioritization",label:"Prioritization",icon:"🎚️"},
  {id:"voc",label:"Voice of Customer",icon:"💬"},
  {id:"stakeholder",label:"Stakeholder Comms",icon:"🤝"},
  {id:"risk",label:"Risk & Assumptions",icon:"🛡️"},
];

const MQ: Record<string, { title: string; questions: { key: string; label: string; placeholder: string }[]; system: string }> = {
  "feature-research": { title: "Feature Research", questions: [{ key: "feature", label: "What feature or capability do you want to research?", placeholder: "e.g. AI-powered search, onboarding checklist..." }, { key: "product", label: "What product or platform is this for?", placeholder: "e.g. B2B SaaS analytics tool" }, { key: "users", label: "Who are the primary users?", placeholder: "e.g. data analysts, small business owners" }, { key: "problem", label: "What problem does this feature solve?", placeholder: "e.g. users cannot find relevant reports quickly" }, { key: "competitors", label: "Who are your main competitors?", placeholder: "e.g. Mixpanel, Amplitude, Looker" }, { key: "stage", label: "What stage is this feature at?", placeholder: "e.g. ideation, discovery, validation, pre-build" }, { key: "goal", label: "What is the primary business goal?", placeholder: "e.g. increase retention, reduce churn, grow revenue" }], system: "You are a senior product researcher. Given detailed context, provide deep feature research covering: market landscape, user needs analysis, competitor benchmarks, technical feasibility, strategic fit, risks, and a clear recommendation." },
  prd: { title: "PRD Writer", questions: [{ key: "feature", label: "What feature or product are you writing a PRD for?", placeholder: "e.g. in-app notification center" }, { key: "problem", label: "What problem does it solve and for whom?", placeholder: "e.g. users miss important updates, causing churn" }, { key: "users", label: "Who are the target users?", placeholder: "e.g. ops managers who need real-time alerts" }, { key: "scope", label: "What is in scope vs out of scope?", placeholder: "e.g. in: email + in-app alerts. out: SMS" }, { key: "metrics", label: "How will you measure success?", placeholder: "e.g. 30% increase in feature engagement in 60 days" }, { key: "constraints", label: "Any technical, time, or resource constraints?", placeholder: "e.g. must use existing backend, 2 engineers, 6 weeks" }, { key: "stakeholders", label: "Who are the key stakeholders?", placeholder: "e.g. CEO wants retention, Eng wants clean APIs" }], system: "You are a senior product manager. Write a complete PRD with: Executive Summary, Problem Statement, Goals, Success Metrics, User Stories, Requirements, Edge Cases, Dependencies, and Timeline." },
  brainstorm: { title: "Feature Brainstorm", questions: [{ key: "problem", label: "What problem are you brainstorming around?", placeholder: "e.g. users drop off after day 3 of onboarding" }, { key: "users", label: "Who are the users experiencing this?", placeholder: "e.g. new signups in the free tier" }, { key: "product", label: "What product or domain is this in?", placeholder: "e.g. project management SaaS" }, { key: "goal", label: "What is the desired outcome?", placeholder: "e.g. increase D7 retention by 20%" }, { key: "constraints", label: "Any constraints?", placeholder: "e.g. small team, no ML, 3 month roadmap" }, { key: "tried", label: "What have you already tried?", placeholder: "e.g. we tried email nudges, did not work" }, { key: "inspiration", label: "Any inspiration or benchmark products?", placeholder: "e.g. Duolingo streaks, Notion templates" }], system: "You are a creative product strategist. Generate 8-10 structured feature ideas, each with: Feature Name, Description, User Value, Effort (S/M/L), Impact Score (1-10), and Why Now. End with a top 3 recommendation." },
  persona: { title: "Persona Builder", questions: [{ key: "segment", label: "What user segment is this persona for?", placeholder: "e.g. mid-market HR managers" }, { key: "product", label: "What product or service do they use?", placeholder: "e.g. employee engagement platform" }, { key: "industry", label: "What industry or vertical?", placeholder: "e.g. healthcare, fintech, e-commerce" }, { key: "goals", label: "What are their primary goals?", placeholder: "e.g. reduce turnover, improve team morale" }, { key: "pains", label: "What are their biggest pain points?", placeholder: "e.g. manual reporting, no visibility into sentiment" }, { key: "tech", label: "What is their tech savviness?", placeholder: "e.g. comfortable with Excel, uses Slack" }, { key: "data", label: "Any real data on this segment?", placeholder: "e.g. 68% are aged 35-50, prefer mobile" }], system: "You are a UX research expert. Create 2 detailed user personas each with: Name, Age/Role, Quote, Goals, Frustrations, Motivations, Jobs-to-be-done, and Key Insight for the product team." },
  competitive: { title: "Competitive Intelligence", questions: [{ key: "product", label: "What is your product and its core value prop?", placeholder: "e.g. AI-powered customer support tool for SMBs" }, { key: "competitors", label: "Which competitors do you want analyzed?", placeholder: "e.g. Intercom, Zendesk, Freshdesk" }, { key: "dimension", label: "What dimensions matter most?", placeholder: "e.g. pricing, AI features, integrations, UX" }, { key: "market", label: "What market segment are you targeting?", placeholder: "e.g. SMBs in North America" }, { key: "differentiator", label: "What is your key differentiator?", placeholder: "e.g. faster setup, no-code customization" }, { key: "gaps", label: "What gaps are you most concerned about?", placeholder: "e.g. we lack enterprise security features" }, { key: "goal", label: "What decision will this analysis inform?", placeholder: "e.g. positioning, roadmap, pricing strategy" }], system: "You are a competitive intelligence analyst. Provide: Competitive Landscape, Feature Comparison, Pricing Analysis, Positioning Map, Strengths and Weaknesses, Market Gaps, and Strategic Recommendations." },
  okr: { title: "OKR & Metrics Planner", questions: [{ key: "objective", label: "What is the high-level objective?", placeholder: "e.g. become the go-to tool for solo developers" }, { key: "product", label: "What product area or team is this for?", placeholder: "e.g. growth team, core product, platform" }, { key: "horizon", label: "What time horizon?", placeholder: "e.g. Q3 2025" }, { key: "stage", label: "What stage is your company or product?", placeholder: "e.g. early growth, scaling, mature" }, { key: "northstar", label: "Do you have an existing north star metric?", placeholder: "e.g. weekly active users, GMV, MRR" }, { key: "baseline", label: "What are your current baseline metrics?", placeholder: "e.g. DAU: 5k, churn: 8%, NPS: 34" }, { key: "bets", label: "What are the key strategic bets planned?", placeholder: "e.g. new onboarding flow, API launch, mobile app" }], system: "You are a product strategy expert. Define 3 OKRs with 3-4 measurable Key Results each. Also provide: North Star Metric, Leading Indicators, Lagging Indicators, Guardrail Metrics, and Common Pitfalls to avoid." },
  journey: { title: "User Journey Mapper", questions: [{ key: "user", label: "Who is the user?", placeholder: "e.g. first-time user, power user, admin" }, { key: "goal", label: "What is the user trying to accomplish?", placeholder: "e.g. set up their first project and invite the team" }, { key: "entry", label: "Where does the journey start?", placeholder: "e.g. marketing site, app store, referral link" }, { key: "touchpoints", label: "What are the main touchpoints?", placeholder: "e.g. signup - onboarding - first use - share" }, { key: "painpoints", label: "Where do you see the most friction?", placeholder: "e.g. users abandon during the team invite step" }, { key: "channels", label: "What channels are involved?", placeholder: "e.g. web app, email, mobile, support chat" }, { key: "aha", label: "What is the aha moment?", placeholder: "e.g. when they see their first dashboard populated" }], system: "You are a UX and product expert. Map a detailed user journey with stages, actions, emotions, pain points, opportunities, and moments of delight. Identify the aha moment and give 5 prioritized UX improvement recommendations." },
  experiment: { title: "A/B Test Planner", questions: [{ key: "hypothesis", label: "What is your experiment hypothesis?", placeholder: "e.g. showing social proof on signup will increase conversions" }, { key: "metric", label: "What is the primary success metric?", placeholder: "e.g. signup conversion rate" }, { key: "baseline", label: "What is the current baseline metric value?", placeholder: "e.g. 12% signup conversion" }, { key: "lift", label: "What minimum detectable effect do you expect?", placeholder: "e.g. 2% absolute lift" }, { key: "traffic", label: "What is your daily or weekly traffic volume?", placeholder: "e.g. 5,000 visitors per week" }, { key: "risks", label: "What are the key risks?", placeholder: "e.g. might hurt trust, could slow page load" }, { key: "context", label: "Any relevant context?", placeholder: "e.g. we ran a similar test last quarter" }], system: "You are an experimentation expert. Design a rigorous A/B test plan including: Hypothesis, Control and Variant, Sample Size, Test Duration, Primary and Secondary Metrics, Risk Assessment, and Go/No-go Criteria." },
  analysis: { title: "Qual & Quant Analysis", questions: [{ key: "data", label: "What data or research are you analyzing?", placeholder: "e.g. NPS survey results, user interviews, funnel metrics" }, { key: "source", label: "Where did this data come from?", placeholder: "e.g. 200 NPS responses, 8 user interviews" }, { key: "question", label: "What key question are you trying to answer?", placeholder: "e.g. why are enterprise users churning in month 2?" }, { key: "audience", label: "Who is this analysis for?", placeholder: "e.g. product team, CEO, design team" }, { key: "baseline", label: "Any benchmarks to compare against?", placeholder: "e.g. industry NPS avg is 32" }, { key: "action", label: "What decision will this analysis drive?", placeholder: "e.g. decide whether to build feature X or fix Y" }, { key: "rawdata", label: "Paste your raw data or notes here:", placeholder: "Paste survey responses, interview quotes, metrics..." }], system: "You are a mixed-methods research analyst. Synthesize data to: identify key themes, surface actionable insights, and give a clear prioritized recommendation with confidence levels." },
  voc: { title: "Voice of Customer", questions: [{ key: "source", label: "What is the source of this customer data?", placeholder: "e.g. App Store reviews, support tickets, NPS verbatims" }, { key: "volume", label: "How many responses are you analyzing?", placeholder: "e.g. 150 reviews, 3 months of tickets" }, { key: "product", label: "What product or feature area does this relate to?", placeholder: "e.g. mobile app, checkout flow, dashboard" }, { key: "segment", label: "What customer segment is represented?", placeholder: "e.g. enterprise users, free tier, churned customers" }, { key: "timeframe", label: "What time period does this data cover?", placeholder: "e.g. Jan-Mar 2025, post-launch feedback" }, { key: "question", label: "What specific question do you want answered?", placeholder: "e.g. what is driving negative sentiment?" }, { key: "rawdata", label: "Paste the customer feedback here:", placeholder: "Paste reviews, tickets, quotes, comments..." }], system: "You are a customer insights expert. Analyze voice of customer data to produce: Sentiment Score, Top Themes, Pain Points, Feature Requests, Positive Highlights, and a Product Team Action Plan." },
  stakeholder: { title: "Stakeholder Communication", questions: [{ key: "audience", label: "Who is the primary audience?", placeholder: "e.g. CEO and board, engineering team" }, { key: "topic", label: "What is the communication about?", placeholder: "e.g. Q2 product roadmap, experiment results" }, { key: "findings", label: "What are the key findings or decisions?", placeholder: "e.g. we are launching feature X, deprioritizing Y" }, { key: "ask", label: "What is your ask or desired outcome?", placeholder: "e.g. get approval, align on priorities" }, { key: "concerns", label: "What concerns might this audience have?", placeholder: "e.g. Eng worried about scope, CEO wants ROI" }, { key: "format", label: "What format do you need?", placeholder: "e.g. executive brief, Slack update, email" }, { key: "tone", label: "What tone fits the context?", placeholder: "e.g. confident and data-driven, collaborative" }], system: "You are a product communication expert. Write clear, audience-tailored stakeholder communication that leads with the bottom line, supports with evidence, and makes the ask explicit." },
  risk: { title: "Risk & Assumptions Log", questions: [{ key: "feature", label: "What feature or decision are you assessing?", placeholder: "e.g. launching AI recommendations in core feed" }, { key: "assumptions", label: "What key assumptions is this built on?", placeholder: "e.g. users want personalization, we have enough data" }, { key: "dependencies", label: "What are the critical dependencies?", placeholder: "e.g. data pipeline, third-party API" }, { key: "timeline", label: "What is the timeline?", placeholder: "e.g. MVP in 8 weeks, full launch Q4" }, { key: "team", label: "What team and resources are involved?", placeholder: "e.g. 2 engineers, 1 designer, no dedicated QA" }, { key: "known_risks", label: "What risks are you already aware of?", placeholder: "e.g. low data quality, competitor already has this" }, { key: "stakes", label: "What is at stake if this fails?", placeholder: "e.g. missed OKR, user trust, wasted 2 months" }], system: "You are a product risk analyst. Produce a Risk and Assumptions Log with: Assumption Inventory, Risk Register, Mitigation Strategies, Validation Experiments, and a Go/No-go Checklist." },
};

async function callClaude(messages: { role: string; content: string }[], system = "") {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1500, system, messages }),
  });
  const data = await res.json();
  return data.content?.map((b: { text?: string }) => b.text || "").join("\n") || "No response.";
}

function PreflightForm({ moduleId, onSubmit }: { moduleId: string; onSubmit: (reply: string, ctx: string) => void }) {
  const config = MQ[moduleId];
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  if (!config) return null;
  const handle = async () => {
    setLoading(true);
    const context = config.questions.map(q => `${q.label}\n- ${answers[q.key] || "(not provided)"}`).join("\n\n");
    const reply = await callClaude([{ role: "user", content: `Context:\n\n${context}\n\nProvide a thorough structured analysis.` }], config.system);
    onSubmit(reply, context);
    setLoading(false);
  };
  const filled = config.questions.filter(q => answers[q.key]?.trim()).length;
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <div className="rounded-2xl bg-indigo-50 border border-indigo-100 px-5 py-4 text-sm text-indigo-700 leading-7">
        Answer these questions so the AI can give you the most relevant, specific analysis. All fields are optional but more context = better output.
      </div>
      {config.questions.map((q, i) => (
        <div key={q.key} className="rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-sm">
          <div className="text-sm font-medium text-slate-700 mb-2">
            <span className="text-slate-400 mr-2">{i + 1}</span>{q.label}
          </div>
          <textarea
            rows={q.key === "rawdata" ? 5 : 2}
            value={answers[q.key] || ""}
            onChange={e => setAnswers({ ...answers, [q.key]: e.target.value })}
            placeholder={q.placeholder}
            className="w-full text-sm resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-indigo-400 focus:bg-white transition"
          />
        </div>
      ))}
      <div className="flex items-center gap-3">
        <button
          onClick={handle}
          disabled={loading || filled === 0}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Generating..." : "Generate Analysis →"}
        </button>
        <span className="text-xs text-slate-400">{filled}/{config.questions.length} answered</span>
      </div>
    </div>
  );
}

function AIModule({ moduleId }: { moduleId: string }) {
  const [phase, setPhase] = useState<"form" | "result" | "chat">("form");
  const [result, setResult] = useState("");
  const [context, setContext] = useState("");
  const [chatMsgs, setChatMsgs] = useState<{ role: string; content: string }[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatMsgs]);
  const onSubmit = (reply: string, ctx: string) => { setResult(reply); setContext(ctx); setPhase("result"); };
  const sendChat = async () => {
    if (!chatInput.trim() || chatLoading) return;
    const sys = MQ[moduleId]?.system || "";
    const history = [{ role: "user", content: `Context:\n${context}\n\nInitial analysis:\n${result}` }, { role: "assistant", content: "Understood. How can I help further?" }, ...chatMsgs, { role: "user", content: chatInput }];
    const next = [...chatMsgs, { role: "user", content: chatInput }];
    setChatMsgs(next); setChatInput(""); setChatLoading(true);
    const reply = await callClaude(history, sys);
    setChatMsgs([...next, { role: "assistant", content: reply }]); setChatLoading(false);
  };
  if (phase === "form") return <PreflightForm moduleId={moduleId} onSubmit={onSubmit} />;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button onClick={() => { setPhase("form"); setResult(""); setChatMsgs([]); }} className="text-xs rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition">← Start over</button>
        <button onClick={() => setPhase(phase === "result" ? "chat" : "result")} className="text-xs rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition">{phase === "result" ? "Continue in chat →" : "View result"}</button>
      </div>
      {phase === "result" && (
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm text-sm leading-7 text-slate-700 whitespace-pre-wrap">{result}</div>
      )}
      {phase === "chat" && (
        <div className="flex flex-col h-[460px] gap-3">
          <div className="flex-1 overflow-y-auto flex flex-col gap-3">
            <div className="self-start max-w-[85%] bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm leading-7 text-slate-700 whitespace-pre-wrap">{result}</div>
            {chatMsgs.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 whitespace-pre-wrap ${m.role === "user" ? "self-end bg-indigo-50 border border-indigo-100 text-indigo-800" : "self-start bg-white border border-slate-200 text-slate-700"}`}>{m.content}</div>
            ))}
            {chatLoading && <div className="self-start bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-400">Thinking...</div>}
            <div ref={bottomRef} />
          </div>
          <div className="flex gap-2">
            <textarea value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendChat(); } }} placeholder="Ask a follow-up... (Enter to send)" rows={2} className="flex-1 resize-none text-sm rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-400 transition" />
            <button onClick={sendChat} disabled={chatLoading || !chatInput.trim()} className="rounded-xl bg-gradient-to-r from-slate-900 to-indigo-700 px-5 py-2 text-sm font-semibold text-white self-end disabled:opacity-50 disabled:cursor-not-allowed transition hover:scale-[1.02]">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

function HypothesisModule() {
  const [hyps, setHyps] = useState<{ id: number; if: string; then: string; because: string; confidence: string; metric: string; timeline: string; evidence: string }[]>([]);
  const [form, setForm] = useState({ if: "", then: "", because: "", confidence: "medium", metric: "", timeline: "", evidence: "" });
  const [aiResult, setAiResult] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(true);
  const add = () => { if (!form.if || !form.then) return; setHyps([...hyps, { ...form, id: Date.now() }]); setForm({ if: "", then: "", because: "", confidence: "medium", metric: "", timeline: "", evidence: "" }); };
  const validate = async (h: typeof hyps[0]) => {
    setLoading(h.id);
    const prompt = `Hypothesis:\nIf ${h.if}, then ${h.then}, because ${h.because}.\nConfidence: ${h.confidence}\nMetric: ${h.metric}\nTimeline: ${h.timeline}\nEvidence: ${h.evidence}\n\nProvide full validation plan.`;
    const reply = await callClaude([{ role: "user", content: prompt }], "You are a product experimentation expert. Provide: Hypothesis Assessment, Validation Approach, Qualitative methods, Quantitative methods, Sample size and timeline, Success and Failure criteria, Risk factors, and Recommendation.");
    setAiResult(prev => ({ ...prev, [h.id]: reply })); setLoading(null);
  };
  const cc: Record<string, string> = { low: "#ef4444", medium: "#f59e0b", high: "#10b981" };
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      {showForm && (
        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm flex flex-col gap-3">
          <p className="text-sm font-medium text-slate-700">Build a new hypothesis</p>
          {[{ key: "if", label: "If...", ph: "we add feature X" }, { key: "then", label: "Then...", ph: "conversion will increase by Y%" }, { key: "because", label: "Because...", ph: "users struggle with Z" }, { key: "metric", label: "Success metric", ph: "e.g. 10% lift in activation rate" }, { key: "timeline", label: "Validation timeline", ph: "e.g. 2-week A/B test" }, { key: "evidence", label: "Existing evidence", ph: "e.g. 60% of users in survey said..." }].map(f => (
            <div key={f.key} className="flex gap-3 items-center">
              <span className="text-xs text-slate-400 w-24 shrink-0">{f.label}</span>
              <input value={(form as Record<string, string>)[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.ph} className="flex-1 text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400 transition" />
            </div>
          ))}
          <div className="flex gap-3 items-center">
            <span className="text-xs text-slate-400 w-24 shrink-0">Confidence</span>
            <select value={form.confidence} onChange={e => setForm({ ...form, confidence: e.target.value })} className="text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none">
              <option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option>
            </select>
            <button onClick={add} disabled={!form.if || !form.then} className="ml-auto rounded-xl bg-gradient-to-r from-slate-900 to-indigo-700 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">Add hypothesis</button>
          </div>
        </div>
      )}
      <button onClick={() => setShowForm(!showForm)} className="text-xs rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-slate-600 w-fit hover:border-indigo-300 hover:text-indigo-600 transition">{showForm ? "Hide form" : "+ New hypothesis"}</button>
      {hyps.map(h => (
        <div key={h.id} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm flex flex-col gap-3">
          <div className="flex justify-between gap-3">
            <p className="text-sm leading-7 text-slate-700"><span className="text-slate-400">If</span> {h.if} <span className="text-slate-400">then</span> {h.then}{h.because && <><span className="text-slate-400"> because</span> {h.because}</>}</p>
            <span className="text-xs px-3 py-1 rounded-full font-medium shrink-0 h-fit" style={{ background: cc[h.confidence] + "22", color: cc[h.confidence] }}>{h.confidence}</span>
          </div>
          {h.metric && <p className="text-xs text-slate-400">Metric: {h.metric} · Timeline: {h.timeline}</p>}
          <button onClick={() => validate(h)} disabled={loading === h.id} className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 w-fit hover:bg-indigo-100 transition disabled:opacity-50">{loading === h.id ? "Validating..." : "AI Validate →"}</button>
          {aiResult[h.id] && <div className="text-sm leading-7 text-slate-600 whitespace-pre-wrap border-t border-slate-100 pt-3">{aiResult[h.id]}</div>}
        </div>
      ))}
      {hyps.length === 0 && !showForm && <p className="text-sm text-slate-400 text-center py-8">No hypotheses yet.</p>}
    </div>
  );
}

function PrioritizationModule() {
  const [features, setFeatures] = useState([{ name: "Onboarding redesign", reach: 8, impact: 9, confidence: 80, effort: 3 }, { name: "Email notifications", reach: 6, impact: 5, confidence: 90, effort: 2 }, { name: "Analytics dashboard", reach: 4, impact: 8, confidence: 60, effort: 8 }]);
  const [newFeature, setNewFeature] = useState(""); const [framework, setFramework] = useState("rice"); const [aiInsight, setAiInsight] = useState(""); const [loading, setLoading] = useState(false);
  const riceScore = (f: typeof features[0]) => Math.round((f.reach * f.impact * (f.confidence / 100)) / f.effort);
  const iceScore = (f: typeof features[0]) => Math.round(f.impact * f.confidence / 100 * (10 - f.effort));
  const sorted = [...features].sort((a, b) => framework === "rice" ? riceScore(b) - riceScore(a) : iceScore(b) - iceScore(a));
  const getAI = async () => { setLoading(true); const list = features.map(f => `${f.name}: RICE=${riceScore(f)}, ICE=${iceScore(f)}, Effort=${f.effort}`).join("\n"); const reply = await callClaude([{ role: "user", content: `Features:\n${list}\n\nGive prioritized backlog recommendation with rationale.` }], "You are a product prioritization expert. Produce: Recommended Backlog Order, Rationale per feature, What to defer and why, and a one-sentence exec summary."); setAiInsight(reply); setLoading(false); };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center flex-wrap">
        <select value={framework} onChange={e => setFramework(e.target.value)} className="text-sm rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none">
          <option value="rice">RICE Score</option><option value="ice">ICE Score</option>
        </select>
        <button onClick={getAI} disabled={loading} className="rounded-xl bg-gradient-to-r from-slate-900 to-indigo-700 px-5 py-2 text-sm font-semibold text-white disabled:opacity-50 transition hover:scale-[1.02]">{loading ? "Analyzing..." : "AI Recommendation →"}</button>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-slate-100">{["Feature", "Reach", "Impact", "Conf%", "Effort", "RICE", "ICE"].map(h => (<th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>))}</tr></thead>
          <tbody>{sorted.map((f, i) => (<tr key={i} className="border-b border-slate-50 last:border-0">
            <td className="px-4 py-3 font-medium text-slate-800">{f.name}</td>
            {["reach", "impact", "confidence", "effort"].map(k => (<td key={k} className="px-4 py-3"><input type="number" value={(f as Record<string, number | string>)[k] as number} min={0} max={k === "confidence" ? 100 : 10} onChange={e => setFeatures(features.map((x, j) => features.indexOf(f) === j ? { ...x, [k]: +e.target.value } : x))} className="w-14 text-sm rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 outline-none focus:border-indigo-400" /></td>))}
            <td className={`px-4 py-3 font-semibold ${framework === "rice" ? "text-indigo-600" : "text-slate-400"}`}>{riceScore(f)}</td>
            <td className={`px-4 py-3 font-semibold ${framework === "ice" ? "text-indigo-600" : "text-slate-400"}`}>{iceScore(f)}</td>
          </tr>))}</tbody>
        </table>
      </div>
      <div className="flex gap-2">
        <input value={newFeature} onChange={e => setNewFeature(e.target.value)} placeholder="Add feature name..." className="flex-1 text-sm rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-400 transition" />
        <button onClick={() => { if (newFeature.trim()) { setFeatures([...features, { name: newFeature, reach: 5, impact: 5, confidence: 70, effort: 5 }]); setNewFeature(""); } }} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition">Add</button>
      </div>
      {aiInsight && <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm text-sm leading-7 text-slate-700 whitespace-pre-wrap">{aiInsight}</div>}
    </div>
  );
}

function FunnelModule() {
  const [steps, setSteps] = useState([{ name: "Product Page", users: 0 }, { name: "Add to Cart", users: 0 }, { name: "Checkout", users: 0 }, { name: "Purchase", users: 0 }]);
  const [analysis, setAnalysis] = useState(""); const [loading, setLoading] = useState(false);
  const maxUsers = Math.max(...steps.map(s => s.users), 1);
  const analyze = async () => {
    setLoading(true);
    const text = steps.map((s, i) => { const dr = i === 0 ? null : steps[i - 1].users > 0 ? (((steps[i - 1].users - s.users) / steps[i - 1].users) * 100).toFixed(1) : null; return `${s.name}: ${s.users} users${dr ? ` (${dr}% drop-off)` : ""}`; }).join("\n");
    const reply = await callClaude([{ role: "user", content: `Analyze this funnel:\n${text}\n\nProvide drop-off analysis and optimization recommendations.` }], "You are a senior growth PM. Analyze the funnel and provide: Executive Summary, Step-by-step drop-off analysis, Root cause hypotheses, Quick wins, and A/B test recommendations.");
    setAnalysis(reply); setLoading(false);
  };
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      {steps.map((s, i) => {
        const pct = Math.round((s.users / maxUsers) * 100);
        const dr = i > 0 && steps[i - 1].users > 0 ? (((steps[i - 1].users - s.users) / steps[i - 1].users) * 100).toFixed(1) : null;
        const color = dr ? (+dr > 40 ? "bg-red-400" : +dr > 20 ? "bg-amber-400" : "bg-emerald-400") : "bg-indigo-400";
        return (
          <div key={i} className="rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-sm">
            <div className="flex gap-3 items-center mb-3">
              <input value={s.name} onChange={e => setSteps(steps.map((x, j) => j === i ? { ...x, name: e.target.value } : x))} className="flex-1 font-medium text-sm text-slate-800 border-b border-dashed border-slate-200 bg-transparent outline-none pb-1" />
              <input type="number" value={s.users || ""} onChange={e => setSteps(steps.map((x, j) => j === i ? { ...x, users: +e.target.value } : x))} placeholder="Users" className="w-24 text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 outline-none focus:border-indigo-400" />
              {dr && <span className={`text-xs font-medium whitespace-nowrap ${+dr > 40 ? "text-red-500" : "text-amber-500"}`}>-{dr}%</span>}
            </div>
            {s.users > 0 && <div className="h-1.5 bg-slate-100 rounded-full"><div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${pct}%` }} /></div>}
          </div>
        );
      })}
      <div className="flex gap-2">
        <button onClick={() => setSteps([...steps, { name: `Step ${steps.length + 1}`, users: 0 }])} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition">+ Add step</button>
        <button onClick={analyze} disabled={loading || steps.filter(s => s.users > 0).length < 2} className="rounded-xl bg-gradient-to-r from-slate-900 to-indigo-700 px-5 py-2 text-sm font-semibold text-white disabled:opacity-50 transition hover:scale-[1.02]">{loading ? "Analyzing..." : "Analyze Funnel →"}</button>
      </div>
      {analysis && <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm text-sm leading-7 text-slate-700 whitespace-pre-wrap">{analysis}</div>}
    </div>
  );
}

function InsightRepository() {
  const [notes, setNotes] = useState<{ id: number; title: string; content: string; tag: string; date: string }[]>([]);
  const [form, setForm] = useState({ title: "", content: "", tag: "Research" });
  const tags = ["Research", "PRD", "Analysis", "Hypothesis", "VoC", "Experiment", "Other"];
  const add = () => { if (!form.title || !form.content) return; setNotes([{ ...form, id: Date.now(), date: new Date().toLocaleDateString() }, ...notes]); setForm({ title: "", content: "", tag: "Research" }); };
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm flex flex-col gap-3">
        <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Note title..." className="text-sm font-medium rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400 transition" />
        <textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} placeholder="Write your insight, note, or finding..." rows={3} className="text-sm resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400 transition" />
        <div className="flex gap-2 items-center">
          <select value={form.tag} onChange={e => setForm({ ...form, tag: e.target.value })} className="text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none">
            {tags.map(t => <option key={t}>{t}</option>)}
          </select>
          <button onClick={add} disabled={!form.title || !form.content} className="ml-auto rounded-xl bg-gradient-to-r from-slate-900 to-indigo-700 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">Save note</button>
        </div>
      </div>
      {notes.length === 0 && <p className="text-sm text-slate-400 text-center py-8">No insights saved yet.</p>}
      {notes.map(n => (
        <div key={n.id} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm font-semibold text-slate-800">{n.title}</p>
            <div className="flex gap-2 items-center shrink-0 ml-3">
              <span className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full px-2 py-0.5">{n.tag}</span>
              <span className="text-xs text-slate-400">{n.date}</span>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-6 whitespace-pre-wrap">{n.content}</p>
        </div>
      ))}
    </div>
  );
}

function Dashboard({ setActive }: { setActive: (id: string) => void }) {
  const actions = [
    { label: "Feature Research", mod: "feature-research", color: "from-blue-500 to-indigo-500" },
    { label: "Write a PRD", mod: "prd", color: "from-violet-500 to-purple-500" },
    { label: "Build Hypothesis", mod: "hypothesis", color: "from-amber-500 to-orange-500" },
    { label: "Analyze Funnel", mod: "funnel", color: "from-emerald-500 to-teal-500" },
    { label: "Brainstorm Features", mod: "brainstorm", color: "from-pink-500 to-rose-500" },
    { label: "Score & Prioritize", mod: "prioritization", color: "from-red-500 to-pink-500" },
    { label: "Build Persona", mod: "persona", color: "from-violet-500 to-indigo-500" },
    { label: "Competitive Intel", mod: "competitive", color: "from-amber-500 to-yellow-500" },
    { label: "Plan A/B Test", mod: "experiment", color: "from-emerald-500 to-green-500" },
    { label: "Analyze VoC", mod: "voc", color: "from-blue-500 to-cyan-500" },
  ];
  const stats = [{ value: "17", label: "AI Modules" }, { value: "100+", label: "PM Workflows" }, { value: "3", label: "Comms Tools" }];
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 px-6 py-5 shadow-sm">
        <p className="text-base font-semibold text-slate-900">PM Research & Strategy Hub</p>
        <p className="mt-1 text-sm text-slate-500 leading-6">Built by <strong className="text-slate-700">Arunesh Kumar</strong> — Product Manager at Sierra Living Concepts. 17 AI-powered modules for end-to-end PM work.</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {stats.map(s => (
            <div key={s.label} className="rounded-xl bg-white border border-slate-200 px-4 py-3 shadow-sm">
              <p className="text-xl font-bold text-slate-900">{s.value}</p>
              <p className="text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Quick actions</p>
        <div className="grid grid-cols-2 gap-2">
          {actions.map(a => (
            <button key={a.mod} onClick={() => setActive(a.mod)} className={`text-left px-4 py-3 text-sm font-medium rounded-xl bg-gradient-to-r ${a.color} text-white shadow-sm transition hover:scale-[1.02] hover:shadow-md`}>{a.label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PMHubExplorePage() {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const mod = MODULES.find(m => m.id === active);
  const content: Record<string, React.ReactNode> = {
    dashboard: <Dashboard setActive={setActive} />,
    funnel: <FunnelModule />,
    hypothesis: <HypothesisModule />,
    prioritization: <PrioritizationModule />,
    repository: <InsightRepository />,
  };
  const getModule = () => content[active] || <AIModule moduleId={active} />;
  return (
    <div className="flex h-screen overflow-hidden bg-[#f4f7fb]">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-56" : "w-14"} transition-all duration-200 bg-white border-r border-slate-200 flex flex-col shrink-0`}>
        <div className="px-3 py-4 border-b border-slate-100 flex items-center justify-between">
          {sidebarOpen && <span className="text-sm font-semibold text-slate-800">PM Hub</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-400 hover:text-slate-700 transition p-1 rounded-lg hover:bg-slate-100">
            {sidebarOpen ? "←" : "→"}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          {MODULES.map(m => (
            <button key={m.id} onClick={() => setActive(m.id)} className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition ${active === m.id ? "bg-indigo-50 text-indigo-700 border-l-2 border-indigo-500 font-medium" : "text-slate-500 hover:bg-slate-50 hover:text-slate-800 border-l-2 border-transparent"} ${sidebarOpen ? "justify-start" : "justify-center"}`}>
              <span className="text-base shrink-0">{m.icon}</span>
              {sidebarOpen && <span className="truncate">{m.label}</span>}
            </button>
          ))}
        </div>
      </div>
      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-6 py-4 bg-white border-b border-slate-200 flex items-center gap-3">
          <span className="text-lg">{mod?.icon}</span>
          <span className="text-base font-semibold text-slate-800">{mod?.label}</span>
        </div>
        <div className="flex-1 overflow-y-auto p-6">{getModule()}</div>
      </div>
    </div>
  );
}
