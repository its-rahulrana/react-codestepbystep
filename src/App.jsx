import { useRef } from "react";

function App(){
  
  const inputRef = useRef(null);
  const paraRef = useRef();

  const inputHandler = () =>{
    inputRef.current.focus();
    inputRef.current.style.color = 'red';
    inputRef.current.value = "12345"
  }

  const handleToggle = () => {
    inputRef.current.style.display === 'none'?
    inputRef.current.style.display = 'inline':
    inputRef.current.style.display = 'none'
  }

  const paraHandler = () => {
    paraRef.current.style.color = 'skyblue';
    paraRef.current.style.padding = '20px';
    paraRef.current.style.backgroundColor = 'yellow'
  }

  return(
    <>
      <h1>useRef Hook</h1>
      <div style={{width: "100%"}}>
        <button onClick={handleToggle}>Toggle</button>
        <input ref={inputRef} type="text" />
        <button onClick={inputHandler}>Focus on Input</button>
      </div>
      <br/>
      <br/>
      <button onClick={paraHandler} style={{width:"200px"}}>Paragraph Button</button>
      <p ref={paraRef}>This a sentence to check Paragraph refrence.</p>
    </>
  )
}

export default App;