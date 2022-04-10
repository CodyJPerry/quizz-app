import logo from './logo.svg';
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import './App.css';
import LandingPage from './components/LandingPage';
import Question from './components/Question'

function App() {
  const [isStarted, setIsStarted] = useState(true)
  const [questions, setQuestions] = useState([])

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  // Get our questions data from the API and store it in state
  useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple')
          .then(res => res.json())
          .then(data => {
              const questionsData = data.results.map(question => {
              const choicesArr = shuffle(question.incorrect_answers.concat(question.correct_answer))
              return {...question, id: nanoid(), choices: choicesArr}
            })
            // Set our questions state
            setQuestions(questionsData)
          })
  }, [])

  function selectAnswer(event, id) {
    // Since we are getting the event passed in we want to grab the button text and compare it
      // Then update the selectedAnswer property in state
    setQuestions(prevQuestions => prevQuestions.map(question => {
      return question.id === id 
             ? {...question, selection: { isSelected: true, userAnswer: event.target.textContent.toLowerCase() }} 
             : question
    }))
  }

  console.log(questions)

  const questionElements = questions.map(q => {
    return <Question 
              key={q.id} 
              // id={q.id}
              question={q.question} 
              choices={q.choices} 
              correctAnswer={q.correct_answer}
              selectAnswer={(event) => selectAnswer(event, q.id)}
          />
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