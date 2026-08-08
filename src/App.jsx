import { useState } from "react";
import Counter from "./Counter";


function App(){
  
  const [sum, setSum] = useState(0);
  const [sub, setSub] = useState(100);
  const [display, setDisplay] = useState(true);

  return(
    <>
      <h1>Life Cycle method with useEffect</h1>
      <button onClick={()=>setSum(sum+1)}>Counter</button>
      <br/>
      <button onClick={()=>setSub(sub-1)}>Reducer</button>
      <br/>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {
        display?<Counter sum={sum} sub={sub}/>:null
      }
    </>
  )
}

export default App;