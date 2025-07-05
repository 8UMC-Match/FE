import styled from 'styled-components';
import Colors from '../../../../styles/common/Colors';
import Check from '../../../../assets/images/quiz/check.png';
import RedX from '../../../../assets/images/quiz/redX.png';

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

const ItemDetail = () => {
  return (
    <ItemDetailContainer>
      <ItemDetailLeft>
        <ItemDetailP>질문 01</ItemDetailP>
        <ItemDetailP style={{ fontSize: '1.3rem', fontWeight: '500' }}>
          햇빛이 강한 날에는 선크림을 바르는 것이 좋다.
        </ItemDetailP>
      </ItemDetailLeft>

      <ItemDetailImg src={Check} alt="check" />
    </ItemDetailContainer>
  );
};

export default ItemDetail;
