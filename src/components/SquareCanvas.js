import React, { useRef, useState, useEffect } from "react";
import bass from '../sounds/diveWithout/bass.mp3'
import danceBackground from '../sounds/diveWithout/dance-background.mp3'
import percussion from '../sounds/diveWithout/percussion.mp3'
import sfx1 from '../sounds/diveWithout/sfx1.mp3'
import sfx2 from '../sounds/diveWithout/sfx2.mp3'
import { prepareCanvasWithSquares, calculateAudioCoordinates, trackSquares } from '../utils/squares.js'
import '../App.css'

const SquareCanvas = ({nose,
                 width,
                 height,
                 presetName,
                 preset:
                 { type,
                   shapeCoordinates,
                   colour
                   }}) => {

  const canvasRef = useRef();

  useEffect(() => {
    if (nose.length === 0) return () => {}

    const bass = document.getElementById("bass");
    const percussion = document.getElementById("percussion");
    const sfx1 = document.getElementById("sfx1");
    const sfx2 = document.getElementById("sfx2");
    const danceBackground = document.getElementById("danceBackground");

    const ctx = canvasRef.current.getContext('2d');



    danceBackground.play()



    const sounds = [bass, percussion, sfx1, sfx2];

    prepareCanvasWithSquares(ctx, width, height, shapeCoordinates, colour)
    const coordinates = calculateAudioCoordinates(width, height, shapeCoordinates);
    trackSquares(coordinates, sounds, nose);


  }, [nose])

  return (
    <div>

    <audio id="bass" src={bass}></audio>
    <audio id="danceBackground" src={danceBackground}></audio>
    <audio id="percussion" src={percussion}></audio>
    <audio id="sfx1" src={sfx1}></audio>
    <audio id="sfx2" src={sfx2}></audio>

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

export default SquareCanvas;
