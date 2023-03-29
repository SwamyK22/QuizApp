import clsx from 'clsx';
import React, { memo, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { QuizContext } from '../../context/quizContext';

function SecondPage() {

  
  const { activeItem, questions, val, page } = useContext(QuizContext);

  
  const item = questions.find((x,i) => page === i+1);
  if(item === undefined ){
    return (
      <Navigate to='resultPage' replace />
    )
  }
  
 
  return (
    <div className="flex-1 flex flex-col justify-between w-full">
      <p className="text-center text-indigo-900 font-bold py-4 lg:text-3xl md:text-3xl">
      {item.Q}
      </p>
      <div className="flex flex-col items-center justify-evenly flex-1">
        <button
          className={clsx(
            'p-3 bg-white md:w-1/3 sm:w-5/6 rounded-xl grid grid-cols-9',
            {
              'bg-green-500': val === 'A',
            }
          )}
          onClick={(() => activeItem('A', item))}
        >
          <p
          className='py-2 rounded-full font-bold text-xl'
            style={{
              backgroundColor: '#EDE8E3'
            }}>
            {val === 'A' ? (
              <svg
                className="h-8 w-[95%] font-bold rounded-full fill-green-500 stroke-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
              </svg>
            ) : (
              'A'
            )}
          </p>
          <p className="md:text-2xl font-bold col-span-8 sm:text-xl">
          {item.A}
          </p>
        </button>

        <button
          className={clsx(
            'p-3 bg-white md:w-1/3 sm:w-5/6 rounded-xl grid grid-cols-9',
            {
              'bg-green-500': val === 'B',
            }
          )}
          onClick={() => activeItem('B', item)}
        >
          <p
            className='py-2 rounded-full font-bold text-xl'
            style={{
              backgroundColor: '#EDE8E3'
            }}>
            {val === 'B' ? (
              <svg
                className="h-8 w-[95%] rounded-full fill-green-500 stroke-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
              </svg>
            ) : (
              'B'
            )}
          </p>
          <p className="md:text-2xl font-bold col-span-8 sm:text-xl">
          {item.B}
          </p>
        </button>
        <button
          className={clsx(
            'p-3 bg-white md:w-1/3 sm:w-5/6 rounded-xl grid grid-cols-9',
            {
              'bg-green-500': val === 'C',
            }
          )}
          onClick={() => activeItem('C', item)}
        >
          <p
             className='py-2 rounded-full font-bold text-xl'
             style={{
               backgroundColor: '#EDE8E3'
             }}
          >
            {val === 'C' ? (
              <svg
                className="h-8 w-[95%] rounded-full fill-green-500 stroke-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
              </svg>
            ) : (
              'C'
            )}
          </p>
          <p className="md:text-2xl font-bold col-span-8 sm:text-xl">
          {item.C}
          </p>
        </button>
      </div>
    </div>
  );
}

export default memo(SecondPage);
