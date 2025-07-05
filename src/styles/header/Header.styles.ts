import styled from 'styled-components';
import Colors from '../common/Colors';

export const HeaderContainer = styled.div`
  width: 60%;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PrevButtonImg = styled.img`
  width: 3.1rem;
  height: 3.1rem;
  cursor: pointer;
`;

export const HeaderP = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
  color: ${Colors.black};
`;
