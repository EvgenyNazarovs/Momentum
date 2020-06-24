import { calculateScale } from './canvas.js'

export function drawSquaresAndTrackMovements(ctx, width, height, squareCoordinates, style, sounds, bodyPart, pattern) {
  const img = new Image();
  img.src = pattern;
  let patrn = ctx.createPattern(img, 'repeat')
  ctx.clearRect(0, 0, 1000, 1000);
  ctx.clearRect(0, 0, width, height);

  drawSquares(squareCoordinates, style, ctx, patrn);
  trackMovementsAgainstSquares(squareCoordinates, style, ctx, bodyPart, sounds)

}

function drawSquares(squareCoordinates, style, ctx, patrn) {
  squareCoordinates.forEach(([s1,s2,s3,s4], index) => {
    ctx.fillStyle = style[0]
    ctx.fillRect(s1, s2, s3, s4)
  })

  squareCoordinates.forEach(([s1,s2,s3,s4], index) => {
    ctx.fillStyle = patrn
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
