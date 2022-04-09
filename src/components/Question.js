import React from 'react'

const Question = (props) => {
    const {question, choices} = props

    console.log(question.replaceAll({'&quot;': '"', "&#039;": "'"}))

    const buttonElements = choices.map((choice, i) => {
        return <button key={i} className="btn">{choice}</button>
    })

    return (
        <div className="question-wrapper">
            <h2 className='question-title'>{question.replaceAll('&quot;', '"').replace("&#039;", "'")}</h2>
            <div className="buttons-wrapper">
                {buttonElements}
            </div>  
        </div>
    )
}

export default Question