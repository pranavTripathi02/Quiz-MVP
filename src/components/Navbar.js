import React from 'react';
import { useGlobalContext } from '../context';
<con></con>;

export default function Navbar() {
  const { alert } = useGlobalContext();
  return (
    <>
      <nav className='navbar navbar-light bg-light px-3'>
        <a href='#' className='navbar-brand'>
          <img src='../logo.svg' alt='logo' />
        </a>
        {alert.show && (
          <div className={`text-center alert alert-${alert.type}`}>
            {alert.text}
          </div>
        )}
        <a href='#' className='navbar-brand'>
          <i className='fas fa-user' />
        </a>
      </nav>
    </>
  );
}
