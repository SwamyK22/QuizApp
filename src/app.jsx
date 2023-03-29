import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ResultPage from './pages/resultPage';
import SecondPage from './pages/secondPage';
import Thumbnail from './pages/thumbnail';
import QuizApp from './quizApp';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Thumbnail />
  },
  {
    path:'/secondPage',
    element: <QuizApp />,
    children: [
      {
        index: true,
        element: <SecondPage />
      },
      {
        path:'resultPage',
        element: <ResultPage />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
