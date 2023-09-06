import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend>
                <h3>Form Data</h3>
            </legend>

            <div>

                <p>First Name: {props.FirstName}</p>
                <p>Last Name: {props.LastName}</p>
                <p>Email: {props.Email}</p>
                <p>Password: {props.Password}</p>

            </div>

        </fieldset>
    )
}

export default Display