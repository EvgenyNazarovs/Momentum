import { calculateScale } from './canvas.js'


export function draw(ctx, bodyPart, circleCoordinates, imgFile, colour) {
  ctx.clearRect(0, 0, 1000, 1000);
  const {x: bodyX, y: bodyY} = bodyPart.position;
  let maxRadius = circleCoordinates[0][2] + 30

  function Circle(x, y, r) {
    const circleX = x;
    const circleY = y;
    let circleRadius = r;
    const minRadius = circleRadius;

    this.draw = function() {
      const img = new Image();
      img.src = imgFile;
      ctx.beginPath();
      ctx.arc( circleX, circleY, circleRadius, 0, Math.PI * 2, false)
      ctx.strokeStyle = colour
      ctx.fillStyle = colour
      ctx.fill();
      let patrn = ctx.createPattern(img, 'repeat');
      ctx.fillStyle = patrn;
      ctx.fill();
    }

    this.update = function() {
      if (bodyX - circleX < minRadius && bodyX - circleX > - minRadius && bodyY - circleY < minRadius && bodyY - circleY > - minRadius) {
        if (circleRadius < maxRadius) {
          circleRadius += 4;
        }
      } else if (circleRadius > minRadius) {
          circleRadius -= 1;
      }

      this.draw();
    }
  }

  let circleArray = [];

  function init() {
    circleArray = [];
    circleCoordinates.forEach(([x, y, r]) => {
      circleArray.push(new Circle(x, y ,r))
    })
  }

  init();

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();

    }
  }
    animate();
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

export function trackCircles(circleCoordinates, sounds, bodyPart) {
  const { x: partX, y: partY } = bodyPart.position;

  circleCoordinates.forEach(([cX, cY, cR], index) => {
    const dist = calculateDistance([cX, cY], partX, partY);
    if (dist < cR) {
      sounds[index].play();
      console.log(sounds[index]);
    }
  })
}

export function calculateCircleScale(width, height, [x, y]) {
  const [xScale, yScale] = calculateScale(width, height);
  const rScale = calculateRadiusRatio(x, y, xScale, yScale);
  return [xScale, yScale, rScale];
}
