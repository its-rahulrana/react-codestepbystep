import { useState } from "react";

function App(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function clickHandler(){
    setName("");
    setEmail("");
    setPass("")
  }

  return(
    <>
      <h1>Controlled Component</h1>
      <p>We have to get the value before submit button</p>
      <form action="" method="get">
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <br/>
        <button onClick={()=>clickHandler}>Clear</button>
        <br/>
        
      </form>
      <br/>
      <ul style={{textAlign: "left"}}>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Password: {pass}</li>
      </ul>
    </> 
  )
}

export default App;