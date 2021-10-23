import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            {/* icon for hospital */}
            <div className="flex items-end h-24">
            <img src="/icon92.png" alt="niramaya-logo" className="h-24 ml-6 mt-4 absolute" />
            <Link to="/" className="flex-1 text-5xl text-green-400 font-black underline font-nunito text-center"> Niramaya</Link>
            </div>
        </div>
    )
}

export default Header
