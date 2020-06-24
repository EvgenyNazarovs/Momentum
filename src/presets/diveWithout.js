import bass from '../sounds/diveWithout/bass.mp3'
import danceBackground from '../sounds/diveWithout/dance-background.mp3'
import percussion from '../sounds/diveWithout/percussion.mp3'
import sfx1 from '../sounds/diveWithout/sfx1.mp3'
import sfx2 from '../sounds/diveWithout/sfx2.mp3'

export const diveWithout = {
  type: 'square',
  shapeCoordinates: [
    [90, 40, 280, 280],
    [620, 40, 280, 280],
    [90, 350, 280, 280],
    [620, 350, 280, 280]
  ],
  colour: 'rgba(255, 195, 113, 0.8)',
  sounds: [
    new Audio(bass),
    new Audio(percussion),
    new Audio(sfx2),
    new Audio(sfx1)
  ],
  backgroundSound: new Audio(danceBackground)
}
