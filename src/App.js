import React, {useState} from "react";
import {Header} from "./Header";
import {Input} from "./Input";
import {Mash} from "./Mash";
import "./style.css";

  
export default function App() {
  const [query, setQuery] = useState('');

  const onInputChange = (query) => {
    setQuery(query);
  };

  const homes = ["Mansion", "Apartment", "Shack", "House", "Condo", "Dump", "Trailer"];
  const cars = ["Lamborghini", "Convertible", "Mercedes", "Box with Wheels", "Invisible Boatmobile", "Maserati", "Ferrari", "Nissan", "Toyota"]

  function Mash(){
    return "You will live in a(n) "+ getHouse() + ", and have "+ getChildrenCount() + " kids. You'll drive a(n) "+ getCar() +", and you'll make $"+ getSalary() +" annually."
  };

  function getHouse(){
    if(query > homes.length){
      query - homes.length;
      return homes[query];
    }
    return homes[query];
  }

  function getChildrenCount(){
    return Math.floor(Math.random()*6);
  }

  function getCar(){
    // if(query >= cars.length){
    //   // let value = query - cars.length;
    //   return cars[query];
    // }
    return cars[query];
  }

  function getSalary(){
    return Math.floor(Math.random(1000)*1000001);
  }

  return (
    <div>
      <Header />
      <p> What will your Magic Number be? </p>
      <Input value={query} onChange={onInputChange} />
      <br/>
      <Mash />
    </div>
  );
}
