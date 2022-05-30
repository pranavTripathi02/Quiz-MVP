import React, { useState, useEffect } from 'react';
import QuestionRow from '../components/QuestionRow';
import questionsJson from '../questions.json';
import { Navigate, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

export default function QuestionList() {
  const { answered, setAnswered, alert, showAlert, hideAlert } =
    useGlobalContext();
  const [submit, setSubmit] = useState(false);
  // console.log(questionsJson);
  const handleSubmit = (e) => {
    e.preventDefault();
    hideAlert();
    if (answered === 10) setSubmit(true);
    else showAlert({ text: 'Please Answer all questions', type: 'danger' });
  };
  useEffect(() => {
    setAnswered(0);
  }, []);
  return (
    <>
      {submit && <Navigate to='/results' />}
      <div className='container-fluid m-5 mx-auto px-5'>
        <h2>test</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, ipsa!
        </p>
        <h4 className='text-secondary subject'>subject: Math</h4>
        <div className='mx-5 my-5'>
          {questionsJson.map((item) => {
            return <QuestionRow key={item._id} value={item} type='test' />;
          })}
          {alert.show && (
            <div className={`col-5 mt-2 mx-5 alert alert-${alert.type}`}>
              {alert.text}
            </div>
          )}
          <div className='row col-2 my-5' style={{ marginLeft: '9rem' }}>
            <button
              to='/results'
              className='btn btn-lg btn-dark ms-5'
              type='submit'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
