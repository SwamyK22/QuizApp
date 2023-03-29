import clsx from 'clsx';
import React, { useContext } from 'react'
import { QuizContext } from '../../context/quizContext';

function FifthPage() {
    const { activeItem, val } = useContext(QuizContext);

    return (
      <div className="flex-1 flex flex-col justify-between w-full">
        <p className="text-center text-indigo-900 font-bold py-4 lg:text-3xl md:text-xl">
          PREDICT THE TOP LOSER(for tomorrow) across these indices
        </p>
        <div className="flex flex-col items-center justify-evenly flex-1">
          <button
            className={clsx(
              'p-3 bg-white lg:w-1/3 md:w-1/3 rounded-xl flex items-center justify-around',
              {
                'bg-green-500': val === 'A',
              }
            )}
            onClick={(() => activeItem('A'))}
          >
            <p
              className={clsx(
                'bg-orange-100 px-3 py-1 rounded-full font-bold text-xl',
                {
                  'px-1 bg-slate-100': val === 'A',
                }
              )}
            >
              {val === 'A' ? (
                <svg
                  className="h-8 w-8 font-bold rounded-full fill-green-500 stroke-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
                </svg>
              ) : (
                'A'
              )}
            </p>
            <p className="text-2xl ">
              <span className="font-bold">NIFTY50 </span> $56,226,{' '}
              <span className="text-red-500">-0.315%</span>
            </p>
          </button>
  
          <button
            className={clsx(
              'p-3 bg-white lg:w-1/3 md:w-1/3 rounded-xl flex items-center justify-around',
              {
                'bg-green-500': val === 'B',
              }
            )}
            onClick={() => activeItem('B')}
          >
            <p
              className={clsx(
                'bg-orange-100 px-3 py-1 rounded-full font-bold text-xl',
                {
                  'px-1 bg-slate-100': val === 'B',
                }
              )}
            >
              {val === 'B' ? (
                <svg
                  className="h-8 w-8 rounded-full fill-green-500 stroke-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
                </svg>
              ) : (
                'B'
              )}
            </p>
            <p className="text-2xl ">
              <span className="font-bold">NIFTY50 </span> $56,226,{' '}
              <span className="text-red-500">-0.315%</span>
            </p>
          </button>
          <button
            className={clsx(
              'p-3 bg-white lg:w-1/3 md:w-1/3 rounded-xl flex items-center justify-around',
              {
                'bg-green-500': val === 'C',
              }
            )}
            onClick={() => activeItem('C')}
          >
            <p
              className={clsx(
                'bg-orange-100 px-3 py-1 rounded-full font-bold text-xl',
                {
                  'px-1 bg-slate-100': val === 'C',
                }
              )}
            >
              {val === 'C' ? (
                <svg
                  className="h-8 w-8 rounded-full fill-green-500 stroke-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
                </svg>
              ) : (
                'C'
              )}
            </p>
            <p className="text-2xl ">
              <span className="font-bold">NIFTBANK </span> $17,356,{' '}
              <span className={clsx("text-green-500",{
                'text-green-900': val === 'C'
              })}>+2.12%</span>
            </p>
          </button>
        </div>
      </div>
    );
}

export default FifthPage;