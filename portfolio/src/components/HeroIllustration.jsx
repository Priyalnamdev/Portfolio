import { motion,useMotionValue,useSpring } from 'framer-motion'
export default function HeroIllustration(){
const x=useMotionValue(0),y=useMotionValue(0),sx=useSpring(x,{stiffness:60,damping:15}),sy=useSpring(y,{stiffness:60,damping:15})
const mv=e=>{const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left-r.width/2)/22);y.set((e.clientY-r.top-r.height/2)/22)}
return(<div onMouseMove={mv} className="relative w-full" style={{aspectRatio:'1/1',maxWidth:500}} role="img" aria-label="Hand-drawn illustration of a person with a glowing idea lightbulb">
<motion.svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" style={{x:sx,y:sy}} fill="none" stroke="#20211F" strokeWidth="3" strokeLinecap="round">
<g className="orbit"><circle cx="200" cy="215" r="150" strokeWidth="1.5" strokeDasharray="2 9"/><circle cx="350" cy="215" r="8" fill="#FF684F" stroke="none"/><circle cx="94" cy="109" r="5" fill="#3455FF" stroke="none"/></g>
<path d="M50 335 Q200 322 350 337"/><circle cx="170" cy="140" r="42" fill="#A9B8A0"/>
<path d="M128 338 Q120 235 170 195 Q222 235 214 338"/><path d="M214 272 Q262 262 300 290 L304 338"/>
<g className="drift"><path d="M262 118 q0-28 28-30 q28 2 28 30 q0 16-14 26 v14 h-28 v-14 q-14-10-14-26z" fill="#DCE7ED"/><path d="M276 183 h28 M280 193 h20"/>
<path d="M290 62 v-14 M326 76 l10-10 M254 76 l-10-10" strokeWidth="2"/></g>
<path d="M60 85 q40-40 95-20" strokeDasharray="6 8"/></motion.svg>
<span className="mono absolute" style={{top:'4%',right:0,color:'var(--amber)'}}>idea_v3.final</span>
<span className="hand absolute" style={{bottom:'3%',left:'4%',transform:'rotate(-4deg)'}}>made with curiosity ↗</span></div>)}
