import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quizze from './Pages/Quizze/Quizze';
import Result from './Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="App" style={{backgroundColor: '#d5c2d6'}}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} />
          <Route path="/quizze" element={<Quizze name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>} />
          <Route path="/result" element={<Result name={name} score={score}/>} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
