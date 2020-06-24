import { calculateScale } from './canvas.js'

export function drawSquaresAndTrackMovements(ctx, width, height, squareCoordinates, style, sounds, bodyPart) {

  ctx.clearRect(0, 0, 1000, 1000);
  ctx.clearRect(0, 0, width, height);


  drawSquares(squareCoordinates, style, ctx);
  trackMovementsAgainstSquares(squareCoordinates, style, ctx, bodyPart, sounds)
}

function drawSquares(squareCoordinates, style, ctx) {
  squareCoordinates.forEach(([s1,s2,s3,s4], index) => {
    ctx.fillStyle = style[0];
    ctx.fillRect(s1, s2, s3, s4)
  })
}

function trackMovementsAgainstSquares(squareCoordinates, style, ctx, bodyPart, sounds) {
  const { x: partX, y: partY } = bodyPart.position;
  squareCoordinates.forEach(([s1,s2,s3,s4], index) => {
    if (partX > s1 &&  partX < (s1 + s3) && partY > s2 && partY < (s2 + s4)) {
      sounds[index].play();
      ctx.fillStyle = style[1];
      ctx.fillRect(s1, s2, s3, s4)
  }
})
}


//
//
//   shapes.forEach(({lowX, highX, lowY, highY}, index) => {
//     if (partX > lowX && partX < highX && partY > lowY && partY < highY) {
//       notes[index].play();
//       ctx.fillStyle = colours[index]
//
//       ctx.fillRect(squareCoordinates[index][0] * widthScale,
//                    squareCoordinates[index][1] * heightScale,
//                    squareCoordinates[index][2] * widthScale,
//                    squareCoordinates[index][3] * heightScale
//                  )
//     }
//
// }
//
// const audioCoordinates = squareCoordinates.map(([s1, s2, s3, s4]) => {
//   return {
//     lowX: s1 * widthScale,
//     highX: (s1 + s3) * widthScale,
//     lowY: s2 * heightScale,
//     highY: (s2 + s4) * heightScale
//   }
//
//
// export function trackSquares(shapes, notes, bodyPart, squareCoordinates, ctx, width, height, colours) {
//   const { x: partX, y: partY } = bodyPart.position;
//     const [widthScale, heightScale] = calculateScale(width, height)
//
//
//   shapes.forEach(({lowX, highX, lowY, highY}, index) => {
//     if (partX > lowX && partX < highX && partY > lowY && partY < highY) {
//       notes[index].play();
//       ctx.fillStyle = colours[index]
//
//       ctx.fillRect(squareCoordinates[index][0] * widthScale,
//                    squareCoordinates[index][1] * heightScale,
//                    squareCoordinates[index][2] * widthScale,
//                    squareCoordinates[index][3] * heightScale
//                  )
//     }
//   })
//
//
//
//
//
//
//
//
// export function prepareCanvasWithSquares(ctx, width, height, squareCoordinates, style) {
//   ctx.clearRect(0, 0, 1000, 1000);
//   ctx.clearRect(0, 0, width, height);
//   const [widthScale, heightScale] = calculateScale(width, height);
//   ctx.fillStyle = style
//
//
//
// }
//
// export function calculateAudioCoordinates(width, height, squareCoordinates) {
//   const [widthScale, heightScale] = calculateScale(width, height)
//
//   const audioCoordinates = squareCoordinates.map(([s1, s2, s3, s4]) => {
//     return {
//       lowX: s1 * widthScale,
//       highX: (s1 + s3) * widthScale,
//       lowY: s2 * heightScale,
//       highY: (s2 + s4) * heightScale
//     }
//   })
//   return audioCoordinates;
// }
//
//
// export function trackSquares(shapes, notes, bodyPart, squareCoordinates, ctx, width, height, colours) {
//   const { x: partX, y: partY } = bodyPart.position;
//     const [widthScale, heightScale] = calculateScale(width, height)
//
//
//   shapes.forEach(({lowX, highX, lowY, highY}, index) => {
//     if (partX > lowX && partX < highX && partY > lowY && partY < highY) {
//       notes[index].play();
//       ctx.fillStyle = colours[index]
//
//       ctx.fillRect(squareCoordinates[index][0] * widthScale,
//                    squareCoordinates[index][1] * heightScale,
//                    squareCoordinates[index][2] * widthScale,
//                    squareCoordinates[index][3] * heightScale
//                  )
//     }
//   })
// }
