import * as QS from '../../styles/quiz/Quiz.styles';
import SmileIcon from '../../assets/images/quiz/smileIcon.png';
import SmileChat from '../../assets/images/quiz/smileChat.png';

const Smile = () => {
  return (
    <QS.SmileContainer>
      <QS.SmileChatContaienr>
        <QS.SmileIconImg
          style={{
            width: '14.15rem',
            height: '3.7rem',
          }}
          src={SmileChat}
          alt="smileChat"
        />
        <QS.SmileChatP>거의 다 풀어가요!</QS.SmileChatP>
      </QS.SmileChatContaienr>
      <QS.SmileIconImg src={SmileIcon} alt="smile" />
    </QS.SmileContainer>
  );
};

export default Smile;
