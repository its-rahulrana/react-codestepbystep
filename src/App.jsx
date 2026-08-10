import './assets/style.css';

function App(){

  return(
    <>
      <h1>External Style</h1>
        <div className="cardStyle">
          <img src="src\assets\hero.png" className="imgStyle"/>
          <div>
            <h3>Rahul Kumar</h3>
            <p>Inline style in react.js</p>
          </div>
        </div>
    </>
  )
}

export default App;