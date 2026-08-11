import { useRef } from "react";

const App = () => {
  const nameRef = useRef();
  const passRef = useRef();

  const formHandler = (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const pass = document.querySelector("#pass").value;

    console.log(`Name : ${name}, Password : ${pass}`);
  }

  const formHandlerRef = event => {
    event.preventDefault();
    
    const name = nameRef.current.value;
    const pass = passRef.current.value;

    console.log(`RefName : ${name}, RefPassword : ${pass}`);
  }

  return (
    <>
      <h1>Uncontrolled Component</h1>
      <div style={{border: "1px solid red", width:"300px", borderRadius: "10px", margin:"10px"}}>
        <h3>Documnet Method</h3>
        <form action="" method="post" onSubmit={formHandler}>
          <input type="text" id="name"/>
          <br/>
          <br/>
          <input type="password" id="pass"/>
          <br/>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <br/>
      <div style={{border: "1px solid red", width:"300px", borderRadius: "10px", margin:"10px"}}>
        <h3>useRef Method</h3>
        <form action="" method="post" onSubmit={formHandlerRef}>
          <input type="text" ref={nameRef}/>
          <br/>
          <br/>
          <input type="password" ref={passRef}/>
          <br/>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App; 