import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { nav } from '../data/nav.js'
import { links } from '../data/experience.js'
export default function Footer(){return(<footer className="dark" style={{background:'#20211F',borderTop:'1px solid var(--line)',padding:'4rem 0 2rem'}}><div className="wrap">
<p style={{fontFamily:'Space Grotesk',fontSize:'clamp(2rem,6vw,5rem)',lineHeight:.95,letterSpacing:'-.04em',maxWidth:900}}>LET'S MAKE <span style={{color:'var(--cyan)'}}>SOMETHING MEANINGFUL.</span></p>
<div className="grid md:grid-cols-3 gap-8 mt-12"><div><b style={{fontFamily:'Space Grotesk',fontSize:'1.3rem'}}>PRIYAL NAMDEV</b><p style={{color:'var(--text2)'}}>Java Backend Developer | Full-Stack Developer | AI/ML Enthusiast</p><p className="mono">Indore, India</p></div>
<nav aria-label="Footer"><ul className="list-none p-0 m-0 grid grid-cols-2 gap-1" style={{color:'var(--text2)'}}>{nav.map(([id,l])=><li key={id}><a href={'#'+id} className="hover:text-white">{l}</a></li>)}</ul></nav>
<ul className="list-none p-0 m-0 mono" style={{lineHeight:2}}><li><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a></li><li>{links.linkedin?<a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>:'LinkedIn: not set'}</li><li>{links.email?<a href={'mailto:'+links.email}>{links.email}</a>:'Email: not set'}</li></ul></div>
<div className="flex justify-between items-center mt-10 pt-6" style={{borderTop:'1px solid var(--line)'}}><p className="mono m-0" style={{color:'var(--text2)'}}>© {new Date().getFullYear()} Priyal Namdev</p>
<motion.a href="#top" aria-label="Back to top" whileHover={{y:-4}} className="btn solid" style={{padding:'.7rem'}}><ArrowUp size={18}/></motion.a></div></div></footer>)}
