import React from 'react'
import Onion from '../Assets/cebola.svg'
import {   
    Link
  } from "react-router-dom";
export default function Appbar(){
    return(
        <div className='container-appbar'>     
            <Link to='/'>
            <img src={Onion} alt="Onion" className='onion'/>
            </Link>        
            <h2 className='appbar-title'>Onion Hack</h2>
        </div>
    )
}