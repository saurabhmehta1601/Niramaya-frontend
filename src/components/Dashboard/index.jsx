import React from 'react'
import docImg from "../../assets/hero-img.png"
import {BsFillStarFill} from "react-icons/bs"

const Dashboard = () => {
    return (<div className="m-2 p-4 font-nunito flex flex-col gap-4 text-white">
        <div className=" flex  gap-4" >
            {/* profile image section */}
                <div className=" bg-blue-900 p-8 rounded-lg">
                    <img src={docImg} className="w-36" alt="doctor" />   
                </div> 
                {/* doctor biodata section */}
                <div className=" flex-1 bg-blue-900 p-8 rounded-lg flex">
                    <h3 className="text-3xl font-bold flex-1">Rajeev Jain</h3>                    
                    <div className="flex gap-4 mr-8 text-2xl text-yellow-300">
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                    </div>
                </div> 
        </div>
        {/* Appointments section */}
        <div className="bg-blue-900 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold underline">Appointments</h3>
        </div>
</div>)
}

export default Dashboard
