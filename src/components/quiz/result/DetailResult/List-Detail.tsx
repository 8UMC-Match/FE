import styled from 'styled-components';
import ItemDetail from './Item-Detail';
import type { QuizDetailProps } from '../../../../types/quiz/quiz.types';

const ListDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.9rem 0 1.4rem 0;
`;

const ListDetail = ({ results }: QuizDetailProps) => {
  return (
    <>
      <ListDetailContainer>
        {results.map((item, idx) => (
          <ItemDetail key={idx} index={idx} result={item} />
        ))}
      </ListDetailContainer>
    </>
  );
};

export default ListDetail;
