import React from 'react'

const Button = (props) => {
    const {choices, choice, correctAnswer, selectAnswer, id, isSelected, isDisabled} = props
    return (
        <button
            className="btn" 
            onClick={(event) => selectAnswer(event, id)}>
            {choice.replaceAll('&quot;', '"').replaceAll("&#039;", "'")}
        </button>
    )
}

export default Button