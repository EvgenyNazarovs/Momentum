import React, { useRef, useState, useEffect } from "react";
import { drawSquaresAndTrackMovements } from '../utils/squares.js'
import { calculateScale } from '../utils/canvas.js'
import '../App.css'

const SquareCanvas = ({nose,
                 width,
                 height,
                 presetName,
                 play,
                 preset:
                 { type,
                   shapeCoordinates,
                   backgroundSound,
                   pattern,
                   colour,
                   sounds
                   }}) => {

  const canvasRef = useRef();
  const [widthScale, heightScale] = calculateScale(width, height)
  const scaledSquareCoordinates = shapeCoordinates.map(([s1,s2,s3,s4]) => {
    return [s1 * widthScale, s2 * heightScale, s3 * widthScale, s4 * heightScale]
  })

  useEffect(() => {
    if (nose.length === 0) return () => {}

    const ctx = canvasRef.current.getContext('2d');

    backgroundSound.play()



    drawSquaresAndTrackMovements(ctx, width, height, scaledSquareCoordinates, colour, sounds, nose, pattern)


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
