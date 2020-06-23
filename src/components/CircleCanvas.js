import React, { useRef, useState, useEffect } from "react";

import backgroundnew from '../sounds/backgroundnew.mp3'
import jingleC from '../sounds/jingleC.mp3'
import jingleF from '../sounds/jingleF.mp3'
import jingleG from '../sounds/jingleG.mp3'
import jingleC2 from '../sounds/jingleC2.mp3'
import { prepareCanvasWithSquares, calculateAudioCoordinates, trackSquares } from '../utils/squares.js'
import { prepareCanvasCircles, calculateDistance, trackCircles, calculateCircleScale, draw } from '../utils/circles.js'
import '../App.css'
import cartographer from '../assets/cartographer.png'


// const squareColour = 'rgba(255, 192, 283, 0.5)'
// const circleColour = 'rgba(201, 152, 36, 0.5)'

const CircleCanvas = ({nose,
                 width,
                 height,
                 presetName,
                 preset:
                 { type,
                   shapeCoordinates,
                   colour,
                   pattern = "" }}) => {

  const canvasRef = useRef();







  useEffect(() => {
    if (nose.length === 0) return () => {}

    const backgroundnew = document.getElementById("backgroundnew");

    const cNote = document.getElementById("jingleC");
    const aNote = document.getElementById("jingleF");
    const gNote = document.getElementById("jingleG");
    const dNote = document.getElementById("jingleC2");

      const ctx = canvasRef.current.getContext('2d');




      // const ctx = canvasRef.current.getContext('2d');
      // ctx.clearRect(0, 0, canvasRef.width, canvasRef.height)
      // ctx.save();
      // ctx,setTransform(1, 0, 0, 1, 0, 0);


      // const backgroundnew = document.getElementById("backgroundnew");
      backgroundnew.play()


      const sounds = [cNote, aNote, gNote, dNote];

      const [xScale, yScale, rScale] = calculateCircleScale(width, height, shapeCoordinates[0]);
      const updatedCircleCoordinates = shapeCoordinates.map(([x, y, r]) => {
        return [x * xScale, y * yScale, r * rScale]
      })
      trackCircles(updatedCircleCoordinates, sounds, nose);
      draw(ctx, nose, updatedCircleCoordinates, sounds, pattern, colour);






  }, [nose, type])

  return (
    <div className="audioCanvas">


    <audio id="backgroundnew" src={backgroundnew}></audio>
    <audio id="jingleC" src={jingleC}></audio>
    <audio id="jingleF" src={jingleF}></audio>
    <audio id="jingleG" src={jingleG}></audio>
    <audio id="jingleC2" src={jingleC2}></audio>



    <canvas
      id="canvas"
      ref={canvasRef}
      width={width}
      height={height}
      >

      </canvas>

    </div>
  )

}

export default CircleCanvas
