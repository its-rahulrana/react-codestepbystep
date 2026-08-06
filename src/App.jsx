function App() {

  function handleClick(name) {
    alert(name == "Apple"?"Fruit":"Animal");
  }

  
  return (
    <>
      <button onClick={() => handleClick("Apple")}>Apple</button>
      <br/>
      <button onClick={() => handleClick("Elephant")}>Elephant</button>
    </>
  );
}

export default App;