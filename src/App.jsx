import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 26,
    address: {
      city: "Mumbai",
      state: "Maharashtra",
      country: "India"
    }
  });

  const handleName = name => {
    user.name = name;
    setUser({...user});
  }

  const handleCity = city => {
    let data = user;
    data.address.city = city;
    setUser({...data});
  }

  return(
    <>
      <h1>Updating Object in React</h1>
      <div>
        <input onChange={e => handleName(e.target.value)} type="text" placeholder="Update Name"/>
        <br/>
        <br/>
        <input onChange={e => handleCity(e.target.value)} type="text" placeholder="Update City"/>
        <hr/>
        <h3>Name: {user.name}</h3>
        <h3>Age: {user.age}</h3>
        <h3>City: {user.address.city}</h3>
      </div>
    </>
  )
}

export default App;