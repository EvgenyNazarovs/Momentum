import React, {useState, useEffect, useRef} from 'react';
import PoseNet from './PoseNet'
import NavBar from './NavBar'
import backgroundSounds from '../sounds/background.mp3'
import cNote from '../sounds/CNote.mp3'
import gNote from '../sounds/GNote.mp3'
import aNote from '../sounds/ANote.mp3'
import dNote from '../sounds/DNote.mp3'
import backgroundnew from '../sounds/backgroundnew.mp3'
import jingleC from '../sounds/jingleC.mp3'
import jingleF from '../sounds/jingleF.mp3'
import jingleG from '../sounds/jingleG.mp3'
import jingleC2 from '../sounds/jingleC2.mp3'
import Canvas from './Canvas.js'
import {diveWithin, diveWithout} from '../presets.js'

//   shapeCoordinates: [
//       [ 330, 160, 120 ],
//       [ 680, 160, 120 ],
//       [ 220, 420, 120 ],
//       [ 790, 420, 120 ]
//   ],
//   colour: 'rgba(255, 95, 109, 0.8)',
//   pattern: cartographer
// }

function PlaySpace(
  {
    preset,
  presetName
}

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
      <PoseNet
        inferenceConfig={{ decodingMethod: "single-person" }}
        onEstimate={poses => {
              if (poses.length !== 0) setKeypoints(poses[0].keypoints)
        }} />
      <Canvas nose={nose}
              width={width}
              height={height}
              preset={preset}
              presetName={presetName}
              />
    </div>
  )
}

export default PlaySpace;
