import React from 'react';
import'./Cart.css'

const Cart = (props) => {
    const {cart}=props
     
    
    for(const actor of cart){
      let actorName =actor.name ;
      let salary = actor.salary;
    console.log(actor)
    }
    
    
    return (
        <div className='cart-div'>
            <h1>Cart </h1>
            <div>
                <h2>Total Hired: {props.cart.length}  </h2>
            <h3>
                Name:{}
            </h3>
            <h4>Salary: {props.cart.salary} </h4>
            </div>
           
        </div>
    );
};

export default Cart;