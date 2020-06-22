function calculateDistance() {
  const firstCircle = {
    x: 495,
    y: 200,
    r: 165
  }

  const nose = { x, y }

  const dX = firstCircle.x - nose.x;
  const dY = firstCircle.y - nose.y;
  const dist = Math.sqrt((dX*dX) + (dY*dY));

  if (dist < firstCircle.r) return 'you crossed the circle';

}



function calculateRatio(xScale, yScale) {
  const initialDistance = Math.sqrt((300*300) + (150*150));
  const newX = 300*xScale;
  const newY = 150*yScale;
  const newDistance = Math.sqrt((newX*newX) + (newY*newY));

  const radiusScale = newDistance / initialDistance;
  const newRadius = 130 * radiusScale;
  return newRadius;
}

console.log(calculateRatio(2, 1.8));
