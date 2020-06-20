import React, {useState, useEffect} from 'react';
import PoseNet from './components/PoseNet'
import './App.css';
import NavBar from './components/NavBar.js'

function App() {
  const [posesString, setPosesString] = useState([])



  useEffect(() => {


  if (posesString.length !== 0) {
      if (posesString[0].part === 'nose') {
        let noseX = posesString[0].position.x;
        let noseY = posesString[0].position.y

        if (noseX > 50 && noseX < 250 && noseY > 50 && noseY < 250) {
          console.log('youre in the frame')
        } else {
          console.log('now youre not.');
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
    </div>
  );
}

export default App;
