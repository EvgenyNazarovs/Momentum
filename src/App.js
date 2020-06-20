import React, {useState, useEffect} from 'react';
import PoseNet from './components/PoseNet'
import './App.css';
import synthC from './assets/SynthC.mp3'
import synthC2 from './assets/SynthC2.mp3'
import synthE from './assets/SynthE.mp3'
import synthG from './assets/SynthG.mp3'

function App() {
  const [posesString, setPosesString] = useState([])



  useEffect(() => {
    const synthCNote = document.getElementById("synthC");
    const synthENote = document.getElementById("synthE");
    const synthGNote = document.getElementById("synthG");
    const synthC2Note = document.getElementById("synthC2");


  if (posesString.length !== 0) {
      if (posesString[0].part === 'nose') {
        let noseX = posesString[0].position.x;
        let noseY = posesString[0].position.y

        if (noseX > 50 && noseX < 250 && noseY > 50 && noseY < 250) {
            synthCNote.play()
        } else if (noseX > 740 && noseX < 940 && noseY > 50 && noseY < 250) {
            synthENote.play()
        } else if (noseX > 50 && noseX < 250 && noseY > 450 && noseY < 650) {
            synthGNote.play()
        } else if (noseX > 740 && noseX < 940 && noseY > 450 && noseY < 650) {
          synthC2Note.play()
        }
      }
    }}, [posesString])


  return (
    <div className="App">
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



    </div>
  );
}

export default App;
