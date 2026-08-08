import College from "./College";


function App(){

  const collegeData = [
    {
      name: "IIT",
      city: "Delhi",
      course: "MBA",
      students: [
        {
          name: "Rahul",
          rollNo: 102,
          email: "rahul@iit.com"
        },
        {
          name: "Abhishek",
          rollNo: 103,
          email: "abhishek@iit.com"
        },
        {
          name: "Uday",
          rollNo: 102,
          email: "uday@iit.com"
        },
        {
          name: "Chandan",
          rollNo: 102,
          email: "chandan@iit.com"
        },
      ]
    },
    {
      name: "BHU",
      city: "Lucknow",
      course: "Fine Arts",
      students: [
        {
          name: "Uday",
          rollNo: 2301,
          email: "uday@bhu.com"
        },
        {
          name: "Chandan",
          rollNo: 2302,
          email: "chandan@bhu.com"
        },
        {
          name: "Rahul",
          rollNo: 2303,
          email: "rahul@bhu.com"
        },
        {
          name: "Abhishek",
          rollNo: 2304,
          email: "abhishek@bhu.com"
        }
      ]
    },
    {
      name: "SMU",
      city: "Amritsar",
      course: "B. Tech",
      students: [
        {
          name: "Chandan",
          rollNo: 1100,
          email: "chandan@smu.com"
        },
        {
          name: "Rahul",
          rollNo: 1101,
          email: "rahul@smu.com"
        },
        {
          name: "Uday",
          rollNo: 1102,
          email: "uday@smu.com"
        },
        {
          name: "Abhishek",
          rollNo: 1103,
          email: "abhishek@smu.com"
        }
      ]
    },
    {
      name: "AIIMS",
      city: "Jabalpur",
      course: "Medical Science",
      students: [
        {
          name: "Uday",
          rollNo: 11302,
          email: "uday@aiims.com"
        },
        {
          name: "Abhishek",
          rollNo: 11303,
          email: "abhishek@aiims.com"
        },
        {
          name: "Chandan",
          rollNo: 11302,
          email: "chandan@aiims.com"
        },
        {
          name: "Rahul",
          rollNo: 11302,
          email: "rahul@aiims.com"
        }
      ]
    }
  ]
  return(
    <>
      <h1>Array Nested Looping with Component</h1>
      {
        collegeData.map((item, index)=>(
          <College key={index} college={item}/>
        ))
      }
    </>
  )
}

export default App;