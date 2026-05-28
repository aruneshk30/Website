"use client";
import { useState, useRef, useEffect } from "react";

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

const FUNNEL_TEMPLATES: Record<string,{name:string;users:number}[]> = {
  saas:[
    {name:"Website Visit",users:0},{name:"Sign Up Page",users:0},{name:"Account Created",users:0},
    {name:"First Key Action",users:0},{name:"Paid Conversion",users:0},
  ],
  ecommerce:[
    {name:"Product Page View",users:0},{name:"Add to Cart",users:0},{name:"Checkout Started",users:0},
    {name:"Payment Details",users:0},{name:"Order Confirmed",users:0},
  ],
  onboarding:[
    {name:"App Install",users:0},{name:"Registration",users:0},{name:"Profile Setup",users:0},
    {name:"Tutorial Complete",users:0},{name:"First Value Moment",users:0},
  ],
};

async function callClaude(messages:{role:string;content:string}[],system="") {
  const res = await fetch("https://api.anthropic.com/v1/messages",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1500,system,messages}),
  });
  const data = await res.json();
  return data.content?.map((b:{text?:string})=>b.text||"").join("\n")||"No response.";
}

function Btn({onClick,disabled,children,variant="primary",size="md"}:{onClick?:()=>void;disabled?:boolean;children:React.ReactNode;variant?:"primary"|"secondary"|"ghost";size?:"sm"|"md"}) {
  const base="inline-flex items-center gap-2 font-semibold rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  const sizes={sm:"px-3 py-1.5 text-xs",md:"px-5 py-2.5 text-sm"};
  const variants={
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

function FileAttach({onFile,fileName,onClear}:{onFile:(content:string,name:string)=>void;fileName:string|null;onClear:()=>void}) {
  const ref = useRef<HTMLInputElement>(null);
  const handle = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => onFile(ev.target?.result as string, file.name);
    reader.readAsText(file);
  };
  return (
    <div onClick={()=>ref.current?.click()} className={`rounded-2xl border-2 border-dashed px-4 py-3 cursor-pointer transition flex items-center gap-3 ${fileName?"border-indigo-300 bg-indigo-50":"border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50"}`}>
      <i className="ti ti-paperclip text-base text-indigo-500 shrink-0"></i>
      <div className="flex-1 min-w-0">
        {fileName?(
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-medium text-indigo-700 truncate">{fileName}</span>
            <button onClick={e=>{e.stopPropagation();onClear();}} className="text-xs text-slate-400 hover:text-red-500 shrink-0">✕</button>
          </div>
        ):(
          <div>
            <p className="text-sm font-medium text-slate-700">Attach a data file <span className="text-slate-400 font-normal">(optional)</span></p>
            <p className="text-xs text-slate-400 mt-0.5">CSV, TXT, JSON, MD — attach and skip the questions</p>
          </div>
        )}
      </div>
      <input ref={ref} type="file" accept=".csv,.txt,.json,.md,.pdf" onChange={handle} className="hidden"/>
    </div>
  );
}

function PreflightForm({moduleId,onSubmit}:{moduleId:string;onSubmit:(reply:string,ctx:string)=>void}) {
  const config = MODULE_Q[moduleId];
  const [answers,setAnswers] = useState<Record<string,string>>({});
  const [loading,setLoading] = useState(false);
  const [mode,setMode] = useState<"questions"|"custom">("questions");
  const [customPrompt,setCustomPrompt] = useState("");
  const [fileContent,setFileContent] = useState<string|null>(null);
  const [fileName,setFileName] = useState<string|null>(null);
  if (!config) return null;

  const handle = async() => {
    setLoading(true);
    let context = mode==="questions"
      ? config.questions.map(q=>`${q.label}\n- ${answers[q.key]||"(not provided)"}`).join("\n\n")
      : customPrompt;
    if (fileContent) context+=`\n\n--- Attached: ${fileName} ---\n${fileContent.slice(0,8000)}`;
    const prompt = mode==="custom"
      ? `${customPrompt}${fileContent?`\n\nFile (${fileName}):\n${fileContent.slice(0,8000)}`:""}`
      : `Context:\n\n${context}\n\nProvide a thorough structured analysis.`;
    const reply = await callClaude([{role:"user",content:prompt}],config.system);
    onSubmit(reply,context);
    setLoading(false);
  };

  const filled = config.questions.filter(q=>answers[q.key]?.trim()).length;
  const canSubmit = mode==="questions"?filled>0||!!fileContent:!!customPrompt.trim()||!!fileContent;

  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <div className="flex rounded-2xl border border-slate-200 bg-white p-1 gap-1 w-fit shadow-sm">
        <button onClick={()=>setMode("questions")} className={`px-4 py-2 text-sm rounded-xl font-medium transition ${mode==="questions"?"bg-indigo-600 text-white shadow":"text-slate-500 hover:text-slate-800"}`}>Guided Questions</button>
        <button onClick={()=>setMode("custom")} className={`px-4 py-2 text-sm rounded-xl font-medium transition ${mode==="custom"?"bg-indigo-600 text-white shadow":"text-slate-500 hover:text-slate-800"}`}>Custom Prompt</button>
      </div>
      <FileAttach onFile={(c,n)=>{setFileContent(c);setFileName(n);}} fileName={fileName} onClear={()=>{setFileContent(null);setFileName(null);}}/>
      {mode==="questions"&&(
        <>
          <InfoBox>Answer questions for a targeted analysis. Or attach a file above and skip the questions entirely.</InfoBox>
          {config.questions.map((q,i)=>(
            <Card key={q.key}>
              <div className="text-sm font-medium text-slate-700 mb-2"><span className="text-slate-400 mr-2">{i+1}</span>{q.label}</div>
              <textarea rows={q.rows||2} value={answers[q.key]||""} onChange={e=>setAnswers({...answers,[q.key]:e.target.value})} placeholder={q.placeholder}
                className="w-full text-sm resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400 focus:bg-white transition"/>
            </Card>
          ))}
          <div className="flex items-center gap-3 flex-wrap">
            <Btn onClick={handle} disabled={loading||!canSubmit}>{loading?"Generating...":"Generate Analysis →"}</Btn>
            <span className="text-xs text-slate-400">{filled}/{config.questions.length} answered{fileName?" · file attached":""}</span>
          </div>
        </>
      )}
      {mode==="custom"&&(
        <>
          <Card>
            <div className="text-sm font-medium text-slate-700 mb-2">Write your custom prompt</div>
            <textarea rows={6} value={customPrompt} onChange={e=>setCustomPrompt(e.target.value)}
              placeholder="e.g. Analyze the attached CSV and identify the top 3 drop-off points. Suggest 5 hypotheses with effort and impact scores."
              className="w-full text-sm resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400 focus:bg-white transition"/>
            <p className="text-xs text-slate-400 mt-2">The AI will still use the {config.title} specialist context.</p>
          </Card>
          <Btn onClick={handle} disabled={loading||!canSubmit}>{loading?"Running...":"Run →"}</Btn>
        </>
      )}
    </div>
  );
}

