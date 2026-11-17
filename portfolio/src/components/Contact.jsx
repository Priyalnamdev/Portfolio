import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { links } from '../data/experience.js'
const E=import.meta.env,ready=E.VITE_EMAILJS_SERVICE_ID&&E.VITE_EMAILJS_TEMPLATE_ID&&E.VITE_EMAILJS_PUBLIC_KEY
const steps=[
{k:'name',q:"First things first: what should I call you?",type:'text'},
{k:'email',q:"Nice to meet you! Where can I reach you?",type:'email'},
{k:'project_type',q:"What kind of project is it?",opts:['Backend Development','Full-Stack Development','AI/ML Application','API Development','Other']},
{k:'budget',q:"Roughly what budget do you have in mind?",opts:['Under ₹10,000','₹10,000–₹30,000','₹30,000–₹75,000','₹75,000+','Not sure yet']},
{k:'timeline',q:"When would you like it done?",opts:['Within 2 weeks','1 month','2–3 months','Flexible']},
{k:'message',q:"Tell me about the idea or problem.",type:'area'}]
export default function Contact({preset}){
const [a,setA]=useState(preset?{project_type:preset}:{}),[inp,setInp]=useState(''),[err,setErr]=useState(''),[st,setSt]=useState(null)
const s=steps.find(x=>!a[x.k])
const put=v=>{const val=v.trim();if(!val)return setErr('Please fill this in.');if(s.k==='email'&&!/^\S+@\S+\.\S+$/.test(val))return setErr('That email looks incomplete. Try name@example.com.')
if(s.k==='message'&&val.length<10)return setErr('Add a little more detail (10+ characters).');setErr('');setInp('');setA(o=>({...o,[s.k]:val}))}
const send=async()=>{const body=Object.entries(a).map(([k,v])=>`${k}: ${v}`).join('\n')
if(ready){setSt({s:'sending'});try{await emailjs.send(E.VITE_EMAILJS_SERVICE_ID,E.VITE_EMAILJS_TEMPLATE_ID,a,{publicKey:E.VITE_EMAILJS_PUBLIC_KEY});setSt({s:'sent'})}catch{setSt({s:'fail',m:'Sending failed. Nothing was delivered. Please try again or use email directly.'})}}
else if(links.email){window.location.href=`mailto:${links.email}?subject=${encodeURIComponent('Project inquiry: '+a.project_type)}&body=${encodeURIComponent(body)}`;setSt({s:'draft',m:'Your mail app should open with a draft. This is NOT sent until you press send there.'})}
else setSt({s:'fail',m:'Email delivery is not configured yet, so nothing was sent. Please reach me on GitHub for now.'})}
const field={border:'1.5px solid rgba(32,33,31,.45)',background:'transparent'}
return(<section id="contact" style={{background:'#A9B8A0',color:'#20211F'}}><div className="wrap grid md:grid-cols-12 gap-10">
<div className="md:col-span-5"><h2 style={{fontSize:'clamp(2.4rem,6vw,4.6rem)'}}>HAVE AN IDEA? LET'S BUILD IT</h2>
<p style={{marginTop:'1.2rem'}}>Have a project in mind or need help bringing an idea to life? Tell me what you're planning. I'd love to hear about it.</p>
<ul className="list-none p-0 mono" style={{lineHeight:2}}><li>Indore, Madhya Pradesh, India</li><li><a href={links.github} target="_blank" rel="noopener noreferrer" style={{textDecoration:'underline'}}>GitHub: Priyalnamdev</a></li>
<li>{links.linkedin?<a href={links.linkedin} target="_blank" rel="noopener noreferrer" style={{textDecoration:'underline'}}>LinkedIn</a>:'LinkedIn: coming soon'}</li>
<li>{links.email?<a href={'mailto:'+links.email} style={{textDecoration:'underline'}}>{links.email}</a>:'Email: coming soon'}</li></ul></div>
<div className="md:col-span-7 paper" style={{color:'#20211F'}} aria-live="polite">
{steps.map(x=>a[x.k]&&<div key={x.k} style={{overflow:'hidden'}}><p className="mono" style={{color:'#FF684F'}}>{x.q}</p><p style={{background:'#FF684F',color:'#20211F',padding:'.4rem .8rem',float:'right'}}>{a[x.k]}</p></div>)}
{s&&<div><p style={{fontFamily:'Space Grotesk',fontSize:'1.4rem'}}>{s.q}</p>
{s.opts?<div className="flex flex-wrap gap-2">{s.opts.map(o=><button key={o} className="btn" onClick={()=>put(o)}>{o}</button>)}</div>
:<form onSubmit={e=>{e.preventDefault();put(inp)}}>{s.type==='area'?<textarea aria-label={s.q} rows={4} value={inp} onChange={e=>setInp(e.target.value)} className="w-full p-2" style={field}/>:<input aria-label={s.q} type={s.type} value={inp} onChange={e=>setInp(e.target.value)} className="w-full p-2" style={field}/>}
<button className="btn solid mt-2" type="submit">Next</button></form>}
{err&&<p role="alert" style={{color:'#b3261e'}}>{err}</p>}</div>}
{!s&&!st&&<div><p style={{fontFamily:'Space Grotesk',fontSize:'1.4rem'}}>That's everything. Ready?</p><button className="btn solid" onClick={send}>{ready?'Send inquiry':'Open email draft'}</button> <button className="btn" onClick={()=>setA({})}>Start over</button></div>}
{st&&<p role="status" style={{fontWeight:500}}>{st.s==='sending'?'Sending…':st.s==='sent'?'Sent. Thanks! I will reply by email.':st.m}</p>}
</div></div></section>)}
