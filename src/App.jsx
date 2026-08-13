import { useState } from "react";

const App = () => {
  const [names, setNames] = useState(["John", "Michale", "Clark"]);

  const [users, setUsers] = useState([
    {name: "John", age: 23},
    {name: "Clark", age: 32},
    {name: "Sammual", age: 56},
    {name: "Peter", age: 19}
  ]);

  const handleName = name => {
    let data = names;
    data[data.length-1] = name;
    setNames([...data]);
  }

  const handleAge = age => {
    users[users.length-1].age = age;
    setUsers([...users]);
  }

  return(
    <>
      <h1>Updating Array</h1>
      <hr/>
      <div>
        <input onChange={e=>handleName(e.target.value)} type="text" placeholder="Update last name"/>
      {
        names.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))
      }
      </div>
      <br/>
      <br/>
      <hr/>
      <div>
        <input onChange={e => handleAge(e.target.value)} type="number" placeholder="Update last age"/>
      {
        users.map((item, index) => (
          <h3 key={index}>Name: {item.name}, Age: {item.age}</h3>
        ))
      }
      </div>
    </>
  )
}

export default App;