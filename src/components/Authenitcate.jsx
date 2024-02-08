import React, { useState } from "react";


const Authenticate = ({token, setToken}) => {
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    
    
    async function handleClick(){
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
            headers: {
                "Content-Type": "application/json", 
                Authorization: `Bearer ${token}`

            }
            })

            const result = await response.json()
            setSuccessMessage(result)
            console.log(result)
        }catch (error){
            setErrorMessage(error)
        }
    }


    return <button type="submit" onClick={handleClick}>Authenticate</button>
}
export default Authenticate