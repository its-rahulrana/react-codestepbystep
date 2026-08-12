import { useState } from "react";

const App = () => {

  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState();

  const addHandler = () => {
    setUsers([...users, userName]);
  }

  const totalUser = users.length;
  const lastUser = users[users.length-1];
  const uniqueUser = [...new Set(users)].length;

  return(
    <>
      <h1>Derived State in React</h1>
      <h3>Total User : {totalUser} </h3>
      <h3>Last User : {lastUser}</h3>
      <h3>Unique User : {uniqueUser}</h3>
      <hr/>
      <div>
        <input value={userName} onChange={(e)=>setUserName(e.target.value)} type="text"/>
        <button onClick={addHandler}>Add User</button>
      </div>
      <hr/>
      {
        users.map((item, index) => (
          <h5 key={index}>{item}</h5>
        ))
      }
    </>
  )
}

export default App;