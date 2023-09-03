import React, { Component } from 'react'

class PersonCardCompnent extends Component {
    render() {
        console.log("This is this : ",this);
        // rest-spread opera
        const persons = [...this.props.persons]
        return (
        <fieldset>
            {persons.map((person,idx) => {return(
                <div key={idx}>
                    <h3>{person.last_name},{person.first_name}</h3>
                    <p>Age : {person.age}</p>
                    <p>Hair Color : {person.hair_color}</p>
                </div>
            )})}
        </fieldset>
    )
}
}

export default PersonCardCompnent;
