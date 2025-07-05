import Colors from '../../styles/common/Colors';
import * as QS from '../../styles/quiz/Quiz.styles';

interface QProps {
  index: number;
  title: string;
  remainCount: number;
}

const Q = ({ index, title, remainCount }: QProps) => {
  return (
    <QS.QContainer>
      <QS.QP>{String(index + 1).padStart(2, '0')}.</QS.QP>
      <QS.QP fontSize="1.8rem">{title}</QS.QP>
      <QS.QP fontSize="1.3rem" fontWeight="500" color={Colors.orange400}>
        남은 문제 수: {remainCount}개
      </QS.QP>
    </QS.QContainer>
  );
};

export default Q;
