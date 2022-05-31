import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuestionRow from '../components/QuestionRow';
import { useGlobalContext } from '../context';

export default function Results() {
  const { correctQuestions, score } = useGlobalContext();
  const length = correctQuestions.length;
  let i = 0;
  const [windowWidth, setWindowWidth] = useState(1500);
  const [showStat, setShowStat] = useState(false);
  const toggleaAnalytics = () => {
    setShowStat(!showStat);
  };
  if (!length) {
    return (
      <div className='container-fluid text-center m-5'>
        <h2>Attempt the questions first</h2>
        <Link to='/' className='btn btn-lg btn-success'>
          home
        </Link>
      </div>
    );
  }
  // useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  //   // if (windowWidth < 700) {
  //   //   setShowStat(false);
  //   // }
  // }, [window.innerWidth]);
  // if (windowWidth < 700) {
  //   setShowStat(false);
  // }
  return (
    <>
      <div className='container'>
        <h2 className='text-center my-5'>results</h2>
        <div className='card p-3'>
          <h3>Math</h3>
          <h5>Score: {score * 10}/100</h5>
        </div>
        <button
          onClick={toggleaAnalytics}
          className='btn btn-sm btn-primary d-flex'
        >
          view analytics
        </button>
        {showStat && (
          <div className='container text-center m-5'>
            <div className='row'>
              <h4 className='col-md-1 col-sm-1 mx-5'>question</h4>
              <h4 className='col-md-7 col-sm-1 mx-5'>status</h4>
              {correctQuestions.map((item, index) => {
                const stat = item ? 'Correct' : 'Incorrect';
                return (
                  <div key={index} className='row'>
                    <h4 className='col-md-1 col-sm-1 mx-5'>{index}</h4>
                    <h5 className='col-md-7 col-sm-2 mx-5'>
                      <span
                        className={`${item ? 'text-success' : 'text-danger'}`}
                      >
                        {stat}
                      </span>
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
