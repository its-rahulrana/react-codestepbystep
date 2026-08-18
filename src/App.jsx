import useToggle from "./useToggle";

const App = () => {

  const [value, toggleValue] = useToggle(true);
  const [data, setData] = useToggle(true);

  return(
    <>
      <h1>Custome Hooks</h1>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={()=>toggleValue(true)}>Show</button>
      <button onClick={()=>toggleValue(false)}>Hide</button>
      {
        value && <h3>Heading 3 tag for show/hide toggle</h3>
      }

      <br/>
      <br/>
      <div>
        <button onClick={setData}>Toggle</button>
      <button onClick={()=>setData(true)}>Show</button>
      <button onClick={()=>setData(false)}>Hide</button>
      {
        data && <h3>Using different name with same useToggle Hook</h3>
      }
      </div>
    </>
  )
}

export default App;