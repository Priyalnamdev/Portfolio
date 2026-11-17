import { motion } from 'framer-motion'
import { Download,ArrowDown } from 'lucide-react'
import HeroIllustration from './HeroIllustration.jsx'
import Magnetic from './Magnetic.jsx'
import { links } from '../data/experience.js'
const up=d=>({initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{delay:d,duration:.6}})
export default function Hero(){return(<section id="top" style={{paddingTop:'8.5rem'}}>
<div className="wrap grid lg:grid-cols-12 gap-10 items-center"><div className="lg:col-span-7">
<motion.h1 {...up(.1)} style={{fontSize:'clamp(2.3rem,5.4vw,4.3rem)'}}>HELLO, <br/>I'M <span style={{color:'var(--cyan)'}}>PRIYAL</span></motion.h1>
<motion.p {...up(.2)} style={{fontFamily:'Space Grotesk',fontSize:'clamp(1.1rem,2vw,1.5rem)',fontWeight:500,margin:'1.2rem 0 .6rem',maxWidth:560,lineHeight:1.25}}>I BUILD DIGITAL PRODUCTS THAT MAKE IDEAS WORK</motion.p>
<motion.p {...up(.3)} style={{maxWidth:500,color:'var(--text2)'}}>Java Backend Developer. Full-Stack Builder. AI/ML Enthusiast. I create practical applications that solve real problems.</motion.p>
<motion.p {...up(.35)} className="mono"><span className="pulse" style={{color:'var(--cyan)'}}>●</span> Available for freelance projects</motion.p>
<motion.div {...up(.45)} className="flex flex-wrap gap-3 mt-5"><Magnetic className="btn solid" href="#projects">Explore My Work</Magnetic><Magnetic href="#contact">Let's Work Together</Magnetic>
{links.resume?<Magnetic href={links.resume} download><Download size={16}/>Download Resume</Magnetic>:<span className="btn mono" aria-disabled="true" title="Set VITE_RESUME_URL in .env" style={{opacity:.5,cursor:'not-allowed'}}><Download size={16}/>Resume coming soon</span>}</motion.div></div>
<motion.div className="lg:col-span-5 flex justify-center" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{delay:.3,duration:.8}}><HeroIllustration/></motion.div></div>
<a href="#about" className="mono wrap flex items-center gap-2 mt-10" aria-label="Scroll to about"><motion.span animate={{y:[0,6,0]}} transition={{repeat:Infinity,duration:1.6}}><ArrowDown size={14}/></motion.span>scroll</a></section>)}
