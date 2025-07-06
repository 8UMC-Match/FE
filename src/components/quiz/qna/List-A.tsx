import type { ListAProps } from '../../../types/quiz/quiz.types';
import ItemA from './Item-A';
import { QuizData } from '../../../mocks/quiz/quizData';
import * as QS from '../../../styles/quiz/Quiz.styles';

const ListA = ({ selectedId, onSelect }: ListAProps) => {
  return (
    <QS.ListAContainer>
      {QuizData.map((item) => (
        <ItemA
          key={item.id}
          item={item}
          isClicked={selectedId === item.id}
          onClick={() => onSelect(item.answer, item.id)}
        />
      ))}
    </QS.ListAContainer>
  );
};

export default ListA;
