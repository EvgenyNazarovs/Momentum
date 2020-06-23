import React, {useState} from 'react';
import PlaySpace from './components/PlaySpace';
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isPlaying) {
    return (
    <div>
    <NavBar/>
    <div className="landingPage">
    <p>This app lets you experience your movement through sound and vision. For best results, use the latest version of Google Chrome and wear headphones.</p>
    <button onClick={() => setIsPlaying(true)}>Start the experience</button>
    </div>
    </div>
  )
}

  return (
    <div>
    <NavBar/>
    <PlaySpace/>
    </div>
  )
}

export default App;
