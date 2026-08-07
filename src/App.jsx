

function App(){

  const user = [
    {
      id: "101",
      name: "Rahul",
      email: "rahul@react.com",
      city: "Delhi"
    },
    {
      id: "102",
      name: "Amit",
      email: "amit@react.com",
      city: "Mumbai"
    },
    {
      id: "103",
      name: "Abhishek",
      email: "abhishek@react.com",
      city: "Gurgaon"
    },
    {
      id: "104",
      name: "Shivansh",
      email: "shivansh@react.com",
      city: "Patna"
    }
  ]

  return(
    <>
    <h1>Loop with Map Function</h1>
    <table style={{border: "1px solid grey", margin: "10px"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {
          user.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}

export default App;