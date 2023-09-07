import React from 'react'
import { useParams } from 'react-router-dom'

const getValidColor = (color) => {
    const s = new Option().style;
    s.color = color;
    return s.color !== '' && color;
}

const WordColor = (props) => {
    const word = props.match.params.word;
    const color = getValidColor(props.match.params.color);
    const background = getValidColor(props.match.params.background);

    const style = {
        backgroundColor: background,color: color};

    return (

        <h2 style={style}>The word is: {word}</h2>
    )
}

export default WordColor
