import React from "react";

export const Mash = () => {
  const homes = ["Mansion", "Apartment", "Shack", "House", "Condo", "Dump", "Trailer"];
  const cars = ["Lamborghini", "Convertible", "Mercedes", "Box with Wheels", "Invisible Boatmobile", "Maserati", "Ferrari", "Nissan", "Toyota"]
  function Mash(){
    return "You will live in a(n) "+ getHouse() + ", and have "+ getChildrenCount() + " kids. You'll drive a(n) "+ getCar() +", and you'll make $"+ getSalary() +" annually."
  };

  function getHouse(){
    if(query > homes.length){
      query - homes.length;
    }
    return homes[query];
  }

  function getChildrenCount(){
    return Math.floor(Math.random()*6);
  }

  function getCar(){
    if(query > cars.length){
      query - cars.length;
    }
    return cars[query];
  }

  function getSalary(){
    return Math.floor(Math.random(1000)*1000001);
  }
  console.log(Mash());
  return Mash();

}