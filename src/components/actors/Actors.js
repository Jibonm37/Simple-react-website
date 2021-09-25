import React, { useEffect, useState } from 'react';
import Actor from '../actor/Actor';
import'./Actor.css'

const Actors = () => {
    const [casts, setCasts]=useState([])
    useEffect(()=>{
        fetch('./Data.json')
        .then(res => res.json())
        .then(data => setCasts(data))
    },[])
    return (
        <div className ="actors-area">
            <div className='actor-container'>
                {
                    casts.map(actor=><Actor
                    key ={actor.age}
                    actor ={actor}
                    
                    
                    ></Actor>)
                }
                <div className='cart-area'>
                    <h1>Cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Actors;