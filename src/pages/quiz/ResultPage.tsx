import styled from 'styled-components';
import Colors from '../../styles/common/Colors';
import ResultIcon from '../../assets/images/quiz/resultIcon.png';
import ResultForm from '../../components/quiz/result/ResultForm';
import { useNavigate } from 'react-router-dom';

const ResultContainer = styled.div`
  width: 100%;
  background: ${Colors.gray100};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const ResultTitleContainer = styled.div`
  position: relative;
  margin: 1rem 0 3.8rem 0;
`;

const ResultTitleP = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  z-index: 999;
  position: relative;
`;

const ResultTitleBar = styled.div`
  width: 17.6rem;
  height: 1rem;
  background: ${Colors.orange400};
  position: absolute;
  bottom: 0.2rem;
  left: -0.5rem;
`;

const ResultIconImg = styled.img`
  width: 23.778rem;
  height: 23.815rem;
`;

const ResultFormButtonContainer = styled.div`
  width: 100%;
  padding: 3rem 2rem;
  background: ${Colors.white};
`;

const ResultFormButton = styled.button`
  width: 100%;
  height: 5rem;
  background: ${Colors.orange400};
  cursor: pointer;
  border-radius: 1rem;
  font-size: 1.7rem;
  font-weight: 600;
  color: ${Colors.white};
`;

const ResultPage = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <ResultContainer className="pageContainer">
      <ResultTitleContainer>
        <ResultTitleP>퀴즈가 끝났어요!</ResultTitleP>
        <ResultTitleBar />
      </ResultTitleContainer>

      <ResultIconImg src={ResultIcon} alt="resultIcon" />

      <ResultForm />

      <ResultFormButtonContainer>
        <ResultFormButton onClick={handleHome}>확인</ResultFormButton>
      </ResultFormButtonContainer>
    </ResultContainer>
  );
};

export default ResultPage;
