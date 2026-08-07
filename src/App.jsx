import { useState } from "react";

function App(){

  const [skills, setSkills] = useState([]);

  const changeHandler = (event) =>{
    if (event.target.checked){
      setSkills([...skills, event.target.value])
    }else{
      setSkills(skills.filter((item)=>(item != event.target.value)))
    }
  } 

  return(
    <>
      <div>
        <h1>Handle Checkbox in React</h1>
        <div style={{textAlign: "left", border: "1px solid grey", borderRadius: "10px", padding: "20px"}}>
          <input onChange={changeHandler} type="checkbox" id="react" value="React"/>
          <label htmlFor="react"> React </label>
          <br/>
          <input onChange={changeHandler} type="checkbox" id="node" value="Node"/>
          <label htmlFor="node"> Node </label>
          <br/>
          <input onChange={changeHandler} type="checkbox" id="js" value="JavaScript"/>
          <label htmlFor="js"> JavaScript </label>
          <br/>
          <input onChange={changeHandler} type="checkbox" id="bootstrap" value="Boot-Strap"/>
          <label htmlFor="bootstrap"> Boot-Strap </label>
        </div>
        <h3>{skills}</h3>
      </div>
    </>
  )
}

export default App;