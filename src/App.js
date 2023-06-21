import './App.css';
import SidebarLeft from './Component/SidebarLeft/SidebarLeft';
import Content from './Component/Content/Content';
import {useEffect,useRef} from 'react'

function App() {
  const sidebarRef=useRef()
  const iconRef=useRef()
  const rightRef=useRef()

  useEffect(()=>{
    const handleEventClick=()=>{
        sidebarRef.current.classList.remove('add')
        iconRef.current.classList.remove('off')
    }
      rightRef.current.addEventListener('click',handleEventClick)
      return ()=>{
          rightRef.current.removeEventListener('click',handleEventClick)
      }
    },[])
  return (
    <div className='app'>
        <SidebarLeft sidebarRef={sidebarRef} iconRef={iconRef}/>
        <div className='right' ref={rightRef}>
          <Content/>
        </div>
    </div>
  );
}

export default App;
