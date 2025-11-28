import React from 'react'
import logo from "../assets/Logo.png"
import { MdLocationCity, MdLocationOn } from 'react-icons/md'
const Header = () => {
  return (
    <header>
        <div className='container mx-auto'>
            <div className='flex flex-row justify-between items-center'>
                <div className='logo'>
                    <img src={logo} alt="foodwagon" />
                </div>
                <div>
                    <p><strong>Deliver to:</strong> <MdLocationOn/> Current Location <strong>Mohammadpur Bus Stand, Dhaka</strong></p>
                </div>
                <div>3</div>
            </div>
        </div>
    </header>
  )
}

export default Header