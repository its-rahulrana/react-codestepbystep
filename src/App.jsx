import { useState } from "react";
import Toggle from "./Toggle";

function App() {
  const [show, setShow] = useState(true);
  return(
    <>
      <h1>Toggler (Hide/Show) </h1>
      <button onClick={() => setShow(!show)} style={{ padding: "10px", margin: "10px", width: "100px" }}>Toggle</button>
      {
        show && <Toggle />
        // show? <Toggle /> : null
      }
    </>
  )
}

export default App;