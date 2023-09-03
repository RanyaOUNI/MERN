import './App.css'
import PersonCardComponent from './Components/PersonCardComponent';

function App() {

      const persons = [
      {
      first_name:"John",
      last_name:"Doe",
      age:45,
      hair_color:"Black"
      },
      {
        first_name:"John",
        last_name:"Smith",
        age:88,
        hair_color:"Brown"
        },
        {
          first_name:"Fillmore",
          last_name:"Millard",
          age:50,
          hair_color:"Brown"},

          {
            first_name:"Maria",
            last_name:"Smith",
            age:62,
            hair_color:"Brown"
            }
    ]

    return (
      <div className="App">
        {persons.map((p,i)=>
        <PersonCardComponent key={i}
                    FirstName={p.first_name} 
                    LastName={p.last_name} 
                    Age={p.age}
                    HairColor={p.hair_color}
                    />
                    )}
        
      </div>
    );



}

export default App;
