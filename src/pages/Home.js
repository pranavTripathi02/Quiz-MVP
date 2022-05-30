import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='container shadow p-5 border rounded m-auto my-5 text-center justify-contents-center'>
        <h1 className='p-2 text-uppercase'>mcq test mvp</h1>
        <h2 className='p-2'>begin test</h2>
        <div className='m-auto p-3'>
          <Link
            to='/questions'
            className='btn btn-lg btn-primary text-uppercase p-auto'
          >
            start
          </Link>
        </div>
      </div>
    </>
  );
}
