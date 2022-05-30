import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { QuestionList, Results, Home } from './pages/index.js';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questions' element={<QuestionList />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
