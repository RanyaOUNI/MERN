import React, { useState } from 'react'
import Display from './Display'


const Form = () => {

    const [FirstName,setFirstName] = useState('')
    const [LastName,setLastName] = useState('')
    const [Email,setEmail] = useState('')
    const [Passsword,setPassword] = useState('')
    const [ConfirmPassword,setConfirmPassword] = useState('')
    const newUser = {FirstName,LastName,Email,Passsword,ConfirmPassword}
  


    return (
        <>
        <form onSubmit={(e)=> e.preventDefault}>
            <p> First Name : <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={FirstName} /></p>
            <p> Last Name : <input type="text" onChange={ (e) => setLastName(e.target.value) } value={LastName}/></p>
            <p> Email : <input type="text" onChange={ (e) => setEmail(e.target.value) } value={Email}/></p>
            <p> Password : <input type="text" onChange={ (e) => setPassword(e.target.value) } value={Password}/></p>
            <p> Confirm Password : <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value={ConfirmPassword}/></p>
            <input type="submit" value="Create User"/>


        </form>
        <hr />
        <Display FirstName={FirstName} LastName={LastName} Email={Email} Password={Password}/>


        </>
    )
}

export default Form;

