import React, { useState, useEffect } from 'react';
import QuestionRow from '../components/QuestionRow';
import questionsJson from '../questions.json';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

export default function QuestionList() {
  const {
    setCorrectQuestions,
    answered,
    setAnswered,
    alert,
    showAlert,
    hideAlert,
  } = useGlobalContext();
  const [submit, setSubmit] = useState(false);
  // console.log(questionsJson);
  const handleSubmit = (e) => {
    e.preventDefault();
    hideAlert();
    if (answered === 10) setSubmit(true);
    else showAlert({ text: 'please answer all questions', type: 'danger' });
    // console.log('answered: ', answered);
  };

  useEffect(() => {
    hideAlert();
  }, [answered]);

  useEffect(() => {
    setAnswered(0);
    setCorrectQuestions([]);
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
    // console.log(windowWidth);
  });

  return (
    <>
      {submit && <Navigate to='/results' />}
      <div className='container-fluid col-md-10 col-lg-5 mt-5'>
        <h2>test</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, ipsa!
        </p>
        <h4 className='text-secondary subject'>subject: Math</h4>
        {windowWidth >= 700 && (
          <div className='text-center my-5'>
            {questionsJson.map((item) => {
              return <QuestionRow key={item._id} value={item} type='test' />;
            })}
            <div className='px-5 container-fluid w-50'>
              {alert.show && (
                <div className={`mt-2 alert alert-${alert.type}`}>
                  {alert.text}
                </div>
              )}
              <button
                to='/results'
                className='btn btn-lg btn-dark my-3'
                type='submit'
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {windowWidth < 700 && (
          <div className='container-fluid text-center my-5'>
            <h2>please increase the size of the window</h2>
          </div>
        )}
      </div>
    </>
  );
}
