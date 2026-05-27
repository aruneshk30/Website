"use client";
import { useState, useRef, useEffect } from "react";
import Head from "next/head";

// ─── CONSTANTS ────────────────────────────────────────────
const TONES = ["Formal","Polite","Friendly","Fluent & Concise","Assertive","Diplomatic","Informal","Urgent"];
const TONE_DESC: Record<string,string> = {
  "Formal":"Professional, structured, no contractions.",
  "Polite":"Warm yet professional. Courteous with clear asks.",
  "Friendly":"Conversational and approachable.",
  "Fluent & Concise":"Sharp, no fluff. Every word earns its place.",
  "Assertive":"Confident, direct, action-oriented.",
  "Diplomatic":"Balanced, tactful. Great for sensitive topics.",
  "Informal":"Casual and human. Good for Slack updates.",
  "Urgent":"Conveys urgency without panic.",
};

const MODULES = [
  {id:"dashboard",label:"Dashboard",icon:"ti ti-layout-dashboard"},
  {id:"funnel",label:"Funnel Analysis",icon:"ti ti-filter"},
  {id:"feature-research",label:"Feature Research",icon:"ti ti-microscope"},
  {id:"hypothesis",label:"Hypothesis Builder",icon:"ti ti-flask"},
  {id:"analysis",label:"Qual & Quant Analysis",icon:"ti ti-chart-bar"},
  {id:"brainstorm",label:"Feature Brainstorm",icon:"ti ti-bulb"},
  {id:"prd",label:"PRD Writer",icon:"ti ti-file-text"},
  {id:"persona",label:"Persona Builder",icon:"ti ti-user-circle"},
  {id:"competitive",label:"Competitive Intel",icon:"ti ti-tournament"},
  {id:"okr",label:"OKR & Metrics",icon:"ti ti-target"},
  {id:"journey",label:"User Journey",icon:"ti ti-route"},
  {id:"experiment",label:"A/B Test Planner",icon:"ti ti-test-pipe"},
  {id:"repository",label:"Insight Repository",icon:"ti ti-database"},
  {id:"prioritization",label:"Prioritization",icon:"ti ti-sort-descending"},
  {id:"voc",label:"Voice of Customer",icon:"ti ti-message-dots"},
  {id:"stakeholder",label:"Stakeholder Comms",icon:"ti ti-users"},
  {id:"risk",label:"Risk & Assumptions",icon:"ti ti-shield"},
];

