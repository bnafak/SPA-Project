/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  const handleSelectActor =(actor)=> {
    const isExist = selectedActors.find((item) => item.id==actor.id);

    if(isExist){
     return alert('already booked')
    }
    else{
      setSelectedActors([...selectedActors, actor]);
    }

  }
 
  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
        {
            allActors.map(actor => (
                <div key={actor.id} className="card">
                <div className="card-img">
                <img className="photo" src={actor.image} alt="" />
                </div>
                <h2>Name: {actor.name}</h2>
                <p><small>Lorem, ipsum dolor sit amet    consectetur adipisicing elit.Reiciendis, veniam.</small>
                </p>
                <div className="info">
                    <p>{actor.salary}</p>
                    <p>{actor.role}</p>
                </div>
                <button onClick={() =>handleSelectActor(actor)} className="card-btn">Select</button>
          </div>
            ))
        }
        </div>
      </div>

      <div className="cart">
       <Cart selectedActors={selectedActors}></Cart>
      </div>
    </div>
  );
};

export default Home;
