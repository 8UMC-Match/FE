import styled from 'styled-components';

interface ProgressBarProps {
  progress: number; // 0 ~ 1
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <BarWrapper>
      <BarFill style={{ width: `${progress * 100}%` }} />
    </BarWrapper>
  );
};

export default ProgressBar;

const BarWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: #ddd;
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  background: linear-gradient(to right, #f5b544, #d8772b);
  border-radius: 1rem;
  transition: width 0.3s ease;
`;
