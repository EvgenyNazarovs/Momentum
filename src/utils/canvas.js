export function calculateScale(width, height) {
  if (width === 980 && height === 674) {
    return [1, 1]
  } else {
    const widthScale = (width / 980).toFixed(2);
    const heightScale = (height / 674).toFixed(2)
    return [widthScale, heightScale];
  }
}
