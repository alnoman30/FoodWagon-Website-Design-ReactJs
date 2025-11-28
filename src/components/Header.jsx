import React from 'react'
import logo from "../assets/Logo.png"
import { MdLocationCity, MdLocationOn } from 'react-icons/md'
const Header = () => {
  return (
    <header>
        <div className='container mx-auto'>
            <div className='flex flex-row justify-between items-center py-2'>
                <div className='logo'>
                    <img src={logo} alt="foodwagon" />
                </div>
                <div className=' inline-block text-gray-500'>
                    <p className='flex items-center gap-1'><strong>Deliver to:</strong> <MdLocationOn size={20} className='text-primary'/> Current Location <strong>Mohammadpur Bus Stand, Dhaka</strong></p>
                </div>
                <div>3</div>
            </div>
        </div>
    </header>
  )
}

export default Header