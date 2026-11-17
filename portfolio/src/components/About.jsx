import { motion } from 'framer-motion'
import { Server,Globe,BrainCircuit,Music,Gamepad2,Sprout } from 'lucide-react'
const cards=[[Server,'Backend','Java and Spring Boot are my main strength.'],[Globe,'Web','Modern, responsive web applications.'],[BrainCircuit,'AI/ML','Python and intelligent applications.'],[Music,'Dance','How I recharge and stay creative.'],[Gamepad2,'Gaming','Strategy, patience and fast problem-solving.'],[Sprout,'Learning','Always exploring new technologies.']]
export default function About(){return(<section id="about" className="dark"><div className="wrap grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-5"><span className="hand">a little about me</span><h2 className="big">THE PERSON BEHIND THE PROJECTS</h2>
<p style={{color:'var(--text2)',marginTop:'1.2rem'}}>I'm a software developer interested in building reliable backend systems, modern web applications, and intelligent digital solutions. I enjoy solving problems, exploring new technologies, and turning ideas into functional products.</p>
<p style={{color:'var(--text2)'}}>I completed my B.Tech in Artificial Intelligence &amp; Data Science at Prestige Institute of Engineering Management &amp; Research.</p></div>
<div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">{cards.map(([I,t,b],i)=><motion.div key={t} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-40px'}} transition={{delay:(i%2)*.1}} whileHover={{rotate:i%2?1:-1,y:-4}} className="paper" style={{marginTop:i%2?'1.5rem':0}}>
<I size={26} style={{color:i>2&&i<5?'var(--amber)':'var(--cyan)'}}/><h3 style={{fontSize:'1.15rem',margin:'.7rem 0 .3rem'}}>{t}</h3><p className="m-0" style={{color:'var(--text2)'}}>{b}</p></motion.div>)}</div></div></section>)}
