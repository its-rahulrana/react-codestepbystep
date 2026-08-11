import { useRef } from "react";
import UserInput from "./UserInput";

const App = () => {

  const inputRef = useRef();

  const inputRefHandler = () => {
    inputRef.current.focus(),
    inputRef.current.value = "12345",
    inputRef.current.style.color = "blue",
    inputRef.current.style.width = "400px"
  }
  
  return(
    <>
      <h1>frowardRef</h1>
      <UserInput ref={inputRef}/>
      <button onClick={inputRefHandler}>Click Here</button>
    </>
  )
}

export default App;