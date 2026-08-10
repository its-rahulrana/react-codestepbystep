import styled from "styled-components";

function App(){

  const Heading3 = styled.h3`
  color: #aa0404;
  background-color: #8acbff;
  padding: 5px
  `

  return(
    <>
      <h1>Styled Component</h1>
      <h3>Normal heading 3</h3>
      <Heading3>This is heading 3 from styled component</Heading3>
    </>
  )
}

export default App;