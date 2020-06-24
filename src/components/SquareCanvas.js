import React, { useRef, useState, useEffect } from "react";
import { drawSquaresAndTrackMovements } from '../utils/squares.js'
import { calculateScale } from '../utils/canvas.js'
import '../App.css'

const colours = [
  "RGB(203,58,254,0.8",
  "rgba(190,96,124,0.8)",
  "rgba(100,134,185,0.8)",
  "rgba(173,171,196,0.8)"
]

const SquareCanvas = ({nose,
                 width,
                 height,
                 presetName,
                 play,
                 preset:
                 { type,
                   sounds,
                   shapeCoordinates,
                   backgroundSound,
                   colour
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

    drawSquaresAndTrackMovements(ctx, width, height, scaledSquareCoordinates, colour, sounds, nose)

    // prepareCanvasWithSquares(ctx, width, height, shapeCoordinates, colour)
    // const coordinates = calculateAudioCoordinates(width, height, shapeCoordinates);
    // trackSquares(coordinates, sounds, nose, shapeCoordinates, ctx, width, height, colours);

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
