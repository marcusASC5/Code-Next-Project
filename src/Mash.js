import React from "react";

function hide(){
  var x = document.getElementById("mid");
  var y = document.getElementById("mash");
  var z = document.getElementById("input");
  x.style.display = "none";
  y.style.display = "none";
  z.value = "";
}
export const Mash = () => {
  return Mash();
}

export const Reset = () => {
  return <button onClick={hide}>Clear Entry</button>
}