import React from "react";
import Button from 'react-bootstrap/Button';

function reveal(){
  var x = document.getElementById("mid");
  x.style.display = "block";
}

export const Header = () => {
  return <header >
    <h1>M.A.S.H.</h1>
    <p>Welcome to M.A.S.H., where you'll get to see your future!
    <br/>
    Ready to get started?</p>
    <button onClick={reveal}>Start</button>
  </header>
  
}