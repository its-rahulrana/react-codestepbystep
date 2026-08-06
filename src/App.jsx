import { useState } from "react";
import Counter from "./Counter";

function App() {

  const [fruit, setFruit] = useState("Rahul");

  return (
    <>
      <h3>My name is {fruit}!</h3>

      <br/>
      <button onClick={() => setFruit("Amit")} style={{width:"300px"}}>Change Name</button>
      <br/>
      <br/>
      <br/>

      <Counter/>
    </>
  );
}

export default App;