import styled from 'styled-components';
import Colors from '../../styles/common/Colors';
import QuizIcon from '../../assets/images/quiz/quizIcon.png';
import { useNavigate } from 'react-router-dom';

const QuizPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

const QuizPageP = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
`;

const QuizPageP2 = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${Colors.gray300};
  margin-top: 1.3rem;
`;

const QuizIconImg = styled.img`
  width: 23.861rem;
  height: 34.043rem;
  margin: 6.8rem 0 13.257rem 0;
`;

const QuizButton = styled.button`
  width: 100%;
  height: 5rem;
  border-radius: 1rem;
  background: ${Colors.orange400};
  font-weight: 600;
  font-size: 1.7rem;
  color: ${Colors.white};
  cursor: pointer;
`;

const QuizPage = () => {
  const navigate = useNavigate();

  const handleQna = () => {
    navigate('/qna');
  };

  return (
    <QuizPageContainer>
      <QuizPageP>퀴즈가 다 만들어졌어요!</QuizPageP>
      <QuizPageP2>풀러 가 볼까요?</QuizPageP2>

      <QuizIconImg src={QuizIcon} alt="quiz" />

      <QuizButton onClick={handleQna}>퀴즈 맞추기</QuizButton>
    </QuizPageContainer>
  );
};

export default QuizPage;
