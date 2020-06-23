import React, { useRef, useState, useEffect } from "react";
import { prepareCanvasWithSquares, calculateAudioCoordinates, trackSquares } from '../utils/squares.js'
import '../App.css'

const SquareCanvas = ({nose,
                 width,
                 height,
                 presetName,
                 preset:
                 { type,
                   shapeCoordinates,
                   sounds,
                   backgroundSound,
                   colour
                   }}) => {

  const canvasRef = useRef();

  useEffect(() => {
    if (nose.length === 0) return () => {}

    

    const ctx = canvasRef.current.getContext('2d');





    backgroundSound.play()





    prepareCanvasWithSquares(ctx, width, height, shapeCoordinates, colour)
    const coordinates = calculateAudioCoordinates(width, height, shapeCoordinates);
    trackSquares(coordinates, sounds, nose);

    return () => {
      backgroundSound.pause()
      sounds.forEach(sound => sound.pause())
    }


  }, [nose])

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
