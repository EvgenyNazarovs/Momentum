import React from 'react';
import styling from '../App.css';
import { Link, Route, Switch } from 'react-router-dom'
import { diveWithin, diveWithout } from '../presets.js'
import Canvas from './Canvas'

const NavBar = ({ setDiveWithin, setDiveWithout }) => {
  console.log(setDiveWithin);

  const handleDiveWithin = () => {
    setDiveWithin();
  }

  const handleDiveWithout = () => {
    setDiveWithout();
  }





  return(
    <div className="nav-bar">
      <h1 id="nav-title">Momentum</h1>

      <div id="nav-icons">
      <button onClick={handleDiveWithin} >
        <img id="nav-yoga-icon" width="130px" src="https://www.minorsan.com/wp-content/uploads/2015/04/yoga.png" alt=""/></button>
        <button onClick={handleDiveWithout} >
        <img  id="nav-dance-icon" width="125px" src="https://www.materialui.co/materialIcons/hardware/speaker_white_192x192.png" alt=""/></button>

      </div>
      <div id="best-hp">
        <p id="hp-text">best with</p>
        <img id="hp-icon" width="50px" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a32f693c-bcf5-4c71-8858-7be1aaf0867e/d6189x3-fb8eb1fd-d417-4ab1-bd30-5baff35ae933.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9hMzJmNjkzYy1iY2Y1LTRjNzEtODg1OC03YmUxYWFmMDg2N2UvZDYxODl4My1mYjhlYjFmZC1kNDE3LTRhYjEtYmQzMC01YmFmZjM1YWU5MzMucG5nIn1dXX0.9tu_AaruiTzGHz38LdgAy19slkvwl1rokb52HaeE5eU" alt=""/>
      </div>
    </div>
  )
}

export default NavBar;
