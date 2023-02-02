import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function SharedLayout({cloggedIn, uloggedIn}) {
  return (
    <>
       <Header cloggedIn={cloggedIn} uloggedIn={uloggedIn}/>
       <Outlet/> 
       <Footer/>
    </>
  )
}
