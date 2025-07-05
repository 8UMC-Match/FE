import styled from 'styled-components';
import QuizResult from './QuizResult/QuizResult';
import DetailResult from './DetailResult/DetailResult';
import Colors from '../../../styles/common/Colors';

const ResultFormContainer = styled.div`
  width: 100%;
  background: ${Colors.white};
  padding: 2.4rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  border-radius: 2rem 2rem 0 0;
`;

const ResultForm = () => {
  return (
    <ResultFormContainer>
      <QuizResult />
      <DetailResult />
    </ResultFormContainer>
  );
};

export default ResultForm;
