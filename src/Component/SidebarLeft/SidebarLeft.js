import './sidebar.css'
import {useMemo,useState,memo,useRef,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'

function SidebarLeft({sidebarRef,iconRef}) {
    const listMenu=useMemo(()=>{
        return ['Home','Services','News','Blog','Contact']
    },[])

    const [position,setPosition]=useState(0)

    const handleClickTagLi=(i)=>{
        setPosition(i)
    }
    const handleClickToggle=()=>{
        sidebarRef.current.classList.add('add')
        iconRef.current.classList.add('off')
    }
    return ( 
        <>
            <div className='sidebar' ref={sidebarRef}>
                <ul>
                    {
                        listMenu.map((item,index)=>(
                            <li key={index} onClick={()=>handleClickTagLi(index)} style={index===position?{color:'#fff',backgroundColor:'#5C5C5C'}:{}}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <span className='on' onClick={handleClickToggle} ref={iconRef}><FaBars/></span>
        </>
     );
}

export default memo(SidebarLeft);