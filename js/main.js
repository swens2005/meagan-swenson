const JOBS=[
{tag:"Mission 01 · 2002–2018",hud:"01 · HP",co:"Hewlett-Packard",sub:" (acquired EDS in 2006)",role:"Technical Lead, Senior Business Analyst & Web Application Developer",when:"Nov 2002 – Sep 2018 · 16 years",
 tasks:["Built 20+ web applications, including a communication log and issue tracker","Built hundreds of specialized, interactive data reports using SQL, PHP, and HTML","Designed streamlined user interfaces with Photoshop","Completed testing and release planning for web applications","Maintained document repository and back-end data-entry web applications","Produced documentation requests for database asset creation in Oracle"],
 proj:[["Wisconsin Medicaid Time-Tracking System","Built a complete time-tracking and invoicing system from the ground up using PL/SQL, ASP, Active Directory, and Ajax, with reporting accurate down to $0.01."],["Document Repository Overhaul","Rolled out an extensive update covering hundreds of reports for the State of Wisconsin Medicaid program, improving efficiency and data access."]],
 stack:"HTML,CSS,JavaScript,PHP,ASP / JSP,Ajax,PL/SQL,Oracle,Active Directory,Photoshop"},
{tag:"Mission 02 · 2019–2023",hud:"02 · Philips",co:"Philips",sub:" (Koninklijke Philips N.V.)",role:"Technical Lead: Hybrid Full-Stack Developer & Senior Business Analyst",when:"Feb 2019 – Aug 2023 · 4.5 years",
 tasks:["Built and maintained the internal Philips Global Marketing & E-Commerce website","Maintained 10+ additional custom website builds and SharePoint sites","Designed functional user interfaces and website elements from brand guidelines","Developed user experience flows based on stakeholder requirements","Created websites using HTML, CSS, and JavaScript arrays for data management","Proposed technical implementation strategies for the right business technologies","Performed data analysis using SQL and Excel to support data-driven decisions","Completed testing and release planning between environments"],
 proj:[["Global Website Revamp","Inherited a disorganized, outdated global marketing site. Engaged stakeholders to define requirements and a full re-design plan, relaunching within 6 months to a 50% increase in site traffic."],["Custom Web App","Built a fully interactive web application covering all marketing and e-commerce business processes, with complex data structures for ongoing flexibility, rolled out within 30 days."]],
 stack:"HTML,CSS,JavaScript,jQuery,SQL,Excel,SharePoint"},
{tag:"Mission 03 · 2023–now (active)",hud:"03 · Albert Heijn",co:"Albert Heijn",sub:" (Ahold Delhaize)",role:"Back-End DevOps Engineer & Technical Product Owner",when:"Sep 2023 – Present · Technical Product Owner scope since 2025",show:6,
 tasks:["Developing and maintaining back-end services and PL/SQL applications within Oracle databases supporting the Order Management System (OMS) for Albert Heijn Online","Delivered multiple stories end to end through the full SDLC: analysis, PL/SQL development, unit tests, and pull-request review","Built an automated PL/SQL regulatory reporting job (ANAF, Romania) for monthly cash-payment customer data extraction, encrypted SFTP delivery from the Unix server, and Control-M scheduling, delivered end to end","Designed and built a new Oracle Forms menu for country-specific customer anonymization, working through role-based access constraints on legacy roles","Root-caused and remediated recurring production incidents in BOFF/PL-SQL, including a merge-sequencing timing defect and 12 correlated messaging errors traced to specific order IDs","Reviewed PL/SQL code and provided implementation feedback to peers, catching a cursor-placement compilation defect before release",
  "Deployed a defensive-programming hotfix (targeted exception handling) that eliminated a recurring class of overnight incidents caused by non-finalized order auto-cancellation","Migrated legacy integration contracts to a new messaging platform, authoring the technical migration hub and reusable contract-documentation templates","Documented and maintained 35+ BOFF↔FOFF/ECDT integration contracts, including event handlers, PL/SQL packages, entity mappings, and testing risk assessments, creating a searchable catalog of the OMS integration surface","Extended a data-lake PII-tagged dataset with a new employee identifier field, authoring the user story, coordinating PII-tag creation, and running verification SQL across five stakeholder teams","Performed final UTF-8 conversion verification testing across multiple production screens and reports ahead of sign-off","Configured and tested threshold-based security alerting rules for the OMS platform, partnering with the security engineering team on scope and validation","Investigated and resolved Control-M job scheduling issues: tuned retry logic on one job and restored another that had been unintentionally held since an unrelated infrastructure migration","Used GitHub Copilot to generate SLI metric recommendations across OMS batch jobs, mapping each job to success-rate, execution-time, and row-count metrics"],
 proj:[["ANAF Regulatory Reporting (Romania)","Designed, built, and scheduled a fully automated PL/SQL job to meet a legal monthly reporting obligation, delivered end to end from analysis to production."],["GDPR Data Anonymization","Built a self-sustainable anonymization process for a back-end order-tracking database, verifying customers via a single data element and eliminating hundreds of manual requests per month."],["SLI/SLO Framework","Defined service-level indicators for critical batch jobs, using AI tooling to help scope the initial metric set."]],
 stack:"Oracle,PL/SQL,Oracle Forms,Control-M,Unix,SFTP,Git,GitHub Copilot,JIRA,Confluence"},
{tag:"Mission 04 · 2026–now (active)",hud:"04 · Contract",co:"Independent contractor",sub:" · AI-assisted development",role:"Full-Stack Developer (contract)",when:"2026 – Present · ongoing",cls:"lime",
 tasks:["Building full websites from the ground up using AI-assisted development, with Claude Code and GitHub Copilot as primary tools","Developing with PHP, Laravel, React, and SQL, using AI assistance to work across Node/npm, Vite, Composer, and Livewire/Inertia","Set up CI/CD through GitHub deployments to VPS and cPanel-hosted environments","Integrating AI tooling into the workflow improved project organization and delivery speed"],
 proj:[["Agentic Development Pipeline","Built on Claude Code: user stories scoped specifically for AI-agent execution, an agent that consumes those stories to generate working code, and a second agent that reviews the generated code before merge."],["Custom Claude Skills","Authored custom Claude skills that package repeatable development workflows and standards for reuse across projects."]],
 stack:"PHP,Laravel,React,SQL,Claude Code,GitHub Copilot,Node/npm,Vite,Composer,Livewire/Inertia,GitHub CI/CD"}];
