import styles from './About.module.css'
import { aboutMe } from '../../Data/AboutMe'

export default function AboutMe(props) {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>{aboutMe.welcome.title}</h1>
                <p className={styles.text}>{aboutMe.welcome.body}</p>
                <div className={styles.social}>
                    {aboutMe.social.map(e => {
                        return (
                            <a key={e.name} href={e.link} target={"_blank"} >
                                <img
                                    name={e.name}
                                    onMouseEnter={props.changeTitle}
                                    onMouseLeave={props.changeTitle}
                                    className={styles.socialImage}
                                    src={e.image}
                                    alt={e.name} />
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}