import styled from 'styled-components';
import Colors from '../../styles/common/Colors';

interface AddCardProps {
  onClick?: () => void;
}

const AddCard = ({ onClick }: AddCardProps) => {
  return (
    <Card onClick={onClick}>
      <AddContent>
        <AddText>+ 단어 추가하기</AddText>
      </AddContent>
    </Card>
  );
};

const Card = styled.button`
  width: 338px;
  height: 60px;
  border: 1px solid ${Colors.orange800};
  border-radius: 5px;
  padding: 9px 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:active {
    border: 1px solid ${Colors.orange600};
  }
`;

const AddContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const AddText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${Colors.orange800};
  &:active {
    color: ${Colors.orange600};
  }
`;

export default AddCard;
