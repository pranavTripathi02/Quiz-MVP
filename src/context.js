import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [correctQuestions, setCorrectQuestions] = useState([]);
  const [answered, setAnswered] = useState(0);
  const [alert, setAlert] = useState({
    show: false,
    text: '',
    type: 'danger',
  });
  const showAlert = ({ text, type = 'danger' }) => {
    setAlert({ show: true, text, type });
  };
  const hideAlert = () => {
    setAlert({ show: false, text: '', type: 'danger' });
  };
  return (
    <AppContext.Provider
      value={{
        score,
        setScore,
        answered,
        setAnswered,
        showAlert,
        hideAlert,
        alert,
        correctQuestions,
        setCorrectQuestions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