const MODULE_Q: Record<string,{title:string;system:string;questions:{key:string;label:string;placeholder:string;rows?:number}[]}> = {
  "feature-research":{title:"Feature Research",system:"You are a senior product researcher. Provide deep feature research: market landscape, user needs, competitor benchmarks, technical feasibility, strategic fit, risks, and recommendation.",questions:[
    {key:"feature",label:"What feature do you want to research?",placeholder:"e.g. AI-powered search"},
    {key:"product",label:"What product is this for?",placeholder:"e.g. B2B SaaS analytics tool"},
    {key:"users",label:"Who are the primary users?",placeholder:"e.g. data analysts"},
    {key:"problem",label:"What problem does it solve?",placeholder:"e.g. users can't find reports quickly"},
    {key:"competitors",label:"Who are your main competitors?",placeholder:"e.g. Mixpanel, Amplitude"},
    {key:"stage",label:"What stage is this feature at?",placeholder:"e.g. ideation, discovery"},
    {key:"goal",label:"What is the primary business goal?",placeholder:"e.g. increase retention"},
  ]},
  "prd":{title:"PRD Writer",system:"You are a senior PM. Write a complete PRD: Executive Summary, Problem Statement, Goals, Success Metrics, User Stories, Functional Requirements, Non-functional Requirements, Edge Cases, Dependencies, Open Questions, Timeline.",questions:[
    {key:"feature",label:"What feature are you writing a PRD for?",placeholder:"e.g. in-app notification center"},
    {key:"problem",label:"What problem does it solve and for whom?",placeholder:"e.g. users miss important updates"},
    {key:"users",label:"Who are the target users?",placeholder:"e.g. ops managers needing real-time alerts"},
    {key:"scope",label:"What is in scope vs out of scope?",placeholder:"e.g. in: email alerts. out: SMS"},
    {key:"metrics",label:"How will you measure success?",placeholder:"e.g. 30% increase in engagement"},
    {key:"constraints",label:"Any constraints?",placeholder:"e.g. 2 engineers, 6 weeks"},
    {key:"stakeholders",label:"Who are the key stakeholders?",placeholder:"e.g. CEO wants retention, Eng wants clean APIs"},
  ]},
  "brainstorm":{title:"Feature Brainstorm",system:"You are a creative product strategist. Generate 8-10 structured feature ideas with: Name, Description, User Value, Effort (S/M/L), Impact Score (1-10), Why Now. Group by theme. End with top 3 recommendation.",questions:[
    {key:"problem",label:"What problem are you brainstorming around?",placeholder:"e.g. users drop off after day 3"},
    {key:"users",label:"Who are the users?",placeholder:"e.g. new signups in the free tier"},
    {key:"product",label:"What product or domain?",placeholder:"e.g. project management SaaS"},
    {key:"goal",label:"What is the desired outcome?",placeholder:"e.g. increase D7 retention by 20%"},
    {key:"constraints",label:"Any constraints?",placeholder:"e.g. small team, no ML, 3 month roadmap"},
    {key:"tried",label:"What have you already tried?",placeholder:"e.g. we tried email nudges"},
    {key:"inspiration",label:"Any inspiration products?",placeholder:"e.g. Duolingo streaks"},
  ]},
  "persona":{title:"Persona Builder",system:"You are a UX research expert. Create 2 detailed user personas each with: Name, Demographics, Quote, Goals, Frustrations, Motivations, Jobs-to-be-done, A Day in their Life, Tech Comfort, Decision-making style, Key Insight.",questions:[
    {key:"segment",label:"What user segment is this for?",placeholder:"e.g. mid-market HR managers"},
    {key:"product",label:"What product do they use?",placeholder:"e.g. employee engagement platform"},
    {key:"industry",label:"What industry?",placeholder:"e.g. healthcare, fintech"},
    {key:"goals",label:"What are their primary goals?",placeholder:"e.g. reduce turnover"},
    {key:"pains",label:"What are their pain points?",placeholder:"e.g. manual reporting"},
    {key:"tech",label:"What is their tech savviness?",placeholder:"e.g. comfortable with Excel"},
    {key:"data",label:"Any real data on this segment?",placeholder:"e.g. 68% are aged 35-50"},
  ]},
  "competitive":{title:"Competitive Intelligence",system:"You are a competitive intelligence analyst. Provide: Competitive Landscape, Feature Comparison Matrix, Pricing Analysis, Positioning Map, Strengths and Weaknesses, Market Gaps, Strategic Recommendations, SWOT.",questions:[
    {key:"product",label:"What is your product and value prop?",placeholder:"e.g. AI-powered support tool for SMBs"},
    {key:"competitors",label:"Which competitors to analyze?",placeholder:"e.g. Intercom, Zendesk"},
    {key:"dimension",label:"What dimensions matter most?",placeholder:"e.g. pricing, AI features, UX"},
    {key:"market",label:"What market segment?",placeholder:"e.g. SMBs in North America"},
    {key:"differentiator",label:"What is your key differentiator?",placeholder:"e.g. faster setup"},
    {key:"gaps",label:"What gaps are you concerned about?",placeholder:"e.g. we lack enterprise security"},
    {key:"goal",label:"What decision will this inform?",placeholder:"e.g. pricing strategy"},
  ]},
  "okr":{title:"OKR & Metrics",system:"You are a product strategy expert. Define 3 OKRs with 3-4 Key Results each. Also: North Star Metric, Leading and Lagging Indicators, Guardrail Metrics, Instrumentation Checklist, Pitfalls to avoid.",questions:[
    {key:"objective",label:"What is the high-level objective?",placeholder:"e.g. become the go-to tool for solo devs"},
    {key:"product",label:"What product area or team?",placeholder:"e.g. growth team"},
    {key:"horizon",label:"What time horizon?",placeholder:"e.g. Q3 2025"},
    {key:"stage",label:"What stage is your company?",placeholder:"e.g. early growth, scaling"},
    {key:"northstar",label:"Do you have an existing north star?",placeholder:"e.g. weekly active users"},
    {key:"baseline",label:"What are your current baselines?",placeholder:"e.g. DAU: 5k, churn: 8%"},
    {key:"bets",label:"What are the key strategic bets?",placeholder:"e.g. new onboarding, API launch"},
  ]},
  "journey":{title:"User Journey",system:"You are a UX expert. Map a detailed user journey with stages, user actions, emotions, pain points, opportunities, aha moment. Give 5 prioritized UX improvement recommendations.",questions:[
    {key:"user",label:"Who is the user?",placeholder:"e.g. first-time user, power user"},
    {key:"goal",label:"What is the user trying to accomplish?",placeholder:"e.g. set up first project"},
    {key:"entry",label:"Where does the journey start?",placeholder:"e.g. marketing site, app store"},
    {key:"touchpoints",label:"What are the main touchpoints?",placeholder:"e.g. signup - onboarding - first use"},
    {key:"painpoints",label:"Where do you see friction?",placeholder:"e.g. users abandon during invite step"},
    {key:"channels",label:"What channels are involved?",placeholder:"e.g. web app, email, mobile"},
    {key:"aha",label:"What is the aha moment?",placeholder:"e.g. when they see first dashboard"},
  ]},
  "experiment":{title:"A/B Test Planner",system:"You are an experimentation expert. Design: Hypothesis, Control and Variant, Sample Size, Test Duration, Primary and Secondary Metrics, Guardrail Metrics, Risk Assessment, Pre-mortem, Go/No-go Criteria.",questions:[
    {key:"hypothesis",label:"What is your experiment hypothesis?",placeholder:"e.g. social proof on signup increases conversions"},
    {key:"metric",label:"What is the primary success metric?",placeholder:"e.g. signup conversion rate"},
    {key:"baseline",label:"What is the current baseline?",placeholder:"e.g. 12% signup conversion"},
    {key:"lift",label:"What minimum detectable effect do you expect?",placeholder:"e.g. 2% absolute lift"},
    {key:"traffic",label:"What is your daily or weekly traffic?",placeholder:"e.g. 5,000 visitors per week"},
    {key:"risks",label:"What are the key risks?",placeholder:"e.g. might hurt trust"},
    {key:"context",label:"Any relevant context?",placeholder:"e.g. ran similar test last quarter"},
  ]},
  "analysis":{title:"Qual & Quant Analysis",system:"You are a mixed-methods analyst. Synthesize data to: identify themes, interpret metrics, surface insights, highlight significance, map to user needs, give prioritized recommendation with confidence levels.",questions:[
    {key:"data",label:"What data are you analyzing?",placeholder:"e.g. NPS survey results, user interviews"},
    {key:"source",label:"Where did this data come from?",placeholder:"e.g. 200 NPS responses, 8 interviews"},
    {key:"question",label:"What key question are you answering?",placeholder:"e.g. why are enterprise users churning?"},
    {key:"audience",label:"Who is this analysis for?",placeholder:"e.g. product team, CEO"},
    {key:"baseline",label:"Any benchmarks to compare against?",placeholder:"e.g. industry NPS avg is 32"},
    {key:"action",label:"What decision will this drive?",placeholder:"e.g. build feature X or fix Y"},
    {key:"rawdata",label:"Paste your raw data or notes here:",placeholder:"Paste survey responses, quotes, metrics...",rows:5},
  ]},
  "voc":{title:"Voice of Customer",system:"You are a customer insights expert. Produce: Sentiment Score, Top 5 Themes with frequency, Pain Points ranked, Feature Requests, Positive Highlights, Segment insights, Urgency Assessment, Action Plan.",questions:[
    {key:"source",label:"What is the source of this data?",placeholder:"e.g. App Store reviews, support tickets"},
    {key:"volume",label:"How many responses?",placeholder:"e.g. 150 reviews, 3 months"},
    {key:"product",label:"What product or feature area?",placeholder:"e.g. mobile app, checkout flow"},
    {key:"segment",label:"What customer segment?",placeholder:"e.g. enterprise users, free tier"},
    {key:"timeframe",label:"What time period?",placeholder:"e.g. Jan-Mar 2025"},
    {key:"question",label:"What specific question do you want answered?",placeholder:"e.g. what is driving negative sentiment?"},
    {key:"rawdata",label:"Paste the customer feedback here:",placeholder:"Paste reviews, tickets, quotes...",rows:5},
  ]},
  "stakeholder":{title:"Stakeholder Analysis",system:"You are a product communication expert. Write clear stakeholder communication: lead with bottom line, support with evidence, anticipate objections, make ask explicit. Include TL;DR, key points, next steps.",questions:[
    {key:"audience",label:"Who is the primary audience?",placeholder:"e.g. CEO and board, engineering team"},
    {key:"topic",label:"What is the communication about?",placeholder:"e.g. Q2 roadmap, experiment results"},
    {key:"findings",label:"What are the key findings?",placeholder:"e.g. we are launching feature X"},
    {key:"ask",label:"What is your ask?",placeholder:"e.g. get approval, inform only"},
    {key:"concerns",label:"What concerns might they have?",placeholder:"e.g. Eng worried about scope creep"},
    {key:"format",label:"What format do you need?",placeholder:"e.g. executive brief, email"},
    {key:"tone",label:"What tone fits?",placeholder:"e.g. confident, collaborative"},
  ]},
  "risk":{title:"Risk & Assumptions",system:"You are a product risk analyst. Produce: Assumption Inventory ranked by risk, Risk Register (likelihood x impact), Critical Path Risks, Mitigation Strategies, Validation Experiments, Early Warning Indicators, Go/No-go Checklist.",questions:[
    {key:"feature",label:"What feature are you assessing?",placeholder:"e.g. launching AI recommendations"},
    {key:"assumptions",label:"What key assumptions is this built on?",placeholder:"e.g. users want personalization"},
    {key:"dependencies",label:"What are the critical dependencies?",placeholder:"e.g. data pipeline, third-party API"},
    {key:"timeline",label:"What is the timeline?",placeholder:"e.g. MVP in 8 weeks"},
    {key:"team",label:"What team is involved?",placeholder:"e.g. 2 engineers, 1 designer"},
    {key:"known_risks",label:"What risks are you already aware of?",placeholder:"e.g. low data quality"},
    {key:"stakes",label:"What is at stake if this fails?",placeholder:"e.g. missed OKR, user trust"},
  ]},
};

const EMAIL_Q = [
  {key:"core",label:"Describe your email - who it is to, what it is about, and what you need from them.",placeholder:"e.g. To my VP of Product. Feature X is delayed by 2 weeks. Need approval to adjust timeline.",rows:4},
  {key:"context",label:"Any background context? (optional)",placeholder:"e.g. They were on the call last Tuesday.",rows:2},
];
const MONDAY_Q = [
  {key:"core",label:"Summarise your week - what got done, what is coming up, and any blockers.",placeholder:"e.g. Shipped onboarding v2 and ran 4 user interviews. Next week launching A/B test. Blocker: waiting on legal.",rows:5},
  {key:"audience",label:"Who is this update for? (optional)",placeholder:"e.g. Cross-functional team, exec stakeholders",rows:1},
];

