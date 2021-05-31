import React from "react";

export const Mash = () => {
  function Mash(){
    return "You will live in a(n) "+ getHouse() + ", and have "+ getChildrenCount() + " kids. You'll drive a(n) "+ getCar() +", and you'll make $"+ getSalary() +" annually."
  };

  console.log(Mash());
  return Mash();

}