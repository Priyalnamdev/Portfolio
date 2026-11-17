import { useEffect,useRef } from 'react'
export default function Cursor(){const r=useRef(null)
useEffect(()=>{const m=e=>{if(r.current){r.current.style.transform=`translate(${e.clientX-14}px,${e.clientY-14}px)`;r.current.style.scale=e.target.closest('a,button,[role=tab],input,textarea')?'1.8':'1'}};window.addEventListener('mousemove',m);return()=>window.removeEventListener('mousemove',m)},[])
return <div ref={r} className="cur" aria-hidden="true" style={{position:'fixed',top:0,left:0,width:28,height:28,borderRadius:'50%',border:'1px solid rgba(255,104,79,.8)',pointerEvents:'none',zIndex:90,transition:'scale .2s'}}/>}
