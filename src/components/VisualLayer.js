import React, {useEffect, useRef} from 'react';
import backgroundSounds from '../sounds/background.mp3'
import cNote from '../sounds/CNote.mp3'
import gNote from '../sounds/GNote.mp3'
import aNote from '../sounds/ANote.mp3'
import dNote from '../sounds/DNote.mp3'


const VisualLayer = ({keypoints}) => {
  const canvasRef = useRef()

  useEffect(() => {

    const ctx = canvasRef.current.getContext("2d")
    ctx.clearRect(0,0,window.innerWidth-300,window.innerHeight);

    ctx.fillStyle = 'rgba(255, 192, 283, 0.5)'
    ctx.fillRect(90, 40, 280, 280) //upper left box
    ctx.fillRect(620, 40, 280, 280) //uppper right box
    ctx.fillRect(90, 350, 280, 280) // lower left box
    ctx.fillRect(620, 350, 280, 280) //lower right box


    const backgroundSounds = document.getElementById("background-sounds");
    backgroundSounds.play()
    const cNote = document.getElementById("c-note");
    const gNote = document.getElementById("g-note");
    const dNote = document.getElementById("d-note");
    const aNote = document.getElementById("a-note");


  if (keypoints && keypoints.length !== 0) {
      if (keypoints[0].part === 'nose') {
        const noseX = keypoints[0].position.x;
        const noseY = keypoints[0].position.y

        if (noseX > 50 && noseX < 250 && noseY > 50 && noseY < 250) {
            cNote.play()
            console.log('playing')
        } else if (noseX > 740 && noseX < 940 && noseY > 50 && noseY < 250) {
            gNote.play()
        } else if (noseX > 50 && noseX < 250 && noseY > 450 && noseY < 650) {
            dNote.play()
        } else if (noseX > 740 && noseX < 940 && noseY > 450 && noseY < 650) {
            aNote.play()
        }
      }
    }}, [keypoints])


  return (
    <div>

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
  )
}

export default VisualLayer;
