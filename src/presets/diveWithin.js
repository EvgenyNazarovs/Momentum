import cartographer from '../assets/cartographer.png'
import jingleC from '../sounds/jingleC.mp3'
import jingleF from '../sounds/jingleF.mp3'
import jingleG from '../sounds/jingleG.mp3'
import jingleC2 from '../sounds/jingleC2.mp3'
import backgroundnew from '../sounds/backgroundnew.mp3'

export const diveWithin = {
  type: 'circle',
  shapeCoordinates: [
    [ 330, 160, 120 ],
    [ 680, 160, 120 ],
    [ 220, 420, 120 ],
    [ 790, 420, 120 ]
  ],
  colour: 'rgba(255, 95, 109, 0.8)',
  pattern: cartographer,
  sounds: [
    new Audio(jingleC),
    new Audio(jingleG),
    new Audio(jingleF),
    new Audio (jingleC2)
  ],
  backgroundSound: new Audio(backgroundnew)
}
