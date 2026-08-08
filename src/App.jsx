import { useState } from "react";
import Counter from "./Counter";


function App(){
  
  const [sum, setSum] = useState(0);
  const [sub, setSub] = useState(100);

  return(
    <>
      <h1>useEffect: Call on changes props</h1>
      <button onClick={()=>setSum(sum+1)}>Counter</button>
      <br/>
      <button onClick={()=>setSub(sub-1)}>Reducer</button>
      <br/>
      <Counter sum={sum} sub={sub}/>
    </>
  )
}

export default App;