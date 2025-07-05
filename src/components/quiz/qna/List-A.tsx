import * as QS from '../../../styles/quiz/Quiz.styles';
import ItemA from './Item-A';
import { QuizData } from '../../../mocks/quiz/quizData';
import { useState } from 'react';

const ListA = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <QS.ListAContainer>
      {QuizData.map((item) => (
        <ItemA
          key={item.id}
          item={item}
          isClicked={selectedId === item.id}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </QS.ListAContainer>
  );
};

export default ListA;
