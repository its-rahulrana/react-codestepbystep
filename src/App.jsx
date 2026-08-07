import { useState } from "react";


function App(){
  const [gender, setGender] = useState();
  const [city, setCity] = useState();

  return(
    <>
      <h1>Handle Radio Button & Dropdown</h1>
      <div style={{textAlign:"left", border: "1px solid green", margin: "10px", padding:" 20px", borderRadius: "10px"}}>
        <h3>Radio Button</h3>
        <h4>Gender: {gender}</h4>
        <input onChange={(e)=>setGender(e.target.value)} type="radio" name="gender" value="Male"/>
        <label htmlFor="male">Male</label>
        <input onChange={(e)=>setGender(e.target.value)} type="radio" name="gender" value="Female"/>
        <label htmlFor="female">Female</label>
      </div>
      <div style={{textAlign:"left", border: "1px solid green", margin: "10px", padding:" 20px", borderRadius: "10px"}}>
        <h3>Dropdown List</h3>
        <h4>City: {city}</h4>
        <select onChange={(e)=>(setCity(e.target.value))} defaultValue="Noida">
          <option value="Delhi">Delhi</option>
          <option value="Gurgaon">Gurgaon</option>
          <option value="Faridabad">Faridabad</option>
          <option value="Noida">Noida</option>
        </select>
      </div>
    </>
  )
}

export default App;