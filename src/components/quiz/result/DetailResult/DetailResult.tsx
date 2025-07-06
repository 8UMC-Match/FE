import styled from 'styled-components';
import Colors from '../../../../styles/common/Colors';
import ListDetail from './List-Detail';
import type { DetailResultProps } from '../../../../types/quiz/quiz.types';

const ResultFormP = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
  color: ${Colors.black};
  margin-top: 4.9rem;
`;

const DetailResult = ({ results }: DetailResultProps) => {
  return (
    <>
      <ResultFormP>문제 풀이 결과</ResultFormP>
      <ListDetail results={results} />
    </>
  );
};

export default DetailResult;
