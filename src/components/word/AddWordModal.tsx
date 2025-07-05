import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Colors from '../../styles/common/Colors';
import Keyboard from '../../assets/images/word/keyboard.png';
import Xcircle from '../../assets/icons/x-circle.svg';

interface AddWordModalProps {
  onClose: () => void;
  onSubmit: (word: string) => void;
}

const AddWordModal = ({ onClose, onSubmit }: AddWordModalProps) => {
  const [input, setInput] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // 모달이 열릴 때 input에 자동 포커스
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      if (input.trim() === '') {
        onClose(); // 아무것도 입력 안했을 때 → 모달 닫기
      } else {
        setShowKeyboard(false); // 입력했을 때 → 키보드만 숨기기
      }
    }
  };

  const handleSubmit = () => {
    if (input.trim()) {
      onSubmit(input.trim());
      setInput('');
      onClose();
    }
  };

  return (
    <Overlay onClick={handleClickOutside}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>단어 추가</Title>
        <InputWrapper>
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowKeyboard(true)}
            onBlur={() => setShowKeyboard(false)}
            placeholder="단어 추가"
          />
          {input && <ClearButton src={Xcircle} onClick={() => setInput('')} />}
        </InputWrapper>
        {showKeyboard && <KeyboardImg src={Keyboard} alt="keyboard" />}
        <SubmitButton onClick={handleSubmit}>추가하기</SubmitButton>
      </Modal>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  width: 100%;
  max-width: 480px;
  border-radius: 16px 16px 0 0;
  padding: 20px;
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 17px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.04em;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.gray100};
  border-radius: 50px;
  padding: 0 12px;
  height: 41px;
`;

const Input = styled.input`
  width: 100%;
  height: 41px;
  padding: 12px;
  border: none;
  border-radius: 50px;
`;

const ClearButton = styled.img`
  width: 15px;
  height: 15px;

  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 12px;

  background: ${Colors.orange400};
  color: white;
  padding: 14px;
  font-weight: 500;
  font-size: 15px;
  line-height: 1;
  letter-spacing: -0.04em;
  border: none;
  border-radius: 10px;
`;

const KeyboardImg = styled.img`
  margin-top: 12px;
  width: 100%;
`;

export default AddWordModal;
