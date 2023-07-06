import React from 'react'
import { NavbarComponent, FooterComponent } from '../components'
import { Hero } from '../layouts'


const Home = () => {
  return (
    <div>
    <NavbarComponent/>
    <Hero/>
    <FooterComponent/>
    </div>
  )
}

export default Home