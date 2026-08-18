import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

const App = () => {
  const [sub, setSub] = useState();

  return (
    <>
      <h1>Context API</h1>
      <select defaultValue="Select Options" onChange={e => setSub(e.target.value)}>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Science">Science</option>
      </select>
      <SubjectContext.Provider value={sub}>
        <College/>
      </SubjectContext.Provider>
    </>
  )
}

export default App;