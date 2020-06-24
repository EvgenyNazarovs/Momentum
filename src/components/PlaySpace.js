import React, { useState, useEffect, useRef } from 'react';
import PoseNet from './PoseNet'
import NavBar from './NavBar'
import { diveWithin } from '../presets/diveWithin'
import { diveWithout } from '../presets/diveWithout'
import CircleCanvas from './CircleCanvas.js'
import SquareCanvas from './SquareCanvas.js'


function PlaySpace(
  {
    preset,
    type
  }) {
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
        onEstimate={ poses => {
          if (poses.length !== 0) setKeypoints(poses[0].keypoints)
        }}
      />
        {type === 'square' ? (
          <SquareCanvas nose={nose}
                        width={width}
                        height={height}
                        preset={diveWithout}
                        play={type === 'square' ? true : false}
          />
                    ) : (
          <CircleCanvas nose={nose}
                        width={width}
                        height={height}
                        preset={diveWithin}
                        play={type === 'circle' ? true : false}
          />
        )}
    </div>
  )
}

export default PlaySpace;
