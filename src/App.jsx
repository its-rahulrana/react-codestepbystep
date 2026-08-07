import { useState } from "react";

function App(){
  const [val, setVal] = useState("");

  return(
    <>
      <h1>Input field and on change event</h1>
      <input value={val} onChange={(e)=>setVal(e.target.value)} type="text" style={{width: "200px", margin:"20px", padding: "10px"}}/>
      <button onClick={()=>setVal("")} style={{width: "200px", margin:"20px", padding: "10px"}}>Clear</button>
      <h3>{val}</h3>
    </> 
  )
}

export default App;