import logo from './logo.svg';
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import './App.css';
import LandingPage from './components/LandingPage';
import Question from './components/Question'

function App() {
  const [isStarted, setIsStarted] = useState(true)
  const [questions, setQuestions] = useState([])

  // Get our questions data from the API and store it in state
  useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple')
          .then(res => res.json())
          .then(data => {
            const questionsData = data.results.map(question => {
              const choicesArr = question.incorrect_answers.concat(question.correct_answer)
              console.log(choicesArr)
              return {...question, id: nanoid(), choices: choicesArr}
            })
            // Set our questions state
            setQuestions(questionsData)
          })
  }, [])

  console.log(questions)

  const questionElements = questions.map(q => {
    return <Question question={q.question} />
  })

  return (
    <div>
      {questionElements}
    </div>
  )

}
export default App
