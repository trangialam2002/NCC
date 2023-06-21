import './content.css'
import {useMemo} from 'react'
import logoNCC from '../../Image/logoNCC.png'
import icon1 from '../../Image/css-icon 1.png'
import icon2 from '../../Image/css-icon 2.png'
import icon3 from '../../Image/css-icon 3.png'
import icon4 from '../../Image/Copyright.png'
import BoxItem from '../BoxItem/BoxItem'

function Content() {
    const obj=useMemo(()=>{
        return {
            title:"Lorem ipsum dolor sit asmet?",
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.',
            src:[icon1,icon2,icon3,icon1,icon2,icon3]
        }
    },[])
    return ( 
        <div className='content'>
            <img src={logoNCC} alt='ncc'/>
            <div className='content-top'>
                <p>{obj.title}</p>
                <span>{obj.text}</span>
            </div>
            <div className='content-body'>
                {
                    obj.src.map((item,index)=>(
                        <BoxItem key={index}
                            src={item}
                            text={obj.text}
                            title={obj.title}
                        />
                    ))
                }
            </div>
            <div className='footer'>
                <img src={icon4}/>
            </div>
        </div>
     );
}

export default Content;