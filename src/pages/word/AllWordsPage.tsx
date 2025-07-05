import styled from 'styled-components';
import WordCard from '../../components/word/WordCard';
import { useEffect, useState } from 'react';

interface WordGroup {
  date: string;
  words: {
    word: string;
    meaning: string;
  }[];
}

const AllWordsPage = () => {
  const [groupedWords, setGroupedWords] = useState<WordGroup[]>([]);

  useEffect(() => {
    // 임시 데이터
    setGroupedWords([
      {
        date: '2025.07.06',
        words: [
          { word: '여름철', meaning: '여름이 되는 시기' },
          { word: '기온', meaning: '온도, 날씨가 얼마나 더운지' },
          { word: '습도', meaning: '공기 속에 있는 물기, 습기' },
          { word: '탈수', meaning: '몸에 물이 부족해지는 것' },
          { word: '증상', meaning: '몸에 나타나는 이상한 상태' },
          { word: '꼼꼼히', meaning: '빠지지 않게 자세히' },
        ],
      },
      {
        date: '2025.02.02',
        words: [
          { word: '사설', meaning: '신문사의 의견을 담은 글' },
          { word: '개정', meaning: '법이나 규칙을 고치는 것' },
          { word: '우려', meaning: '걱정, 불안' },
          { word: '행태', meaning: '행동하는 모습' },
          { word: '의사 결정', meaning: '무엇을 할지 정하는 것' },
        ],
      },
    ]);
  }, []);

  return (
    <Container>
      {groupedWords.map((group, idx) => (
        <Group key={idx}>
          <DateLabel>{group.date}</DateLabel>
          <WordGrid>
            {group.words.map((wordData, i) => (
              <WordCard
                key={i}
                word={wordData.word}
                meaning={wordData.meaning}
                selected={false}
                onToggle={() => {}}
                readonly
              />
            ))}
          </WordGrid>
        </Group>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Group = styled.div`
  margin-bottom: 54px;
`;

const DateLabel = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 12px;
  margin-left: 5px;
  line-height: 1;
  letter-spacing: -0.04em;
`;

const WordGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
`;

export default AllWordsPage;
