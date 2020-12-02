import React from 'react'
import AnswersList from './AnswersList'
import classes from './ActiveQuiz.module.css'

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p  className={classes.Question}>
            <span>
                <strong>2. </strong>
                Как дела?
            </span>
            <small>4 из 12</small>
        </p>
        <AnswersList
            answers={props.answers}
        />
    </div>
)

export default ActiveQuiz;
