import { calculateScale } from './canvas.js'


export function prepareCanvasWithSquares(ctx, width, height, squareCoordinates, style) {
  ctx.clearRect(0, 0, 1000, 1000);
  const [widthScale, heightScale] = calculateScale(width, height);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = style

  squareCoordinates.forEach(([s1,s2,s3,s4]) => {
    ctx.fillRect(s1 * widthScale, s2 * heightScale, s3 * widthScale, s4 * heightScale)
  })
}

export function calculateAudioCoordinates(width, height, squareCoordinates) {
  const [widthScale, heightScale] = calculateScale(width, height)

  const audioCoordinates = squareCoordinates.map(([s1, s2, s3, s4]) => {
    return {
      lowX: s1 * widthScale,
      highX: (s1 + s3) * widthScale,
      lowY: s2 * heightScale,
      highY: (s2 + s4) * heightScale
    }
  })
  return audioCoordinates;
}

export function trackSquares(shapes, notes, bodyPart) {
  const { x: partX, y: partY } = bodyPart.position;
  console.log(notes);
  console.log(partX, partY);
  console.log(shapes);

  shapes.forEach(({lowX, highX, lowY, highY}, index) => {
    if (partX > lowX && partX < highX && partY > lowY && partY < highY) {
      notes[index].play();
    }
  })
}
