import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/home/HomePage';
import NotFoundPage from '../pages/notFound/NotFoundPage';
import LoginPage from '../pages/login/LoginPage';
import QuizPage from '../pages/quiz/QuizPage';
import PublicRoute from './PublicRoutes';
import ProtectedRoute from './ProtectedRoutes';
import OnboardingPage from '../pages/onboarding/OnboardingPage';
import ChatPage from '../pages/chat/ChatPage';
import ChatDetailPage from '../pages/chat/ChatDetailPage';
import WordPage from '../pages/word/WordPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <PublicRoute />,
        children: [{ path: 'login', element: <LoginPage /> }],
      },
      {
        element: <ProtectedRoute />,
        children: [
          { path: 'onboarding', element: <OnboardingPage /> },
          { path: 'home', element: <HomePage /> },
          {
            path: 'chat',
            element: <ChatPage />,
            children: [{ path: ':id', element: <ChatDetailPage /> }],
          },
          { path: 'quiz', element: <QuizPage /> },
          { path: 'word', element: <WordPage /> },
        ],
      },
    ],
  },
]);

export default router;
