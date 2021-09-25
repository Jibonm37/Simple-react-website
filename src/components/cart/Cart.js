import React from 'react';
import'./Cart.css'

const Cart = (props) => {
    const {cart}=props
    console.log(cart)
   
     
    let total=0;
    for(const actor of cart){
        total = total + actor.salary;
   
    }
    const granTotal = total;
    
    return (
        <div className='cart-div'>
            <h1>Cart </h1>
            <div>
                <h2>Total Hired: {props.cart.length}  </h2>
            <h3>
                Name:{}
            </h3>
            <h4>Salary:  </h4>
            </div>
            <h5>Total: {granTotal}</h5>
           
        </div>
    );
};

export default Cart;