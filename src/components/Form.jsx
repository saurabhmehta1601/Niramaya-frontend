import React from 'react'
import { Link } from 'react-router-dom';

const Form = ({formType,onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className="pt-12 h-full gap-2 flex items-center flex-col">

            <div className="flex flex-col gap-1 items-start mb-4">
                <label htmlFor="email" className="text-xl text-gray-600">Email</label>
                <input type="text" name="email" id="email" className="rounded-md"/> 
            </div>

            <div className="flex flex-col gap-1 items-start mb-8">
                <label htmlFor="password" className="text-xl text-gray-600">Password</label>
                <input type="password" name="password" id="password" className="rounded-md"/> 
            </div>

            <button type="submit" className="mb-2 bg-blue-500 text-gray-100 px-4 py-2 rounded-sm">
                {formType === "login" ? "login" : "register"}
            </button>
            {formType === "register" ? 
            (<p>Already have an account , <Link to="/login" className="text-blue-600">login</Link> instead </p>):
            (<p>Don't have an account , <Link to="/register" className="text-blue-600">register</Link> instead </p>)
            }
</form>
    )
}

export default Form
