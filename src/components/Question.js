import React from 'react'
import Button from '../components/Button'

const Question = (props) => {
    const {question, choices, correctAnswer, selectAnswer, id} = props

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

    const buttonElements = shuffle(choices).map((choice, i) => {
        return (
            <Button
                key={i}
                // id={id}
                className="btn"
                selectAnswer={(event) => selectAnswer(event, id)}
                choice={choice.replaceAll('&quot;', '"').replaceAll("&#039;", "'")}> 
            </Button>

        )
    })

    return (
        <div className="question-wrapper">
            <h2 className='question-title'>{question.replaceAll('&quot;', '"').replaceAll("&#039;", "'")}</h2>
            <div className="buttons-wrapper">
                {buttonElements}
            </div>  
        </div>
    )
}

export default Question