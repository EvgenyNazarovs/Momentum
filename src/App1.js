import { calculateAudioCoordinates } from './canvasutil.js'
import { calculateDistance } from './circleFunctions.js'

const circleCoordinates = [
    [ 330, 160, 120 ],
    [ 680, 160, 120 ],
    [ 220, 420, 120 ],
    [ 790, 420, 120 ]
]


function App() {
  const [posesString, setPosesString] = useState([])


const canvasRef = useRef()

  useEffect(() => {

    // const ctx = canvasRef.current.getContext("2d")
    // ctx.clearRect(0,0,window.innerWidth-300,window.innerHeight);
    //
    // ctx.fillStyle = 'rgba(255, 192, 283, 0.5)'
    // ctx.fillRect(90, 40, 280, 280) //upper left box
    // ctx.fillRect(620, 40, 280, 280) //uppper right box
    // ctx.fillRect(90, 350, 280, 280) // lower left box
    // ctx.fillRect(620, 350, 280, 280) //lower right box

    if (posesString.length === 0) return () => {}


    const backgroundSounds = document.getElementById("background-sounds");
    backgroundSounds.play()
    const cNote = document.getElementById("c-note");
    const gNote = document.getElementById("g-note");
    const dNote = document.getElementById("d-note");
    const aNote = document.getElementById("a-note");

    // const [f, s, t, frth] = calculateAudioCoordinates(window.innerWidth-300, 674, squareCoordinates);
    // // console.log("First Audio Shape: ", f);
    // // console.log("Second Audio Shape: ", s);
    // // console.log("Third Audio Shape: ", t);
    // // console.log("Fourth Audio Shape: ", frth);

  if (posesString.length !== 0) {
      if (posesString[0].part === 'nose') {
        const noseX = posesString[0].position.x;
        const noseY = posesString[0].position.y

        // monitorCircleDistance(circleCoordinates, posesString[0].position)



        // if (noseX > f.lowX && noseX < f.highX && noseY > f.lowY && noseY < f.highY) {
        //     cNote.play()
        //     console.log('upper right corner');
        // } else if (noseX > s.lowX && noseX < s.highX && noseY > s.lowY && noseY < s.highY) {
        //     gNote.play()
        //     console.log('upper left corner');
        // } else if (noseX > t.lowX && noseX < t.highX && noseY > t.lowY && noseY < t.highY) {
        //     dNote.play()
        //     console.log('lower right corner');
        // } else if (noseX > frth.lowX && noseX < frth.highX && noseY > frth.lowY && noseY < frth.highY) {
        //   aNote.play()
        //   console.log('lower left corner');
        // }
      }
    }}, [posesString])


  return (
    <div className="App">

    <NavBar/>



    <PoseNet
      inferenceConfig={{ decodingMethod: "single-person" }}
      onEstimate={poses => {
            if (poses.length !== 0) setPosesString(poses[0].keypoints)
      }}
    />
    <audio id="background-sounds" src={backgroundSounds}></audio>
    <audio id="c-note" src={cNote}></audio>
    <audio id="g-note" src={gNote}></audio>
    <audio id="d-note" src={dNote}></audio>
    <audio id="a-note" src={aNote}></audio>




    </div>
  );
}

export default App;
