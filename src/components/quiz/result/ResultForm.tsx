import styled from 'styled-components';
import QuizResult from './QuizResult/QuizResult';
import DetailResult from './DetailResult/DetailResult';
import Colors from '../../../styles/common/Colors';
import { useLocation } from 'react-router-dom';
import { useFetchQuery } from '../../../hooks/useFetchQuery';

const ResultFormContainer = styled.div`
  width: 100%;
  background: ${Colors.white};
  padding: 2.4rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  border-radius: 2rem 2rem 0 0;
`;

export interface QuizResultItem {
  content: string;
  correct: number;
  choice: number;
  isCorrect: boolean;
}

export interface QuizResultResponse {
  totalCount: number;
  correctCount: number;
  results: QuizResultItem[];
}

const ResultForm = () => {
  const location = useLocation();
  const { questionId } = location.state || {};

  const { data, isLoading, isError } = useFetchQuery<QuizResultResponse>(
    'qnaResult',
    `/asks/asks/${questionId}/quiz/result`,
  );

  if (isLoading) return <p>결과를 불러오는 중입니다...</p>;
  if (isError || !data) return <p>결과를 불러오지 못했습니다.</p>;

  return (
    <ResultFormContainer>
      <QuizResult
        totalCount={data.totalCount}
        correctCount={data.correctCount}
      />
      <DetailResult results={data.results} />
    </ResultFormContainer>
  );
};

export default ResultForm;
