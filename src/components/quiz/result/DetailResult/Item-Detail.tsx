import styled from 'styled-components';
import Colors from '../../../../styles/common/Colors';
import Check from '../../../../assets/images/quiz/check.png';
import RedX from '../../../../assets/images/quiz/redX.png';
import type { DetailResultItemProps } from '../../../../types/quiz/quiz.types';

const ItemDetailContainer = styled.div`
  width: 100%;
  padding: 1.6rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${Colors.gray50};
  border-radius: 0.5rem;
`;

const ItemDetailLeft = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const ItemDetailP = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

const ItemDetailImg = styled.img`
  width: 1.9rem;
  height: 1.9rem;
`;

const ItemDetail = ({ result, index }: DetailResultItemProps) => {
  return (
    <ItemDetailContainer>
      <ItemDetailLeft>
        <ItemDetailP>질문 {String(index + 1).padStart(2, '0')}</ItemDetailP>
        <ItemDetailP style={{ fontSize: '1.3rem', fontWeight: '500' }}>
          {result.content}
        </ItemDetailP>
      </ItemDetailLeft>

      <ItemDetailImg
        src={result.isCorrect ? Check : RedX}
        alt={result.isCorrect ? 'correct' : 'wrong'}
      />
    </ItemDetailContainer>
  );
};

export default ItemDetail;
