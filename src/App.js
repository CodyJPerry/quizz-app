import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import LandingPage from './components/LandingPage';
import Question from './components/Question'

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [questions, setQuestions] = useState([])

  // // Grab the JSON Data
  // useEffect(() => {
  //     fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple')
  //         .then(res => res.json())
  //         .then(data => {
  //             console.log(data.results)
  //             return setQuestions([...data.results])

  //         })
  // }, [questions])

  return (
    <div>
      {
      isStarted ? 
        <LandingPage /> : 
        <Question />
      }
    </div>
  );
}

export default App;
