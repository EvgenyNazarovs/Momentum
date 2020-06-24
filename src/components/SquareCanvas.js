import React, { useRef, useState, useEffect } from "react";
import { prepareCanvasWithSquares, calculateAudioCoordinates, trackSquares } from '../utils/squares.js'
import '../App.css'


const SquareCanvas = ({
                        nose,
                        width,
                        height,
                        presetName,
                        play,
                        preset:
                      {
                        type,
                        shapeCoordinates,
                        backgroundSound,
                        colour,
                        sounds
                      }}) => {

  const canvasRef = useRef();

  useEffect(() => {
    if (nose.length === 0) return () => {}

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
