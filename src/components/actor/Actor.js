import React from 'react';
import './Actor.css'

const Actor = (props) => {
    const {name,img,cast,salary,age}=props.actor;
    return (
        <div className='actor-body'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1>Name: {name}</h1>
                <h3>Age:{age}</h3>
                <h2>Cast:{cast} </h2>
                <h5>Salary{salary}</h5>
            </div>
        </div>
    );
};

export default Actor;