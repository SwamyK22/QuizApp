import clsx from 'clsx';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../context/quizContext';

function Footer() {
  const {
    val,
    page,
    activePage,
    windowSize,
    setPage,
    setValidateAns,
    activeItem,
  } = useContext(QuizContext);
  console.log(windowSize);
  const nav = useNavigate();
  return (
    <div className={clsx('flex justify-around items-center py-5 bg-slate-50 w-full',{
      'bg-inherit': windowSize <= 320
    })}>
      {page <= 5 && windowSize > 320 && (
        <div className="flex items-center w-[50%]">
          <div className="h-3 w-[50%] bg-gray-500 rounded-md">
            <div
              className="bg-green-500 h-3 rounded-md"
              style={{
                width: `${page * 20}%`,
              }}
            ></div>
          </div>
          <span className="px-2 font-bold">{page}/5</span>
        </div>
      )}
      <button
        type="button"
        disabled={!val && page <= 5}
        className="inline-flex justify-center rounded-xl border border-transparent bg-green-600 md:py-4 md:px-20 sm:px-6 sm:py-2 sm:text-lg md:text-lg font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
        onClick={() =>
          page === 6
            ? (nav('/', { replace: true }), setPage(1), setValidateAns(0))
            : (activePage(1), activeItem('', null))
        }
      >
        {page === 5 ? 'FINISH' : page === 6 ? 'OKAY' : 'CONTINUE'}
      </button>
    </div>
  );
}

export default Footer;
