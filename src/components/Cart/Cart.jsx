/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({selectedActors}) => {
    console.log(selectedActors);
    return (
        <div>
            <h1>This is Cart</h1>
         {selectedActors.map((actor) =>(
         <li>{actor.name}</li>
         ))}
        </div>
    );
};

export default Cart;