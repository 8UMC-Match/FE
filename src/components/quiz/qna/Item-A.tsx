import type { ItemAProps } from '../../../types/quiz/quiz.types';
import * as QS from '../../../styles/quiz/Quiz.styles';

interface Props extends ItemAProps {
  isClicked: boolean;
  onClick: () => void;
}

const ItemA = ({ item, isClicked, onClick }: Props) => {
  return (
    <QS.ItemAContainer onClick={onClick} clicked={isClicked}>
      <QS.ItemAImg
        src={isClicked ? item.imageClick : item.image}
        alt="answer"
      />
    </QS.ItemAContainer>
  );
};

export default ItemA;
