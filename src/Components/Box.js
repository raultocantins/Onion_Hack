import React from 'react'
import '../Components/Pages/Index.css'
export default function Box(props){
    return(
        <div className='box' >
        <img src={props.img} alt='box' className="box-img" />
<h3 className='box-title'>{props.title}</h3>
    </div>
    )
}