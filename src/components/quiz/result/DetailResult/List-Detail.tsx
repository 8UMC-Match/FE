import styled from 'styled-components';
import Colors from '../../../../styles/common/Colors';
import ItemDetail from './Item-Detail';

const ListDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.9rem 0 1.4rem 0;
`;

const ListDetail = () => {
  return (
    <>
      <ListDetailContainer>
        <ItemDetail />
      </ListDetailContainer>
    </>
  );
};

export default ListDetail;
