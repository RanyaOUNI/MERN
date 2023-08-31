import './App.css';
import FirstClassComponent from './components/FirstClassComponent';

//* Method 1 : 

// function App() {
//   return (
//     <div className="App">
//       <fieldset>
//         <legend>App.js</legend>
//         <h2>Hello Dojo !</h2>
//         <h4>Things I need to do</h4>
//         <p>Learn React</p>
//         <p>Climb Mt Everest</p>
//         <p>Run a marathon</p>
//         <p>Feed the dogs</p>
//       </fieldset>
//     </div>
//   );
// }

//************************************************************/

//* Method 2 : 

// function App() {
//   const message1 = "Hello Dojo !"
//   const message2 = "Things I need to do"
//   const paragraphs = ["Learn React","Climb Mt Everest","Run a marathon","Feed the dogs"]
//   return (
//     <div className="App">
//       <fieldset>
//         <legend>App.js</legend>
//         <h2>{message1}</h2>
//         <h4>{message2}</h4>
//         {/* <p>{paragraphs}</p> */}
//         {paragraphs.map((paragraph,index)=>{
//           return(
//             <li key ={index}>{paragraph}</li>
//           )
//         })}

//       </fieldset>
//     </div>
//   );
// }

//*************************************************************/

//* Method 3 : 

function App() {
  return (
    <div className="App">
    <FirstClassComponent/>
    </div>
  );
}


export default App;
