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
              return {...question, id: nanoid(), choices: choicesArr}
            })
            // Set our questions state
            setQuestions(questionsData)
          })
  }, [])

  const questionElements = questions.map(q => {
    return <Question key={q.id} question={q.question} choices={q.choices} />
  })

  return (
    <div>
      {questionElements}
    </div>
  )

}

export default App


/*
Object Structure:

category: "Entertainment: Video Games"
choices: (4) ['Ferrari FXX-K', 'McLaren P1 GTR', 'Lotus E23', 'Aston Martin Vulcan']
correct_answer: "Aston Martin Vulcan"
difficulty: "medium"
id: "li2BY_jcEvg1mrIAlUemE"
incorrect_answers: (3) ['Ferrari FXX-K', 'McLaren P1 GTR', 'Lotus E23']
question: "In Forza Motorsport 6, which of these track-exclusive cars was NOT featured in the game, either originally with the game or added as DLC?"
type: "multiple"
*/ 