import { useState } from 'react'
import './App.css'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Components/Home'
import Number from './Components/Number'
import Word from './Components/Word'
import WordColor from './Components/WordColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to={'/home'}></Link>
      <Link to={'/:number'}></Link>
      <Link to={'/:word'}></Link>
      <Link to={'/:word/:color/:background'}></Link>



      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:number' element={<Number/>}/>
        <Route path='/:word' element={<Word/>}/>
        <Route path='/:word/:color/:background' element={<WordColor/>}/>


      </Routes>
      
    </>
  )
}

export default App
