import './boxItem.css'
function BoxItem({src,text,title}) {
    return ( 
        <div className='item'>
            <p>{title}</p>
            <div>
                <img src={src} alt='.' align="left"/>
                {text?.slice(0,200)+'...'}
            </div>
        </div>
     );
}

export default BoxItem;