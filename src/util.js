import * as posenet from '@tensorflow-models/posenet'

export function checkUserMediaError() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return new Error(
      "Browser API navigator.mediaDevices.getUserMedia not available"
    )
  }
  return null
}

export function getMediaStreamConstraints(facingMode, frameRate) {
  return {
    audio: false,
    video: {
      facingMode,
      frameRate
    }
  }
}

export function getConfidentPoses(poses, minPoseConfidence, minPartConfidence) {
  return poses
    .filter(({ score }) => score > minPoseConfidence)
    .map(pose => ({
      ...pose,
      keypoints: pose.keypoints.filter(({ score }) => score > minPartConfidence)
    }))
}

export function drawKeypoints(ctx, keypoints) {
  keypoints.forEach(({ position }) => {
    const { x, y } = position
    ctx.beginPath()
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false)
    ctx.fillStyle = "rgb(255,127,80)"
    ctx.fill()
  })
}

export function drawSkeleton(ctx, keypoints) {
  for (let i = 0; i < keypoints.length; i++) {
    let partA = keypoints[i][0];
    let partB = keypoints[i][1];
    ctx.stroke(255, 0, 0, 0);
    ctx.line(partA.position.x, partA.position.y, partB.position.x, partB.position.y)
  }
  }




// export function drawSkeleton(ctx, keypoints, minConfidence) {
//   const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
//     keypoints,
//     minConfidence
//   )
//
//   adjacentKeyPoints.forEach(keypoints => {
//     drawSegment(
//       toTuple(keypoints[0].position),
//       toTuple(keypoints[1].position),
//       "yellow",
//       15,
//       1,
//       ctx
//     )
//   })
// }
//
// function toTuple({x, y}) {
//   return [x, y]
// }
//
// function drawSegment(
//   [firstX, firstY],
//   [nextX, nextY],
//   color,
//   lineWidth,
//   scale,
//   canvasContext
// ) {
//   canvasContext.beginPath()
//   canvasContext.moveTo(firstX * scale, firstY * scale)
//   canvasContext.lineTo(nextX * scale, nextY * scale)
//   canvasContext.lineWidth = lineWidth
//   canvasContext.strokeStyle = color
//   canvasContext.stroke()
// }
