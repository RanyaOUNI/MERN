import React from 'react'
import { useParams } from 'react-router-dom'

const Word = (props) => {
    const {word} = useParams();
    return (
        <h1 style={{color:"purple"}}>{word}</h1>
    )
}

export default Word
