import { useState } from "react";


function App(){
  
  const [sum, setSum] = useState(0);

  function consoleRender (){
    console.log("Function Called!")
  }

  consoleRender();
  
  return(
    <>
      <h1>useEffect: Call every time</h1>
      <button onClick={()=>setSum(sum+1)}>Counter</button>
      <h3>{sum}</h3>
    </>
  )
}

export default App;