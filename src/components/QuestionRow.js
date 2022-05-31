import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context.js';

export default function QuestionRow({ type, value }) {
  const {
    correctQuestions,
    setCorrectQuestions,
    answered,
    setAnswered,
    setScore,
    score,
  } = useGlobalContext();
  const [state, setState] = useState('');
  const { title, ans } = value;
  const options = [
    { name: 'A', _id: 1 },
    { name: 'B', _id: 2 },
    { name: 'C', _id: 3 },
    { name: 'D', _id: 4 },
  ];
  const handleMouseEnter = (e) => {
    if (state === '') e.target.style.background = 'grey';
  };
  const handleMouseLeave = (e) => {
    if (state === '') e.target.style.background = '#dddcdca9';
  };

  const checkAnswer = (e, num) => {
    if (state === '') {
      e.target.style.background = 'black';
      e.target.style.color = 'white';
      // console.log(num);
      // console.log(ans);
      if (num === ans) {
        setState('Correct');
        setScore(score + 1);
        setCorrectQuestions([...correctQuestions, 1]);
        // console.log(correctQuestions;
      } else {
        setState('Incorrect');
        setCorrectQuestions([...correctQuestions, 0]);
      }
      // console.log('score: ', score);
      // console.log(state);
      setAnswered(answered + 1);
    }
    // else console.log('state exists');
  };

  return (
    <>
      <div className='container-fluid text-center question-bg'>
        {type === 'test' && (
          <div className='d-flex p-5'>
            <h4>{title}</h4>
            <div className='btn-group'>
              {options.map((option) => {
                return (
                  <button
                    required
                    type='radio'
                    className='mx-5 btn btn-lg border border-dark rounded-circle option'
                    key={option._id}
                    // disabled={state ? true : null}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => {
                      checkAnswer(e, option._id);
                    }}
                  >
                    {option.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {/* {type === 'result' && Ques} */}
      </div>
    </>
  );
}
