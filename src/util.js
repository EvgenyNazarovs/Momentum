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
    ctx.arc(x, y, 15, 0, 2 * Math.PI, false)
    ctx.fillStyle = "#006666"
    ctx.fill()
  })
}

export function drawWithNose(ctx, keypoints) {
  if (keypoints.length !== 0) {
    const {position} = keypoints[0]
    const {x, y} = position
    ctx.lineWidth = 10;
    ctx.lineCap = 'round'
    ctx.strokeStyle = 'purple'

    ctx.lineTo(x, y)
    ctx.stroke()
    // ctx.beginPath()
    ctx.moveTo(x, y)
  }
}

export function drawWithAllPoints(ctx, keypoints) {
  keypoints.forEach(({ position }) => {
    const { x, y } = position
    ctx.lineWidth = 10;
    ctx.lineCap = 'round'
    ctx.strokeStyle = 'purple'
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x, y)
    })
}

function toTuple({x, y}) {
  return [x, y]
}

export function drawSkeleton(ctx, keypoints) {

  const adjacentKeyPoints = posenet.getAdjacentKeyPoints(keypoints, 0.1)

  adjacentKeyPoints.forEach(keypoints => {
    drawSegment(
      toTuple(keypoints[0].position),
      toTuple(keypoints[1].position),
      ctx
    )
  })

}

function drawSegment(
  [firstX, firstY],
  [nextX, nextY],
  ctx
) {
  ctx.beginPath()
  ctx.moveTo(firstX, firstY)
  ctx.lineTo(nextX, nextY)
  ctx.lineWidth = 10
  ctx.strokeStyle = 'pink'
  ctx.stroke()
}

export const connectedPartNames = [
  ['leftHip', 'leftShoulder'], ['leftElbow', 'leftShoulder'],
  ['leftElbow', 'leftWrist'], ['leftHip', 'leftKnee'],
  ['leftKnee', 'leftAnkle'], ['rightHip', 'rightShoulder'],
  ['rightElbow', 'rightShoulder'], ['rightElbow', 'rightWrist'],
  ['rightHip', 'rightKnee'], ['rightKnee', 'rightAnkle'],
  ['leftShoulder', 'rightShoulder'], ['leftHip', 'rightHip']
];

export const partNames = [
  'nose', 'leftEye', 'rightEye', 'leftEar', 'rightEar', 'leftShoulder',
  'rightShoulder', 'leftElbow', 'rightElbow', 'leftWrist', 'rightWrist',
  'leftHip', 'rightHip', 'leftKnee', 'rightKnee', 'leftAnkle', 'rightAnkle'
];

export const partIds =
    partNames.reduce((result, jointName, i) => {
      result[jointName] = i;
      return result;
    }, {})



export const connectedPartIndices = connectedPartNames.map(
    ([jointNameA, jointNameB]) => {

  return  ([partIds[jointNameA], partIds[jointNameB]])


  })

export function getAdjacentKeyPoints(keypoints) {
  return connectedPartIndices.reduce((result, [leftJoint, rightJoint]) => {

    result.push([keypoints[leftJoint], keypoints[rightJoint]])
    return result;
  }, [])
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
