import { useTransition } from "react";

const App = () => {

  const [pending, startTransition] = useTransition();

  const buttonHandler = () => {
    startTransition(async()=>{
      await new Promise(res => setTimeout(res, 3000))
    })
  }
  
  return(
    <>
      <h1>useTransition Hook</h1>
      {
        pending && <img style={{width: "100px"}} src="src\assets\Loading_icon.gif"/>
      }
      <button disabled={pending} onClick={buttonHandler}>Click</button>
    </>
  )
}

export default App;