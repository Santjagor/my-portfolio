import styles from './Home.module.css'
import { useState } from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Technologies from '../Technologies/Technologies'

export default function Overlay() {
    const [section, setSection] = useState(<About></About>)
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.name}>Santiago Martin Solavaggione</div>
                    <div className={styles.fswd}>Full Stack Web Developer</div>
                    {section}
                    <div className={styles.nav}>
                        <div className={styles.navButton} onClick={() => setSection(<About></About>)}></div>
                        <div className={styles.navButton} onClick={() => setSection(<Projects></Projects>)}></div>
                        <div className={styles.navButton} onClick={() => setSection(<Technologies></Technologies>)}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}