import React from 'react'
import { useParams } from 'react-router-dom'


const Number = (props) => {
    const {number} = useParams();
    return (
        <h1 style={{color:"purple"}}>{number}</h1>
    )
}

export default Number
