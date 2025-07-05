import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ChatBubbleProps {
  text: string;
  speed?: number;
  backgroundColor?: string;
  fontColor?: string;
}

const Bubble = styled.div<{ backgroundColor: string; fontColor: string }>`
  width: 26rem;
  position: relative;
  border-radius: 1rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.3rem;
  padding: 1rem;
  white-space: pre-wrap;
  transition: height 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 2rem;
    left: -0.6rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.8rem 0.8rem 0.8rem 0;
    border-color: transparent ${({ backgroundColor }) => backgroundColor}
      transparent transparent;
  }
`;

const ChatBubble: React.FC<ChatBubbleProps> = ({
  text,
  speed = 30,
  backgroundColor = '#FDCB6E',
  fontColor = '#ffffff',
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const nextChar = text.charAt(i);
      if (i < text.length && nextChar) {
        setDisplayedText((prev) => prev + nextChar);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Bubble backgroundColor={backgroundColor} fontColor={fontColor}>
      {displayedText}
    </Bubble>
  );
};

export default ChatBubble;
