import User from "./User";
import Wrapper from "./Wrapper";

function App() {
  return(
    <>
      <h1>Wrapper and Default Props</h1>
      <User name="John" />
      <User />
      <User/>
      <User name="Rahul" />
      <hr/>
      <Wrapper/>
      <Wrapper>
        <ul>
          <li>This is a children component</li>
          <li>Passing name user component and default props</li>
          <li>Passing style color in Wrapper component</li>
        </ul>
      </Wrapper>
      <Wrapper color="yellow"/>
    </>
  )
}

export default App;