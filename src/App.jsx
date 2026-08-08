import { useEffect, useState } from "react";


function App(){
  
  const [sum, setSum] = useState(0);

  function consoleRender (){
    console.log("Function Called!")
  }

  useEffect(()=>{
    consoleRender()
  },[]);

  return(
    <>
      <h1>useEffect: Call only once</h1>
      <button onClick={()=>setSum(sum+1)}>Counter</button>
      <h3>{sum}</h3>
    </>
  )
}

export default App;