// export function prepareCanvasCircles(img, ctx, width, height, circleCoordinates, colour) {
//   const [xScale, yScale, rScale] = calculateCircleScale(width, height, circleCoordinates[0]);
//   console.log(xScale, yScale, rScale);
//
//   const patrn = ctx.createPattern(img, 'repeat');
//
//
//   circleCoordinates.forEach(([x, y, r]) => {
//     ctx.fillStyle = colour;
//     const newCircle = new Path2D();
//     newCircle.arc(x, y, r, 0, 2 * Math.PI)
//     ctx.fill(newCircle);
//     ctx.fillStyle = patrn;
//     ctx.fill(newCircle);
//   })
// }
//
// export function calculateDistance([circleX, circleY], noseX, noseY) {
//   const dX = circleX - noseX;
//   const dY = circleY - noseY;
//   return Math.sqrt((dX*dX) + (dY*dY));
// }
//
// function calculateScale(width, height) {
//   if (width === 980 && height === 674) {
//     return [1, 1]
//   } else {
//     const widthScale = (width / 980).toFixed(2);
//     const heightScale = (height / 674).toFixed(2)
//     return [widthScale, heightScale];
//   }
// }
//
//
//
//   function calculateRadiusRatio(x, y, xScale, yScale) {
//     const initialDistance = Math.sqrt((x * x) + (y * y));
//     const newX = x * xScale;
//     const newY = y * yScale;
//     const newDistance = Math.sqrt((newX*newX) + (newY+newY));
//
//     return newDistance / initialDistance;
//   }

  // export function monitorCircleDistance([circleX, circleY, circleR], {x: noseX, y: noseY}) {
  //   const distance = calculateDistance([circleX, circleY], noseX, noseY);
  //   if (distance < circleR) cNote.play();
  // }
