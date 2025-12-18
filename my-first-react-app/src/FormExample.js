import React from "react";
import { useState } from "react";

function FormExample() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        console.log(name);
        console.log(email);

    }

    return (
        <div>
            <h1>Form Example</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Your Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />  

                <br /><br />
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />    
                <button type="submit">Submit</button>


            </form>
        </div>
    );
};

export default FormExample;