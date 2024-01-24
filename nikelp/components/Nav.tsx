import React from 'react'
import {headerLogo} from '../public/images'
import {hamburger} from '../public/icons'

const nav = () => {
  return (
    <header>
        <nav>
            <a href="/">
                <img 
                    src={headerLogo} 
                    alt="Logo"
                    height={130}
                    width={30} />
            </a>

        </nav>
    </header>
  )
}

export default nav