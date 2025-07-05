import styled from 'styled-components';
import Colors from '../../styles/common/Colors';
import type { QPProps, ItemAContainerProps } from '../../types/quiz/quiz.types';

// Q.tsx
export const QContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin: 6.3rem 0 13.1rem;
`;

export const QP = styled.p<QPProps>`
  font-size: ${({ fontSize }) => fontSize || '1.5rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  color: ${({ color }) => color || Colors.black};
`;

// List-A.tsx
export const ListAContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

// Item-A.tsx
export const ItemAContainer = styled.div<ItemAContainerProps>`
  width: 100%;
  height: 15rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid
    ${({ clicked }) => (clicked ? Colors.orange400 : Colors.gray100)};
  background-color: ${({ clicked }) =>
    clicked ? Colors.orange100 : 'transparent'};
`;

export const ItemAImg = styled.img`
  width: 6.6rem;
  height: 6.6rem;
`;

// Smile.tsx
export const SmileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 18.2rem;
`;

export const SmileIconImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
`;

export const SmileChatContaienr = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.2rem 0.35rem 0 0;
`;

export const SmileChatP = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  position: absolute;
  color: ${Colors.white};
  padding-right: 1rem;
`;

export const QuizButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 42.5rem;
  padding: 2.3rem 1.9rem;
  border-radius: 0.8rem 0.8rem 0 0;
  box-shadow: 0 0 0.8rem 0 #cccccc40;
`;

export const QButton = styled.button`
  width: 100%;
  height: 5rem;
  cursor: pointer;
  border-radius: 1rem;
  background: ${Colors.orange400};
  font-size: 1.7rem;
  font-weight: 600;
  color: ${Colors.white};
`;
