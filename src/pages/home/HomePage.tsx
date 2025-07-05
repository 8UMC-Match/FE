import wordIcon from '../../assets/icons/word.svg';
import characterIcon from '../../assets/icons/character.svg';
import sendIcon from '../../assets/icons/arrowup.svg';
import styled from 'styled-components';
import Colors from '../../styles/common/Colors';

const HomePage = () => {
  return (
    <HomeWrapper>
      <HeaderContainer>
        <LogoContainer>
          LOGO
          {/* <LogoImg src={logoIcon} alt="logo" /> */}
        </LogoContainer>
        <TooltipContainer>
          <TooltipBubble>나의 단어를 확인할 수 있어요!</TooltipBubble>
          <MyWordButton>
            <MyWordImg src={wordIcon} alt="나의 단어" />
          </MyWordButton>
        </TooltipContainer>
      </HeaderContainer>
      <BodyContainer>
        <HelloBubble>안녕하세요! 오늘도 같이 단어를 알아볼까요?</HelloBubble>
        <CharacterWrapper>
          <ShadowEllipse />
          <CharacterImg src={characterIcon} alt="character" />
        </CharacterWrapper>
      </BodyContainer>
      <ChatContainer>
        <ChatInputWrapper>
          <ChatInput />
          <SendButton>
            <SendButtonImg src={sendIcon} alt="send" />
          </SendButton>
        </ChatInputWrapper>
      </ChatContainer>
    </HomeWrapper>
  );
};

export default HomePage;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
  padding: 16px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 3.1rem;
  height: 3.1rem;
`;

export const TooltipContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MyWordButton = styled.button`
  width: 3.1rem;
  height: 3.1rem;
`;

export const MyWordImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const TooltipBubble = styled.div`
  position: relative;
  background-color: ${Colors.orange400};
  color: white;
  padding: 8px 14px;
  border-radius: 16px;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2.3rem;
  line-spacing: -0.05rem;
  max-width: fit-content;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -0.7rem; /* 꼬리를 오른쪽 바깥으로 뺌 */
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 8px solid ${Colors.orange400}; /* 배경색과 동일하게 */
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 3.3rem;
`;

export const HelloBubble = styled.div`
  position: relative;
  background-color: ${Colors.orange400};
  color: white;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.3rem;
  line-spacing: -0.06rem;
  max-width: 80%;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px; /* 아래 꼬리 위치 */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${Colors.orange400}; /* 위쪽 삼각형 → 말풍선과 색 맞추기 */
  }
`;

export const CharacterWrapper = styled.div`
  position: relative;
  width: 24.2rem;
  height: 25.7rem;

  &::before {
    content: '';
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 23.2rem;
    height: 2.6rem;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    filter: blur(4px);
    z-index: 0;
  }
`;

export const CharacterImg = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export const ShadowEllipse = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 23.2rem;
  height: 2.6rem;
  background: rgba(0, 0, 0, 0.1); // 적당한 반투명 회색
  border-radius: 50%;
  z-index: 0;
  filter: blur(2px);
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 11rem;
  padding: 2.1rem 2rem;
`;

export const ChatInputWrapper = styled.div`
  display: flex;
  width: 33.8rem;
  height: 4.9rem;
  padding: 0.6rem 0.7rem;
  justify-content: flex-end;
  border-radius: 5rem;
  background-color: ${Colors.gray100};
`;

export const ChatInput = styled.input`
  width: 100%;
  padding: 0 1rem;
`;

export const SendButton = styled.button`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 100%;
  background-color: ${Colors.gray300};
`;

export const SendButtonImg = styled.img`
  width: 1.8rem;
  height: 1.6rem;
`;
