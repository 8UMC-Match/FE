import SelectedFalseCircle from '../../assets/icons/tick-circle.svg';
import SelectedTrueCircle from '../../assets/icons/Vector.svg';

import styled from 'styled-components';
import Colors from '../../styles/common/Colors';

export interface WordCardProps {
  word: string;
  meaning: string;
  selected: boolean;
  onToggle: () => void;
}

const WordCard = ({ word, meaning, selected, onToggle }: WordCardProps) => {
  return (
    <Card onClick={onToggle} selected={selected}>
      <TopRightIcon onClick={onToggle}>
        <CheckIcon
          src={selected ? SelectedTrueCircle : SelectedFalseCircle}
          alt="check"
          selected={selected}
        />
      </TopRightIcon>
      <Word selected={selected}>{word}</Word>
      <Meaning selected={selected}>{meaning}</Meaning>
    </Card>
  );
};

const Card = styled.div<{ selected: boolean }>`
  width: 164px;
  height: 60px;
  background-color: ${({ selected }) =>
    selected ? `${Colors.orange600}` : `${Colors.gray50}`};
  border-radius: 5px;
  padding: 9px 11px;
  box-sizing: border-box;
  transition: background-color;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s ease-in-out;
`;

const Word = styled.p<{ selected: boolean }>`
  width: 125px;
  height: 19px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 6px;
  color: ${({ selected }) =>
    selected ? `${Colors.white}` : `${Colors.black}`};
`;

const Meaning = styled.p<{ selected: boolean }>`
  font-weight: 400;
  font-size: 13px;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${({ selected }) =>
    selected ? `${Colors.white}` : `${Colors.black}`};
`;

const TopRightIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  transition: 0.1s ease-in-out;
`;

const CheckIcon = styled.img<{ selected: boolean }>`
  width: 15px;
  height: 15px;
  filter: ${({ selected }) =>
    selected ? `invert(47%) ${Colors.orange800} ` : `${Colors.gray50}`};
`;

export default WordCard;
