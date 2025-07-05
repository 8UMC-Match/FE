import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/home/HomePage';
import NotFoundPage from '../pages/notFound/NotFoundPage';
import LoginPage from '../pages/login/LoginPage';
import QuizPage from '../pages/quiz/QuizPage';
import QnaPage from '../pages/quiz/QnaPage';
import ResultPage from '../pages/quiz/ResultPage';
import PublicRoute from './PublicRoutes';
import ProtectedRoute from './ProtectedRoutes';
import OnboardingPage from '../pages/onboarding/OnboardingPage';
import ChatPage from '../pages/chat/ChatPage';
import ChatDetailPage from '../pages/chat/ChatDetailPage';
import WordPage from '../pages/word/WordPage';
import AllWordsPage from '../pages/word/AllWordsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        element: <PublicRoute />,
        children: [{ path: 'login', element: <LoginPage /> }],
      },
      {
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'onboarding', element: <OnboardingPage /> },
          {
            path: 'chat',
            element: <ChatPage />,
            children: [{ path: ':id', element: <ChatDetailPage /> }],
          },
          { path: 'quiz', element: <QuizPage /> },
          { path: 'qna', element: <QnaPage /> },
          { path: 'result', element: <ResultPage /> },
          { path: 'word', element: <WordPage /> },
          { path: 'allwords', element: <AllWordsPage /> },
        ],
      },
    ],
  },
]);

export default router;