const SK=[["Core skills","Full-stack web development (front-end to database)|AI-assisted & agentic development workflows|Root-cause analysis & problem-solving|Database design, integration & query optimization|API integration & system-to-system messaging|Requirements translation (business need to technical spec)|Unit testing, code review & pull-request review|Testing, release planning & environment promotion|Documentation & technical knowledge capture|Team collaboration & cross-functional communication"],
["Languages & front-end","HTML|CSS|JavaScript|jQuery|Bootstrap|PHP|Laravel|React|ASP|JSP|Java|Ajax|REST APIs"],
["Database & back-end","Oracle|PL/SQL|MySQL|MSSQL|Oracle Forms|SQL Developer"],
["AI-assisted development","Claude Code|GitHub Copilot|Agentic workflows: story-to-code agents & automated code review|Custom Claude skills|User stories designed for AI-agent execution|Node/npm|Vite|Composer|Livewire/Inertia","hi"],
["DevOps, hosting & release","Git|GitHub (pull requests, code review)|CI/CD via GitHub deployments|VPS & cPanel hosting|Unix/Linux|WinSCP|Putty|SFTP|File encryption for secure data delivery|Control-M|OpsGenie|PagerDuty|ServiceNow|Power Automate|Active Directory|VS Code"],
["Platforms & design tools","Shopify|Magento|WordPress|Webflow|Dreamweaver|Photoshop|Confluence|JIRA|Draw.io"],
["Microsoft tools","Excel|Access|Outlook|PowerPoint|SharePoint|Visio|Word"]];
const esc=t=>t.replace(/&/g,"&amp;");
const chips=s=>s.split(s.includes("|")?"|":",").map(x=>`<span>${esc(x)}</span>`).join("");
document.getElementById("jobs").innerHTML=JOBS.map(j=>`<section class="floor" data-floor="${j.hud}"><div class="tag">${j.tag}</div>
<h2>${j.co}</h2><article class="card job${j.cls?" "+j.cls:""}"><h3>${j.co}<span class="co">${j.sub}</span></h3>
<div class="role2">${esc(j.role)}</div><div class="when">${j.when}</div><ul${j.show?' class="collapsed"':""}>${j.tasks.map((t,i)=>`<li${j.show&&i>=j.show?' class="extra"':""}>${esc(t)}</li>`).join("")}</ul>
${j.show?`<button class="more" type="button" aria-expanded="false">Show all ${j.tasks.length} ▾</button>`:""}
${j.proj.map((p,k)=>`<div class="proj"><span class="plab">Project 0${k+1}</span><b>${p[0]}</b><p>${esc(p[1])}</p></div>`).join("")}
<div class="stack">${chips(j.stack)}</div></article></section>`).join("");
document.querySelectorAll(".job .more").forEach(b=>b.addEventListener("click",()=>{const ul=b.previousElementSibling,open=ul.classList.toggle("collapsed")===false;b.setAttribute("aria-expanded",open);b.textContent=open?"Show fewer ▴":`Show all ${ul.children.length} ▾`;requestAnimationFrame(()=>{place();tick()})}));
document.getElementById("skillbox").innerHTML=SK.map(g=>`<div class="grp${g[2]?" "+g[2]:""}"><h4>${g[0]}</h4><div>${chips(g[1])}</div></div>`).join("");
document.getElementById("yr").textContent=new Date().getFullYear();

