import React from 'react'

const Question = (props) => {
    return (
        <div className="question-wrapper">
            <h2 className='question-title'>{props.question}</h2>
            <div className="buttons-wrapper">
                <button className="btn">One</button>
                <button className="btn">Two</button>
                <button className="btn">Three</button>
                <button className="btn">Four</button>
            </div>  
        </div>
    )
}

export default Question