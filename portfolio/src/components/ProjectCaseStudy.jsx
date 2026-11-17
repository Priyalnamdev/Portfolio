import { Github } from 'lucide-react'
export default function ProjectCaseStudy({p}){return(
<div className="grid md:grid-cols-3 gap-4 mt-4" id={'case-'+p.id}>
{[['Problem',p.problem],['Solution',p.solution],['What I built',p.built]].map(([h,t])=><div key={h}><p className="mono" style={{color:p.color}}>{h}</p><p>{t}</p></div>)}
<div className="md:col-span-3 flex flex-wrap gap-2 items-center">{p.tech.map(t=><span key={t} className="mono" style={{border:`1px solid ${p.color}`,padding:'.1rem .5rem'}}>{t}</span>)}
<a href={p.gh} target="_blank" rel="noopener noreferrer" className="btn" style={{borderColor:p.color}}><Github size={16}/>View on GitHub</a></div></div>)}
