import styles from './Navbar.module.css'

export default function Navbar({ changeSection }) {
    return (
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
    )
}