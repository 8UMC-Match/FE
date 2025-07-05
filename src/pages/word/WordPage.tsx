import { useEffect, useState } from 'react';
import styled from 'styled-components';
import WordCard, { type WordCardProps } from '../../components/word/WordCard';
import { useParams } from 'react-router-dom';
import AddCard from '../../components/word/AddCard';
import Colors from '../../styles/common/Colors';
import ProfileImg from '../../assets/icons/profile-image.png';
import AddWordModal from '../../components/word/AddWordModal';
import axios from 'axios';

export const WordPage = () => {
  const { wordListId } = useParams<{ wordListId: string }>(); // 단어 리스트 받아오기
  const [words, setWords] = useState<WordCardProps[]>([]); // 받아온 단어 관리
  const [selectedCard, setSelectedCard] = useState<number[]>([]); // 단어 카드 선택 관리
  const [isModalOpen, setIsModalOpen] = useState(false); // 단어 추가 모달 관리

  useEffect(() => {
    // 실제 API 연동 부분
    setWords([
      {
        word: '금일',
        meaning: "'오늘을 한자로 표현한 말",
        selected: false,
        onToggle: () => {},
      },
      {
        word: '글피',
        meaning: '오늘로부터 사흘 뒤의 날',
        selected: false,
        onToggle: () => {},
      },
      {
        word: '윤슬',
        meaning: '물결 위 햇빛 반짝임',
        selected: false,
        onToggle: () => {},
      },
    ]);
  }, [wordListId]);

  const toggleSelection = (index: number) => {
    setSelectedCard((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const handleAddWord = (newWord: string) => {
    setWords((prev) => [
      ...prev,
      {
        word: newWord,
        meaning: '의미를 입력하세요', // 서버에서 받아온 데이터 작성
        selected: false,
        onToggle: () => {}, // 나중에 교체
      },
    ]);
  };

  const handleSubmitSelectedWords = async () => {
    const selectedWords = words.filter((word) => word.selected);

    try {
      await axios.post('/api/words', { words: selectedWords }); // 예: POST 요청
      alert('선택된 단어들이 추가되었습니다!');
    } catch (error) {
      console.error('단어 추가 실패:', error);
      alert('단어 추가 중 오류가 발생했습니다.');
    }
  };

  return (
    <PageContainer>
      <ProfileSection>
        <ProfileImage src={ProfileImg} alt="profile" />
        <Name>김별이님</Name>
      </ProfileSection>

      <TextSection>
        <Text>
          요즘처럼 여름철이 되면 날씨가 매우 덥고 습해집니다. 기온이 높고 습도가
          높을수록 우리 몸은 쉽게 피곤해지고, 땀이 많이 나기 때문에 탈수 증상이
          생기기 쉬워요. 특히 햇볕이 강한 낮 시간에는 밖에 나가는 것이 힘들 수
          있어요. 그래서 햇빛이 강한 날에는 외출을 하기 전에 꼭 선크림을 얼굴과
          팔, 목 같은 노출된 피부에 꼼꼼히 발라야 해요. 또한 햇빛을 막아주는
          모자나 양산을 준비해서 사용하는 것이 매우 좋아요. 그리고 더 날에는
          땀이 많이 나기 때문에 물을 충분히 마시는 것도 중요해요. 특히 갈증이
          생긴 후에 마시는 것보다, 갈증이 생기기 전에 미리 조금씩 자주 마시는
          것이 더 효과적이에요. 실내에서도 너무 더우면 몸이 축 처지고 기운이
          없을 수 있어요. 이럴 땐 선풍기나 에어컨을 적절히 사용하고, 바람이 통할
          수 있게 창문을 열어 두는 것도 좋아요. 이렇게 날씨가 더울 때는 몸을
          시원하게 하고, 탈수되지 않도록 조심하며, 햇빛으로부터 피부를 보호하는
          것이 중요합니다.
        </Text>
      </TextSection>

      <AddCard onClick={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <AddWordModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddWord}
        />
      )}

      <WordSection>
        <Subtitle>단어를 모아봤어요!</Subtitle>

        <Grid>
          {words.map((item, idx) => (
            <WordCard
              key={idx}
              word={item.word}
              meaning={item.meaning}
              selected={selectedCard.includes(idx)}
              onToggle={() => toggleSelection(idx)}
            />
          ))}
        </Grid>
      </WordSection>
      <ButtonSection>
        <Button onClick={handleSubmitSelectedWords}>단어장에 추가하기</Button>
      </ButtonSection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 16px 100px;
  box-sizing: border-box;
  position: relative;
`;
//-----------------------------------------------------------
const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`;

const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const TextSection = styled.div`
  margin: 12px 0;
  padding: 16px;
  background-color: ${Colors.gray50};
  box-sizing: border-box;
  border-radius: 5px;
`;

const Text = styled.p`
  font-size: 15px;
  line-height: 23px;
  letter-spacing: -0.04em;
`;
// ------------------------------------------------------
const WordSection = styled.p`
  margin-top: 49px;
`;

const Subtitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin: 16px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 16px;
`;

const ButtonSection = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  height: 90px;
  background-color: ${Colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 338px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  max-width: 480px;
  padding: 14px;
  background-color: ${Colors.orange400};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  &:active {
    background-color: ${Colors.orange100};
  }
`;

export default WordPage;
