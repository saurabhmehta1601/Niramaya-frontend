import React from 'react'
import { Link } from 'react-router-dom';

const Form = ({formType}) => {
    return (
        <form className="border-2 p-4 gap-2 border-blue-500 rounded-lg flex items-center flex-col">
            <div className="flex gap-4 items-center">
                <label htmlFor="username" className="text-2xl ">username</label>
                <input type="text" name="username" id="username" className="rounded-md"/> 
            </div>
            <div className="flex gap-4 items-center">
                <label htmlFor="password" className="text-2xl">Password</label>
                <input type="password" name="password" id="password" className="rounded-md"/> 
            </div>
            <button type="submit" className="bg-blue-500 text-gray-100 px-4 py-2 rounded-sm">
                {formType === "login" ? "login" : "register"}
            </button>
            {formType === "register" ? 
            (<p>Already have an account , <Link className="text-blue-600">login</Link> instead </p>):
            (<p>Don't have an account , <Link className="text-blue-600">register</Link> instead </p>)
            }
</form>
    )
}

export default Form
