import { useState } from "react";
import User from "./User";
import Student from "./Student";

function App() {

  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    city: "New York"
  };

  const userData2 = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    city: "Los Angeles"
  };

  const userData3 = {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    city: "Chicago"
  };


  const [studentName, setStudentName] = useState("");

  return(
    <>
      <h1>Props (Pass data between components)</h1>
      <User userData={userData} />
      <User userData={userData2} />
      <User userData={userData3} />

      <button onClick={() => setStudentName("Abhishek Tripathi")} style={{width: "100px", margin: "10px", padding: "10px", borderRadius: "20px", backgroundColor: "#007bff", color: "white"}}>
        Show Student Name
      </button>
      {studentName && <Student name={studentName} />}
    </>
  )
}

export default App;