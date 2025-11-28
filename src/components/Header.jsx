import React from 'react'
import logo from "../assets/Logo.png"
import { MdLocationCity, MdLocationOn } from 'react-icons/md'
import { FaSearch, FaUser } from 'react-icons/fa'
const Header = () => {
  return (
    <header>
        <div className='container mx-auto'>
            <div className='flex flex-row justify-between items-center py-2'>
                {/* logo */}
                <div className='logo'>
                    <img src={logo} alt="foodwagon" />
                </div>
                {/* location */}
                <div className=' inline-block text-gray-500'>
                    <p className='flex items-center gap-1'><strong>Deliver to:</strong> <MdLocationOn size={20} className='text-primary'/> Current Location <strong>Mohammadpur Bus Stand, Dhaka</strong></p>
                </div>
                {/* search/login */}
                <div className='flex'>
                    <div className='inline-block text-gray-700'>
                        <p className='flex items-center gap-1 font-bold'><FaSearch size={20} className='text-primary'/>Search Food</p>
                    </div>
                    <div className='inline-block text-gray-700  rounded-xl shadow-primary'>
                        <p className='flex items-center gap-1 font-bold ml-3  text-primary '><FaUser size={20} className='text-primary'/>Login</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header