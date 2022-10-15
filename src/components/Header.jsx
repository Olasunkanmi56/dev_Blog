import React from 'react'
import Facebook from '../img/Facebook.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'

const Header = ({title}) => {
    return (
        <div className='Header'>
           <h1>{title}</h1> 
           <div className="social">
            <img src={Facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
           </div>
        </div>
    )
}

export default Header
