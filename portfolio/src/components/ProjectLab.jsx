import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects.js'
import ProjectCaseStudy from './ProjectCaseStudy.jsx'
export function Visual({id,color}){
const [role,setRole]=useState('user'),[mood,setMood]=useState(null)
const replies={Calm:"Glad you're feeling steady. Want to note what helped?",Low:"That sounds heavy. Want to talk it through?",Anxious:"Let's slow down together. What's on your mind?"}
if(id==='deepshield')return <div className="relative overflow-hidden" style={{height:150,border:`1px solid ${color}`,background:'repeating-linear-gradient(45deg,#2d302c,#2d302c 8px,#262826 8px,#262826 16px)'}}><div className="scan"/><div className="mono absolute bottom-1 left-2">real ▮▮▮▯▯ ai ▮▯▯▯▯ edited ▮▮▯▯▯</div><span className="mono absolute top-1 right-2">illustrative mockup</span></div>
if(id==='mockmate')return <div style={{color,height:150}} className="flex flex-col items-center justify-center" aria-hidden="true"><div>{[...Array(24)].map((_,i)=><span key={i} className="bar" style={{animationDelay:`${i*.07}s`}}/>)}</div><span className="mono">● REC 00:42 · illustrative mockup</span></div>
if(id==='mall')return <div><div role="group" aria-label="Preview role"><button className="btn mono" aria-pressed={role==='user'} onClick={()=>setRole('user')}>User</button> <button className="btn mono" aria-pressed={role==='admin'} onClick={()=>setRole('admin')}>Admin</button></div>
<div className="grid grid-cols-3 gap-2 mt-3">{['Product A','Product B','Product C'].map(n=><div key={n} className="paper mono" style={{padding:'.5rem',boxShadow:'none'}}>{n}<br/>{role==='admin'?<span style={{color:'#FF684F'}}>[edit] [delete]</span>:<span>[view]</span>}</div>)}</div><p className="mono">Mockup: {role==='admin'?'admin CRUD enabled':'browse & search only'}</p></div>
return <div><div role="group" aria-label="How are you feeling">{Object.keys(replies).map(m=><button key={m} className="btn" aria-pressed={mood===m} onClick={()=>setMood(m)} style={{marginRight:6,borderRadius:'999px',background:mood===m?'#7bb8a4':'transparent'}}>{m}</button>)}</div>
<p style={{background:'#ffffff',padding:'.7rem 1rem',borderRadius:'18px 18px 18px 2px',marginTop:'.8rem',minHeight:50}} aria-live="polite">{mood?replies[mood]:'How are you feeling today?'}</p><p className="mono">illustrative mockup</p></div>}
export default function ProjectLab(){const [open,setOpen]=useState('deepshield')
return(<section id="projects"><div className="wrap">
<h2 className="big" style={{maxWidth:860}}>SELECTED WORK  REAL SOLUTIONS</h2>
<p className="mono" style={{color:'var(--amber)'}}>Interface previews are conceptual mockups, not screenshots.</p>
<div className="flex flex-col gap-8 mt-10">
{projects.map((p,i)=><motion.article key={p.id} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} whileHover={{y:-4}} style={{background:`${p.bg}`,color:p.fg,padding:'clamp(1.2rem,3vw,2.5rem)',borderRadius:24,border:`1px solid ${p.color}44`,marginLeft:i%2?'auto':0,width:'min(100%,1060px)',boxShadow:'0 24px 50px -30px rgba(32,33,31,.5)'}}>
<div className="grid md:grid-cols-12 gap-6 items-center">
<span aria-hidden="true" className="md:col-span-2" style={{fontFamily:'Space Grotesk',fontSize:'clamp(4rem,9vw,7.5rem)',lineHeight:.8,color:'transparent',WebkitTextStroke:`1.5px ${p.color}`}}>0{i+1}</span>
<div className="md:col-span-5"><p className="mono" style={{color:p.color}}>{p.team?`Team of ${p.team}`:'Academic project'}</p>
<h3 style={{fontSize:'clamp(1.9rem,4vw,3rem)'}}>{p.title}</h3><p style={{opacity:.75}}>{p.sub}</p>
<div className="flex flex-wrap gap-1 my-3">{p.tech.slice(0,5).map(t=><span key={t} className="mono" style={{border:`1px solid ${p.color}55`,borderRadius:999,padding:'.05rem .6rem'}}>{t}</span>)}</div>
<button className="btn" style={{borderColor:p.color}} aria-expanded={open===p.id} aria-controls={'case-'+p.id} onClick={()=>setOpen(open===p.id?null:p.id)}>{open===p.id?'Hide':'Read'} case study</button></div>
<div className="md:col-span-5"><Visual id={p.id} color={p.color}/></div></div>
{open===p.id&&<motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} style={{overflow:'hidden'}}><ProjectCaseStudy p={p}/></motion.div>}</motion.article>)}</div></div></section>)}
