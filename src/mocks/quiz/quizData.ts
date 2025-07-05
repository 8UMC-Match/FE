import { loadImages } from '../../utils/loadImages';

const images = loadImages('quiz');

export const QuizData = [
  {
    id: 1,
    image: images['o'],
    imageClick: images['oClick'],
    answer: 1,
  },
  {
    id: 2,
    image: images['x'],
    imageClick: images['xClick'],
    answer: 0,
  },
];
