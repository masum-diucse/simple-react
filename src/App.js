import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fakeData from './fakeData/fakeData.json';
import { useState } from 'react';
import { useEffect } from 'react';
import Player from './Component/Player/Player';
import Playercart from './Component/Playercart/Playercart';
import './App.css';

function App() {
  const [players,setPlayers]=useState([]);
  useEffect(()=>{setPlayers(fakeData)},[]);
  const [playercart,setPlayercart]=useState([]);

  const handleAddPlayer=(player)=>{
      const newPlayercart=[...playercart,player];
      setPlayercart(newPlayercart);
  }

  return (
    <div className="container mt-3 d-flex">
    <div className="player-container">
        {
          players.map(player=><Player 
            key={player.id}
            player={player}
            handleAddPlayer={handleAddPlayer}
            ></Player>)
        }
    </div>
    <div className="player-cart-container">
      <Playercart playercart={playercart}></Playercart>
    </div>
    </div>
  );
}

export default App;
