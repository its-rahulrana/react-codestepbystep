import Login, { Profile, Setting, Msg } from './UserComponent';

function App(){
  return(
    <>
      <h1>Hello, React!</h1>
      <Login />
      <Profile />
      <Setting />
      <p>{Msg}</p>
    </>
  )
}

export default App;