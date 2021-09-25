import React from 'react';
import './Actor.css'

const Actor = (props) => {
    const {name,img,cast,salary,age}=props.actor;
    return (
        <div className='actor-body'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='details'>
                <h1>Name: {name}</h1>
                <h2>Cast: {cast} </h2>
                <h3>Age: {age}</h3>
               
                <h5>Salary: {salary}</h5>
                <button className='btn'
                onClick={() => props.handleAddToCart(props.actor)}
                >Hire</button>
            </div>
        </div>
    );
};

export default Actor;