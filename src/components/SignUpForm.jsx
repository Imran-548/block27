import React, { useState } from "react";

const SignUpForm = ({token, setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST", body: JSON.stringify[{
                username, password
            }]
        })
        const result = await response.json()
        setToken(result.token)
    }catch (error){
        setError(error)
    }
}
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        {" "}
        <label htmlFor="username">
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)} name="username" type="text" />
        </label>
        <label htmlFor="password">
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error&& <p>{error.message}</p>}
    </>
  );
};
export default SignUpForm;
