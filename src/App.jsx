import { useId } from "react";

const App = () => {
  return (
    <>
      <h1>useId Hook</h1>
      <UserForm/>
      <hr/>
      <UserForm/>
    </>
  )
}

export default App;

const UserForm = () => {
  const userId = useId();
  return(
    <form>
      <input type="text" id={userId+"name"} placeholder="Name"/>
      <br/>
      <br/>
      <input type="email" id={userId+"email"} placeholder="Email"/>
      <br/>
      <br/>
      <input type="password" id={userId+"pass"} placeholder="Password"/>
      <br/>
      <br/>
      <button>Submit</button>
    </form>
  )
}