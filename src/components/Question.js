import {useState, useEffect } from 'react'

const Question = () => {
    function handleClick() {
        console.log('hi')
    }

    return (
        <div className="question-wrapper">
            <h2 className='question-title'>How would one say goodbye in Spanish?</h2>
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