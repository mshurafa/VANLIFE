import React from 'react'
import './VanLifeApp.css'
import bg from './assets/images/imageBg.png'
import { Body, Footer, NavBar } from './component'


const VanLifeApp = () => {
    return (
        <div>
            <NavBar />
            <Body />
            <Footer />
            <img src={bg} alt="bg" className="" />
        </div>
    )
}

export default VanLifeApp
