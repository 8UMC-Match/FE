import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Q from './Q';
import ListA from './List-A';
import { useFetchQuery } from '../../../hooks/useFetchQuery';
import { useDynamicPostMutation } from '../../../hooks/useDynamicPostMutation';
import type { QnaItem } from '../../../types/quiz/quiz.types';

const QnaForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { questionId } = location.state || {};

  const {
    data: firstQuiz,
    isLoading,
    isError,
  } = useFetchQuery<QnaItem>('quizStart', `/asks/${questionId}/quiz/start`);

  const [currentQuiz, setCurrentQuiz] = useState<QnaItem | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (firstQuiz) {
      console.log('초기 퀴즈 번호:', firstQuiz.quizNumber);
      setCurrentQuiz(firstQuiz);
      setSelectedId(null);
    }
  }, [firstQuiz]);

  const mutation = useDynamicPostMutation<number, any>({
    onSuccess: (response) => {
      if (!response || typeof response.quizNumber !== 'number') {
        console.log('퀴즈 종료 응답 수신:', response);
        alert('퀴즈가 종료되었습니다.');
        navigate('/result', { state: { questionId } });
        return;
      }

      const nextQuiz = response as QnaItem;
      console.log('다음 퀴즈 번호:', nextQuiz.quizNumber);
      setCurrentQuiz(nextQuiz);
      setSelectedId(null);
    },
    onError: () => {
      alert('퀴즈 응답 중 오류 발생');
    },
  });

  const handleSelect = (choice: number, id: number) => {
    if (!currentQuiz) return;
    setSelectedId(id);

    mutation.mutate({
      endpoint: `/asks/quiz/${currentQuiz.quizId}/answer?choice=${choice}`,
    });
  };

  if (isLoading) return <p>로딩 중...</p>;
  if (isError || !currentQuiz) return <p>퀴즈 데이터를 불러올 수 없습니다.</p>;

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <Q
        index={currentQuiz.quizNumber - 1}
        title={currentQuiz.content}
        remainCount={currentQuiz.totalCount - currentQuiz.quizNumber}
      />
      <ListA onSelect={handleSelect} selectedId={selectedId} />
    </div>
  );
};

export default QnaForm;
