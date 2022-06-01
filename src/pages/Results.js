import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import QuestionRow from '../components/QuestionRow';
import { useGlobalContext } from '../context';

export default function Results() {
  const { correctQuestions, score } = useGlobalContext();
  const length = correctQuestions.length;
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
          className='m-2 btn btn-sm btn-primary d-flex'
        >
          view analytics
        </button>
        {showStat && (
          <div className='container text-center m-5'>
            <div className='row'>
              <div className='col-md-1 mx-5 float-sm-start h4'>questions</div>
              <div className='col-md-7 mx-5 float-sm-end h4'>status</div>
            </div>
            {correctQuestions.map((item, index) => {
              const stat = item ? 'Correct' : 'Incorrect';
              return (
                <div key={index} className='row'>
                  <div className='col-md-1 mx-5 float-sm-start h4'>
                    {index + 1}
                  </div>
                  <div className='col-md-7 mx-5 float-sm-end h4'>
                    <span
                      className={`${item ? 'text-success' : 'text-danger'}`}
                    >
                      {stat}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
