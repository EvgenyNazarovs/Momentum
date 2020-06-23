import cartographer from './assets/cartographer.png'
import jingleC from './sounds/jingleC.mp3'
import jingleF from './sounds/jingleF.mp3'
import jingleG from './sounds/jingleG.mp3'
import jingleC2 from './sounds/jingleC2.mp3'
import backgroundnew from './sounds/backgroundnew.mp3'



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
  sounds: {
    jingleC: new Audio(jingleC),
    jingleF: new Audio(jingleF),
    jingleG: new Audio(jingleG),
    jingleC2: new Audio(jingleC2)
  },
  backgroundSound: new Audio(backgroundnew)
}

// export const diveWithout = {
//   type: 'circle',
//   shapeCoordinates: [
//       [ 330, 160, 120 ],
//       [ 680, 160, 120 ],
//       [ 220, 420, 120 ],
//       [ 790, 420, 120 ]
//   ],
//   colour: 'rgba(255, 195, 113, 0.8)',
//   pattern: cartographer
//
// }



export const diveWithout = {
  type: 'square',
  shapeCoordinates: [
    [90, 40, 280, 280],
     [620, 40, 280, 280],
     [90, 350, 280, 280],
     [620, 350, 280, 280]
  ],
  colour: 'rgba(255, 195, 113, 0.8)'
}
