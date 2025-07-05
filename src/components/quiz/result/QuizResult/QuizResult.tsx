import styled from 'styled-components';
import Colors from '../../../../styles/common/Colors';
import ResultChart from './ResultChart';

const ResultFormP = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
  color: ${Colors.black};
`;

const ResultChartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.8rem;
`;

const QuizResult = () => {
  return (
    <>
      <ResultFormP>학습 결과</ResultFormP>
      <ResultChartContainer>
        <ResultChart />
      </ResultChartContainer>
    </>
  );
};

export default QuizResult;
