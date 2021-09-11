import React from 'react'
import './styles.scss'

import Logo from '../../assets/NobeLit logo.JPG'

export default function Header() {
    return (
        <header>
         <div className="wrap">
         <img className="logo" src={Logo} alt="NobeLit logo"/>
         </div>
            
        </header>
    )
}
