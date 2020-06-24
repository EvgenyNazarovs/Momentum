import cardboard from '../assets/diagmonds.png'
import bass from '../sounds/diveWithout/bass.mp3'
import danceBackground from '../sounds/diveWithout/dance-background.mp3'
import percussion from '../sounds/diveWithout/percussion.mp3'
import sfx1 from '../sounds/diveWithout/sfx1.mp3'
import sfx2 from '../sounds/diveWithout/sfx2.mp3'
import chords from '../sounds/diveWithout/chords.mp3'
import radio from  '../sounds/diveWithout/radio.mp3'

export const diveWithout = {
  type: 'square',
  shapeCoordinates: [
     [200, 30, 200, 200],
     [590, 30, 200, 200],
     [120, 240, 200, 200],
     [590, 450, 200, 200],
     [200, 450, 200, 200],
     [670, 240, 200, 200]
  ],
  colour: 'rgba(255, 195, 113, 0.9)',
  pattern: cardboard,
  sounds: [
    new Audio(bass),
    new Audio(percussion),
    new Audio(sfx2),
    new Audio(sfx1),
    new Audio(chords),
    new Audio(radio)
  ],
  backgroundSound: new Audio(danceBackground)
}
