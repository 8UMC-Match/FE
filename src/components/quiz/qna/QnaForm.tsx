import Q from './Q';
import ListA from './List-A';
import { useFetchQuery } from '../../../hooks/useFetchQuery';
import type { QnaList } from '../../../types/quiz/quiz.types';
import { useState } from 'react';
// import Smile from './Smile';
// import QnaButton from './QnaButton';

const QnaForm = () => {
  const { data } = useFetchQuery<QnaList>('quiz', '/todos');
  const [quizIndex] = useState(0);

  if (!data) return null;

  const currentQuiz = data[quizIndex];
  const remainQuiz = data.length - quizIndex - 1;

  // const handleAnswerClick = () => {
  //   if (quizIndex < data.length - 1) {
  //     setQuizIndex((prev) => prev + 1);
  //   } else {
  //     alert('퀴즈가 끝났습니다!');
  //   }
  // };

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <Q index={quizIndex} title={currentQuiz.title} remainCount={remainQuiz} />
      <ListA />

      {/* <Smile /> */}
      {/* <QnaButton /> */}
    </div>
  );
};

export default QnaForm;
