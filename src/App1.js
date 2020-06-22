import React, {useState, useEffect, useRef} from 'react';
import PoseNet from './components/PoseNet'
import NavBar from './components/NavBar'
// import backgroundSounds from './sounds/background.mp3'
// import cNote from './sounds/CNote.mp3'
// import gNote from './sounds/GNote.mp3'
// import aNote from './sounds/ANote.mp3'
// import dNote from './sounds/DNote.mp3'
// import useInputImage from './hooks/useInputImage'
import Canvas from './components/Canvas.js'

function App(

) {
  const width = window.innerWidth - 300;
  const height = window.innerHeight;
  const [keypoints, setKeypoints] = useState([])
  const [nose, setNose] = useState([])

  useEffect(() => {
    if (keypoints.length !== 0 && keypoints[0].part === 'nose') {
      setNose(keypoints[0]);
    }
  }, [keypoints])




  return (
    <div className="App">
      <NavBar/>
      <PoseNet
        inferenceConfig={{ decodingMethod: "single-person" }}
        onEstimate={poses => {
              if (poses.length !== 0) setKeypoints(poses[0].keypoints)
        }} />
      <Canvas nose={nose}
              width={width}
              height={height}/>
    </div>
  )
}

export default App;
