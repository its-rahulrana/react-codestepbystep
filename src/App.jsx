
import React, { useState } from "react";

function App(){
  return(
    <>
      <h1>Hello, React!</h1>
      <Fruit />
      <p>Price is {sum()}</p>
    </>
  )
}

function Fruit (){
  return(
    <h3>Apple is a delicious fruit!</h3>
  )
}

function sum(){
  return(20+34)
}
export default App;