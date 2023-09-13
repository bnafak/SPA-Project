/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      // .then(data=>console.log(data))
      .then((data) => setAllActors(data));
  }, []);
  console.log(allActors);
  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
        {
            allActors.map(actor => (
                <div className="card">
                <div className="card-img">
                <img className="photo" src="crest.png" alt="" />
                </div>
                <h2>Barun Nafak</h2>
                <p><small>Lorem, ipsum dolor sit amet    consectetur adipisicing elit.Reiciendis, veniam.</small>
                </p>
                <div className="info">
                    <p>Salary:200</p>
                    <p>Writter</p>
                </div>
                <button className="card-btn">Select</button>
          </div>
            ))
        }
        </div>
      </div>

      <div className="cart">
        <h1>This is a Cart</h1>
      </div>
    </div>
  );
};

export default Home;
