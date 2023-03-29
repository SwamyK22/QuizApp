import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axiosInstance from '../../utils/axiosInstance';

export const QuizContext = createContext();

export function QuizContextProvider({ children }) {
  const [val, setVal] = useState('');
  const [page, setPage] = useState(1);
  const [validateAns, setValidateAns] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [error, setError] = useState('')

  const addQuestion = useCallback(async () => {
    try {
      const res = await axiosInstance.get('quizQuations');
      const data = await res.data;
      setQuestions(data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    addQuestion();
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const arr = [
    {
      Q: 'Who is first Indian batsman to hit 6 sixes in an over ?',
      A: 'Shikhar Dhawan',
      B: 'Yuvraj Singh',
      C: 'Ajit Agarkar',
      ANS: 'Yuvraj Singh',
    },
    {
      Q: 'Who was the captain of Indian Cricket Team in World Cup 2011?',
      A: 'Mahendra Singh Dhoni',
      B: 'Sourav Ganguly',
      C: 'Virat Kohli',
      ANS: 'Mahendra Singh Dhoni',
    },
    {
      Q: 'Who is the prime minister of india ?',
      A: 'Atal Bihari Vajpayee',
      B: 'Amit Shah',
      C: 'Narendra Modi',
      ANS: 'Narendra Modi',
    },
    {
      Q: 'Which is the capital city of karnataka ?',
      A: 'Bengaluru',
      B: 'Mysore',
      C: 'Chitradurga',
      ANS: 'Bengaluru',
    },
    {
      Q: 'Which is the Karnataka state anthem ?',
      A: 'Jana Gana Mana',
      B: 'Jaya Bharata Jananiya Tanujate',
      C: 'Vande Matharam',
      ANS: 'Jaya Bharata Jananiya Tanujate',
    },
  ];
  const activeItem = useCallback(
    (v, item) => {
      setVal(v);
      if (item) {
        console.log(item[v], item.ANS);
        if (item[v] === item.ANS) {
          setValidateAns(validateAns + 1);
          console.log(validateAns);
        }
      }
    },
    [validateAns]
  );
  const activePage = useCallback(
    (a) => {
      if (page <= 5) {
        setPage(page + a);
      } else {
        setPage(1);
      }
    },
    [page]
  );
  const value = useMemo(
    () => ({
      val,
      page,
      arr,
      error,
      validateAns,
      activeItem,
      activePage,
      questions,
      setPage,
      setValidateAns,
      windowSize,
    }),
    [
      page,
      arr,
      windowSize,
      questions,
      validateAns,
      error,
      activePage,
      setPage,
      activeItem,
    ]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
