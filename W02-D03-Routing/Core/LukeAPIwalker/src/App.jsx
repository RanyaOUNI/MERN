import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import People from './Components/People'
import Planet from './Components/Planet'
import Search from './Components/Search'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Link to={'/people'}></Link>
    <search/>

      <Routes>
        <Route path='/people' element={<People/>}/>
        <Route path='/planet' element={<Planet/>}/>
      </Routes>

      
    </>
  )
}

export default App
