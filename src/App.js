import React, {useState, useEffect, useRef} from 'react';
import PoseNet from './components/PoseNet'
import './App.css';
import NavBar from './components/NavBar.js'
import backgroundSounds from './sounds/background.mp3'
import cNote from './sounds/CNote.mp3'
import gNote from './sounds/GNote.mp3'
import aNote from './sounds/ANote.mp3'
import dNote from './sounds/DNote.mp3'
import useInputImage from "./hooks/useInputImage"
import { Drawer } from '@material-ui/core';


function App() {
  const [posesString, setPosesString] = useState([])


const canvasRef = useRef(null)

  useEffect(() => {

      const canvas = canvasRef.current
      const ctx2 = canvas.getContext('2d')
      ctx2.fillStyle = 'green'
        ctx2.fillRect(150, 40, 280, 280)


    const backgroundSounds = document.getElementById("background-sounds");
    backgroundSounds.play()
    const cNote = document.getElementById("c-note");
    const gNote = document.getElementById("g-note");
    const dNote = document.getElementById("d-note");
    const aNote = document.getElementById("a-note");


  if (posesString.length !== 0) {
      if (posesString[0].part === 'nose') {
        const noseX = posesString[0].position.x;
        const noseY = posesString[0].position.y

        if (noseX > 50 && noseX < 250 && noseY > 50 && noseY < 250) {
            cNote.play()
        } else if (noseX > 740 && noseX < 940 && noseY > 50 && noseY < 250) {
            gNote.play()
        } else if (noseX > 50 && noseX < 250 && noseY > 450 && noseY < 650) {
            dNote.play()
        } else if (noseX > 740 && noseX < 940 && noseY > 450 && noseY < 650) {
          aNote.play()
        }
      }
    }}, [posesString])


  return (
    <div className="App">
    <NavBar/>
    <PoseNet
      inferenceConfig={{ decodingMethod: "single-person" }}
      onEstimate={poses => {
            if (poses.length !== 0) setPosesString(poses[0].keypoints)
      }}
    />
    <audio id="background-sounds" src={backgroundSounds}></audio>
    <audio id="c-note" src={cNote}></audio>
    <audio id="g-note" src={gNote}></audio>
    <audio id="d-note" src={dNote}></audio>
    <audio id="a-note" src={aNote}></audio>

    <canvas

        width={window.innerWidth-300}
        height={window.innerHeight}
        ref={canvasRef}
        ></canvas>


    </div>
  );
}

export default App;
