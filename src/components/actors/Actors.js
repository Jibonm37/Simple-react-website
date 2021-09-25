import React, { useEffect, useState } from 'react';
import Actor from '../actor/Actor';
import Cart from '../cart/Cart';
import'./Actor.css'

const Actors = () => {
    const [casts, setCasts]=useState([])
    const [cart,setCart]=useState([])
    // const [cart, setCart] =useState([])
    useEffect(()=>{
        fetch('./Data.json')
        .then(res => res.json())
        .then(data => setCasts(data))
    },[])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
     }
    return (
        <div className ="actors-area">
            <div className='actor-container'>
                {
                    casts.map(actor=><Actor
                    key ={actor.name}
                    actor ={actor}
                    handleAddToCart={handleAddToCart}
                    
                    ></Actor>)
                }
                
            </div>
            <div className='cart-area'>
                    <Cart cart ={cart}></Cart>
                </div>
        </div>
    );
};

export default Actors;