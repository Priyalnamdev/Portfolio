import { useState,useEffect } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Cursor from './components/Cursor.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import SkillUniverse from './components/SkillUniverse.jsx'
import ProjectLab from './components/ProjectLab.jsx'
import Services from './components/Services.jsx'
import Journey from './components/Journey.jsx'
import Terminal from './components/Terminal.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
export default function App(){
const [load,setLoad]=useState(true),[preset,setPreset]=useState(null)
useEffect(()=>{const t=setTimeout(()=>setLoad(false),1100);return()=>clearTimeout(t)},[])
return(<><AnimatePresence>{load&&<motion.div key="l" role="status" exit={{opacity:0}} className="hand" style={{position:'fixed',inset:0,zIndex:100,background:'#F5F0E7',display:'grid',placeItems:'center',color:'#FF684F',fontSize:'1.8rem',fontFamily:'Caveat'}}>made with curiosity<span className="cursor">▮</span></motion.div>}</AnimatePresence>
<Cursor/><Navbar/><main><Hero/><About/><SkillUniverse/><ProjectLab/><Services onPick={setPreset}/><Journey/><Terminal/><Contact key={preset||'x'} preset={preset}/></main><Footer/></>)}