const FUNNEL_TEMPLATES: Record<string,{name:string;users:number;uxNotes:string;device:string;source:string}[]> = {
  saas:[
    {name:"Website Visit",users:0,uxNotes:"",device:"",source:""},
    {name:"Sign Up Page",users:0,uxNotes:"",device:"",source:""},
    {name:"Account Created",users:0,uxNotes:"",device:"",source:""},
    {name:"Onboarding Step 1",users:0,uxNotes:"",device:"",source:""},
    {name:"First Key Action",users:0,uxNotes:"",device:"",source:""},
    {name:"Paid Conversion",users:0,uxNotes:"",device:"",source:""},
  ],
  ecommerce:[
    {name:"Product Page View",users:0,uxNotes:"",device:"",source:""},
    {name:"Add to Cart",users:0,uxNotes:"",device:"",source:""},
    {name:"Checkout Started",users:0,uxNotes:"",device:"",source:""},
    {name:"Payment Details",users:0,uxNotes:"",device:"",source:""},
    {name:"Order Confirmed",users:0,uxNotes:"",device:"",source:""},
  ],
  onboarding:[
    {name:"App Install",users:0,uxNotes:"",device:"",source:""},
    {name:"Splash Screen",users:0,uxNotes:"",device:"",source:""},
    {name:"Registration",users:0,uxNotes:"",device:"",source:""},
    {name:"Profile Setup",users:0,uxNotes:"",device:"",source:""},
    {name:"Tutorial Complete",users:0,uxNotes:"",device:"",source:""},
    {name:"First Value Moment",users:0,uxNotes:"",device:"",source:""},
  ],
};

// ─── API ──────────────────────────────────────────────────
async function callClaude(messages: {role:string;content:string}[], system = "") {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1500, system, messages }),
  });
  const data = await res.json();
  return data.content?.map((b:{text?:string}) => b.text || "").join("\n") || "No response.";
}

// ─── SHARED UI ────────────────────────────────────────────
function Btn({onClick,disabled,children,variant="primary",size="md"}:{onClick?:()=>void;disabled?:boolean;children:React.ReactNode;variant?:"primary"|"secondary"|"ghost";size?:"sm"|"md"}) {
  const base = "inline-flex items-center gap-2 font-semibold rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed";
  const sizes = {sm:"px-3 py-1.5 text-xs", md:"px-5 py-2.5 text-sm"};
  const variants = {
    primary:"bg-gradient-to-r from-slate-900 to-indigo-700 text-white shadow-md shadow-indigo-200 hover:scale-[1.02]",
    secondary:"border border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:text-indigo-600",
    ghost:"text-slate-500 hover:text-slate-800 bg-transparent border-0",
  };
  return <button onClick={onClick} disabled={disabled} className={`${base} ${sizes[size]} ${variants[variant]}`}>{children}</button>;
}

function Card({children,className=""}:{children:React.ReactNode;className?:string}) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>{children}</div>;
}

function InfoBox({children}:{children:React.ReactNode}) {
  return <div className="rounded-2xl bg-indigo-50 border border-indigo-100 px-5 py-4 text-sm text-indigo-700 leading-7">{children}</div>;
}

function ResultBox({children}:{children:React.ReactNode}) {
  return <Card className="text-sm leading-7 text-slate-700 whitespace-pre-wrap">{children}</Card>;
}

