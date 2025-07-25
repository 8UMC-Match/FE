import styled from 'styled-components';
import Colors from '../../styles/common/Colors';
import aiProfile from '../../assets/icons/ai-profile-1.svg';
import ChatBubble from '../../components/ChatBubble';
import arrowLeftIcon from '../../assets/images/header/arrowLeft.png';
import wordIcon from '../../assets/icons/word.svg';
import { useNavigate, useLocation } from 'react-router-dom';
const ChatPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { questionId, userMessage, aiResponse } = location.state || {};

  return (
    <ChatLayout>
      <HeaderContainer>
        <GoBackButton onClick={() => navigate(-1)}>
          <GoBackButtonImg src={arrowLeftIcon} alt="arrowLeftIcon" />
        </GoBackButton>
        <MyWordButton onClick={() => navigate('/word')}>
          <MyWordImg src={wordIcon} alt="wordIcon" />
        </MyWordButton>
      </HeaderContainer>
      <ScrollContainer>
        <ChatWrapper>
          <RequestContainer>
            <RequestTextContainer>{userMessage}</RequestTextContainer>
          </RequestContainer>

          <ResponseContainer>
            <AIProfileImg src={aiProfile} alt="ai-profile" />
            <ChatBubble
              text={aiResponse}
              backgroundColor={Colors.orange400}
              fontColor={Colors.white}
            />
          </ResponseContainer>
        </ChatWrapper>
      </ScrollContainer>
      <ButtonsContainer>
        <Button
          onClick={() =>
            navigate('/word', { state: { questionId, userMessage } })
          }
        >
          단어 보기
        </Button>
        <Button onClick={() => navigate('/quiz', { state: { questionId } })}>
          퀴즈 시작하기
        </Button>
      </ButtonsContainer>
    </ChatLayout>
  );
};

export default ChatPage;

export const HeaderContainer = styled.div`
  display: flex;
  height: 4.7rem;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

export const GoBackButton = styled.button`
  width: 3.1rem;
  height: 3.1rem;
`;

export const GoBackButtonImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MyWordButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
`;

export const MyWordImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ChatLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ScrollContainer = styled.div`
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
  overflow-y: scroll;
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RequestContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 0.8rem;
`;

export const AIProfileImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
`;

export const RequestTextContainer = styled.div`
  width: 28rem;
  position: relative;
  border-radius: 1rem;
  background-color: ${Colors.gray50};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.3rem;
  line-spacing: -0.06rem;
  color: ${Colors.black};
  padding: 1rem;

  &::after {
    content: '';
    position: absolute;
    top: 1rem;
    right: -0.6rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.8rem 0 0.8rem 0.8rem; // top, right, bottom, left
    border-color: transparent transparent transparent ${Colors.gray50};
`;

export const ResponseContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const ResponseTextContainer = styled.div`
  width: 26rem;
  border-radius: 1rem;
  background-color: ${Colors.orange400};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.3rem;
  line-spacing: -0.06rem;
  color: ${Colors.white};
  padding: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.8rem 1.5rem;
`;

export const Button = styled.button`
  width: 16.4rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: ${Colors.orange400};
  color: ${Colors.white};
  font-size: 1.7rem;
  font-weight: 600;
  line-spacing: -0.07rem;
`;
