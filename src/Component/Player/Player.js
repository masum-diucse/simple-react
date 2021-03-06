import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';
const Player = (props) => {
    const {name,email,address,price,image}=props.player;
    return (
        <div className="player">
            <div className="col-md-4">
                <img src={image} alt=""/>
                
            </div>
            <div className="col-md-8">
                <h3>{name}</h3>
                <h6>{address}</h6>
                <p>{email}</p>
                <h5>BDT {price} </h5>
                <button onClick={()=>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} /></button>
            </div>
            
        </div>
    );
};

export default Player;