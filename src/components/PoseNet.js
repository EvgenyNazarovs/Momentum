import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import Loading from "./Loading"
import useInputImage from "../hooks/useInputImage"
import useLoadPoseNet from "../hooks/useLoadPoseNet"
import { drawKeypoints, getConfidentPoses, drawSkeleton, drawWithNose, getAdjacentKeyPoints } from "../util"
import pattern from './Texture5.png'
import './PoseNet.css'
import texture1 from '../assets/Texture1.png'
import cartographer from './cartographer.png'
import '../App.css'
import { prepareCanvas, calculateAudioCoordinates, calculateScale, prepareCanvasCircles } from '../canvasutil.js'

export default function PoseNet({
  style,
  className,
  facingMode,
  frameRate,
  input,
  onEstimate,
  inferenceConfig,
  modelConfig,
  minPoseConfidence,
  minPartConfidence,
  width,
  height
}) {
  const videoRef = useRef()
  const canvasRef = useRef()
  const canvasRef1 = useRef()
  const net = useLoadPoseNet(modelConfig)
  const [errorMessage, setErrorMessage] = useState()
  const onEstimateRef = useRef()
  const inferenceConfigRef = useRef()
  onEstimateRef.current = onEstimate
  inferenceConfigRef.current = inferenceConfig
  const image = useInputImage({
    input,
    width,
    height,
    videoRef,
    facingMode,
    frameRate
  })





  useEffect(() => {
    if (!net || !image) return () => {}
    if ([net, image].some(elem => elem instanceof Error)) return () => {}

    const ctx = canvasRef.current.getContext("2d")
    const ctx2 = canvasRef1.current.getContext("2d")
    const img = new Image();
    img.src = cartographer


    // const img = new Image(10, 10);
    // img.src = pattern
    // img.onload = function()

    const intervalID = setInterval(async () => {
      try {
        // collects poses based on the image from stream
        const poses = await net.estimatePoses(image, inferenceConfigRef.current)
        // takes poses that meet confidence criteria determined below


        const confidentPoses = getConfidentPoses(
          poses,
          minPoseConfidence,
          minPartConfidence
        )



        //overlays posenet-ready canvas over the webstream
        ctx.drawImage(image, 0, 0, width, height)
        ctx.fillStyle = 'rgba(0, 0, 0, 1)'
        prepareCanvas(ctx2, width, height);

        function calculateCanvasCoordinates(width, height) {
          const [widthScale, heightScale] = calculateScale(width, height);
          const firstShape = [90 * widthScale, 40 * heightScale, 280 * widthScale, 280 * heightScale]
          const secondShape = [620 * widthScale, 40 * heightScale, 280 * widthScale, 280 * heightScale]
          const thirdShape = [90 * widthScale, 350 * heightScale, 280 * widthScale, 280 * heightScale]
          const fourthShape = [620 * widthScale, 350 * heightScale, 280 * widthScale, 280 * heightScale]
          return [firstShape, secondShape, thirdShape, fourthShape];
        }

        const [firstShape, secondShape, thirdShape, fourthShape] = calculateCanvasCoordinates(width, height);
        console.log("First Canvas Shape: ", firstShape);
        console.log("Second Canvas Shape: ", secondShape);
        console.log("Third Canvas Shape: ", thirdShape);
        console.log("Fourth Canvas Shape: ", fourthShape);



        // let patrn = ctx2.createPattern(img, 'repeat');



        // we can set up our shapes and visuals here.
        ctx.globalAlpha = 0.9

        prepareCanvasCircles(img, ctx2, width, height);


      //   ctx2.fillStyle = 'rgba(201, 152, 36, 0.9)'
      //   let upperRightCircle = new Path2D();
      //   let upperLeftCircle = new Path2D();
      //   let lowerRightCircle = new Path2D();
      //   let lowerLeftCircle = new Path2D();
      //
      //   upperRightCircle.arc(495, 200, 165, 0, 2 * Math.PI);
      //   upperLeftCircle.arc(905, 200, 165, 0, 2 * Math.PI);
      //   lowerRightCircle.arc(300, 530, 165, 0, 2 * Math.PI);
      //   lowerLeftCircle.arc(1100, 530, 165, 0, 2 * Math.PI);
      //   ctx2.fill(upperRightCircle)
      //   ctx2.fill(upperLeftCircle)
      //   ctx2.fill(lowerRightCircle)
      //   ctx2.fill(lowerLeftCircle)
      //
      //
      //   ctx2.fillStyle = patrn;
      // // ctx.fillRect(0, 0, 500, 500)
      //   ctx2.fill(upperRightCircle)
      //   ctx2.fill(upperLeftCircle)
      //   ctx2.fill(lowerRightCircle)
      //   ctx2.fill(lowerLeftCircle)




        // let patrn = ctx.createPattern(img, 'repeat');
        // ctx.fillStyle = patrn;

        // ctx.fillRect(90, 40, 280, 280) //upper left box


        // ctx.fillRect(620, 40, 280, 280) //uppper right box



        // ctx.fillRect()


        onEstimateRef.current(confidentPoses)
        confidentPoses.forEach(({ keypoints }) => { drawKeypoints(ctx, keypoints)
})
      } catch (err) {
        clearInterval(intervalID)
        setErrorMessage(err.message)
        console.log(err.message);
      }
      //potentially can modify the interval of scanning poses
    }, Math.round(1000 / frameRate))

    return () => clearInterval(intervalID)
  }, [
    frameRate,
    height,
    image,
    minPartConfidence,
    minPoseConfidence,
    net,
    width
  ])

  return (
    <>
      <Loading name="model" target={net} />
      <Loading name="input" target={image} />
      <font color="red">{errorMessage}</font>
      <video
        playsInline
        ref={videoRef}
        style={{ width: "0", height: "0" }}
        width={width}
        height={height}
      />
      <canvas id="posenet-canvas"
        style={style}
        className={className}
        ref={canvasRef}
        width={width}
        height={height}
        onClick={e => console.log(e.clientX, e.clientY)}
      />
      <canvas id="canvas"
        style={style}
        className={className}
        ref={canvasRef1}
        width={width}
        height={height}

      />
    </>
  )
}

