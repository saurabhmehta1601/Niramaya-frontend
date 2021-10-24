import React from 'react'
import Form from "../components/Form"
const Login = () => {
    return (
        <div className="h-96">
            <Form formType="login" onSubmit={()=> {alert("login")}}/>
        </div>
    )
}

export default Login
