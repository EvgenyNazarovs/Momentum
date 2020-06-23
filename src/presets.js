import cartographer from './assets/cartographer.png'

export const diveWithin = {
  type: 'circle',
  shapeCoordinates: [
      [ 330, 160, 120 ],
      [ 680, 160, 120 ],
      [ 220, 420, 120 ],
      [ 790, 420, 120 ]
  ],
  colour: 'rgba(255, 95, 109, 0.8)',
  pattern: cartographer
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
      [ 400, 160, 120 ],
      [ 450, 160, 120 ],
      [ 290, 420, 120 ],
      [ 860, 420, 120 ]
      // [ 460, 420, 120 ]
  ],
  colour: 'rgba(255, 195, 113, 0.8)',
  pattern: cartographer
}
