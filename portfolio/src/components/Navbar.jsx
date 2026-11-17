import { useState,useEffect } from 'react'
import { motion,AnimatePresence,useScroll,useSpring } from 'framer-motion'
import { Menu,X } from 'lucide-react'
import { nav } from '../data/nav.js'
export default function Navbar(){
const [open,setOpen]=useState(false),[act,setAct]=useState(''),[small,setSmall]=useState(false)
const {scrollYProgress}=useScroll(),prog=useSpring(scrollYProgress,{stiffness:120,damping:25})
useEffect(()=>{const on=()=>{setSmall(window.scrollY>60);let cur='';nav.forEach(([id])=>{const e=document.getElementById(id);if(e&&e.getBoundingClientRect().top<window.innerHeight*.4)cur=id});setAct(cur)}
on();window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on)},[])
useEffect(()=>{document.body.style.overflow=open?'hidden':'';const k=e=>e.key==='Escape'&&setOpen(false);window.addEventListener('keydown',k);return()=>{document.body.style.overflow='';window.removeEventListener('keydown',k)}},[open])
return(<>
<header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3" style={{paddingTop:small?'.6rem':'1.1rem',transition:'padding .3s'}}>
<nav aria-label="Main" className="glass flex items-center justify-between w-full relative overflow-hidden" style={{maxWidth:1080,borderRadius:999,padding:small?'.55rem .6rem .55rem 1.4rem':'.85rem .8rem .85rem 1.7rem',transition:'padding .3s'}}>
<a href="#top" className="flex items-center gap-2 group" style={{fontFamily:'Space Grotesk',fontWeight:700,fontSize:'1.25rem',letterSpacing:'-.02em'}} aria-label="Priyal N. home">
<motion.span aria-hidden="true" whileHover={{rotate:90}} className="grid place-items-center" style={{width:30,height:30,borderRadius:9,background:'var(--cyan)',color:'#20211F',fontSize:'.95rem'}}>P</motion.span>PRIYAL<span style={{color:'var(--cyan)'}}>.N</span></a>
<ul className="hidden lg:flex list-none m-0 p-0 gap-1">{nav.map(([id,l])=><li key={id} className="relative"><a href={'#'+id} aria-current={act===id?'true':undefined} className="block px-4 py-2 transition-colors" style={{color:act===id?'var(--text)':'var(--text2)',fontWeight:500}}>
{act===id&&<motion.span layoutId="pill" className="absolute inset-0" style={{borderRadius:999,background:'rgba(255,104,79,.12)',border:'1px solid rgba(255,104,79,.5)'}} transition={{type:'spring',stiffness:400,damping:32}}/>}<span className="relative">{l}</span></a></li>)}</ul>
<div className="flex items-center gap-2"><a href="#contact" className="btn solid hidden sm:inline-flex" style={{padding:'.65rem 1.3rem',boxShadow:'0 0 28px rgba(255,104,79,.5)'}}>Let's Talk</a>
<button className="lg:hidden grid place-items-center" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)} style={{width:48,height:48,borderRadius:999,border:'1px solid var(--line)'}}>{open?<X/>:<Menu/>}</button></div>
<motion.span aria-hidden="true" className="absolute left-0 bottom-0 h-[2px] w-full origin-left" style={{scaleX:prog,background:'linear-gradient(90deg,var(--cyan),var(--amber))'}}/></nav></header>
<AnimatePresence>{open&&<motion.div role="dialog" aria-modal="true" aria-label="Navigation" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-40 flex flex-col justify-center px-8" style={{background:'rgba(32,33,31,.98)',color:'#F5F0E7'}}>
<ul className="list-none p-0 m-0">{nav.map(([id,l],i)=><motion.li key={id} initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} exit={{opacity:0}} transition={{delay:.05*i}}><a href={'#'+id} onClick={()=>setOpen(false)} className="flex items-baseline gap-4 py-3" style={{fontFamily:'Space Grotesk',fontSize:'2.4rem',minHeight:56,borderBottom:'1px solid var(--line)',color:act===id?'var(--cyan)':'#F5F0E7'}}><span className="mono" style={{color:'#B9B4A8'}}>0{i+1}</span>{l}</a></motion.li>)}</ul>
<a href="#contact" onClick={()=>setOpen(false)} className="btn solid mt-8 justify-center" style={{minHeight:56}}>Let's Talk</a></motion.div>}</AnimatePresence></>)}
