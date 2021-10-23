import React from 'react'

const Header = () => {
    return (
        <div>
            {/* icon for hospital */}
            <div className="flex items-end h-24">
            <img src="/icon92.png" alt="niramaya-logo" className="h-24 ml-6 mt-4 absolute" />
            <h1 className="flex-1 text-5xl text-green-400 font-black underline font-nunito text-center"> Niramaya</h1>
            </div>
        </div>
    )
}

export default Header
