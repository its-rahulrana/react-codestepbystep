import {useState, useEffect} from 'react';

function App(){

  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  const [clockColor, setClockColor] = useState("blue");


  useEffect(()=>{
    setInterval(()=>{
      setClock(new Date().toLocaleTimeString())
    }, 1000)
  })

  return(
    <>
      <h1>Props Task</h1>
      <p style={{margin: "50px", background: clockColor, width:"200px", padding: "10px", borderRadius: "10px", fontSize: "30px", color:"black"}}>{clock}</p>

      <select onChange={(e)=>setClockColor(e.target.value)} style={{width: "200px", padding:"5px"}}>
        <option value="Blue">Blue</option>
        <option value="Orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
      </select>
    </>
  )
}

export default App;