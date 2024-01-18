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
            setSection(<Technologies></Technologies>)
            setTitle("Technologies")
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
                        <button name="About me" className={styles.navButton} onClick={changeSection}></button>
                        <button name="Projects" className={styles.navButton} onClick={changeSection}></button>
                        <button name="Technologies" className={styles.navButton} onClick={changeSection}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}