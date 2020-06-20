import React, {useState, useEffect} from 'react';
import PoseNet from './components/PoseNet'
import './App.css';
<<<<<<< HEAD
import synthC from './assets/SynthC.mp3'
import synthC2 from './assets/SynthC2.mp3'
import synthE from './assets/SynthE.mp3'
import synthG from './assets/SynthG.mp3'
=======
import NavBar from './components/NavBar.js'
import backgroundSounds from './sounds/background.mp3'
import cNote from './sounds/CNote.mp3'
import gNote from './sounds/GNote.mp3'
import aNote from './sounds/ANote.mp3'
import dNote from './sounds/DNote.mp3'
>>>>>>> 30049d934de294fcec290b64e73ac6f3d03388eb

function App() {
  const [posesString, setPosesString] = useState([])

  useEffect(() => {
<<<<<<< HEAD
    const synthCNote = document.getElementById("synthC");
    const synthENote = document.getElementById("synthE");
    const synthGNote = document.getElementById("synthG");
    const synthC2Note = document.getElementById("synthC2");

=======
    const backgroundSounds = document.getElementById("background-sounds");
    backgroundSounds.play()
    const cNote = document.getElementById("c-note");
    const gNote = document.getElementById("g-note");
    const dNote = document.getElementById("d-note");
    const aNote = document.getElementById("a-note");
>>>>>>> 30049d934de294fcec290b64e73ac6f3d03388eb

  if (posesString.length !== 0) {
      if (posesString[0].part === 'nose') {
        let noseX = posesString[0].position.x;
        let noseY = posesString[0].position.y

        if (noseX > 50 && noseX < 250 && noseY > 50 && noseY < 250) {
<<<<<<< HEAD
            synthCNote.play()
        } else if (noseX > 740 && noseX < 940 && noseY > 50 && noseY < 250) {
            synthENote.play()
        } else if (noseX > 50 && noseX < 250 && noseY > 450 && noseY < 650) {
            synthGNote.play()
        } else if (noseX > 740 && noseX < 940 && noseY > 450 && noseY < 650) {
          synthC2Note.play()
=======
          console.log('youre in the frame')
          cNote.play()
        } else {
          console.log('now youre not.');
          gNote.play()
>>>>>>> 30049d934de294fcec290b64e73ac6f3d03388eb
        }
      }
    }}, [posesString])


  return (
    <div className="App">
<<<<<<< HEAD
  <PoseNet
    inferenceConfig={{ decodingMethod: "single-person" }}
    onEstimate={poses => {
          if (poses.length !== 0) setPosesString(poses[0].keypoints)
    }}
  />

  <audio id="synthC" src={synthC}></audio>
  <audio id="synthE" src={synthE}></audio>
  <audio id="synthG" src={synthG}></audio>
  <audio id="synthC2" src={synthC2}></audio>



=======
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
>>>>>>> 30049d934de294fcec290b64e73ac6f3d03388eb
    </div>
  );
}

export default App;
