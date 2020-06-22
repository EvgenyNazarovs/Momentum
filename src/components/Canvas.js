import React, { useRef, useState, useEffect } from "react";
import backgroundSounds from '../sounds/background.mp3'
import cNote from '../sounds/CNote.mp3'
import gNote from '../sounds/GNote.mp3'
import aNote from '../sounds/ANote.mp3'
import dNote from '../sounds/DNote.mp3'
import { prepareCanvasWithSquares, calculateAudioCoordinates, trackSquares } from '../utils/squares.js'
import { prepareCanvasCircles, calculateDistance, trackCircles, calculateCircleScale} from '../utils/circles.js'
import '../App.css'
import cartographer from './cartographer.png'

const squareCoordinates = [
  [90, 40, 280, 280],
  [620, 40, 280, 280],
  [90, 350, 280, 280],
  [620, 350, 280, 280]
]

const circleCoordinates = [
    [ 330, 160, 120 ],
    [ 680, 160, 120 ],
    [ 220, 420, 120 ],
    [ 790, 420, 120 ]
]

const squareColour = 'rgba(255, 192, 283, 0.5)'
const circleColour = 'rgba(201, 152, 36, 0.9)'

const Canvas = ({nose, width, height}) => {
  const canvasRef = useRef();
  const circleScales = calculateCircleScale(width, height, circleCoordinates[0]);



  useEffect(() => {
    if (nose.length === 0) return () => {}
    const backgroundSounds = document.getElementById("background-sounds");
    backgroundSounds.play()
    const cNote = document.getElementById("c-note");
    const gNote = document.getElementById("g-note");
    const dNote = document.getElementById("d-note");
    const aNote = document.getElementById("a-note");

    const notes = [cNote, gNote, dNote, aNote];

    const img = new Image();
    img.src = cartographer;

    const ctx = canvasRef.current.getContext('2d');
    prepareCanvasCircles(img, ctx, circleScales, circleCoordinates, circleColour)
    trackCircles(circleCoordinates, notes, nose);



  }, [nose])

  return (
    <div className="audioCanvas">
    <audio id="background-sounds" src={backgroundSounds}></audio>
    <audio id="c-note" src={cNote}></audio>
    <audio id="g-note" src={gNote}></audio>
    <audio id="d-note" src={dNote}></audio>
    <audio id="a-note" src={aNote}></audio>
    <canvas

      ref={canvasRef}
      width={width}
      height={height}
      >

      </canvas>

    </div>
  )

}

export default Canvas
