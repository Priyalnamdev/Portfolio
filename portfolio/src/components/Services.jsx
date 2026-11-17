import { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { Server,LayoutDashboard,BrainCircuit,Plug,ChevronDown } from 'lucide-react'
const list=[[Server,'Backend Development','Java, Spring Boot, REST APIs, authentication, database integration.',['Java','Spring Boot','Spring Security','MySQL'],'Backend Development'],
[LayoutDashboard,'Full-Stack Web Development','Responsive web applications, frontend integration, backend functionality.',['React','JavaScript','REST APIs','SQL'],'Full-Stack Development'],
[BrainCircuit,'AI-Powered Applications','Python, Flask, machine learning integrations, intelligent application workflows.',['Python','Flask','TensorFlow','OpenCV'],'AI/ML Application'],
[Plug,'API Development & Integration','REST API development, third-party API integrations, database connectivity.',['REST APIs','Integrations','MySQL','Git'],'API Development']]
export default function Services({onPick}){const [i,setI]=useState(0)
return(<section id="services" className="dark"><div className="wrap">
<h2 className="big" style={{maxWidth:820}}>WHAT CAN WE BUILD TOGETHER?</h2>
<div className="mt-10">{list.map(([Ic,t,d,tags,type],k)=><div key={t} style={{borderTop:'1px solid var(--line)'}}>
<button onClick={()=>setI(i===k?-1:k)} aria-expanded={i===k} className="flex w-full items-center gap-4 py-6 text-left cursor-pointer" style={{background:'none',border:0}}>
<span className="mono" style={{color:'var(--text2)'}}>0{k+1}</span><motion.span animate={{rotate:i===k?8:0,scale:i===k?1.15:1}} style={{color:'var(--cyan)'}}><Ic size={30}/></motion.span>
<span style={{fontFamily:'Space Grotesk',fontSize:'clamp(1.5rem,3.6vw,2.6rem)',flex:1,color:i===k?'var(--cyan)':'var(--text)'}}>{t}</span><ChevronDown style={{transform:i===k?'rotate(180deg)':'',transition:'transform .3s'}}/></button>
<AnimatePresence initial={false}>{i===k&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} style={{overflow:'hidden'}}><div className="pb-6 pl-0 md:pl-16"><p style={{color:'var(--text2)',maxWidth:560}}>{d}</p>
<div className="flex flex-wrap gap-2 my-3">{tags.map(x=><span key={x} className="mono" style={{border:'1px solid var(--line)',borderRadius:999,padding:'.1rem .7rem'}}>{x}</span>)}</div>
<a href="#contact" className="btn solid" onClick={()=>onPick(type)}>Discuss a project</a></div></motion.div>}</AnimatePresence></div>)}</div></div></section>)}
