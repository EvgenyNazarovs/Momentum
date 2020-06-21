export function calculateScale(width, height) {
  if (width === 980 && height === 674) {
    return [1, 1]
  } else {
    const widthScale = (width / 980).toFixed(2);
    const heightScale = (height / 674).toFixed(2)
    return [widthScale, heightScale];
  }
}

export function prepareCanvas(ctx, width, height) {
  const [widthScale, heightScale] = calculateScale(width, height);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(255, 192, 283, 0.5)'
  console.log('Width scale: ', widthScale)
  console.log('Height scale: ', heightScale)
  // ctx.fillRect(90 * widthScale, 40 * heightScale, 280 * widthScale, 280 * heightScale)
  // ctx.fillRect(620 * widthScale, 40 * heightScale, 280 * widthScale, 280 * heightScale)
  // ctx.fillRect(90 * widthScale, 350 * heightScale, 280 * widthScale, 280 * heightScale)
  // ctx.fillRect(620 * widthScale, 350 * heightScale, 280 * widthScale, 280 * heightScale)
}

// export function calculateAudioCoordinates(width, height) {
//   const [widthScale, heightScale] = calculateScale(width, height)
//
//   const firstShape = {
//     lowX: 90 * widthScale,
//     highX: (90+280) * widthScale,
//     lowY: 40 * heightScale,
//     highY: (40+280) * heightSclae
//   }
//
//   const secondShape = {
//     lowX: 620 * widthScale,
//     highX:
//   }
// }
