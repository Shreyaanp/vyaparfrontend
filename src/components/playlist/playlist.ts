import trackOne from './songs/track1.mp3';
import trackTwo from './songs/track2.mp3';
import trackThree from './songs/track3.mp3';
import trackFour from "./songs/track4.mp3"
import coverArtOne from './cover-art/1.png';
import coverArtTwo from './cover-art/2.jpg';
import coverArtThree from './cover-art/3.jpg';
import coverArtFour from './cover-art/4.jpg';
import { Playlist } from '../MiniPlayer/types';

const playlist: Playlist = [
  {
    audioSrc: trackOne,
    metadata: {
      title: 'Guitar I',
      artist: 'John Doe',
      coverArtSrc: coverArtOne,
    },
  },
  {
    audioSrc: trackTwo,
    metadata: {
      title: 'Guitar II',
      artist: 'John Doe',
      coverArtSrc: "https://images.unsplash.com/photo-1616990277552-3db5bca0ce13?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    audioSrc: trackThree,
    metadata: {
      title: 'Sunflower',
      artist: 'Jane Doe',
      coverArtSrc: coverArtThree,
    },
  },
  {
    audioSrc: trackFour,
    metadata: {
      title: 'Flowers',
      artist: 'Jane Doe',
      coverArtSrc: coverArtFour,
    },
  },
];

export default playlist;
