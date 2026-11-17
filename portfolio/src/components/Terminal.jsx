import { useState,useRef,useEffect } from 'react'
import { projects } from '../data/projects.js'
import { experience,links } from '../data/experience.js'
const cmds={
help:()=>['Commands: help, about, skills, projects, experience, contact, clear'],
about:()=>['Priyal Namdev: Java Backend | Full-Stack | AI/ML enthusiast','Indore, India. B.Tech AI & Data Science (2022–2026).'],
skills:()=>['Backend: Java, Spring Boot, JDBC, REST APIs, Spring Security','Database: SQL, MySQL','Frontend: HTML, CSS, JavaScript, React','AI/ML: Python, Flask, TensorFlow, OpenCV, Scikit-learn','Tools: Git, GitHub, Docker'],
projects:()=>projects.map(p=>`${p.title}: ${p.sub}  ${p.gh}`),
experience:()=>experience.map(e=>`${e.when}  ${e.title} @ ${e.org}`),
contact:()=>[`GitHub:   ${links.github}`,`Email:    ${links.email||'(not configured yet)'}`,`LinkedIn: ${links.linkedin||'(not configured yet)'}`,'Or use the project form below.']}
export default function Terminal(){
const [lines,setLines]=useState([{t:"Type 'help' to begin."}]),[v,setV]=useState(''),hist=useRef([]),hi=useRef(0),end=useRef(null)
useEffect(()=>{end.current?.scrollTo(0,end.current.scrollHeight)},[lines])
const run=e=>{e.preventDefault();const c=v.trim().toLowerCase();if(!c)return;hist.current.push(c);hi.current=hist.current.length;setV('')
if(c==='clear')return setLines([])
const out=cmds[c]?cmds[c]():[`command not found: ${c}. Try 'help'.`];setLines(l=>[...l,{t:'$ '+c,cmd:1},...out.map(t=>({t}))])}
const key=e=>{if(e.key==='ArrowUp'&&hist.current.length){e.preventDefault();hi.current=Math.max(0,hi.current-1);setV(hist.current[hi.current])}
if(e.key==='ArrowDown'){e.preventDefault();hi.current=Math.min(hist.current.length,hi.current+1);setV(hist.current[hi.current]||'')}}
return(<section id="terminal" className="dark deep"><div className="wrap">
<h2 style={{fontSize:'clamp(2.4rem,6vw,5rem)',maxWidth:800}}>CURIOUS ABOUT HOW I WORK?</h2>
<div className="mono mt-8" style={{border:'2px solid #FF684F',background:'#171A19',boxShadow:'8px 8px 0 #FF684F'}}>
<div style={{background:'#FF684F',color:'#20211F',padding:'.3rem .8rem'}}>priyal@portfolio:~</div>
<div ref={end} style={{height:300,overflowY:'auto',padding:'1rem',color:'#FF684F'}} aria-live="polite">
{lines.map((l,i)=><div key={i} className="ln" style={{whiteSpace:'pre-wrap',wordBreak:'break-word',color:l.cmd?'#F5F0E7':undefined}}>{l.t}</div>)}
<form onSubmit={run} className="flex"><span>$&nbsp;</span><input aria-label="Terminal command" value={v} onChange={e=>setV(e.target.value)} onKeyDown={key} autoComplete="off" spellCheck="false" style={{flex:1,background:'none',border:0,color:'#F5F0E7',font:'inherit',outline:'none'}}/><span className="cursor">▮</span></form></div></div></div></section>)}
