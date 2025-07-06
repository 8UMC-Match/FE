import { useState } from 'react';
import styled from 'styled-components';
import WordCard from '../../components/word/WordCard';
import { useLocation } from 'react-router-dom';
import AddCard from '../../components/word/AddCard';
import Colors from '../../styles/common/Colors';
import ProfileImg from '../../assets/icons/profile-image.png';
import AddWordModal from '../../components/word/AddWordModal';

import type { WordListResponse } from '../../types/word/word';
import { useFetchQuery } from '../../hooks/useFetchQuery';

export const WordPage = () => {
  //const { wordListId } = useParams<{ wordListId: string }>(); // 단어 리스트 받아오기
  //const [words, setWords] = useState<WordCardProps[]>([]); // 받아온 단어 관리
  const [selectedCard, setSelectedCard] = useState<number[]>([]); // 단어 카드 선택 관리
  const [isModalOpen, setIsModalOpen] = useState(false); // 단어 추가 모달 관리

  // chatpage에서 id 받아오기
  const location = useLocation();
  const { questionId, userMessage } = location.state || {};

  // apiGET
  const { data } = useFetchQuery<WordListResponse>(
    'vocabWords',
    `/asks/${questionId}/vocab`,
  );
  const wordList = data?.data.data ?? [];
  console.log(data);

  const toggleSelection = (index: number) => {
    setSelectedCard((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  //apiPOST

  const handleAddWord = () => {
    // setWords((prev) => [
    //   ...prev,
    //   {
    //     word: newWord,
    //     meaning: '의미를 입력하세요', // 서버에서 받아온 데이터 작성
    //     selected: false,
    //     onToggle: () => {}, // 나중에 교체
    //   },
    // ]);
  };

  const handleSubmitSelectedWords = () => {};

  return (
    <PageContainer>
      <ProfileSection>
        <ProfileImage src={ProfileImg} alt="profile" />
        <Name>김별이님</Name>
      </ProfileSection>

      <TextSection>
        <Text>{userMessage}</Text>
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
          {wordList.map(({ askWordId, name, description }) => (
            <WordCard
              key={askWordId}
              word={name}
              meaning={description}
              selected={selectedCard.includes(askWordId)}
              onToggle={() => toggleSelection(askWordId)}
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
