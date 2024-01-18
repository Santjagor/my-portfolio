import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'

function App() {
  const [section, setSection] = useState(<About></About>)
  const [title, setTitle] = useState("Full Stack Web Developer")
  const changeSection = (event) => {
    if (event.target.name === 'About me') {
      setSection(<About></About>)
      setTitle("Full Stack Web Developer")
    }
    if (event.target.name === 'Projects') {
      setSection(<Projects></Projects>)
      setTitle("Projects")
    }
    if (event.target.name === 'Technologies') {
      setSection(<Technologies changeTitle={changeTitle}></Technologies>)
      setTitle("Technologies")
    }
  }
  const changeTitle = (event) => {
    if (event.type === "mouseenter") {
      setTitle(event.target.name)
    }
    if (event.type === "mouseleave") {
      setTitle('Technologies')
    }
  }
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <div className="name">Santiago Martin Solavaggione</div>
          <div className="title">{title}</div>
          {section}
          <Navbar changeSection={changeSection}></Navbar>
        </div>
      </div>
    </div>
  );
}

export default App;
