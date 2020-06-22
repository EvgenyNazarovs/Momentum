import { calculateScale } from './canvas.js'

export function prepareCanvasCircles(img, ctx, [xScale, yScale, rScale], circleCoordinates, colour) {
  console.log('XScale: ', xScale);
  console.log('YScale: ', yScale);
  console.log('RScale: ', rScale);

  const patrn = ctx.createPattern(img, 'repeat');


  circleCoordinates.forEach(([x, y, r]) => {
    ctx.fillStyle = colour;
    const newCircle = new Path2D();
    newCircle.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fill(newCircle);
    ctx.fillStyle = patrn;
    ctx.fill(newCircle);
  })
}

export function calculateDistance([circleX, circleY], noseX, noseY) {
  const dX = circleX - noseX;
  const dY = circleY - noseY;
  return Math.sqrt((dX*dX) + (dY*dY));
}

function calculateRadiusRatio(x, y, xScale, yScale) {
  const initialDistance = Math.sqrt((x * x) + (y * y));
  const newX = x * xScale;
  const newY = y * yScale;
  const newDistance = Math.sqrt((newX*newX) + (newY+newY));

  return newDistance / initialDistance;
}

export function trackCircles(circleCoordinates, notes, bodyPart) {
  const { x: partX, y: partY } = bodyPart.position;

  circleCoordinates.forEach(([cX, cY, cR], index) => {
    const dist = calculateDistance([cX, cY], partX, partY);
    if (dist < cR) notes[index].play();
  })
}

export function calculateCircleScale(width, height, [x, y]) {
  const [xScale, yScale] = calculateScale(width, height);
  const rScale = calculateRadiusRatio(x, y, xScale, yScale);
  return [xScale, yScale, rScale];
}
