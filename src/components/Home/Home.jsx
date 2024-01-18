import styles from './Home.module.css'
import { useState } from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Technologies from '../Technologies/Technologies'

export default function Overlay() {
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
        <div>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.name}>Santiago Martin Solavaggione</div>
                    <div className={styles.title}>{title}</div>
                    {section}
                    <div className={styles.nav}>
                        <img
                            name="About me"
                            className={styles.navButton}
                            onClick={changeSection}
                            src="AboutMe.svg"
                            alt="AboutMe" />
                        <img
                            name="Projects"
                            className={styles.navButton}
                            onClick={changeSection}
                            src="Projects.svg"
                            alt="Projects" />
                        <img
                            name="Technologies"
                            className={styles.navButton}
                            onClick={changeSection}
                            src="Technologies.svg"
                            alt="Technologies" />
                    </div>
                </div>
            </div>
        </div>
    )
}