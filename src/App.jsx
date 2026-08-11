import { useFormStatus } from "react-dom";

const App = () => {

  const submitHandler = async () => {
    await new Promise(res => setTimeout(res, 2000));
    console.log("Submit");
  }

  const CustomForm = () => {
    const {pending} = useFormStatus()
    console.log(pending);

    return(
      <div>
          <input type="text"/>
          <br/>
          <input type="password"/>
          <br/>
          <button disabled={pending}>{pending?'Submitting...':"Submit"}</button>
        </div>
    )
  }

  return (
    <>
      <h1>useFormStatus Hook in React JS</h1>
      <form action={submitHandler}>
        <CustomForm/>
      </form>
    </>
  )
}

export default App;
