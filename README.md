# ABOUT THE PROJECT
This app provides an kinetic audio/visual experience. It takes user input via the webcam and passes it through the Machine Learning framework; PoseNet, this provides a map of keypoints attached to a person. We take the tracking data from the nose and allow the user to play sounds by moving over one of a number of shapes on the screen. There are 2 presets, one for Meditation/Yoga and another for Dance/Dubstep.

The brief is as follows:

## Educational App
Create an interactive music playing app. The app can be used as a tool for musicians experimenting with different ways to make sound or as a means for entertainment.

## MVP
- The App takes a user's body position to trigger specific sounds.
- Have 2 sound presets: Melody based and Percussion based.
- Use a motion tracking API to determine a user's position.
- Provide visual feedback to the user when a sound is played.
- Have an aesthetically pleasing front end that suits the app.

## Extensions
- Deploy.
- Allow for custom layout of sounds.
- Let users create their own sound board.
- Allow users to record their in-app experiences.

# HOW TO RUN THE APP

### NOTE: The app was tested in Google Chrome and so it is advised to use the latest version of Chrome when navigating.

1. Download the Repo using the green "Clone or Download" button at the top right of this project's GitHub page.

2. Using Terminal (or another CLI) navigate to the "project" folder run the following commands:
  - npm i
  - npm start
3. Open Chrome and enter localhost:3000 in the address bar.
4. Enjoy!

## Tech Stack
This app is built with the following frameworks and libraries:
- React.js (https://github.com/facebook/react/)
- PoseNet (https://github.com/tensorflow/tfjs-models/tree/master/posenet)

## Thanks
Yoyota's React PoseNet Wrapper (https://github.com/yoyota/react-posenet)

---
---
