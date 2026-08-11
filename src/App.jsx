import User from "./User";

const App = () => {

  const userHandler = name => {
    alert(`Your name is : ${name}`)
  };

  return(
    <>
      <h1>Pass Function in Component as Props</h1>
      {/* <User userHandler = {userHandler}/> */}
      <User userHandler = {userHandler} name="Amit"/>
    </>
  )
}

export default App;