function ChatBubble({role,content}:{role:string;content:string}) {
  return (
    <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 whitespace-pre-wrap ${role==="user"?"self-end bg-indigo-50 border border-indigo-100 text-indigo-800":"self-start bg-white border border-slate-200 text-slate-700"}`}>
      {content}
    </div>
  );
}

// ─── PREFLIGHT FORM ───────────────────────────────────────
function PreflightForm({moduleId,onSubmit}:{moduleId:string;onSubmit:(reply:string,ctx:string)=>void}) {
  const config = MODULE_Q[moduleId];
  const [answers,setAnswers] = useState<Record<string,string>>({});
  const [loading,setLoading] = useState(false);
  if (!config) return null;
  const handle = async () => {
    setLoading(true);
    const context = config.questions.map(q=>`${q.label}\n- ${answers[q.key]||"(not provided)"}`).join("\n\n");
    const reply = await callClaude([{role:"user",content:`Context:\n\n${context}\n\nProvide a thorough structured analysis.`}],config.system);
    onSubmit(reply,context);
    setLoading(false);
  };
  const filled = config.questions.filter(q=>answers[q.key]?.trim()).length;
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <InfoBox>Answer these questions for a targeted, specific analysis. More context = better output.</InfoBox>
      {config.questions.map((q,i)=>(
        <Card key={q.key}>
          <div className="text-sm font-medium text-slate-700 mb-2"><span className="text-slate-400 mr-2">{i+1}</span>{q.label}</div>
          <textarea rows={q.rows||2} value={answers[q.key]||""} onChange={e=>setAnswers({...answers,[q.key]:e.target.value})} placeholder={q.placeholder}
            className="w-full text-sm resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-indigo-400 focus:bg-white transition"/>
        </Card>
      ))}
      <div className="flex items-center gap-3">
        <Btn onClick={handle} disabled={loading||filled===0}>{loading?"Generating...":"Generate Analysis →"}</Btn>
        <span className="text-xs text-slate-400">{filled}/{config.questions.length} answered</span>
      </div>
    </div>
  );
}

// ─── AI MODULE ────────────────────────────────────────────
function AIModule({moduleId}:{moduleId:string}) {
  const [phase,setPhase] = useState<"form"|"result"|"chat">("form");
  const [result,setResult] = useState("");
  const [context,setContext] = useState("");
  const [chatMsgs,setChatMsgs] = useState<{role:string;content:string}[]>([]);
  const [chatInput,setChatInput] = useState("");
  const [chatLoading,setChatLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[chatMsgs]);
  const onSubmit = (reply:string,ctx:string) => {setResult(reply);setContext(ctx);setPhase("result");};
  const sendChat = async () => {
    if (!chatInput.trim()||chatLoading) return;
    const sys = MODULE_Q[moduleId]?.system||"";
    const history = [{role:"user",content:`Context:\n${context}\n\nInitial analysis:\n${result}`},{role:"assistant",content:"Understood. How can I help further?"},...chatMsgs,{role:"user",content:chatInput}];
    const next = [...chatMsgs,{role:"user",content:chatInput}];
    setChatMsgs(next);setChatInput("");setChatLoading(true);
    const reply = await callClaude(history,sys);
    setChatMsgs([...next,{role:"assistant",content:reply}]);setChatLoading(false);
  };
  if (phase==="form") return <PreflightForm moduleId={moduleId} onSubmit={onSubmit}/>;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Btn variant="secondary" size="sm" onClick={()=>{setPhase("form");setResult("");setChatMsgs([]);}}>← Start over</Btn>
        <Btn variant="secondary" size="sm" onClick={()=>setPhase(phase==="result"?"chat":"result")}>{phase==="result"?"Continue in chat →":"View result"}</Btn>
        <Btn variant="secondary" size="sm" onClick={()=>navigator.clipboard.writeText(result)}>Copy</Btn>
      </div>
      {phase==="result"&&<ResultBox>{result}</ResultBox>}
      {phase==="chat"&&(
        <div className="flex flex-col h-[460px] gap-3">
          <div className="flex-1 overflow-y-auto flex flex-col gap-3">
            <div className="self-start max-w-[85%] bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm leading-7 text-slate-700 whitespace-pre-wrap">{result}</div>
            {chatMsgs.map((m,i)=><ChatBubble key={i} role={m.role} content={m.content}/>)}
            {chatLoading&&<div className="self-start bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-400">Thinking...</div>}
            <div ref={bottomRef}/>
          </div>
          <div className="flex gap-2">
            <textarea value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendChat();}}} placeholder="Ask a follow-up... (Enter to send)" rows={2}
              className="flex-1 resize-none text-sm rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-400 transition"/>
            <Btn onClick={sendChat} disabled={chatLoading||!chatInput.trim()}>Send</Btn>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── FUNNEL MODULE ────────────────────────────────────────
function FunnelModule() {
  type Step = {name:string;users:number;uxNotes:string;device:string;source:string};
  const [phase,setPhase] = useState<"setup"|"data"|"questions"|"result">("setup");
  const [template,setTemplate] = useState("saas");
  const [steps,setSteps] = useState<Step[]>(FUNNEL_TEMPLATES.saas.map(s=>({...s})));
  const [newStep,setNewStep] = useState("");
  const [answers,setAnswers] = useState<Record<string,string>>({});
  const [analysis,setAnalysis] = useState("");
  const [loading,setLoading] = useState(false);
  const [chatMsgs,setChatMsgs] = useState<{role:string;content:string}[]>([]);
  const [chatInput,setChatInput] = useState("");
  const [chatLoading,setChatLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[chatMsgs]);

  const applyTemplate = (t:string)=>{setTemplate(t);if(t==="custom")setSteps([{name:"Step 1",users:0,uxNotes:"",device:"",source:""}]);else setSteps(FUNNEL_TEMPLATES[t].map(s=>({...s})));};
  const upd = (i:number,f:string,v:string|number)=>setSteps(steps.map((s,j)=>j===i?{...s,[f]:v}:s));
  const move = (i:number,d:number)=>{const s=[...steps];const j=i+d;if(j<0||j>=s.length)return;[s[i],s[j]]=[s[j],s[i]];setSteps(s);};
  const maxU = Math.max(...steps.map(s=>s.users),1);

  const ctxQ = [
    {key:"product",label:"What product does this funnel represent?",placeholder:"e.g. SaaS signup-to-paid funnel"},
    {key:"users",label:"Who are the users?",placeholder:"e.g. organic web visitors"},
    {key:"timeframe",label:"What time period?",placeholder:"e.g. last 30 days"},
    {key:"changes",label:"Any recent changes?",placeholder:"e.g. redesigned checkout 3 weeks ago"},
    {key:"goal",label:"What is your target conversion rate?",placeholder:"e.g. 5% visit-to-purchase"},
    {key:"devices",label:"Device or channel breakdown?",placeholder:"e.g. 60% mobile, 40% desktop"},
    {key:"research",label:"Any existing user research?",placeholder:"e.g. Hotjar shows rage clicks on payment"},
  ];
  const dynQ = steps.map((s,i)=>{
    const dr = i===0?null:steps[i-1].users>0?(((steps[i-1].users-s.users)/steps[i-1].users)*100).toFixed(1):null;
    return [{key:`ux_${i}`,label:`"${s.name}" - What UX friction exists here?`,placeholder:"e.g. confusing form, slow load"},
      dr&&+dr>20?{key:`why_${i}`,label:`"${s.name}" drops ${dr}% - what do you think causes this?`,placeholder:"e.g. users do not understand the value"}:null
    ].filter(Boolean) as {key:string;label:string;placeholder:string}[];
  }).flat();

  const analyze = async()=>{
    setLoading(true);
    const funnelText = steps.map((s,i)=>{
      const prev = i===0?s.users:steps[i-1].users;
      const dr = i===0?"":prev>0?`${(((prev-s.users)/prev)*100).toFixed(1)}% drop-off`:"";
      return `Step ${i+1}: ${s.name}\n  Users: ${s.users.toLocaleString()}\n  Drop-off: ${dr||"n/a"}${s.uxNotes?`\n  UX: ${s.uxNotes}`:""}`;
    }).join("\n\n");
    const ctx = [...ctxQ,...dynQ].map(q=>`${q.label}\n- ${answers[q.key]||"(not provided)"}`).join("\n\n");
    const sys = "You are a senior growth PM and UX strategist. Produce: Executive Summary, Funnel Performance Overview, Step-by-Step Drop-off Analysis, UX Audit, Optimization Roadmap (30/60/90 day), Hypothesis Backlog (5 If/Then/Because), Benchmarks.";
    const reply = await callClaude([{role:"user",content:`FUNNEL DATA:\n${funnelText}\n\nCONTEXT:\n${ctx}`}],sys);
    setAnalysis(reply);setPhase("result");setLoading(false);
  };

  const sendChat = async()=>{
    if(!chatInput.trim()||chatLoading) return;
    const msg = {role:"user",content:chatInput};
    const next = [...chatMsgs,msg];
    setChatMsgs(next);setChatInput("");setChatLoading(true);
    const reply = await callClaude([{role:"user",content:`Analysis:\n${analysis}`},{role:"assistant",content:"Understood."},...next],"You are a senior growth PM. Answer follow-up questions.");
    setChatMsgs([...next,{role:"assistant",content:reply}]);setChatLoading(false);
  };

  const templates = [["saas","SaaS"],["ecommerce","E-commerce"],["onboarding","App Onboarding"],["custom","Custom"]];

  if (phase==="setup") return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <div className="flex gap-2 flex-wrap">
        {templates.map(([val,label])=>(
          <button key={val} onClick={()=>applyTemplate(val)}
            className={`px-4 py-2 text-sm rounded-xl border transition ${template===val?"border-indigo-400 bg-indigo-50 text-indigo-700 font-semibold":"border-slate-200 bg-white text-slate-600 hover:border-indigo-300"}`}>{label}</button>
        ))}
      </div>
      <Card>
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Funnel Steps</div>
        {steps.map((s,i)=>(
          <div key={i} className={`flex items-center gap-3 py-3 ${i<steps.length-1?"border-b border-slate-100":""}`}>
            <span className="text-xs text-slate-400 w-5">{i+1}</span>
            <input value={s.name} onChange={e=>upd(i,"name",e.target.value)}
              className="flex-1 font-medium text-sm text-slate-800 border-b border-dashed border-slate-200 bg-transparent outline-none pb-1"/>
            <button onClick={()=>move(i,-1)} disabled={i===0} className="text-xs text-slate-400 hover:text-slate-700 disabled:opacity-30">↑</button>
            <button onClick={()=>move(i,1)} disabled={i===steps.length-1} className="text-xs text-slate-400 hover:text-slate-700 disabled:opacity-30">↓</button>
            <button onClick={()=>setSteps(steps.filter((_,j)=>j!==i))} disabled={steps.length<=2} className="text-xs text-red-400 hover:text-red-600 disabled:opacity-30">✕</button>
          </div>
        ))}
        <div className="flex gap-2 pt-3 border-t border-slate-100 mt-2">
          <input value={newStep} onChange={e=>setNewStep(e.target.value)} onKeyDown={e=>e.key==="Enter"&&newStep.trim()&&(setSteps([...steps,{name:newStep,users:0,uxNotes:"",device:"",source:""}]),setNewStep(""))}
            placeholder="New step name..." className="flex-1 text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
          <Btn variant="secondary" size="sm" onClick={()=>{if(newStep.trim()){setSteps([...steps,{name:newStep,users:0,uxNotes:"",device:"",source:""}]);setNewStep("");}}} disabled={!newStep.trim()}>+ Add</Btn>
        </div>
      </Card>
      <Btn onClick={()=>setPhase("data")} disabled={steps.length<2}>Next: Enter data →</Btn>
    </div>
  );

  if (phase==="data") return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <Btn variant="secondary" size="sm" onClick={()=>setPhase("setup")}>← Edit steps</Btn>
      {steps.map((s,i)=>{
        const prev = i===0?s.users:steps[i-1].users;
        const dr = i>0&&prev>0?(((prev-s.users)/prev)*100).toFixed(1):null;
        const pct = maxU>0?Math.round((s.users/maxU)*100):0;
        const barColor = i===0?"bg-indigo-500":dr&&+dr>50?"bg-red-400":dr&&+dr>25?"bg-amber-400":"bg-emerald-400";
        return (
          <Card key={i}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-slate-800"><span className="text-slate-400 mr-2">{i+1}</span>{s.name}</span>
              {dr&&<span className={`text-xs font-semibold ${+dr>40?"text-red-500":"text-amber-500"}`}>-{dr}%</span>}
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div>
                <div className="text-xs text-slate-400 mb-1">Users *</div>
                <input type="number" value={s.users||""} onChange={e=>upd(i,"users",+e.target.value)} placeholder="e.g. 10000"
                  className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Traffic source</div>
                <input value={s.source} onChange={e=>upd(i,"source",e.target.value)} placeholder="e.g. Organic"
                  className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Device split</div>
                <input value={s.device} onChange={e=>upd(i,"device",e.target.value)} placeholder="e.g. 60% mobile"
                  className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400 mb-1">UX friction observed</div>
              <input value={s.uxNotes} onChange={e=>upd(i,"uxNotes",e.target.value)} placeholder={`e.g. rage clicks on ${s.name} CTA`}
                className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
            </div>
            {s.users>0&&<div className="mt-3 h-1.5 bg-slate-100 rounded-full"><div className={`h-full ${barColor} rounded-full transition-all`} style={{width:`${pct}%`}}/></div>}
          </Card>
        );
      })}
      <Btn onClick={()=>setPhase("questions")} disabled={steps.filter(s=>s.users>0).length<2}>Next: Context questions →</Btn>
    </div>
  );

  if (phase==="questions") return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <Btn variant="secondary" size="sm" onClick={()=>setPhase("data")}>← Edit data</Btn>
      <InfoBox>Answer these for a deeper analysis. Step-specific questions are auto-generated from your drop-off data.</InfoBox>
      <div className="text-xs font-semibold uppercase tracking-widest text-indigo-500">General context</div>
      {ctxQ.map((q,i)=>(
        <Card key={q.key}>
          <div className="text-sm font-medium text-slate-700 mb-2"><span className="text-slate-400 mr-2">{i+1}</span>{q.label}</div>
          <textarea rows={2} value={answers[q.key]||""} onChange={e=>setAnswers({...answers,[q.key]:e.target.value})} placeholder={q.placeholder}
            className="w-full text-sm resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
        </Card>
      ))}
      {dynQ.length>0&&<>
        <div className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mt-2">Step-specific UX questions</div>
        {dynQ.map(q=>(
          <Card key={q.key}>
            <div className="text-sm font-medium text-slate-700 mb-2">{q.label}</div>
            <textarea rows={2} value={answers[q.key]||""} onChange={e=>setAnswers({...answers,[q.key]:e.target.value})} placeholder={q.placeholder}
              className="w-full text-sm resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
          </Card>
        ))}
      </>}
      <Btn onClick={analyze} disabled={loading}>{loading?"Generating deep analysis...":"Generate Full Analysis →"}</Btn>
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <Btn variant="secondary" size="sm" onClick={()=>{setPhase("setup");setAnalysis("");setChatMsgs([]);}}>← Start over</Btn>
        <Btn variant="secondary" size="sm" onClick={()=>setPhase("data")}>Edit data</Btn>
        <Btn variant="secondary" size="sm" onClick={()=>setPhase("questions")}>Edit answers</Btn>
        <Btn variant="secondary" size="sm" onClick={()=>navigator.clipboard.writeText(analysis)}>Copy</Btn>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {steps.map((s,i)=>{
          const cr = steps[0].users>0?((s.users/steps[0].users)*100).toFixed(1):0;
          const dr = i>0&&steps[i-1].users>0?(((steps[i-1].users-s.users)/steps[i-1].users)*100).toFixed(1):null;
          return (
            <Card key={i} className="p-4">
              <div className="text-xs text-slate-400 mb-1">{s.name}</div>
              <div className="text-xl font-bold text-slate-900">{s.users.toLocaleString()}</div>
              <div className="text-xs text-slate-400">{cr}% overall</div>
              {dr&&<div className={`text-xs font-semibold ${+dr>40?"text-red-500":"text-amber-500"}`}>-{dr}%</div>}
            </Card>
          );
        })}
      </div>
      <ResultBox>{analysis}</ResultBox>
      <div className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Follow-up questions</div>
      <div className="flex flex-col gap-3 max-h-72 overflow-y-auto">
        {chatMsgs.map((m,i)=><ChatBubble key={i} role={m.role} content={m.content}/>)}
        {chatLoading&&<div className="self-start bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-400">Thinking...</div>}
        <div ref={bottomRef}/>
      </div>
      <div className="flex gap-2">
        <input value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendChat()} placeholder="Ask a follow-up..."
          className="flex-1 text-sm rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-400"/>
        <Btn onClick={sendChat} disabled={chatLoading||!chatInput.trim()}>Ask</Btn>
      </div>
    </div>
  );
}

// ─── HYPOTHESIS MODULE ────────────────────────────────────
function HypothesisModule() {
  type Hyp = {id:number;if:string;then:string;because:string;confidence:string;metric:string;timeline:string;evidence:string};
  const [hyps,setHyps] = useState<Hyp[]>([]);
  const [form,setForm] = useState({if:"",then:"",because:"",confidence:"medium",metric:"",timeline:"",evidence:""});
  const [aiResult,setAiResult] = useState<Record<number,string>>({});
  const [loading,setLoading] = useState<number|null>(null);
  const [show,setShow] = useState(true);
  const cc:Record<string,string> = {low:"#ef4444",medium:"#f59e0b",high:"#10b981"};
  const add = ()=>{if(!form.if||!form.then)return;setHyps([...hyps,{...form,id:Date.now()}]);setForm({if:"",then:"",because:"",confidence:"medium",metric:"",timeline:"",evidence:""});};
  const validate = async(h:Hyp)=>{
    setLoading(h.id);
    const p = `Hypothesis: If ${h.if}, then ${h.then}, because ${h.because}.\nConfidence: ${h.confidence}\nMetric: ${h.metric}\nTimeline: ${h.timeline}\nEvidence: ${h.evidence}\n\nProvide full validation plan.`;
    const reply = await callClaude([{role:"user",content:p}],"You are a product experimentation expert. Provide: Hypothesis Assessment, Validation Approach, Qualitative methods, Quantitative methods, Sample size and timeline, Success and Failure criteria, Risk factors, Recommendation.");
    setAiResult(prev=>({...prev,[h.id]:reply}));setLoading(null);
  };
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      {show&&(
        <Card>
          <div className="text-sm font-semibold text-slate-700 mb-3">Build a new hypothesis</div>
          {[{k:"if",l:"If...",p:"we add feature X"},{k:"then",l:"Then...",p:"conversion will increase by Y%"},{k:"because",l:"Because...",p:"users struggle with Z"},{k:"metric",l:"Success metric",p:"e.g. 10% lift in activation"},{k:"timeline",l:"Timeline",p:"e.g. 2-week A/B test"},{k:"evidence",l:"Existing evidence",p:"optional"}].map(f=>(
            <div key={f.k} className="flex gap-3 items-center mb-2">
              <span className="text-xs text-slate-400 w-24 shrink-0">{f.l}</span>
              <input value={(form as Record<string,string>)[f.k]} onChange={e=>setForm({...form,[f.k]:e.target.value})} placeholder={f.p}
                className="flex-1 text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
            </div>
          ))}
          <div className="flex gap-3 items-center mt-2">
            <span className="text-xs text-slate-400 w-24 shrink-0">Confidence</span>
            <select value={form.confidence} onChange={e=>setForm({...form,confidence:e.target.value})}
              className="text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none w-auto">
              <option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option>
            </select>
            <Btn onClick={add} disabled={!form.if||!form.then}>Add hypothesis</Btn>
          </div>
        </Card>
      )}
      <Btn variant="secondary" size="sm" onClick={()=>setShow(!show)}>{show?"Hide form":"+ New hypothesis"}</Btn>
      {hyps.map(h=>(
        <Card key={h.id}>
          <div className="flex justify-between gap-3 mb-2">
            <p className="text-sm leading-7 text-slate-700"><span className="text-slate-400">If</span> {h.if} <span className="text-slate-400">then</span> {h.then}{h.because&&<><span className="text-slate-400"> because</span> {h.because}</>}</p>
            <span className="text-xs px-3 py-1 rounded-full font-semibold shrink-0 h-fit" style={{background:cc[h.confidence]+"22",color:cc[h.confidence]}}>{h.confidence}</span>
          </div>
          {h.metric&&<p className="text-xs text-slate-400 mb-3">Metric: {h.metric} · Timeline: {h.timeline}</p>}
          <Btn variant="secondary" size="sm" onClick={()=>validate(h)} disabled={loading===h.id}>{loading===h.id?"Validating...":"AI Validate →"}</Btn>
          {aiResult[h.id]&&<div className="mt-3 text-sm leading-7 text-slate-600 whitespace-pre-wrap border-t border-slate-100 pt-3">{aiResult[h.id]}</div>}
        </Card>
      ))}
      {hyps.length===0&&!show&&<p className="text-sm text-slate-400 text-center py-8">No hypotheses yet.</p>}
    </div>
  );
}

// ─── PRIORITIZATION MODULE ────────────────────────────────
function PrioritizationModule() {
  type Feature = {name:string;reach:number;impact:number;confidence:number;effort:number};
  const [phase,setPhase] = useState<"form"|"score">("form");
  const [answers,setAnswers] = useState<Record<string,string>>({});
  const [features,setFeatures] = useState<Feature[]>([
    {name:"Onboarding redesign",reach:8,impact:9,confidence:80,effort:3},
    {name:"Email notifications",reach:6,impact:5,confidence:90,effort:2},
    {name:"Analytics dashboard",reach:4,impact:8,confidence:60,effort:8},
  ]);
  const [newF,setNewF] = useState("");
  const [fw,setFw] = useState("rice");
  const [ai,setAi] = useState("");
  const [loading,setLoading] = useState(false);
  const rice = (f:Feature)=>Math.round((f.reach*f.impact*(f.confidence/100))/f.effort);
  const ice = (f:Feature)=>Math.round(f.impact*f.confidence/100*(10-f.effort));
  const sorted = [...features].sort((a,b)=>fw==="rice"?rice(b)-rice(a):ice(b)-ice(a));
  const qs = [
    {key:"goal",label:"Primary product goal this quarter?",placeholder:"e.g. increase activation from 30% to 50%"},
    {key:"constraints",label:"Key constraints?",placeholder:"e.g. 3 engineers, 6 weeks"},
    {key:"stage",label:"Product stage?",placeholder:"e.g. PMF, scaling, mature"},
    {key:"customer",label:"Customer segment to prioritize?",placeholder:"e.g. enterprise, self-serve SMBs"},
    {key:"debt",label:"Any tech debt to consider?",placeholder:"e.g. need to refactor auth"},
    {key:"stakeholder",label:"Any committed stakeholder promises?",placeholder:"e.g. CEO promised feature X"},
  ];
  const getAI = async()=>{
    setLoading(true);
    const ctx = qs.map(q=>`${q.label}\n- ${answers[q.key]||"(not provided)"}`).join("\n\n");
    const list = features.map(f=>`${f.name}: RICE=${rice(f)}, ICE=${ice(f)}, Effort=${f.effort}`).join("\n");
    const reply = await callClaude([{role:"user",content:`Context:\n${ctx}\n\nFeatures:\n${list}\n\nGive prioritized backlog recommendation.`}],"You are a product prioritization expert. Give: Recommended Backlog Order, Rationale per feature, What to defer, Risk of current ordering, exec summary.");
    setAi(reply);setLoading(false);
  };
  if (phase==="form") return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <InfoBox>Give context first, then score your features.</InfoBox>
      {qs.map((q,i)=>(
        <Card key={q.key}>
          <div className="text-sm font-medium text-slate-700 mb-2"><span className="text-slate-400 mr-2">{i+1}</span>{q.label}</div>
          <input value={answers[q.key]||""} onChange={e=>setAnswers({...answers,[q.key]:e.target.value})} placeholder={q.placeholder}
            className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
        </Card>
      ))}
      <Btn onClick={()=>setPhase("score")}>Next: Score features →</Btn>
    </div>
  );
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center flex-wrap">
        <Btn variant="secondary" size="sm" onClick={()=>setPhase("form")}>← Context</Btn>
        <select value={fw} onChange={e=>setFw(e.target.value)} className="text-sm rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none w-auto">
          <option value="rice">RICE Score</option><option value="ice">ICE Score</option>
        </select>
        <Btn onClick={getAI} disabled={loading}>{loading?"Analyzing...":"AI Recommendation →"}</Btn>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-slate-100">{["Feature","Reach","Impact","Conf%","Effort","RICE","ICE"].map(h=>(
            <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>
          ))}</tr></thead>
          <tbody>{sorted.map((f,i)=>(
            <tr key={i} className="border-b border-slate-50 last:border-0">
              <td className="px-4 py-3 font-semibold text-slate-800">{f.name}</td>
              {["reach","impact","confidence","effort"].map(k=>(
                <td key={k} className="px-4 py-3">
                  <input type="number" value={(f as Record<string,number>)[k]} min={0} max={k==="confidence"?100:10}
                    onChange={e=>setFeatures(features.map((x,j)=>features.indexOf(f)===j?{...x,[k]:+e.target.value}:x))}
                    className="w-14 text-sm rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 outline-none focus:border-indigo-400"/>
                </td>
              ))}
              <td className={`px-4 py-3 font-bold ${fw==="rice"?"text-indigo-600":"text-slate-400"}`}>{rice(f)}</td>
              <td className={`px-4 py-3 font-bold ${fw==="ice"?"text-indigo-600":"text-slate-400"}`}>{ice(f)}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="flex gap-2">
        <input value={newF} onChange={e=>setNewF(e.target.value)} placeholder="Add feature name..."
          className="flex-1 text-sm rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-400"/>
        <Btn variant="secondary" onClick={()=>{if(newF.trim()){setFeatures([...features,{name:newF,reach:5,impact:5,confidence:70,effort:5}]);setNewF("");}}} disabled={!newF.trim()}>Add</Btn>
      </div>
      {ai&&<ResultBox>{ai}</ResultBox>}
    </div>
  );
}

// ─── DRAFT COMMS MODULE ───────────────────────────────────
type Draft = {id:number;docType:string;tone:string;answers:Record<string,string>;content:string;chatMsgs:{role:string;content:string}[];chatInput:string;chatLoading:boolean;pendingTone?:string;createdAt:string;label:string};

function DraftCommsModule() {
  const [view,setView] = useState<"list"|"new"|"detail">("list");
  const [drafts,setDrafts] = useState<Draft[]>([]);
  const [active,setActive] = useState<Draft|null>(null);
  const [docType,setDocType] = useState<string|null>(null);
  const [tone,setTone] = useState<string|null>(null);
  const [answers,setAnswers] = useState<Record<string,string>>({});
  const [loading,setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[active?.chatMsgs]);

  const qs = docType==="email"?EMAIL_Q:MONDAY_Q;
  const tc:Record<string,string> = {email:"text-blue-600",monday:"text-emerald-600"};
  const tl:Record<string,string> = {email:"Email",monday:"Monday Update"};

  const upd = (id:number,patch:Partial<Draft>)=>{setDrafts(prev=>prev.map(d=>d.id===id?{...d,...patch}:d));setActive(prev=>prev?.id===id?{...prev,...patch}:prev);};

  const generate = async()=>{
    setLoading(true);
    const ctx = qs.map(q=>`${q.label}\n- ${answers[q.key]||"(not provided)"}`).join("\n\n");
    const sys = docType==="email"
      ?`You are an expert communication writer for PMs. Draft a complete email with Subject line, greeting, structured body, clear CTA, sign-off. Tone: ${tone}. ${TONE_DESC[tone!]} Concise, no fluff.`
      :`You are an expert communication writer for PMs. Draft a clean Monday update with Done, Next, Blockers sections. Tone: ${tone}. ${TONE_DESC[tone!]} Scannable, tight bullets.`;
    const reply = await callClaude([{role:"user",content:`Draft a ${docType==="email"?"email":"Monday update"}:\n\n${ctx}\n\nTone: ${tone}`}],sys);
    const d:Draft = {id:Date.now(),docType:docType!,tone:tone!,answers:{...answers},content:reply,chatMsgs:[],chatInput:"",chatLoading:false,createdAt:new Date().toLocaleString(),label:answers.core?.slice(0,50)+"..."};
    setDrafts(prev=>[d,...prev]);setActive(d);setAnswers({});setLoading(false);setView("detail");
  };

  const retone = async(draft:Draft,nt:string)=>{
    upd(draft.id,{chatLoading:true,pendingTone:nt});
    const sys = draft.docType==="email"?`Rewrite this email in a ${nt} tone. ${TONE_DESC[nt]} Keep same info. Return full email with subject.`:`Rewrite this Monday update in a ${nt} tone. ${TONE_DESC[nt]} Keep same info.`;
    const reply = await callClaude([{role:"user",content:`Rewrite in ${nt} tone:\n\n${draft.content}`}],sys);
    const msgs = [...draft.chatMsgs,{role:"user",content:`Change tone to: ${nt}`},{role:"assistant",content:reply}];
    upd(draft.id,{content:reply,tone:nt,pendingTone:undefined,chatMsgs:msgs,chatLoading:false});
  };

  const sendChat = async(d:Draft)=>{
    if(!d.chatInput?.trim()) return;
    const msg = {role:"user",content:d.chatInput};
    const msgs = [...(d.chatMsgs||[]),msg];
    upd(d.id,{chatMsgs:msgs,chatInput:"",chatLoading:true});
    const reply = await callClaude([{role:"user",content:`Draft:\n${d.content}`},{role:"assistant",content:"I have it. How can I revise?"},...msgs],`Communication editor. Tone: ${d.tone}. ${TONE_DESC[d.tone]}`);
    upd(d.id,{chatMsgs:[...msgs,{role:"assistant",content:reply}],chatLoading:false});
  };

  if (view==="list") return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-400">{drafts.length} saved draft{drafts.length!==1?"s":""}</span>
        <Btn onClick={()=>{setDocType(null);setTone(null);setAnswers({});setView("new");}}>+ New draft</Btn>
      </div>
      {drafts.length===0&&(
        <Card className="text-center py-12">
          <div className="text-3xl mb-3">✉</div>
          <div className="text-sm font-semibold text-slate-700 mb-2">No drafts yet</div>
          <Btn variant="secondary" onClick={()=>{setDocType(null);setTone(null);setAnswers({});setView("new");}}>Create first draft</Btn>
        </Card>
      )}
      {drafts.map(d=>(
        <div key={d.id} onClick={()=>{setActive(d);setView("detail");}} className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-indigo-200 hover:shadow-md transition flex gap-3 items-start">
          <span className={`text-xs px-3 py-1 rounded-full font-semibold shrink-0 bg-slate-50 border border-slate-200 ${tc[d.docType]}`}>{tl[d.docType]}</span>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-slate-800 truncate">{d.label}</div>
            <div className="text-xs text-slate-400">Tone: {d.tone} · {d.chatMsgs.length} revisions · {d.createdAt}</div>
          </div>
          <span className="text-slate-300 text-sm">→</span>
        </div>
      ))}
    </div>
  );

  if (view==="new") {
    if (!docType) return (
      <div className="flex flex-col gap-4 max-w-lg">
        <Btn variant="secondary" size="sm" onClick={()=>setView("list")}>← Drafts</Btn>
        <div className="text-sm font-semibold text-slate-800">What do you want to draft?</div>
        <div className="grid grid-cols-2 gap-3">
          {[["email","✉","Email","To a stakeholder, exec, or partner"],["monday","🗓","Monday Update","Weekly status: done, next, blockers"]].map(([id,icon,label,desc])=>(
            <button key={id} onClick={()=>setDocType(id)} className="p-5 rounded-2xl border border-slate-200 bg-white text-left hover:border-indigo-300 hover:bg-indigo-50 transition shadow-sm">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-sm font-semibold text-slate-800 mb-1">{label}</div>
              <div className="text-xs text-slate-500 leading-5">{desc}</div>
            </button>
          ))}
        </div>
      </div>
    );
    if (!tone) return (
      <div className="flex flex-col gap-4 max-w-lg">
        <Btn variant="secondary" size="sm" onClick={()=>setDocType(null)}>← Back</Btn>
        <div className="text-sm font-semibold text-slate-800">Choose a tone</div>
        <div className="grid grid-cols-2 gap-2">
          {TONES.map(t=>(
            <button key={t} onClick={()=>setTone(t)} className="p-3 rounded-2xl border border-slate-200 bg-white text-left hover:border-indigo-300 hover:bg-indigo-50 transition">
              <div className="text-sm font-semibold text-slate-800 mb-1">{t}</div>
              <div className="text-xs text-slate-500 leading-5">{TONE_DESC[t]}</div>
            </button>
          ))}
        </div>
      </div>
    );
    return (
      <div className="flex flex-col gap-4 max-w-2xl">
        <div className="flex gap-2 items-center flex-wrap">
          <Btn variant="secondary" size="sm" onClick={()=>setTone(null)}>← Change tone</Btn>
          <span className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full px-3 py-1">{tone}</span>
          <span className={`text-xs bg-slate-50 border border-slate-200 rounded-full px-3 py-1 ${tc[docType!]}`}>{tl[docType!]}</span>
        </div>
        <InfoBox>Describe it naturally - AI handles the structure.</InfoBox>
        {qs.map(q=>(
          <Card key={q.key}>
            <div className="text-sm font-medium text-slate-700 mb-2">{q.label}</div>
            <textarea rows={q.rows||3} value={answers[q.key]||""} onChange={e=>setAnswers({...answers,[q.key]:e.target.value})} placeholder={q.placeholder}
              className="w-full text-sm resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
          </Card>
        ))}
        <Btn onClick={generate} disabled={loading||!answers.core?.trim()}>{loading?"Drafting...":"Draft →"}</Btn>
      </div>
    );
  }

  const d = active;
  if (!d) return null;
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <div className="flex gap-2 flex-wrap items-center">
        <Btn variant="secondary" size="sm" onClick={()=>setView("list")}>← All drafts</Btn>
        <span className={`text-xs bg-slate-50 border border-slate-200 rounded-full px-3 py-1 ${tc[d.docType]}`}>{tl[d.docType]}</span>
        <span className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full px-3 py-1">{d.tone}</span>
        <span className="text-xs text-slate-400">{d.createdAt}</span>
        <Btn variant="secondary" size="sm" onClick={()=>navigator.clipboard.writeText(d.content)}>Copy</Btn>
      </div>
      <div className="flex gap-3 items-start">
        <div className="w-36 shrink-0 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 px-3 pt-3 pb-2">Tone</div>
          {TONES.map(t=>{
            const act = t===d.tone;
            return (
              <button key={t} onClick={()=>!d.chatLoading&&!act&&retone(d,t)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs border-l-2 transition text-left ${act?"border-indigo-500 bg-indigo-50 text-indigo-700 font-semibold":"border-transparent text-slate-500 hover:bg-slate-50"}`}>
                <span>{t}</span>{act&&<span>✓</span>}
              </button>
            );
          })}
        </div>
        <div className="flex-1 relative">
          {d.chatLoading&&(
            <div className="absolute inset-0 rounded-2xl bg-white/90 z-10 flex items-center justify-center border border-slate-200">
              <span className="text-sm text-slate-500">Rewriting in <strong>{d.pendingTone||d.tone}</strong>...</span>
            </div>
          )}
          <div className={`rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 whitespace-pre-wrap min-h-40 transition ${d.chatLoading?"opacity-30":""}`}>{d.content}</div>
        </div>
      </div>
      <div className="text-xs font-bold uppercase tracking-widest text-indigo-500">Revise</div>
      <div className="flex flex-col gap-3 max-h-60 overflow-y-auto">
        {d.chatMsgs.map((m,i)=><ChatBubble key={i} role={m.role} content={m.content}/>)}
        {d.chatLoading&&<div className="self-start bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-400">Revising...</div>}
        <div ref={bottomRef}/>
      </div>
      <div className="flex gap-2">
        <input value={d.chatInput||""} onChange={e=>upd(d.id,{chatInput:e.target.value})} onKeyDown={e=>e.key==="Enter"&&sendChat(d)} placeholder='"Make it shorter", "More urgent", "Add a deadline"'
          className="flex-1 text-sm rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-400"/>
        <Btn onClick={()=>sendChat(d)} disabled={d.chatLoading||!d.chatInput?.trim()}>Revise</Btn>
      </div>
    </div>
  );
}

