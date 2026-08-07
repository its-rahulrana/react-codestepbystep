import User from "./User";


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
    <h1>Reuse Component in Loop</h1>
      {
        user.map((item, index)=>(
          <User user={item} key={index}/>
        ))
      }
    </>
  )
}

export default App;