import React from 'react'
import Footer from './Footer'
import Container from './Container'
import Appbar from './Appbar'
import './Index.css'
export default function Main(){
    return(
        <div className='container'>
        <Appbar/>
        <Container/>
      <Footer/>
        </div>

    )
}