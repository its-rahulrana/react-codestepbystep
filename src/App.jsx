import { useActionState } from "react";

const App = () => {

  const submitHandler = async(previousData, formData) => {
    let name = formData.get('name');
    let password = formData.get('pass')
    
    await new Promise (res => setTimeout(res,2000))
    console.log(name, password)

    if(name && password){
      return {message: "Data Submitted", name, password}
    } else {
      return {error: "Failed to submit, Enter proper data"}
    }
  }

  const [data, action, pending] = useActionState(submitHandler, undefined);
  
  return(
    <>
      <h1>useActionState Hook</h1>
      <form action={action}>
        <input type="text" placeholder="User Name" name="name"/>
        <br/>
        <br/>
        <input type="password" placeholder="Enter Password" name="pass"/>
        <br/>
        <br/>
        <button disabled={pending}>Submit</button>
        <br/>
        {
          data?.error && <span style={{color: "red"}}>{data.error}</span>
        }
        {
          data?.message && <span style={{color: "green"}}>{data.message}</span>
        }
      </form>
      <h3>Name: {data?.name}</h3>
      <h3>Password: {data?.password}</h3>
    </>
  )
};

export default App;