// ─── GENERAL REPLY MODULE ─────────────────────────────────
type ReplyDraft = {id:number;originalMsg:string;context:string;intent:string;tones:string[];variants:{tone:string;content:string}[];activeTone:string;chatMsgs:{role:string;content:string}[];chatInput:string;chatLoading:boolean;createdAt:string;label:string};

function GeneralReplyModule() {
  const [view,setView] = useState<"list"|"new"|"detail">("list");
  const [drafts,setDrafts] = useState<ReplyDraft[]>([]);
  const [active,setActive] = useState<ReplyDraft|null>(null);
  const [originalMsg,setOriginalMsg] = useState("");
  const [context,setContext] = useState("");
  const [intent,setIntent] = useState("");
  const [selTones,setSelTones] = useState<string[]>([]);
  const [loading,setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[active?.chatMsgs]);

  const toggle = (t:string)=>setSelTones(prev=>prev.includes(t)?prev.filter(x=>x!==t):[...prev,t]);
  const upd = (id:number,patch:Partial<ReplyDraft>)=>{setDrafts(prev=>prev.map(d=>d.id===id?{...d,...patch}:d));setActive(prev=>prev?.id===id?{...prev,...patch}:prev);};

  const generate = async()=>{
    setLoading(true);
    const sys = `You are an expert communication writer. Generate one reply per tone. Format exactly as:\n--- [Tone] ---\n[reply]\nKeep each reply natural and true to its tone.`;
    const prompt = `Original message:\n"${originalMsg}"\n\nWhat I want to say:\n${context||"(not provided)"}\n\nMy intent:\n${intent||"(not provided)"}\n\nGenerate reply for each tone: ${selTones.join(", ")}`;
    const reply = await callClaude([{role:"user",content:prompt}],sys);
    const variants = selTones.map(t=>{
      const rx = new RegExp(`---\\s*${t}\\s*---([\\s\\S]*?)(?=---\\s*\\w|$)`,"i");
      const m = reply.match(rx);
      return {tone:t,content:m?m[1].trim():reply};
    });
    const d:ReplyDraft = {id:Date.now(),originalMsg,context,intent,tones:selTones,variants,activeTone:selTones[0],chatMsgs:[],chatInput:"",chatLoading:false,createdAt:new Date().toLocaleString(),label:originalMsg.slice(0,52)+"..."};
    setDrafts(prev=>[d,...prev]);setActive(d);setOriginalMsg("");setContext("");setIntent("");setSelTones([]);setLoading(false);setView("detail");
  };

  const retone = async(draft:ReplyDraft,nt:string)=>{
    if(draft.variants.find(v=>v.tone===nt)){upd(draft.id,{activeTone:nt});return;}
    upd(draft.id,{chatLoading:true,activeTone:nt});
    const av = draft.variants.find(v=>v.tone===draft.activeTone);
    const reply = await callClaude([{role:"user",content:`Rewrite in ${nt} tone:\n\n${av?.content}`}],`Rewrite this reply in a ${nt} tone. ${TONE_DESC[nt]} Keep same intent.`);
    const nv = [...draft.variants,{tone:nt,content:reply}];
    upd(draft.id,{variants:nv,activeTone:nt,chatMsgs:[...draft.chatMsgs,{role:"user",content:`Generate ${nt} variant`},{role:"assistant",content:reply}],chatLoading:false});
  };

  const sendChat = async(d:ReplyDraft)=>{
    if(!d.chatInput?.trim()) return;
    const av = d.variants.find(v=>v.tone===d.activeTone);
    const msg = {role:"user",content:d.chatInput};
    const msgs = [...d.chatMsgs,msg];
    upd(d.id,{chatMsgs:msgs,chatInput:"",chatLoading:true});
    const reply = await callClaude([{role:"user",content:`Original:\n"${d.originalMsg}"\nCurrent reply (${d.activeTone}):\n${av?.content}`},{role:"assistant",content:"How can I help?"},...msgs],`Communication editor. Tone: ${d.activeTone}.`);
    upd(d.id,{chatMsgs:[...msgs,{role:"assistant",content:reply}],chatLoading:false});
  };

  if (view==="list") return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-400">{drafts.length} saved repl{drafts.length!==1?"ies":"y"}</span>
        <Btn onClick={()=>setView("new")}>+ New reply</Btn>
      </div>
      {drafts.length===0&&(
        <Card className="text-center py-12">
          <div className="text-3xl mb-3">↩</div>
          <div className="text-sm font-semibold text-slate-700 mb-2">No replies yet</div>
          <Btn variant="secondary" onClick={()=>setView("new")}>Draft first reply</Btn>
        </Card>
      )}
      {drafts.map(d=>(
        <div key={d.id} onClick={()=>{setActive(d);setView("detail");}} className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-indigo-200 hover:shadow-md transition flex gap-3 items-start">
          <span className="text-xs px-3 py-1 rounded-full font-semibold bg-pink-50 text-pink-600 border border-pink-100 shrink-0">Reply</span>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-slate-800 truncate">{d.label}</div>
            <div className="text-xs text-slate-400">{d.tones.length} tones · {d.chatMsgs.length} revisions · {d.createdAt}</div>
          </div>
          <span className="text-slate-300 text-sm">→</span>
        </div>
      ))}
    </div>
  );

  if (view==="new") return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <Btn variant="secondary" size="sm" onClick={()=>setView("list")}>← All replies</Btn>
      <InfoBox>Paste the message, describe what you want to say, pick tones - get ready-to-send replies.</InfoBox>
      <Card>
        <div className="text-sm font-medium text-slate-700 mb-2">Paste the message you want to reply to</div>
        <textarea rows={5} value={originalMsg} onChange={e=>setOriginalMsg(e.target.value)} placeholder="Paste the email, Slack message, or any text you need to reply to..."
          className="w-full text-sm resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
      </Card>
      <Card>
        <div className="text-sm font-medium text-slate-700 mb-2">What do you want to say? <span className="text-slate-400 font-normal">(optional)</span></div>
        <textarea rows={3} value={context} onChange={e=>setContext(e.target.value)} placeholder="e.g. I want to decline but stay open to async collaboration."
          className="w-full text-sm resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
      </Card>
      <Card>
        <div className="text-sm font-medium text-slate-700 mb-2">Your intent or goal <span className="text-slate-400 font-normal">(optional)</span></div>
        <input value={intent} onChange={e=>setIntent(e.target.value)} placeholder="e.g. Maintain the relationship, push back on deadline"
          className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
      </Card>
      <Card>
        <div className="text-sm font-semibold text-slate-700 mb-3">Select tones <span className="text-xs text-slate-400 font-normal">pick one or multiple</span></div>
        <div className="grid grid-cols-2 gap-2">
          {TONES.map(t=>{
            const sel = selTones.includes(t);
            return (
              <button key={t} onClick={()=>toggle(t)}
                className={`p-3 rounded-2xl border text-left transition ${sel?"border-indigo-400 bg-indigo-50":"border-slate-200 bg-white hover:border-indigo-200"}`}>
                <div className={`text-sm font-semi
