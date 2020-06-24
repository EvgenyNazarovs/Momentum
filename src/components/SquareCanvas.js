import React, { useRef, useState, useEffect } from "react";
import { prepareCanvasWithSquares, calculateAudioCoordinates, trackSquares } from '../utils/squares.js'
import '../App.css'
import bass from '../sounds/diveWithout/bass.mp3'
import danceBackground from '../sounds/diveWithout/dance-background.mp3'
import percussion from '../sounds/diveWithout/percussion.mp3'
import sfx1 from '../sounds/diveWithout/sfx1.mp3'
import sfx2 from '../sounds/diveWithout/sfx2.mp3'

const sounds = [
  new Audio(bass),
  new Audio(percussion),
  new Audio(sfx2),
  new Audio(sfx1)
]


const SquareCanvas = ({nose,
                 width,
                 height,
                 presetName,
                 play,
                 preset:
                 { type,
                   shapeCoordinates,
                   backgroundSound,
                   colour
                   }}) => {



  const canvasRef = useRef();


  useEffect(() => {
    if (nose.length === 0 || play === false) return () => {}

    const ctx = canvasRef.current.getContext('2d');

    backgroundSound.play()

    prepareCanvasWithSquares(ctx, width, height, shapeCoordinates, colour)
    const coordinates = calculateAudioCoordinates(width, height, shapeCoordinates);
    trackSquares(coordinates, sounds, nose);

  }, [nose])

  useEffect(() => {
    return () => {
      backgroundSound.pause()
      sounds.forEach(sound => sound.pause())
    }
  }, [play])

  return (
    <div>



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
