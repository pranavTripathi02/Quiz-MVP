import React, { useState } from 'react';
import QuestionRow from '../components/QuestionRow';
import { useGlobalContext } from '../context';

export default function Results() {
  const { score } = useGlobalContext();
  const [showStat, setShowStat] = useState(false);
  const toggleaAnalytics = () => {
    setShowStat(!showStat);
  };
  return (
    <>
      <div className='container'>
        <h2 className='text-center my-5'>results</h2>
        <div className='card p-3'>
          <h3>Math</h3>
          <h5>Score: {score * 10}/100</h5>
        </div>
        <button onClick={toggleaAnalytics} className='btn btn-sm d-flex'>
          view analytics
        </button>
        {showStat && <div className='container m-5'>to be added</div>}
      </div>
    </>
  );
}
