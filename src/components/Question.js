import React from 'react'
import Button from '../components/Button'

const Question = (props) => {
    const {question, choices, correctAnswer, selectAnswer, id} = props

    const buttonElements = choices.map((choice, i) => {
        return (
            <Button
                key={i}
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