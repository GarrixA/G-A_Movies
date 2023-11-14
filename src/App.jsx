import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import LeftSide from './Components/LeftSide';
import TopSide from './Components/TopSide';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home/>}/>
            <Route path='left' element={<LeftSide/>}/>
            <Route path='top' element={<TopSide/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
