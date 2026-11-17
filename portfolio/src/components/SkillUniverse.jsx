import { useState,useMemo } from 'react'
import { skills,cats } from '../data/skills.js'
const col={Backend:'#FF684F',Database:'#6f8a68',Frontend:'#20211F','AI & ML':'#3455FF',Tools:'#8a857a'}
export default function SkillUniverse(){
const [sel,setSel]=useState('java')
const pos=useMemo(()=>{const p={};cats.forEach((c,ci)=>{const g=skills.filter(s=>s.cat===c);const a=ci/cats.length*Math.PI*2-Math.PI/2
g.forEach((s,i)=>{const o=(i-(g.length-1)/2)*.28;p[s.id]=[300+Math.cos(a+o)*(150+i%2*60),300+Math.sin(a+o)*(150+i%2*60)]})});return p},[])
const cur=skills.find(s=>s.id===sel)
return(<section id="skills" className="bg-sage"><div className="wrap">
<h2 style={{fontSize:'clamp(2.4rem,6vw,5rem)',maxWidth:800}}>TECHNOLOGIES I WORK WITH</h2>
<p className="mono" style={{color:'#20211F'}}>Click a node. No percentages, just where I've used each tool.</p>
<div className="grid md:grid-cols-2 gap-8 items-center mt-6">
<svg viewBox="0 0 600 600" role="group" aria-label="Technology constellation" className="w-full">
{skills.flatMap(s=>s.rel.map(r=>[s.id,r])).map(([a,b])=><line key={a+b} x1={pos[a][0]} y1={pos[a][1]} x2={pos[b][0]} y2={pos[b][1]} stroke={cur.id===a||cur.id===b?'#FF684F':'#FF684F'} strokeOpacity={cur.id===a||cur.id===b?1:.4}/>)}
{skills.map(s=>{const [x,y]=pos[s.id],on=s.id===sel;return <g key={s.id} tabIndex={0} role="button" aria-label={s.name} aria-pressed={on} onClick={()=>setSel(s.id)} onKeyDown={e=>(e.key==='Enter'||e.key===' ')&&setSel(s.id)} style={{cursor:'pointer'}}>
<circle cx={x} cy={y} r={on?15:9} fill={col[s.cat]} stroke={on?'#20211F':'none'} strokeWidth="2"/><text x={x} y={y+(on?30:24)} textAnchor="middle" fill="#20211F" fontSize="12" fontFamily="JetBrains Mono">{s.name.split(' ')[0]}</text></g>})}</svg>
<div className="paper" style={{color:'#20211F'}} aria-live="polite">
<p className="mono" style={{color:'#FF684F'}}>{cur.cat}</p><h3 style={{fontSize:'2.2rem'}}>{cur.name}</h3>
<p><b>How I use it:</b> {cur.use}</p><p><b>Relevant project:</b> {cur.project}</p>
<p><b>Related:</b> {cur.rel.map(r=><button key={r} onClick={()=>setSel(r)} className="mono" style={{margin:'0 .4rem .3rem 0',padding:'.1rem .5rem',color:'#20211F',border:0,background:'#FF684F',cursor:'pointer'}}>{skills.find(s=>s.id===r).name}</button>)}</p></div></div></div></section>)}
