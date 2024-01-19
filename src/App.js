import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function App() {
  const [title, setTitle] = useState("Full Stack Web Developer")
  const navigate = useNavigate()
  const location = useLocation()
  const changeSection = (event) => {
    if (event.target.name === 'About me') {
      navigate('/')
      setTitle('/Full Stack Web Developer')
    } else if (event.target.name === 'Projects') {
      navigate('/projects')
      setTitle('/Proyectos')
    } else if (event.target.name === 'Technologies') {
      navigate('/technologies')
      setTitle('/Tecnologías')
    }
  }
  const changeTitle = (event) => {
    if (event.type === "mouseenter") {
      setTitle('/' + event.target.name)
    } else if (event.type === "mouseleave") {
      resetTitle()
    }
  }
  const resetTitle = () => {
    if (location.pathname === "/") {
      setTitle('/Full Stack Web Developer')
    } else if (location.pathname === "/projects") {
      setTitle('/Proyectos')
    } else if (location.pathname === "/technologies") {
      setTitle('/Tecnologías')
    }
  }
  return (
    <div className="App">
      <div className="texture"></div>
      <div className="box">
        <div className="name">Santiago Martin Solavaggione</div>
        <div className="title">{title}</div>
        <Routes>
          <Route path='/' element={<About changeTitle={changeTitle}></About>} ></Route>
          <Route path='/projects' element={<Projects changeTitle={changeTitle}></Projects>}></Route>
          <Route path='/technologies' element={<Technologies changeTitle={changeTitle}></Technologies>} ></Route>
        </Routes>
        <Navbar changeSection={changeSection}></Navbar>
      </div>
    </div>
  );
}

export default App;