PoseNet.propTypes = {
  /** canvas style */
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  /** canvas className */
  className: PropTypes.string,
  /** @see https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode  */
  facingMode: PropTypes.string,
  /** First of all frameRate is parameter of [getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
   *  see [MediaTrackConstraints.frameRate](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/frameRate)
   *  <br/>
   *  second frameRate affects how often estimation occurs. react-posenet internally <br/>
   *  [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)(() => { estimatePose() } , (1000 / framerate))
   *  to estimate image continuously */
  frameRate: PropTypes.number,
  /**
   * the input image to feed through the network. <br/>
   * If input is not specified react-posenet try to [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)<br/>
   * @see [tfjs-posenet document](https://github.com/tensorflow/tfjs-models/tree/master/posenet#params-in-estimatesinglepose)
   */
  input: PropTypes.element,
  /**
   * gets called after estimation. [poses](https://github.com/tensorflow/tfjs-models/tree/master/posenet#keypoints) is a passed parameter
   */
  onEstimate: PropTypes.func,
  /**
   * If you want swtich between single / multi pose estimation.<br/>
   * use decodingMethod [please check this code](https://github.com/tensorflow/tfjs-models/blob/master/posenet/demos/camera.js#L392) <br/>
   * {decodingMethod: "single-person"} / {decodingMethod: "multi-person"}
   * @see [tfjs-posenet documentation](https:/github.com/tensorflow/tfjs-models/tree/master/posenet#params-in-estimatemultipleposes)
   */
  inferenceConfig: PropTypes.shape({
    decodingMethod: PropTypes.string,
    flipHorizontal: PropTypes.bool,
    maxDetections: PropTypes.number,
    scoreThreshold: PropTypes.number,
    nmsRadius: PropTypes.number
  }),
  /** @see [tfjs-posenet documentation](https://github.com/tensorflow/tfjs-models/tree/master/posenet#config-params-in-posenetload) */
  modelConfig: PropTypes.shape({
    architecture: PropTypes.string,
    outputStride: PropTypes.number,
    inputResolution: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    quantBytes: PropTypes.number
  }),
  /** minimum confidence constraint for pose */
  minPoseConfidence: PropTypes.number,
  /** minimum confidence constraint for each [part](https://github.com/tensorflow/tfjs-models/tree/master/posenet#keypoints) */
  minPartConfidence: PropTypes.number,
  /** canvas width */
  width: PropTypes.number,
  /** canvas height */
  height: PropTypes.number
}

PoseNet.defaultProps = {
  style: {},
  className: "",
  facingMode: "user",
  frameRate: 15,
  input: undefined,
  onEstimate: () => {},
  inferenceConfig: {},
  modelConfig: {},
  minPoseConfidence: 0.1,
  minPartConfidence: 0.5,
  width: window.innerWidth - 300,
  height: window.innerHeight
}
