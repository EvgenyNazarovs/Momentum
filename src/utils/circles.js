import { calculateScale } from './canvas.js'
import cartographer from '../components/cartographer.png'

const circleCoordinates = [
    [ 330, 160, 120 ],
    [ 680, 160, 120 ],
    [ 220, 420, 120 ],
    [ 790, 420, 120 ]
]



export function draw(ctx, bodyPart, circleCoordinates) {

  const {x: bodyX, y: bodyY} = bodyPart.position;
  let maxRadius = circleCoordinates[0][2] + 30

  function Circle(x, y, r) {
    const circleX = x;
    const circleY = y;
    let circleRadius = r;
    const minRadius = circleRadius;

    this.draw = function() {
      const img = new Image();
      img.src = cartographer;
      ctx.beginPath();
      ctx.arc( circleX, circleY, circleRadius, 0, Math.PI * 2, false)
      ctx.strokeStyle = 'rgba(0, 0, 255, 0.3)'
      // ctx.fillStyle = 'rgba(0, 0, 255, 0.3)'
      // ctx.fillStyle = 'rgba(201, 152, 36, 0.8)'
      ctx.fillStyle = 'rgba(255, 95, 109, 0.8)'
      // ctx.fillStyle = this.color;
      ctx.fill();
      let patrn = ctx.createPattern(img, 'repeat');
      ctx.fillStyle = patrn;
      ctx.fill()
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


// export function prepareCanvasCircles(img, ctx, [xScale, yScale, rScale], circleCoordinates, colour) {
//   console.log('XScale: ', xScale);
//   console.log('YScale: ', yScale);
//   console.log('RScale: ', rScale);
//
//   // draw();
//
//   // const patrn = ctx.createPattern(img, 'repeat');
//
//
//   // let minRadius = (circleCoordinates[0][2] * rScale)
//
//   // function draw() {
//   //   const img = new Image();
//   //   img.src = cartographer;
//   //   ctx.beginPath();
//   //   ctx.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false)
//   //   ctx.strokeStyle = 'rgba(0, 0, 255, 0.3)'
//   //   ctx.fillStyle = 'rgba(0, 0, 255, 0.3)'
//   //   // ctx.fillStyle = this.color;
//   //   ctx.fill();
//   //   let patrn = ctx.createPattern(img, 'repeat');
//   //   ctx.fillStyle = patrn;
//   //   ctx.fill()
//   // }
//
//   // circleCoordinates.forEach(([x, y, r]) => {
//   //   // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
//   //   const image = new Image();
//   //   image.src = cartographer;
//   //   ctx.fillStyle = colour;
//   //   const newCircle = new Path2D();
//   //   newCircle.arc(x * xScale, y * yScale, r * rScale, 0, 2 * Math.PI)
//   //   ctx.fill(newCircle);
//   //   let pattern = ctx.createPattern(image, 'repeat');
//   //   ctx.fillStyle = pattern;
//   //   ctx.fill();
//   // })
// }

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
    if (dist < cR) {
      notes[index].play();
      //insert animation
    }
  })
}

export function calculateCircleScale(width, height, [x, y]) {
  const [xScale, yScale] = calculateScale(width, height);
  const rScale = calculateRadiusRatio(x, y, xScale, yScale);
  return [xScale, yScale, rScale];
}
