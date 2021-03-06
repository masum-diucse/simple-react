import React from 'react';
import './Playercart.css';
const Playercart = (props) => {
    const playerCartArray=props.playercart;
    const totalBudget=playerCartArray.reduce((total,player)=>total+player.price,0);
    return (
        <div className="">
            <h2>Team Member: {playerCartArray.length}</h2>
            <ol>
                {
                    playerCartArray.map(player=><li>{player.name}- {player.price} Taka</li>)
                }
            </ol>
            <h3>Total Budget:{totalBudget} Taka</h3>
        </div>
    );
};

export default Playercart;