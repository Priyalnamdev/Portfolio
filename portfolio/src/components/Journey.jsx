import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { experience,links } from '../data/experience.js'
export default function Journey(){return(<section id="experience" style={{background:'#DCE7ED'}}><div className="wrap">
<h2 className="big">EXPERIENCE &amp; EDUCATION</h2>
<ol className="list-none p-0 mt-10 relative" style={{marginLeft:10}}>
<motion.span aria-hidden="true" initial={{scaleY:0}} whileInView={{scaleY:1}} viewport={{once:true}} transition={{duration:1.2}} className="absolute left-0 top-0 bottom-0 origin-top" style={{width:2,background:'linear-gradient(var(--cyan),transparent)'}}/>
{experience.map((e,i)=><motion.li key={e.when} initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.1*i}} className="relative" style={{padding:'0 0 2.5rem 2.2rem'}}>
<span aria-hidden="true" className="pulse" style={{position:'absolute',left:-6,top:8,width:14,height:14,borderRadius:'50%',background:i===2?'var(--amber)':'var(--cyan)'}}/>
<div className="paper" style={{maxWidth:720}}><p className="mono" style={{color:'var(--cyan)'}}>{e.when}</p><h3 style={{fontSize:'1.5rem',margin:'.3rem 0'}}>{e.title}</h3><p style={{fontWeight:500}}>{e.org}</p><p style={{color:'var(--text2)',margin:0}}>{e.note}</p></div></motion.li>)}</ol>
{links.resume?<a className="btn solid" href={links.resume} download><Download size={16}/>Download resume</a>:<p className="mono" style={{color:'var(--text2)'}}>Resume download: set VITE_RESUME_URL in .env.</p>}</div></section>)}
