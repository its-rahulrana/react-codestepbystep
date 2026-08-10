import { Button } from "react-bootstrap";

function App(){
  
  return(
    <>
      <h1>Bootstrap with React</h1>
      <button>Normal Button</button>
      <br/>
      <Button>Bootstrap Button</Button>
      <br/>
      <Button variant="success">Bootstrap button with variant: success</Button>
    </>
  )
}

export default App;