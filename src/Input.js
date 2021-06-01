import React from "react";

function reveal(){
  var x = document.getElementById("mash");
   x.style.display = "block";
}
export const Input = (props) => {
  const onChange = (e) => {
    props.onChange(e.target.value);
  };
  return <input value={props.query} onChange={onChange} id="input" />;
}

export const Initialize = () => {
  return <button onClick={reveal}> Find Your Future! </button>
}