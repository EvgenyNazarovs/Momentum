import React, { useRef, useState, useEffect } from "react";
import { prepareCanvasWithSquares, calculateAudioCoordinates, trackSquares } from '../utils/squares.js'
import { prepareCanvasCircles, calculateDistance, trackCircles, calculateCircleScale, draw } from '../utils/circles.js'
import '../App.css'


const CircleCanvas = ({nose,
                 width,
                 height,
                 presetName,
                 play,
                 preset:
                 { type,
                   shapeCoordinates,
                   colour,
                   sounds,
                   backgroundSound,
                   pattern = "" }}) => {

  const canvasRef = useRef();





  useEffect(() => {
    console.log(play);
    if (nose.length === 0 ) return () => {}



      const ctx = canvasRef.current.getContext('2d');

      backgroundSound.play()

      const [xScale, yScale, rScale] = calculateCircleScale(width, height, shapeCoordinates[0]);
      const updatedCircleCoordinates = shapeCoordinates.map(([x, y, r]) => {
        return [x * xScale, y * yScale, r * rScale]
      })
      trackCircles(updatedCircleCoordinates, sounds, nose);
      draw(ctx, nose, updatedCircleCoordinates, sounds, pattern, colour);





  }, [nose])

  useEffect(() => {
    return () => {
      backgroundSound.pause()
      sounds.forEach(sound => sound.pause())
    }
  }, [play])

  return (
    <div className="audioCanvas">




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
