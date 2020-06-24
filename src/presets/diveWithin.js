import cartographer from '../assets/cartographer.png'
import jingleC from '../sounds/diveWithin/jingleC.mp3'
import jingleF from '../sounds/diveWithin/jingleF.mp3'
import jingleG from '../sounds/diveWithin/jingleG.mp3'
import jingleC2 from '../sounds/diveWithin/jingleC2.mp3'
import backgroundnew from '../sounds/diveWithin/backgroundnew.mp3'
import guitarpicking from '../sounds/diveWithin/guitarpicking.mp3'
import guitarstrumming from '../sounds/diveWithin/guitarstrumming.mp3'

export const diveWithin = {
  type: 'circle',
  shapeCoordinates: [
    [ 380, 125, 100 ],
    [ 600, 125, 100 ],
    [ 240, 335, 100 ],
    [ 730, 335, 100 ],
    [ 380, 545, 100 ],
    [ 600, 545, 100 ]
  ],
  colour: 'rgba(255, 95, 109, 0.8)',
  pattern: cartographer,
  sounds: [
    new Audio(jingleC),
    new Audio(jingleG),
    new Audio(jingleF),
    new Audio(jingleC2),
    new Audio(guitarpicking),
    new Audio(guitarstrumming)
  ],
  backgroundSound: new Audio(backgroundnew)
}
