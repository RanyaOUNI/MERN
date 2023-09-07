import React from 'react'
import { useParams } from 'react-router-dom'


const WordColor = (props) => {

    const {word} = useParams()
    const {color} = useParams()
    const {background} = useParams()


    return (

        <h2 style={{backgroundColor:background,color:color}}>The word is: {word}</h2>
    )
}

export default WordColor
