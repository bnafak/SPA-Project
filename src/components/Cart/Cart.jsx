/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({selectedActors}) => {
    console.log(selectedActors);
    return (
        <div>
            <h5>Total actors:{selectedActors.length}</h5>
            <h1>This is Cart</h1>
         {selectedActors.map((actor) =>(
         <li key={actor.id}>{actor.name}</li>
         ))}
        </div>
    );
};

export default Cart;