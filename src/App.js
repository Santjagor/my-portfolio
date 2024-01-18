import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("Full Stack Web Developer")
  const navigate = useNavigate()
  const location = useLocation()
  const changeSection = (event) => {
    if (event.target.name === 'About me') {
      navigate('/')
      setTitle("/Full Stack Web Developer")
    }
    if (event.target.name === 'Projects') {
      navigate('/projects')
      setTitle("/Projects")
    }
    if (event.target.name === 'Technologies') {
      navigate('/technologies')
      setTitle("/Technologies")
    }
  }
  const changeTitle = (event) => {
    if (event.type === "mouseenter") {
      setTitle('/' + event.target.name)
    }
    if (event.type === "mouseleave") {
      setTitle('/Technologies')
    }
  }
  return (
    <div className="App">
      <div className="box">
        <div className="name">Santiago Martin Solavaggione</div>
        <div className="title">{title}</div>
        <Routes>
          <Route path='/' element={<About></About>} ></Route>
          <Route path='/projects' element={<Projects></Projects>} ></Route>
          <Route path='/technologies' element={<Technologies changeTitle={changeTitle}></Technologies>} ></Route>
        </Routes>
        <Navbar changeSection={changeSection}></Navbar>
      </div>
    </div>
  );
}

export default App;
