import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path='/about' element={<About />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </Router>
  )
}

export default App
