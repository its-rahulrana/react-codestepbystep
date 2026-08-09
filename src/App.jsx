import { useState } from "react";


function App(){

  const [cardStyle, setCardStyle] = useState({
    border: "1px solid grey",
    width: "300px",
    boxShadow: "1px white",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: ""
  });

  const [blockDisplay, setBlockDisplay] = useState("flex");

  const themeHandler = () => {
    cardStyle.backgroundColor === ""?
    setCardStyle({...cardStyle, backgroundColor:"#ffabab", color:"rgb(0, 46, 92)"}): cardStyle.backgroundColor === "#ffabab"?
    setCardStyle({...cardStyle, backgroundColor: "rgb(149, 202, 255)", color:"rgb(187, 0, 0)"}):
    setCardStyle({...cardStyle, backgroundColor:"", color:""})
  }

  return(
    <>
      <h1>Inline Style</h1>
      <button onClick={themeHandler}>Theme</button>
        <button onClick={()=>blockDisplay === "flex" ?setBlockDisplay("block"):setBlockDisplay("flex")}>Boxing</button>
      <div style={{display:blockDisplay, flexWrap: "wrap"}}>
        <div style={cardStyle}>
          <img src="src\assets\hero.png" style={{width:"250px"}}/>
          <div>
            <h3>Rahul Kumar</h3>
            <p>Inline style in react.js</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img src="src\assets\hero.png" style={{width:"250px"}}/>
          <div>
            <h3>Rahul Kumar</h3>
            <p>Inline style in react.js</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img src="src\assets\hero.png" style={{width:"250px"}}/>
          <div>
            <h3>Rahul Kumar</h3>
            <p>Inline style in react.js</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img src="src\assets\hero.png" style={{width:"250px"}}/>
          <div>
            <h3>Rahul Kumar</h3>
            <p>Inline style in react.js</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img src="src\assets\hero.png" style={{width:"250px"}}/>
          <div>
            <h3>Rahul Kumar</h3>
            <p>Inline style in react.js</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img src="src\assets\hero.png" style={{width:"250px"}}/>
          <div>
            <h3>Rahul Kumar</h3>
            <p>Inline style in react.js</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img src="src\assets\hero.png" style={{width:"250px"}}/>
          <div>
            <h3>Rahul Kumar</h3>
            <p>Inline style in react.js</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img src="src\assets\hero.png" style={{width:"250px"}}/>
          <div>
            <h3>Rahul Kumar</h3>
            <p>Inline style in react.js</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img src="src\assets\hero.png" style={{width:"250px"}}/>
          <div>
            <h3>Rahul Kumar</h3>
            <p>Inline style in react.js</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img src="src\assets\hero.png" style={{width:"250px"}}/>
          <div>
            <h3>Rahul Kumar</h3>
            <p>Inline style in react.js</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img src="src\assets\hero.png" style={{width:"250px"}}/>
          <div>
            <h3>Rahul Kumar</h3>
            <p>Inline style in react.js</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;