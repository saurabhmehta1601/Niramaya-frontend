import React from 'react';  
import Form from "../components/Form"

export default function signUp(){
return  (<div className="h-96">
            <Form formType="register" onSubmit={() => {alert("register")}}/>
        </div>)
}
