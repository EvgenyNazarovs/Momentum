import React, {useState} from 'react';
import PlaySpace from './components/PlaySpace';
import NavBar from './components/NavBar'
import './App.css'
import { diveWithin, diveWithout } from './presets.js'

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [preset, setPreset] = useState(diveWithin)
  const [presetName, setPresetName] = useState('diveWithin')

  const setDiveWithin = () => {
    // this.forceUpdate();
    setPresetName('diveWithin')
    setPreset(diveWithin);
  }

  const setDiveWithout = () => {
    // this.forceUpdate();
    setPresetName('diveWithout')
    setPreset(diveWithout);
  }

  if (!isPlaying) {
    return (
    <div>
    <NavBar setDiveWithin={setDiveWithin} setDiveWithout={setDiveWithout}/>
    <div className="landingPage">
    <p className="landingPage-text">This app lets you experience your movement through sound and vision.</p>
    <p className="landingPage-subtext">For best results, use the latest version of Google Chrome and wear headphones.</p>
    <button className="landingPage-button" onClick={() => setIsPlaying(true)}>Start Experience</button>
    </div>
    </div>
  )
}

  return (
    <div>
    <NavBar setDiveWithin={setDiveWithin} setDiveWithout={setDiveWithout}/>
    <PlaySpace preset={preset} presetName={presetName}/>
    </div>
  )
}

export default App;
