import styles from './Navbar.module.css'
import { useLocation } from 'react-router'

export default function Navbar({ changeSection }) {
    const location = useLocation()
    return (
        <div className={styles.nav}>
            <img
                name="About me"
                className={location.pathname === '/' ? styles.navButtonActive : styles.navButton}
                onClick={changeSection}
                src="AboutMe.svg"
                alt="AboutMe"
            />
            <img
                name="Projects"
                className={location.pathname === '/projects' ? styles.navButtonActive : styles.navButton}
                onClick={changeSection}
                src="Projects.svg"
                alt="Projects"
            />
            <img
                name="Technologies"
                className={location.pathname === '/technologies' ? styles.navButtonActive : styles.navButton}
                onClick={changeSection}
                src="Technologies.svg"
                alt="Technologies"
            />
        </div>
    )
}