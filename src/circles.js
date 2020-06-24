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

  if (posesString.length !== 0) {
    if (posesString[0].part === 'nose') {

      circleCoordinates.forEach(circle => monitorCircleDistance(circle, posesString[0].part.position))

      function monitorCircleDistance([circleX, circleY, circleR], {x: noseX, y: noseY}) {
        const distance = calculateDistance([circleX, circleY], noseX, noseY);
        if (distance < circleR) cNote.play();
      }
    }
      if (noseX > f.lowX && noseX < f.highX && noseY > f.lowY && noseY < f.highY) {
          cNote.play()
          console.log('upper right corner');
      } else if (noseX > s.lowX && noseX < s.highX && noseY > s.lowY && noseY < s.highY) {
          gNote.play()
          console.log('upper left corner');
      } else if (noseX > t.lowX && noseX < t.highX && noseY > t.lowY && noseY < t.highY) {
          dNote.play()
          console.log('lower right corner');
      } else if (noseX > frth.lowX && noseX < frth.highX && noseY > frth.lowY && noseY < frth.highY) {
        aNote.play()
        console.log('lower left corner');
      }
    }
  }}, [posesString])
