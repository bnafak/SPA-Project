/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({selectedActors, remaining, totalCost}) => {
    console.log(selectedActors);
    return (
        <div>
            <h3>Total actors:{selectedActors.length}</h3>
            {/* <h1>This is Cart</h1> */}
            <h4>Remaining:{remaining}</h4>
            <h4>Total cost:{totalCost}</h4>
         {selectedActors.map((actor) =>(
         <li key={actor.id}>{actor.name}</li>
         ))}
        </div>
    );
};

export default Cart;