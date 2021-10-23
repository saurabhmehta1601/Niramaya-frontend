import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="mx-24 py-36  hero-bg-img">
            <div className=" w-1/2   flex flex-col justify-center gap-4">
                    <h2 className="text-4xl font-nunito font-semibold ">Take a step forward as society</h2>
                    <h3 className="text-3xl font-nunito">Join us for better state of mind </h3>
                    <div className="flex gap-8 ">
                        <Link to="/login" className="bg-pink-600 text-gray-200 px-4 py-2 rounded font-semibold">Login</Link>
                        <Link to="/register" className="bg-green-600 text-gray-200 px-4 py-2 rounded font-semibold">Register</Link>
                    </div>
            </div>
        </div>
    )
}

export default Home
