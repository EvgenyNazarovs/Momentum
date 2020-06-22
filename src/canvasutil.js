function calculateScale(width, height) {
  if (width === 980 && height === 674) {
    return [1, 1]
  } else {
    const widthScale = (width / 980).toFixed(2);
    const heightScale = (height / 674).toFixed(2)
    return [widthScale, heightScale];
  }
}

export function prepareCanvasWithSquares(ctx, width, height, squareCoordinates, style) {
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

const squareCoordinates = [
  [90, 40, 280, 280],
  [620, 40, 280, 280],
  [90, 350, 280, 280],
  [620, 350, 280, 280]
]









//
//
//   const firstShape = {
//     lowX: 90 * widthScale,
//     highX: (90+280) * widthScale,
//     lowY: 40 * heightScale,
//     highY: (40+280) * heightScale
//   }
//
//   const secondShape = {
//     lowX: 620 * widthScale,
//     highX: (620+280) * widthScale,
//     lowY: 40 * heightScale,
//     highY: (40+280) * heightScale
//   }
//
//   const thirdShape = {
//     lowX: 90 * widthScale,
//     highX: (90+280) * widthScale,
//     lowY: 350 * heightScale,
//     highY: (350+280) * heightScale
//   }
//
//   const fourthShape = {
//     lowX: 620 * widthScale,
//     highX: (620+280) * widthScale,
//     lowY: 350 * heightScale,
//     highY: (350+280) * heightScale
//   }
//
//   return [firstShape, secondShape, thirdShape, fourthShape];
// }












// export function calculateCanvasCoordinates(width, height) {
//   const firstShape = [90 * widthScale, 40 * heightScale, 280 * widthScale, 280 * heightScale]
//   const secondShape = [620 * widthScale, 40 * heightScale, 280 * widthScale, 280 * heightScale]
//   const thirdShape = [90 * widthScale, 350 * heightScale, 280 * widthScale, 280 * heightScale]
//   const fourthShape = [620 * widthScale, 350 * heightScale, 280 * widthScale, 280 * heightScale]
//
//   return [firstShape, secondShape, thirdShape, fourthShape];
// }




// const [widthScale, heightScale] = calculateScale(1960, 1298);
// console.log('Width Scale: ', widthScale);
// console.log('Height Scale: ', heightScale);
//
//
// const [firstShape, secondShape, thirdShape, fourthShape] = calculateAudioCoordinates(1960, 1298)
// console.log('First Shape: ', firstShape);
// console.log('Second Shape: ', secondShape);
// console.log('Third Shape: ', thirdShape);
// console.log('Fourth Shape: ',  fourthShape);

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


//
// function calculateDistance() {
//   const firstCircle = {
//     x: 495,
//     y: 200,
//     r: 165
//   }
//
//   const nose = { x, y }
//
//   const dX = firstCircle.x - nose.x;
//   const dY = firstCircle.y - nose.y;
//   const dist = Math.sqrt((dX*dX) + (dY*dY));
//
//   if (dist < firstCircle.r) return 'you crossed the circle';
//
// }
