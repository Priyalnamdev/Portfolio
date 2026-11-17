import { useRef } from 'react'
export default function Magnetic({children,className='btn',...p}){const r=useRef(null)
const mv=e=>{const b=r.current.getBoundingClientRect();r.current.style.transform=`translate(${(e.clientX-b.left-b.width/2)*.25}px,${(e.clientY-b.top-b.height/2)*.35}px)`}
return <a ref={r} className={className} onMouseMove={mv} onMouseLeave={()=>r.current.style.transform=''} style={{transition:'transform .2s'}} {...p}>{children}</a>}
