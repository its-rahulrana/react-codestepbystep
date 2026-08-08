import { useEffect, useState } from "react";


function App(){
  
  const [sum, setSum] = useState(0);
  const [sub, setSub] = useState(100);

  function consoleRender (){
    console.log("Function Called!")
  }

  useEffect(()=>{
    consoleRender()
  },[sum, sub]);

  return(
    <>
      <h1>useEffect: Call on changing both state</h1>
      <button onClick={()=>setSum(sum+1)}>Counter</button>
      <h3>{sum}</h3>
      <br/>
      <button onClick={()=>setSub(sub-1)}>Reducer</button>
      <h3>{sub}</h3>
    </>
  )
}

export default App;