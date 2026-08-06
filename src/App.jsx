function App() {
  return (
    <>
      <h1>JSX Excercise</h1>
      <img src="src\assets\hero.png" alt="Hero" style={{ width: '100px', height: 'auto' }} />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Reherse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <button onClick={() => alert('Button clicked!')}>Click me!</button>
    </>
  );
}

export default App;