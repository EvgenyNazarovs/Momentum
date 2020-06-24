import React, {useState, useEffect} from 'react';
import PlaySpace from './components/PlaySpace';
import NavBar from './components/NavBar'
import './App.css'
import { diveWithin } from './presets/diveWithin'
import { diveWithout } from './presets/diveWithout'

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [preset, setPreset] = useState(diveWithout)
  const [presetName, setPresetName] = useState('diveWithout')
  const [type, setType] = useState('circle')

  const setDiveWithin = () => {
    setPresetName('diveWithin')
    setType('circle')
    setPreset(diveWithin);
  }

  const setDiveWithout = () => {
    setPresetName('diveWithout')
    setType('square')
    setPreset(diveWithout);
  }

  if (!isPlaying) {
    return (
    <div>
    <NavBar setDiveWithin={setDiveWithin} setDiveWithout={setDiveWithout}/>
    <div className="landingPage">
    <p className="landingPage-text">This app lets you experience sound and vision through your movement. You can play different sounds by hovering your nose over shapes on the screen.</p>
    <p className="landingPage-subtext">For best results, use the latest version of Google Chrome and wear headphones.</p>
    <button className="landingPage-button" onClick={() => setIsPlaying(true)}>Start</button>
    </div>
    </div>
  )
}

  return (
    <div>
    <NavBar setDiveWithin={setDiveWithin} setDiveWithout={setDiveWithout}/>
    <PlaySpace preset={preset} presetName={presetName} type={type}/>
    </div>
  )
}

export default App;