/* atmosphere */
const CAPS=[[0,"All the weather happens down here. Bring a jacket."],[0.8,"Geese territory. They fly in formation and honk at every blocker. Very agile."],[1.8,"You're now higher than any mountain in the Netherlands. Admittedly, the bar is 322 m."],[5,"Air pressure is half of sea level up here. Roughly the oxygen level of a three-hour status meeting."],[15,"Welcome to the ozone layer, Earth's original sunscreen. No need to reapply."],[30,"Air pressure is about 1% of sea level here. Every bag of chips you packed just exploded."],[45,"Weather balloons usually pop before this point. Let's take a moment of silence."],[60,"Heading into the coldest layer of the atmosphere. Coffee is no longer optional."],[75,"Meteors burn up around here, which is still more graceful than most Friday deployments."],[90,"Still technically the atmosphere. Technically. Like \"it works on my machine.\""],[100,"Past the Kármán line: astronaut, by some definitions. Pippi Longstocking remains unimpressed."]];
const LAYERS=[[0,"Troposphere","All the weather happens down here. Bring a jacket."],[12,"Stratosphere","Home of the ozone layer, and of very stable systems."],[50,"Mesosphere","Coldest layer of the atmosphere. Coffee strongly recommended."],[85,"Thermosphere","Technically over 1,000 °C. Still cooler than a production outage."],[100,"Outer space","You made it. George Bailey is very proud of you."]];
const STOPS=[[0,[120,190,235],[214,236,247]],[.12,[38,78,155],[68,112,188]],[.4,[20,40,100],[40,70,140]],[.7,[10,18,52],[24,40,88]],[1,[3,5,14],[10,14,32]]];
const mix=(a,b,t)=>a.map((v,i)=>Math.round(v+(b[i]-v)*t));
const sky=document.getElementById("sky"),stars=document.getElementById("stars"),root=document.documentElement.style;
for(let i=0;i<90;i++){const s=document.createElement("i");s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";s.style.opacity=.3+Math.random()*.7;stars.appendChild(s)}
const alt=document.getElementById("alt"),layer=document.getElementById("layer"),cap=document.getElementById("cap"),ptr=document.getElementById("ptr"),ruler=document.getElementById("ruler"),tempEl=document.getElementById("temp"),flr=document.getElementById("flr"),stat=document.getElementById("stat");
const temp=h=>h<11?15-6.5*h:h<20?-56.5:h<32?-56.5+(h-20):h<47?-44.5+2.8*(h-32):h<51?-2.5:h<71?-2.5-2.8*(h-51):h<85?-58.5-2*(h-71):h<90?-86.5:-86.5+1.2*(h-90);
let lastY=scrollY,idle;
const badge=document.getElementById("badge");badge.querySelector("img").src=document.querySelector(".photo").src;
new IntersectionObserver(([en])=>badge.classList.toggle("on",!en.isIntersecting),{rootMargin:"-40px 0px 0px 0px"}).observe(document.querySelector("#lobby h1"));
function tick(){
  const max=document.documentElement.scrollHeight-innerHeight,p=max>0?Math.min(1,Math.max(0,scrollY/max)):0;
  let k=1;while(k<STOPS.length-1&&p>STOPS[k][0])k++;
  const a=STOPS[k-1],b=STOPS[k],t=(p-a[0])/(b[0]-a[0]);
  sky.style.background=`linear-gradient(rgb(${mix(a[1],b[1],t)}),rgb(${mix(a[2],b[2],t)}))`;
  stars.style.opacity=Math.min(1,Math.max(0,(p-.5)/.3));
  const f=Math.min(1,Math.max(0,(p-.04)/.05)),fg=mix([16,35,58],[242,246,255],f).join(",");
  root.setProperty("--fg",`rgb(${fg})`);ruler.style.color=`rgb(${fg})`;
  const rd=document.getElementById("read"),rr=rd.getBoundingClientRect(),my=rr.top+rr.height/2;
  const over=[...document.querySelectorAll(".card:not(.t2):not(.t3)")].some(c=>{if(c.closest("#space"))return false;const q=c.getBoundingClientRect();return q.top<=my&&q.bottom>=my&&q.left<rr.right&&q.right>rr.left});
  rd.classList.toggle("dark",over);rd.style.color=over?"#10233a":`rgb(${fg})`;
  const br=badge.getBoundingClientRect(),by=br.top+br.height/2,bo=[...document.querySelectorAll(".card:not(.t2):not(.t3)")].some(c=>{if(c.closest("#space"))return false;const q=c.getBoundingClientRect();return q.top<=by&&q.bottom>=by&&q.left<br.right&&q.right>br.left});badge.style.color=bo?"#10233a":`rgb(${fg})`;
  const km=kmAt(p);alt.innerHTML=km.toFixed(1).padStart(5,"0")+"<small>km</small>";tempEl.textContent=Math.round(temp(km)).toString().replace("-","−")+" °C";
  let fl="Pre-launch";document.querySelectorAll("[data-floor]").forEach(x=>{if(x.getBoundingClientRect().top<innerHeight*.5)fl=x.dataset.floor});flr.textContent=fl;
  const dy=scrollY-lastY;lastY=scrollY;stat.textContent=p<.002?"Ground level":p>.998?"In orbit":dy<0?"Descending":"Climbing";
  clearTimeout(idle);idle=setTimeout(()=>{if(p>.002&&p<.998)stat.textContent="Holding"},700);
  const L=[...LAYERS].reverse().find(l=>km>=l[0]);layer.textContent=L[1];cap.textContent=[...CAPS].reverse().find(c=>km>=c[0])[1];
  rd.style.top=Math.max(innerWidth<=820?12:16,document.getElementById("grass").offsetHeight*.61+14-scrollY)+"px";extras(p);ptr.style.top=`calc(24px + ${p.toFixed(4)} * (100vh - 52px))`;
}

/* altitude curve: spreads the climb out so objects are evenly spaced down the page */
const CURVE=[[0,0],[.1,1],[.3,6],[.5,11],[.82,92],[1,104]];
const kmAt=p=>{for(let i=1;i<CURVE.length;i++){const[a,b]=[CURVE[i-1],CURVE[i]];if(p<=b[0])return a[1]+(b[1]-a[1])*(p-a[0])/(b[0]-a[0])}return 104};
const pAt=km=>{for(let i=1;i<CURVE.length;i++){const[a,b]=[CURVE[i-1],CURVE[i]];if(km<=b[1])return a[0]+(b[0]-a[0])*(km-a[1])/(b[1]-a[1])}return 1};
/* floating objects: [km, art, x%, width, drift vw, caption] */
const ART={skydiver:'<img src="images/skydiver.webp" alt="" width="300" height="314">',wballoon:'<div class="wbx"><img class="wbt" src="images/weather-balloon.webp" alt="" width="260" height="315"><svg class="burst" viewBox="0 0 260 315" aria-hidden="true"><g fill="#f4f6f9" stroke="#c3cdd9" stroke-width="2"><path d="M70 110l-34-22 14 38z"/><path d="M196 96l40-24-16 40z"/><path d="M56 196l-40 8 34 16z"/><path d="M206 200l40 4-30 20z"/><path d="M122 64l4-36 16 32z"/><path d="M146 236l-8 34 22-26z"/></g><text x="130" y="172" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="52" fill="#ff7a2f" stroke="#fff" stroke-width="8" paint-order="stroke">POP!</text><path d="M84 296q46-60 92 0z" fill="#f58a2e"/><path d="M88 296l42 19M172 296l-42 19M130 262v53" stroke="#8a94a5" stroke-width="2"/></svg><img class="wbb" src="images/weather-balloon-payload.webp" alt="" width="260" height="203"></div>',balloon:'<img src="images/hot-air-balloon.webp" alt="" width="300" height="430">',cloud0:'<img src="images/cloud-0.webp" alt="" width="520" height="271">',cloud2:'<img src="images/cloud-2.webp" alt="" width="520" height="215">',cloud4:'<img src="images/cloud-4.webp" alt="" width="439" height="351">',cloud5:'<img src="images/cloud-5.webp" alt="" width="283" height="190">',birds:'<img src="images/birds.webp" alt="" width="520" height="324">',jet:'<img src="images/jet.webp" alt="" width="520" height="313">',sat0:'<img src="images/satellite-0.webp" alt="" width="340" height="270">',sat1:'<img src="images/satellite-1.webp" alt="" width="340" height="531">',sat2:'<img src="images/satellite-2.webp" alt="" width="340" height="259">',sat3:'<img src="images/satellite-3.webp" alt="" width="340" height="344">',sat4:'<img src="images/satellite-4.webp" alt="" width="340" height="334">'};
const OBJS=[[.5,"balloon",66,115,4,"Hot air balloon, ~0.5 km. Most balloon flights stay below 1 km, but the record is 21 km."],[1,"birds",72,240,-30,"Geese, ~1 km. Flying in formation: the original cross-functional team."],
[11,"jet",66,250,14,"Plane, ~11 km. Cruising altitude: steady, reliable, on schedule."],
[4,"skydiver",86,120,-3,"",90],[33,"wballoon",88,100,-2,"",300],[92,"sat2",91,130,-3,"Real satellites orbit from about 160 km up. This one dropped by to wave."]];
[[.635,"sat0",8,110,3,""],[.69,"sat3",8,110,3,""],[.75,"sat1",92,95,-3,""],[.88,"sat4",8,105,3,""],[.95,"sat0",92,95,-3,""]].forEach(o=>OBJS.push([kmAt(o[0]),...o.slice(1)]));
let seed=11;const rnd=()=>(seed=(seed*9301+49297)%233280)/233280;

const objBox=document.getElementById("objs"),objEls=OBJS.map(o=>{const f=document.createElement("figure");f.className=`obj ${o[1].replace(/\d$/,"")} ${o[1]}`;f.innerHTML=ART[o[1]];
 f.dataset.p=pAt(o[0]);f.dataset.dx=o[4];f.dataset.dy=o[6]||40;f.style.setProperty("--x",o[2].toFixed(1)+"%");f.style.setProperty("--w",Math.round(o[3])+"px");f.style.setProperty("--dl",(-rnd()*6).toFixed(2)+"s");
 if(o[1].startsWith("cloud"))f.style.setProperty("--o",(.82+rnd()*.15).toFixed(2));(o[1]==="birds"||o[1]==="jet"||(o[1].startsWith("sat")&&innerWidth<1260)?document.getElementById("behind"):objBox).appendChild(f);return f});
function placeMeteors(){const m=document.getElementById("meteors"),h=document.querySelector("#space h2");if(!m||!h)return;const rg=document.createRange();rg.selectNodeContents(h);const r=rg.getBoundingClientRect(),W=document.documentElement.clientWidth;let left=r.right+scrollX+24,w=Math.min(340,W-left-30),top=r.top+scrollY-w*.05;
 if(w<200){w=Math.min(W*.55,260);left=W-w-8;top=r.top+scrollY-w*.62}m.style.width=w+"px";m.style.left=left+"px";m.style.top=top+"px"}

/* --- structure: cable car, boundaries, card tiers, cloud banks --- */
const LCOL=["#8fd0f5","#5b8de0","#7a6be0","#b07ae8","#e0c3ff"];
function layerIdx(km){return km<12?0:km<50?1:km<85?2:km<100?3:4}
function structure(){
 { const box=document.getElementById("bgclouds"),Wd=document.documentElement.clientWidth,mx=document.documentElement.scrollHeight-innerHeight,
   top=70,bottom=pAt(30)*mx+innerHeight*.6,N=Math.round((bottom-top)/230)+5;let h="",lastX=[];
   for(let i=0;i<N;i++){const r=Math.random,depth=.35+r()*.65,ck=[0,2,4,5,0,2,4,0][Math.floor(r()*8)],w=(90+300*depth)*(ck===1?.6:ck===5?.75:1);
    let x;for(let t=0;t<6;t++){x=-10+r()*104;if(lastX.every(v=>Math.abs(v-x)>18))break}lastX=[...lastX.slice(-2),x];
    const y=top+(i+r()*.9)*(bottom-top)/N;
    h+=ART["cloud"+ck].replace("<img",`<img class="bgc" style="left:${x.toFixed(1)}vw;top:${y.toFixed(0)}px;width:${w.toFixed(0)}px;opacity:${(.45+depth*.5).toFixed(2)};transform:${r()<.5?"scaleX(-1)":"none"};${depth<.55?"filter:blur(1px);":""}--d:${(50+r()*90).toFixed(0)}s;--dl:${(-r()*60).toFixed(0)}s;--dx:${((r()<.5?-1:1)*(20+r()*60)).toFixed(0)}px"`)}
   box.innerHTML=h }
 document.getElementById("ruler").innerHTML=[0,5,10,50,100].map(k=>`<i style="top:${(pAt(k)*100).toFixed(2)}%">${k}</i>`).join("");
  const D=document.documentElement.scrollHeight,max=D-innerHeight,docY=el=>el.getBoundingClientRect().top+scrollY;
 const bx=document.getElementById("bounds");const gaps=[...document.querySelectorAll("main .floor")].map(f=>f.getBoundingClientRect().top+scrollY+6),snap=km=>{const y=pAt(km)*max+innerHeight*.42;return gaps.reduce((a,b)=>Math.abs(b-y)<Math.abs(a-y)?b:a,gaps[0])};
 bx.innerHTML=[[8.8,"Everest summit · 8.8 km"],[12,"Tropopause · 12 km"],[50,"Stratopause · 50 km"],[85,"Mesopause · 85 km"],[100,"Kármán line · 100 km"]].map(([km,t])=>`<div class="bnd" style="top:${snap(km).toFixed(0)}px"><span>${t}</span></div>`).join("");
 const pl=document.querySelector("#skills .tag"),meso=pl?pl.getBoundingClientRect().top+scrollY+10:snap(85);
 document.getElementById("frontfx").innerHTML=`<div class="nlc" style="top:${(meso-150).toFixed(0)}px">${[[4,30,46,80],[38,70,40,70],[62,20,44,90],[20,150,38,60],[70,170,34,66]].map(([x,y,w,h],i)=>`<div class="wisp" style="left:${x}%;top:${y}px;width:${w}vw;height:${h}px;animation-delay:${-i*3}s"></div>`).join("")}</div>`;
 document.querySelectorAll(".card").forEach(c=>{if(c.closest("#space"))return;const y=docY(c)+c.offsetHeight/2,pp=Math.min(1,Math.max(0,(y-innerHeight/2)/max)),li=layerIdx(kmAt(pp));
  c.classList.remove("t1","t2","t3");if(li===1)c.classList.add("t1");if(li===2)c.classList.add("t2");if(li>=3)c.classList.add("t3");c.style.setProperty("--acc",c.classList.contains("lime")?"#8ac800":LCOL[li])});
 
}
function place(){placeMeteors();structure();const max=document.documentElement.scrollHeight-innerHeight;objEls.forEach(f=>f.style.top=(f.dataset.p*max+innerHeight*.42)+"px");const bl=document.querySelector(".obj.balloon"),st=document.getElementById("stats");const jt=document.querySelector(".obj.jet"),ah=document.querySelector('[data-floor="01 · HP"]');if(jt&&ah)jt.style.top=(ah.getBoundingClientRect().top+scrollY+10)+"px";if(bl&&st)bl.style.top=(st.getBoundingClientRect().top+scrollY-bl.offsetHeight+30)+"px"}
const still=matchMedia("(prefers-reduced-motion: reduce)").matches,moon=document.getElementById("moon");
function extras(p){const e=Math.min(1,Math.max(0,(p-.82)/.18));moon.style.transform=`translateY(calc(100% - ${e.toFixed(3)} * min(100%, 36vh)))`;moon.style.opacity=Math.min(1,e*5);const mt=document.getElementById("meteors"),me=Math.min(1,Math.max(0,(p-.86)/.14));mt.style.opacity=(me*1).toFixed(2);mt.style.transform=`translate(${((1-me)*140).toFixed(1)}px,${(-(1-me)*90).toFixed(1)}px)`;
 objEls.forEach(f=>{const y=f.offsetTop-scrollY+f.offsetHeight/2;f.style.opacity=f.classList.contains("jet")?"":Math.min(1,Math.max(0,(y-110)/150)).toFixed(2);if(still)return;
  const t=Math.max(-1.6,Math.min(1.6,(y-innerHeight/2)/innerHeight));f.style.translate=`${(t*f.dataset.dx).toFixed(2)}vw ${(t*f.dataset.dy).toFixed(1)}px`;if(f.classList.contains("wballoon")){const r=Math.min(1,Math.max(0,y/innerHeight));f.style.setProperty("--s",(.7+.6*(1-r)).toFixed(3));f.classList.toggle("popped",r<.3)}})}

/* hero panel: switches + launch lever */
(()=>{const sl=document.getElementById("sline"),base=sl.innerHTML,cur='<span class="cur"></span>';
 document.querySelectorAll(".console .sw").forEach(b=>b.addEventListener("click",()=>{const on=!b.classList.contains("on");b.classList.toggle("on",on);b.setAttribute("aria-checked",on);
  const msg=on?b.dataset.on:b.dataset.off;sl.innerHTML=msg?msg+cur:base;}));
 const lv=document.querySelector(".console .lever");lv.addEventListener("click",()=>{lv.classList.add("pulled");sl.innerHTML="Launch sequence started. Climbing..."+cur;
  setTimeout(()=>document.getElementById("stats").scrollIntoView({behavior:still?"auto":"smooth"}),450);setTimeout(()=>{lv.classList.remove("pulled");sl.innerHTML=base},2600)});})();

/* count-up stats */
const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;io.unobserve(en.target);const b=en.target,n=+b.dataset.n,suf=b.dataset.suf||"",pre=b.dataset.pre||"";if(still||!b.dataset.n)return;const t0=performance.now();
 (function step(t){const k=Math.min(1,(t-t0)/1300),v=Math.round(n*(1-Math.pow(1-k,3)));b.textContent=pre+v+suf;const sv=b.parentNode.querySelector('.gauge .val'),ln=b.parentNode.querySelector('.gauge line');if(sv){const g=+sv.dataset.g*(1-Math.pow(1-k,3)),a=Math.PI*(1-g);sv.style.strokeDashoffset=(157.08*(1-g)).toFixed(2);ln.setAttribute('x2',(60+44*Math.cos(a)).toFixed(1));ln.setAttribute('y2',(60-44*Math.sin(a)).toFixed(1))}if(k<1)requestAnimationFrame(step)})(t0)}),{threshold:.6});
document.querySelectorAll(".stat b[data-n]").forEach(b=>io.observe(b));
/* a note for whoever opens DevTools */
console.log("%cLooking under the hood? 👀","font:700 16px sans-serif;color:#8ac800");
console.log("I'd like that in a colleague. Hand-built in plain HTML, CSS & JavaScript.\nLet's talk: swens2005@yahoo.com");
addEventListener("scroll",tick,{passive:true});addEventListener("resize",()=>{place();tick()});addEventListener("load",()=>{place();tick()});place();tick();
