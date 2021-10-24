import React from 'react'
import docImg from "../assets/hero-img.png"

const Dashboard = () => {
    return (
        <div className="m-2 p-4 rounded-lg bg-blue-900 text-gray-200 font-nunito flex">
            {/*  profile of doctor/patient */}
           <div className="w-1/4 flex flex-col items-center">
                <div className="p-4"> <img src={docImg} alt="profile" className="h-36"/> </div>
                <div>
                        <h3 className="font-semibold text-lg text-center">Dr. Rajeev Jain</h3>
                        <h2 className="font-semibold text-sm text-center">MD Psychology</h2>
                </div>
            </div> 
            <div className="w-3/4 p-4">
                <h3 className="text-2xl font-semibold underline">Appointments</h3>
            </div>
        </div>
    )
}

export default Dashboard
