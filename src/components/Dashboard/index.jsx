import React from 'react'
import docImg from "../../assets/hero-img.png"
import {BsFillStarFill} from "react-icons/bs"

const fakeAppointments = [{
    patient:"Raju Rastogi",
    disease: "depression" ,
    doctor:"Rajeev Jain",
    scheduledOn:"21-10-2021 at 4:00 pm"
},{
    patient:"Mukesh",
    disease: "anxiety disorder" ,
    doctor:"Rajeev Jain",
    scheduledOn:"22-10-2021 at 3:00 pm"
}]


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
            <h3 className="text-2xl mb-4 font-semibold underline">Scheduled Appointments</h3>
            {/* appointment table headers */}
            <div className="grid grid-cols-9 gap-4">
                <div className="col-span-1 text-lg font-semibold"></div>
                <div className="col-span-2 text-lg font-semibold">Patient</div>
                <div className="col-span-4 text-lg font-semibold">Disease</div>
                <div className="col-span-2 text-lg font-semibold">Scheduled On</div>

                {/* All appointments */}
                { fakeAppointments.length === 0 ? 
                <h5>There are no appointments</h5> :
                fakeAppointments.map((app,idx) => {
                    return ( <>
                    <div className="col-span-1 text-sm font-semibold">{idx + 1}</div>
                    <div className="col-span-2 text-sm font-semibold">{app.patient}</div>
                    <div className="col-span-4 text-sm font-semibold">{app.disease}</div>
                    <div className="col-span-2 text-sm font-semibold">{app.scheduledOn}</div>
                </>)
                })
                }
            </div>
        </div>
</div>)
}

export default Dashboard