function AIModule({moduleId}:{moduleId:string}) {
  const [phase,setPhase] = useState<"form"|"result"|"chat">("form");
  const [result,setResult] = useState("");
  const [context,setContext] = useState("");
  const [chatMsgs,setChatMsgs] = useState<{role:string;content:string}[]>([]);
  const [chatInput,setChatInput] = useState("");
  const [chatLoading,setChatLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[chatMsgs]);
  const onSubmit=(reply:string,ctx:string)=>{setResult(reply);setContext(ctx);setPhase("result");};
  const sendChat=async()=>{
    if(!chatInput.trim()||chatLoading) return;
    const sys=MODULE_Q[moduleId]?.system||"";
    const history=[{role:"user",content:`Context:\n${context}\n\nInitial analysis:\n${result}`},{role:"assistant",content:"Understood. How can I help further?"},...chatMsgs,{role:"user",content:chatInput}];
    const next=[...chatMsgs,{role:"user",content:chatInput}];
    setChatMsgs(next);setChatInput("");setChatLoading(true);
    const reply=await callClaude(history,sys);
    setChatMsgs([...next,{role:"assistant",content:reply}]);setChatLoading(false);
  };
  if (phase==="form") return <PreflightForm moduleId={moduleId} onSubmit={onSubmit}/>;
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <div className="flex gap-2 flex-wrap">
        <Btn variant="secondary" size="sm" onClick={()=>{setPhase("form");setResult("");setChatMsgs([]);}}>← Start over</Btn>
        <Btn variant="secondary" size="sm" onClick={()=>setPhase(phase==="result"?"chat":"result")}>{phase==="result"?"Continue in chat →":"View result"}</Btn>
        <Btn variant="secondary" size="sm" onClick={()=>navigator.clipboard.writeText(result)}>Copy</Btn>
      </div>
      {phase==="result"&&<ResultBox>{result}</ResultBox>}
      {phase==="chat"&&(
        <div className="flex flex-col h-[420px] gap-3">
          <div className="flex-1 overflow-y-auto flex flex-col gap-3 p-1">
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

function FunnelModule() {
  type Step={name:string;users:number};
  const [phase,setPhase]=useState<"setup"|"data"|"result">("setup");
  const [template,setTemplate]=useState("saas");
  const [steps,setSteps]=useState<Step[]>(FUNNEL_TEMPLATES.saas.map(s=>({...s})));
  const [newStep,setNewStep]=useState("");
  const [customPrompt,setCustomPrompt]=useState("");
  const [fileContent,setFileContent]=useState<string|null>(null);
  const [fileName,setFileName]=useState<string|null>(null);
  const [analysis,setAnalysis]=useState("");
  const [loading,setLoading]=useState(false);
  const [chatMsgs,setChatMsgs]=useState<{role:string;content:string}[]>([]);
  const [chatInput,setChatInput]=useState("");
  const [chatLoading,setChatLoading]=useState(false);
  const bottomRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[chatMsgs]);

  const applyTemplate=(t:string)=>{setTemplate(t);if(t==="custom")setSteps([{name:"Step 1",users:0}]);else setSteps(FUNNEL_TEMPLATES[t].map(s=>({...s})));};
  const upd=(i:number,f:string,v:string|number)=>setSteps(steps.map((s,j)=>j===i?{...s,[f]:v}:s));
  const maxU=Math.max(...steps.map(s=>s.users),1);

  const analyze=async()=>{
    setLoading(true);
    let funnelText="";
    if (fileContent) {
      funnelText=`File data (${fileName}):\n${fileContent.slice(0,8000)}`;
    } else {
      funnelText=steps.map((s,i)=>{
        const prev=i===0?s.users:steps[i-1].users;
        const dr=i===0?"":prev>0?`${(((prev-s.users)/prev)*100).toFixed(1)}% drop-off`:"";
        return `Step ${i+1}: ${s.name} — ${s.users.toLocaleString()} users${dr?" ("+dr+")":""}`;
      }).join("\n");
    }
    const prompt=customPrompt
      ?`${customPrompt}\n\nFunnel data:\n${funnelText}`
      :`Analyze this funnel and provide: Executive Summary, Step-by-Step Drop-off Analysis, Root Cause Hypotheses, Quick Wins, A/B Test Recommendations.\n\nFunnel data:\n${funnelText}`;
    const sys="You are a senior growth PM and UX strategist. Produce a thorough funnel analysis with actionable recommendations.";
    const reply=await callClaude([{role:"user",content:prompt}],sys);
    setAnalysis(reply);setPhase("result");setLoading(false);
  };

  const sendChat=async()=>{
    if(!chatInput.trim()||chatLoading) return;
    const next=[...chatMsgs,{role:"user",content:chatInput}];
    setChatMsgs(next);setChatInput("");setChatLoading(true);
    const reply=await callClaude([{role:"user",content:`Analysis:\n${analysis}`},{role:"assistant",content:"Understood."},...next],"You are a senior growth PM.");
    setChatMsgs([...next,{role:"assistant",content:reply}]);setChatLoading(false);
  };

  if (phase==="setup"||phase==="data") return (
    <div className="flex flex-col gap-4 max-w-2xl">
      {/* Template picker */}
      <div className="flex gap-2 flex-wrap">
        {[["saas","SaaS"],["ecommerce","E-commerce"],["onboarding","Onboarding"],["custom","Custom"]].map(([val,label])=>(
          <button key={val} onClick={()=>applyTemplate(val)}
            className={`px-4 py-2 text-sm rounded-xl border transition ${template===val?"border-indigo-400 bg-indigo-50 text-indigo-700 font-semibold":"border-slate-200 bg-white text-slate-600 hover:border-indigo-300"}`}>{label}</button>
        ))}
      </div>

      <FileAttach onFile={(c,n)=>{setFileContent(c);setFileName(n);}} fileName={fileName} onClear={()=>{setFileContent(null);setFileName(null);}}/>

      {fileContent ? (
        <InfoBox>File attached: {fileName}. The AI will analyze it directly — no need to enter step data.</InfoBox>
      ) : (
        <div className="flex flex-col gap-3">
          {steps.map((s,i)=>{
            const prev=i===0?s.users:steps[i-1].users;
            const dr=i>0&&prev>0?(((prev-s.users)/prev)*100).toFixed(1):null;
            const pct=maxU>0?Math.round((s.users/maxU)*100):0;
            const barColor=i===0?"bg-indigo-500":dr&&+dr>50?"bg-red-400":dr&&+dr>25?"bg-amber-400":"bg-emerald-400";
            return (
              <Card key={i} className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-slate-400 w-5 shrink-0">{i+1}</span>
                  <input value={s.name} onChange={e=>upd(i,"name",e.target.value)}
                    className="flex-1 font-semibold text-sm text-slate-800 border-b border-dashed border-slate-200 bg-transparent outline-none pb-1"/>
                  {dr&&<span className={`text-xs font-semibold shrink-0 ${+dr>40?"text-red-500":"text-amber-500"}`}>-{dr}%</span>}
                  <button onClick={()=>setSteps(steps.filter((_,j)=>j!==i))} disabled={steps.length<=2} className="text-xs text-red-400 hover:text-red-600 disabled:opacity-30 shrink-0">✕</button>
                </div>
                <input type="number" value={s.users||""} onChange={e=>upd(i,"users",+e.target.value)} placeholder="Enter number of users at this step"
                  className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
                {s.users>0&&<div className="mt-2 h-1.5 bg-slate-100 rounded-full"><div className={`h-full ${barColor} rounded-full transition-all`} style={{width:`${pct}%`}}/></div>}
              </Card>
            );
          })}
          <div className="flex gap-2">
            <input value={newStep} onChange={e=>setNewStep(e.target.value)} onKeyDown={e=>e.key==="Enter"&&newStep.trim()&&(setSteps([...steps,{name:newStep,users:0}]),setNewStep(""))}
              placeholder="Add a step..." className="flex-1 text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
            <Btn variant="secondary" size="sm" onClick={()=>{if(newStep.trim()){setSteps([...steps,{name:newStep,users:0}]);setNewStep("");}}} disabled={!newStep.trim()}>+ Add</Btn>
          </div>
        </div>
      )}

      <Card>
        <div className="text-sm font-medium text-slate-700 mb-2">Custom prompt <span className="text-slate-400 font-normal text-xs">(optional)</span></div>
        <textarea rows={2} value={customPrompt} onChange={e=>setCustomPrompt(e.target.value)}
          placeholder="e.g. Focus on mobile drop-off. Suggest 3 quick wins."
          className="w-full text-sm resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
      </Card>
      <Btn onClick={analyze} disabled={loading||(steps.filter(s=>s.users>0).length<2&&!fileContent)}>
        {loading?"Analyzing...":"Analyze Funnel →"}
      </Btn>
    </div>
  );

  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <div className="flex gap-2 flex-wrap">
        <Btn variant="secondary" size="sm" onClick={()=>{setPhase("setup");setAnalysis("");setChatMsgs([]);}}>← Start over</Btn>
        <Btn variant="secondary" size="sm" onClick={()=>navigator.clipboard.writeText(analysis)}>Copy</Btn>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {steps.map((s,i)=>{
          const cr=steps[0].users>0?((s.users/steps[0].users)*100).toFixed(1):0;
          const dr=i>0&&steps[i-1].users>0?(((steps[i-1].users-s.users)/steps[i-1].users)*100).toFixed(1):null;
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
      <div className="flex flex-col gap-3 max-h-60 overflow-y-auto">
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

function HypothesisModule() {
  type Hyp={id:number;if:string;then:string;because:string;confidence:string;metric:string;timeline:string;evidence:string};
  const [hyps,setHyps]=useState<Hyp[]>([]);
  const [form,setForm]=useState({if:"",then:"",because:"",confidence:"medium",metric:"",timeline:"",evidence:""});
  const [aiResult,setAiResult]=useState<Record<number,string>>({});
  const [loading,setLoading]=useState<number|null>(null);
  const [show,setShow]=useState(true);
  const cc:Record<string,string>={low:"#ef4444",medium:"#f59e0b",high:"#10b981"};
  const add=()=>{if(!form.if||!form.then)return;setHyps([...hyps,{...form,id:Date.now()}]);setForm({if:"",then:"",because:"",confidence:"medium",metric:"",timeline:"",evidence:""});};
  const validate=async(h:Hyp)=>{
    setLoading(h.id);
    const p=`Hypothesis: If ${h.if}, then ${h.then}, because ${h.because}.\nConfidence: ${h.confidence}\nMetric: ${h.metric}\nTimeline: ${h.timeline}\nEvidence: ${h.evidence}\n\nProvide full validation plan.`;
    const reply=await callClaude([{role:"user",content:p}],"You are a product experimentation expert.");
    setAiResult(prev=>({...prev,[h.id]:reply}));setLoading(null);
  };
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      {show&&(
        <Card>
          <div className="text-sm font-semibold text-slate-700 mb-3">Build a new hypothesis</div>
          {[{k:"if",l:"If...",p:"we add feature X"},{k:"then",l:"Then...",p:"conversion will increase"},{k:"because",l:"Because...",p:"users struggle with Z"},{k:"metric",l:"Success metric",p:"e.g. 10% lift"},{k:"timeline",l:"Timeline",p:"e.g. 2-week A/B test"},{k:"evidence",l:"Evidence",p:"optional"}].map(f=>(
            <div key={f.k} className="flex gap-3 items-center mb-2">
              <span className="text-xs text-slate-400 w-20 shrink-0">{f.l}</span>
              <input value={(form as Record<string,string>)[f.k]} onChange={e=>setForm({...form,[f.k]:e.target.value})} placeholder={f.p}
                className="flex-1 text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
            </div>
          ))}
          <div className="flex gap-3 items-center mt-2 flex-wrap">
            <span className="text-xs text-slate-400 w-20 shrink-0">Confidence</span>
            <select value={form.confidence} onChange={e=>setForm({...form,confidence:e.target.value})}
              className="text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none">
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

function PrioritizationModule() {
  type Feature={name:string;reach:number;impact:number;confidence:number;effort:number};
  const [phase,setPhase]=useState<"form"|"score">("form");
  const [answers,setAnswers]=useState<Record<string,string>>({});
  const [features,setFeatures]=useState<Feature[]>([
    {name:"Onboarding redesign",reach:8,impact:9,confidence:80,effort:3},
    {name:"Email notifications",reach:6,impact:5,confidence:90,effort:2},
    {name:"Analytics dashboard",reach:4,impact:8,confidence:60,effort:8},
  ]);
  const [newF,setNewF]=useState("");
  const [fw,setFw]=useState("rice");
  const [ai,setAi]=useState("");
  const [loading,setLoading]=useState(false);
  const rice=(f:Feature)=>Math.round((f.reach*f.impact*(f.confidence/100))/f.effort);
  const ice=(f:Feature)=>Math.round(f.impact*f.confidence/100*(10-f.effort));
  const sorted=[...features].sort((a,b)=>fw==="rice"?rice(b)-rice(a):ice(b)-ice(a));
  const qs=[
    {key:"goal",label:"Primary product goal this quarter?",placeholder:"e.g. increase activation from 30% to 50%"},
    {key:"constraints",label:"Key constraints?",placeholder:"e.g. 3 engineers, 6 weeks"},
    {key:"stage",label:"Product stage?",placeholder:"e.g. PMF, scaling, mature"},
    {key:"customer",label:"Customer segment to prioritize?",placeholder:"e.g. enterprise, self-serve SMBs"},
    {key:"debt",label:"Any tech debt to consider?",placeholder:"e.g. need to refactor auth"},
    {key:"stakeholder",label:"Any committed stakeholder promises?",placeholder:"e.g. CEO promised feature X"},
  ];
  const getAI=async()=>{
    setLoading(true);
    const ctx=qs.map(q=>`${q.label}\n- ${answers[q.key]||"(not provided)"}`).join("\n\n");
    const list=features.map(f=>`${f.name}: RICE=${rice(f)}, ICE=${ice(f)}, Effort=${f.effort}`).join("\n");
    const reply=await callClaude([{role:"user",content:`Context:\n${ctx}\n\nFeatures:\n${list}\n\nGive prioritized backlog recommendation.`}],"You are a product prioritization expert.");
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
        <select value={fw} onChange={e=>setFw(e.target.value)} className="text-sm rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none">
          <option value="rice">RICE Score</option><option value="ice">ICE Score</option>
        </select>
        <Btn onClick={getAI} disabled={loading}>{loading?"Analyzing...":"AI Recommendation →"}</Btn>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-slate-100">{["Feature","Reach","Impact","Conf%","Effort","RICE","ICE"].map(h=>(
            <th key={h} className="px-3 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>
          ))}</tr></thead>
          <tbody>{sorted.map((f,i)=>(
            <tr key={i} className="border-b border-slate-50 last:border-0">
              <td className="px-3 py-3 font-semibold text-slate-800 text-xs">{f.name}</td>
              {["reach","impact","confidence","effort"].map(k=>(
                <td key={k} className="px-3 py-2">
                  <input type="number" value={(f as unknown as Record<string,number>)[k]} min={0} max={k==="confidence"?100:10}
                    onChange={e=>setFeatures(features.map((x,j)=>features.indexOf(f)===j?{...x,[k]:+e.target.value}:x))}
                    className="w-12 text-sm rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 outline-none focus:border-indigo-400"/>
                </td>
              ))}
              <td className={`px-3 py-3 font-bold text-sm ${fw==="rice"?"text-indigo-600":"text-slate-400"}`}>{rice(f)}</td>
              <td className={`px-3 py-3 font-bold text-sm ${fw==="ice"?"text-indigo-600":"text-slate-400"}`}>{ice(f)}</td>
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

type Draft={id:number;docType:string;tone:string;answers:Record<string,string>;content:string;chatMsgs:{role:string;content:string}[];chatInput:string;chatLoading:boolean;pendingTone?:string;createdAt:string;label:string};

const PM_TOOLS=[
  {id:"email",icon:"ti ti-mail",label:"Email",desc:"To a stakeholder, exec, or partner"},
  {id:"monday",icon:"ti ti-calendar-week",label:"Monday Update",desc:"Weekly status: done, next, blockers"},
  {id:"slack",icon:"ti ti-brand-slack",label:"Slack Message",desc:"Quick async update or request"},
  {id:"jira",icon:"ti ti-brand-jira",label:"Jira Ticket",desc:"Bug report, story, or task description"},
  {id:"notion",icon:"ti ti-notebook",label:"Notion Doc",desc:"Meeting notes or project brief"},
  {id:"linear",icon:"ti ti-circle-dot",label:"Linear Issue",desc:"Engineering task or feature request"},
];

const TOOL_Q:Record<string,{key:string;label:string;placeholder:string;rows?:number}[]>={
  email:[
    {key:"core",label:"Describe your email - who it is to, what it is about, and what you need.",placeholder:"e.g. To my VP of Product. Feature X is delayed. Need approval to adjust timeline.",rows:4},
    {key:"context",label:"Any background context? (optional)",placeholder:"e.g. They were on the call last Tuesday.",rows:2},
  ],
  monday:[
    {key:"core",label:"Summarise your week - what got done, what is coming up, and any blockers.",placeholder:"e.g. Shipped onboarding v2. Next week launching A/B test. Blocker: waiting on legal.",rows:5},
    {key:"audience",label:"Who is this update for? (optional)",placeholder:"e.g. Cross-functional team",rows:1},
  ],
  slack:[
    {key:"core",label:"What do you want to communicate?",placeholder:"e.g. Flagging a blocker on the checkout fix. Need eng to review PR before EOD.",rows:3},
    {key:"channel",label:"Which channel or person? (optional)",placeholder:"e.g. #product-team or @john",rows:1},
  ],
  jira:[
    {key:"core",label:"Describe the ticket - what needs to be done and why.",placeholder:"e.g. Add input validation to the checkout email field. Currently accepts invalid emails causing downstream errors.",rows:4},
    {key:"type",label:"Ticket type?",placeholder:"e.g. Bug, Story, Task, Spike",rows:1},
    {key:"acceptance",label:"Acceptance criteria (optional)",placeholder:"e.g. Email field rejects invalid formats and shows inline error",rows:2},
  ],
  notion:[
    {key:"core",label:"What is this document about?",placeholder:"e.g. Notes from the Q2 planning session - decisions made, owners, and next steps.",rows:4},
    {key:"audience",label:"Who is the audience?",placeholder:"e.g. Product and engineering team",rows:1},
  ],
  linear:[
    {key:"core",label:"Describe the issue - what needs to be built or fixed.",placeholder:"e.g. The dashboard filters reset on page refresh. Users lose their state and have to re-select.",rows:4},
    {key:"priority",label:"Priority and estimate (optional)",placeholder:"e.g. High priority, ~2 days",rows:1},
  ],
};

function StakeholderModule() {
  const [tool,setTool]=useState<string|null>(null);
  const [tone,setTone]=useState<string|null>(null);
  const [answers,setAnswers]=useState<Record<string,string>>({});
  const [result,setResult]=useState("");
  const [loading,setLoading]=useState(false);
  const [chatMsgs,setChatMsgs]=useState<{role:string;content:string}[]>([]);
  const [chatInput,setChatInput]=useState("");
  const [chatLoading,setChatLoading]=useState(false);
  const [fileContent,setFileContent]=useState<string|null>(null);
  const [fileName,setFileName]=useState<string|null>(null);
  const [phase,setPhase]=useState<"pick-tool"|"pick-tone"|"form"|"result">("pick-tool");
  const bottomRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[chatMsgs]);

  const generate=async()=>{
    setLoading(true);
    const qs=TOOL_Q[tool!]||[];
    const ctx=qs.map(q=>`${q.label}\n- ${answers[q.key]||"(not provided)"}`).join("\n\n");
    const toolLabel=PM_TOOLS.find(t=>t.id===tool)?.label||tool;
    const sys=`You are an expert PM communication writer. Draft a complete ${toolLabel} in a ${tone} tone. ${TONE_DESC[tone!]} Be specific, structured, and ready to send.`;
    const prompt=`Draft a ${toolLabel}:\n\n${ctx}${fileContent?`\n\nAttached context (${fileName}):\n${fileContent.slice(0,4000)}`:""}`;
    const reply=await callClaude([{role:"user",content:prompt}],sys);
    setResult(reply);setPhase("result");setLoading(false);
  };

  const sendChat=async()=>{
    if(!chatInput.trim()||chatLoading) return;
    const next=[...chatMsgs,{role:"user",content:chatInput}];
    setChatMsgs(next);setChatInput("");setChatLoading(true);
    const reply=await callClaude([{role:"user",content:`Draft:\n${result}`},{role:"assistant",content:"How can I revise?"},...next],`Communication editor. Tone: ${tone}. ${TONE_DESC[tone!]}`);
    setChatMsgs([...next,{role:"assistant",content:reply}]);setChatLoading(false);
  };

  const reset=()=>{setTool(null);setTone(null);setAnswers({});setResult("");setChatMsgs([]);setFileContent(null);setFileName(null);setPhase("pick-tool");};

  if (phase==="pick-tool") return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <p className="text-sm font-semibold text-slate-800">What do you want to draft?</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {PM_TOOLS.map(t=>(
          <button key={t.id} onClick={()=>{setTool(t.id);setPhase("pick-tone");}}
            className="p-4 rounded-2xl border border-slate-200 bg-white text-left hover:border-indigo-300 hover:bg-indigo-50 transition shadow-sm">
            <i className={`${t.icon} text-xl text-indigo-500 mb-2 block`}></i>
            <div className="text-sm font-semibold text-slate-800">{t.label}</div>
            <div className="text-xs text-slate-500 mt-1 leading-4">{t.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  if (phase==="pick-tone") return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <Btn variant="secondary" size="sm" onClick={()=>setPhase("pick-tool")}>← Back</Btn>
      <p className="text-sm font-semibold text-slate-800">Choose a tone</p>
      <div className="grid grid-cols-2 gap-2">
        {TONES.map(t=>(
          <button key={t} onClick={()=>{setTone(t);setPhase("form");}}
            className="p-3 rounded-2xl border border-slate-200 bg-white text-left hover:border-indigo-300 hover:bg-indigo-50 transition">
            <div className="text-sm font-semibold text-slate-800 mb-1">{t}</div>
            <div className="text-xs text-slate-500 leading-4">{TONE_DESC[t]}</div>
          </button>
        ))}
      </div>
    </div>
  );

  if (phase==="form") {
    const qs=TOOL_Q[tool!]||[];
    const toolInfo=PM_TOOLS.find(t=>t.id===tool);
    return (
      <div className="flex flex-col gap-4 max-w-2xl">
        <div className="flex gap-2 items-center flex-wrap">
          <Btn variant="secondary" size="sm" onClick={()=>setPhase("pick-tone")}>← Change tone</Btn>
          <span className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full px-3 py-1">{tone}</span>
          <span className="text-xs bg-slate-50 text-slate-600 border border-slate-200 rounded-full px-3 py-1 flex items-center gap-1">
            <i className={`${toolInfo?.icon} text-xs`}></i>{toolInfo?.label}
          </span>
        </div>
        <FileAttach onFile={(c,n)=>{setFileContent(c);setFileName(n);}} fileName={fileName} onClear={()=>{setFileContent(null);setFileName(null);}}/>
        <InfoBox>Describe it naturally — AI handles the structure and format.</InfoBox>
        {qs.map(q=>(
          <Card key={q.key}>
            <div className="text-sm font-medium text-slate-700 mb-2">{q.label}</div>
            <textarea rows={q.rows||3} value={answers[q.key]||""} onChange={e=>setAnswers({...answers,[q.key]:e.target.value})} placeholder={q.placeholder}
              className="w-full text-sm resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
          </Card>
        ))}
        <Btn onClick={generate} disabled={loading||!answers[qs[0]?.key]?.trim()}>{loading?"Drafting...":"Draft →"}</Btn>
      </div>
    );
  }

  const toolInfo=PM_TOOLS.find(t=>t.id===tool);
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <div className="flex gap-2 flex-wrap items-center">
        <Btn variant="secondary" size="sm" onClick={reset}>← Start over</Btn>
        <span className="text-xs bg-slate-50 text-slate-600 border border-slate-200 rounded-full px-3 py-1 flex items-center gap-1">
          <i className={`${toolInfo?.icon} text-xs`}></i>{toolInfo?.label}
        </span>
        <span className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full px-3 py-1">{tone}</span>
        <Btn variant="secondary" size="sm" onClick={()=>navigator.clipboard.writeText(result)}>Copy</Btn>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 whitespace-pre-wrap">{result}</div>
      <div className="text-xs font-bold uppercase tracking-widest text-indigo-500">Revise</div>
      <div className="flex flex-col gap-3 max-h-60 overflow-y-auto">
        {chatMsgs.map((m,i)=><ChatBubble key={i} role={m.role} content={m.content}/>)}
        {chatLoading&&<div className="self-start bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-400">Revising...</div>}
        <div ref={bottomRef}/>
      </div>
      <div className="flex gap-2">
        <input value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendChat()} placeholder='"Make it shorter", "More urgent", "Add a deadline"'
          className="flex-1 text-sm rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-400"/>
        <Btn onClick={sendChat} disabled={chatLoading||!chatInput.trim()}>Revise</Btn>
      </div>
    </div>
  );
}

function RepositoryModule() {
  type Insight={id:number;title:string;source:string;date:string;tags:string;summary:string;aiSummary:string};
  const [insights,setInsights]=useState<Insight[]>([]);
  const [form,setForm]=useState({title:"",source:"",date:"",tags:"",summary:""});
  const [loading,setLoading]=useState(false);
  const [search,setSearch]=useState("");
  const [show,setShow]=useState(true);
  const add=async()=>{
    if(!form.title||!form.summary) return;
    setLoading(true);
    const reply=await callClaude([{role:"user",content:`Summarize this insight in 2 sentences and extract 3 key actions:\n\nTitle: ${form.title}\nSource: ${form.source}\nInsight: ${form.summary}`}],"You are a product insights curator. Be concise and actionable.");
    setInsights(prev=>[{...form,id:Date.now(),aiSummary:reply},...prev]);
    setForm({title:"",source:"",date:"",tags:"",summary:""});setLoading(false);
  };
  const filtered=insights.filter(i=>i.title.toLowerCase().includes(search.toLowerCase())||i.tags.toLowerCase().includes(search.toLowerCase())||i.summary.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      {show&&(
        <Card>
          <div className="text-sm font-semibold text-slate-700 mb-3">Add new insight</div>
          {[{k:"title",l:"Title",p:"e.g. Users abandon checkout on mobile"},{k:"source",l:"Source",p:"e.g. User interview"},{k:"date",l:"Date",p:"e.g. May 2025"},{k:"tags",l:"Tags",p:"e.g. mobile, checkout"}].map(f=>(
            <div key={f.k} className="flex gap-3 items-center mb-2">
              <span className="text-xs text-slate-400 w-14 shrink-0">{f.l}</span>
              <input value={(form as Record<string,string>)[f.k]} onChange={e=>setForm({...form,[f.k]:e.target.value})} placeholder={f.p}
                className="flex-1 text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400"/>
            </div>
          ))}
          <div className="flex gap-3 items-start mb-3">
            <span className="text-xs text-slate-400 w-14 shrink-0 pt-2">Insight</span>
            <textarea rows={3} value={form.summary} onChange={e=>setForm({...form,summary:e.target.value})} placeholder="Describe the insight..."
              className="flex-1 text-sm rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-indigo-400 resize-none"/>
          </div>
          <Btn onClick={add} disabled={loading||!form.title||!form.summary}>{loading?"Saving...":"Add & Summarize →"}</Btn>
        </Card>
      )}
      <div className="flex gap-2">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search insights..."
          className="flex-1 text-sm rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-400"/>
        <Btn variant="secondary" size="sm" onClick={()=>setShow(!show)}>{show?"Hide form":"+ New"}</Btn>
      </div>
      {filtered.length===0&&<p className="text-sm text-slate-400 text-center py-8">No insights yet.</p>}
      {filtered.map(i=>(
        <Card key={i.id}>
          <div className="flex justify-between items-start gap-3 mb-2">
            <div className="text-sm font-semibold text-slate-800">{i.title}</div>
            <button onClick={()=>setInsights(prev=>prev.filter(x=>x.id!==i.id))} className="text-xs text-slate-400 hover:text-red-500 shrink-0">✕</button>
          </div>
          <div className="flex gap-2 flex-wrap mb-2">
            {i.source&&<span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-lg">{i.source}</span>}
            {i.date&&<span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-lg">{i.date}</span>}
            {i.tags.split(",").filter(Boolean).map(t=>(
              <span key={t} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-lg">{t.trim()}</span>
            ))}
          </div>
          {i.aiSummary&&<div className="text-xs text-slate-600 leading-5 bg-slate-50 rounded-xl p-3 whitespace-pre-wrap">{i.aiSummary}</div>}
        </Card>
      ))}
    </div>
  );
}

function Dashboard({onNavigate}:{onNavigate:(id:string)=>void}) {
  const tools=MODULES.filter(m=>m.id!=="dashboard");
  const featured=[
    {id:"funnel",bg:"from-emerald-500 to-teal-600"},
    {id:"feature-research",bg:"from-blue-500 to-indigo-600"},
    {id:"prd",bg:"from-violet-500 to-purple-600"},
    {id:"hypothesis",bg:"from-amber-500 to-orange-500"},
    {id:"brainstorm",bg:"from-pink-500 to-rose-600"},
    {id:"stakeholder",bg:"from-indigo-500 to-blue-600"},
  ];
  return (
    <div className="flex flex-col gap-6 max-w-3xl">
      <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-900 to-indigo-800 px-6 py-6 shadow-lg shadow-indigo-200">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-200 mb-4">PM Hub</div>
        <p className="text-lg font-bold text-white">PM Research & Strategy Hub</p>
        <p className="mt-1.5 text-sm text-indigo-200 leading-6">Built by <strong className="text-white">Arunesh Kumar</strong> </p>
        <p className="mt-1 text-xs text-indigo-300 leading-5">17 AI-powered modules for end-to-end product management work. Built by a PM, for PMs.</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[{v:"17",l:"AI Modules",bg:"from-blue-50 to-indigo-50",t:"text-indigo-600"},{v:"100+",l:"PM Workflows",bg:"from-emerald-50 to-teal-50",t:"text-emerald-600"},{v:"6",l:"PM Tools",bg:"from-violet-50 to-purple-50",t:"text-violet-600"}].map(s=>(
            <div key={s.l} className={`rounded-2xl bg-gradient-to-br ${s.bg} px-3 py-2.5`}>
              <p className={`text-xl font-bold ${s.t}`}>{s.v}</p>
              <p className="text-xs text-slate-500">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-indigo-500 mb-3">Quick Actions</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {featured.map(f=>{
            const mod=MODULES.find(m=>m.id===f.id);
            return mod?(
              <button key={f.id} onClick={()=>onNavigate(f.id)}
                className={`text-left flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-2xl bg-gradient-to-r ${f.bg} text-white shadow-sm transition hover:scale-[1.02] hover:shadow-md`}>
                <i className={`${mod.icon} text-base`}></i>{mod.label}
              </button>
            ):null;
          })}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-indigo-500 mb-3">All Modules</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {tools.map(m=>(
            <button key={m.id} onClick={()=>onNavigate(m.id)}
              className="text-left flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 hover:shadow-md">
              <i className={`${m.icon} text-base text-indigo-500 shrink-0`}></i>
              <span className="truncate">{m.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [active,setActive]=useState("dashboard");
  const [sidebarOpen,setSidebarOpen]=useState(true);
  const [mobileMenuOpen,setMobileMenuOpen]=useState(false);
  const mod=MODULES.find(m=>m.id===active);

  useEffect(()=>{
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.19.0/dist/tabler-icons.min.css";
    document.head.appendChild(link);
    return ()=>{ document.head.removeChild(link); };
  },[]);

  const navigate=(id:string)=>{setActive(id);setMobileMenuOpen(false);};

  const renderModule=()=>{
    if(active==="dashboard") return <Dashboard onNavigate={navigate}/>;
    if(active==="funnel") return <FunnelModule/>;
    if(active==="hypothesis") return <HypothesisModule/>;
    if(active==="prioritization") return <PrioritizationModule/>;
    if(active==="stakeholder") return <StakeholderModule/>;
    if(active==="repository") return <RepositoryModule/>;
    return <AIModule moduleId={active}/>;
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#f4f7fb]">
      {/* Disclaimer banner */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-center text-xs text-amber-700 font-medium shrink-0 flex items-center justify-center gap-2">
        <i className="ti ti-info-circle text-sm"></i>
        <span>This is a representation of capabilities — a Claude API key is required for actual AI responses.</span>
        <span className="hidden sm:inline text-amber-500">·</span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className={`hidden md:flex ${sidebarOpen?"w-56":"w-14"} transition-all duration-200 bg-white border-r border-slate-200 flex-col shrink-0 shadow-sm`}>
          <div className="px-3 py-4 border-b border-slate-100 flex items-center justify-between">
            {sidebarOpen&&<span className="text-sm font-bold text-indigo-600 whitespace-nowrap">PM<span className="text-slate-900">Hub</span></span>}
            <button onClick={()=>setSidebarOpen(!sidebarOpen)} className="text-slate-400 hover:text-indigo-600 transition p-1 rounded-lg hover:bg-indigo-50 ml-auto">
              <i className={`ti ${sidebarOpen?"ti-chevron-left":"ti-chevron-right"} text-base`}></i>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-2">
            {MODULES.map(m=>(
              <button key={m.id} onClick={()=>navigate(m.id)}
                className={`w-full flex items-center gap-3 py-2.5 text-sm transition border-l-2 ${sidebarOpen?"px-3 justify-start":"px-0 justify-center"} ${active===m.id?"bg-indigo-50 text-indigo-700 border-indigo-500 font-semibold":"text-slate-500 hover:bg-slate-50 hover:text-slate-800 border-transparent"}`}>
                <i className={`${m.icon} text-base shrink-0`}></i>
                {sidebarOpen&&<span className="truncate text-xs">{m.label}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-white border-b border-slate-200 flex items-center gap-3 shadow-sm shrink-0">
            <button onClick={()=>setMobileMenuOpen(true)} className="md:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition shrink-0">
              <i className="ti ti-menu-2 text-lg"></i>
            </button>
            <i className={`${mod?.icon} text-lg hidden md:block text-slate-600`}></i>
            <span className="text-sm font-bold text-slate-800 truncate">{mod?.label}</span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8"><div className="max-w-3xl">{renderModule()}</div></div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {mobileMenuOpen&&(
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={()=>setMobileMenuOpen(false)}/>
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl flex flex-col">
            <div className="px-4 py-4 border-b border-slate-100 flex items-center justify-between">
              <span className="text-sm font-bold text-indigo-600">PM<span className="text-slate-900">Hub</span></span>
              <button onClick={()=>setMobileMenuOpen(false)} className="text-slate-400 hover:text-slate-700 p-1 rounded-lg">
                <i className="ti ti-x text-lg"></i>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-2">
              {MODULES.map(m=>(
                <button key={m.id} onClick={()=>navigate(m.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition border-l-2 justify-start ${active===m.id?"bg-indigo-50 text-indigo-700 border-indigo-500 font-semibold":"text-slate-500 hover:bg-slate-50 hover:text-slate-800 border-transparent"}`}>
                  <i className={`${m.icon} text-base shrink-0`}></i>
                  <span className="truncate">{m.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
