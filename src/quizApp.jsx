import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './pages/footer';
import Header from './pages/header';

function QuizApp() {
  return (
    <div className="h-screen flex flex-col w-full" style={{
      backgroundColor: '#EDE8E3'
    }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default QuizApp;