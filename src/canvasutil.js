function calculateScale(width, height) {
  if (width === 980 && height === 674) {
    return [1, 1]
  } else {
    const widthScale = (width / 980).toFixed(2);
    const heightScale = (height / 674).toFixed(2)
    return [widthScale, heightScale];
  }
}

const squareCoordinates = [
  [90, 40, 280, 280],
  [620, 40, 280, 280],
  [90, 350, 280, 280],
  [620, 350, 280, 280]
]

const circleCoordinates = [
  [495, 200, 165],
  [905, 200, 165],
  [300, 530, 165],
  [1100, 530, 165]
]

function prepareCanvasCircles(img, ctx, width, height, circleCoordinates, colour) {
  const [xScale, yScale] = calculateScale(width, height);
  const [x, y] = circleCoordinates[0]
  const rScale = calculateRadiusRatio(x, y, xScale, yScale);

  const patrn = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = colour;

  circleCoordinates.forEach(([x, y, r]) => {
    const newCircle = new Path2D();
    newCircle.arc(x * xScale, y * yScale, r * rScale, 0, 2 * Math.PI)
    ctx.fill(newCircle);
    ctx.fillStyle = patrn;
    ctx.fill(newCircle);
  })
}


function calculateRadiusRatio(x, y, xScale, yScale) {
  const initialDistance = Math.sqrt((x * x) + (y * y));
  const newX = x * xScale;
  const newY = y * yScale;
  const newDistance = Math.sqrt((newX*newX) + (newY+newY));

  return newDistance / initialDistance;
}

function calculateDistance([circleX, circleY], noseX, noseY) {
  const dX = circleX - noseX;
  const dY = circleY - noseY;
  return Math.sqrt((dX*dX) + (dY*dY));
}

function calculateAudioCoordinatesForCircles(width, height, circleCoordinates) {
  const [xScale, yScale] = calculateScale(width, height);
  const [x, y] = circleCoordinates[0]
  const rScale = calculateRadiusRatio(x, y, xScale, yScale);
}
