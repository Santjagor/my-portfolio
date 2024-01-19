import styles from './About.module.css'
import { aboutMe } from '../../Data/AboutMe'

export default function AboutMe(props) {
    return (
        <div className={styles.section}>
            {aboutMe.sections.map(e => {
                if(e.id % 2 !== 0){
                    return (
                        <div key={e.id} className={styles.container1}>
                            <img className={styles.image} src={e.image} alt={e.name} />
                            <div className={styles.info}>
                                <h1 className={styles.title}>{e.title}</h1>
                                <p className={styles.text}>{e.body}</p>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div key={e.id} className={styles.container2}>
                            <div className={styles.info}>
                                <h1 className={styles.title}>{e.title}</h1>
                                <p className={styles.text}>{e.body}</p>
                            </div>
                            <img className={styles.image} src={e.image} alt={e.name} />
                        </div>
                    )
                }
            })}
            <div className={styles.social}>
                {aboutMe.social.map(e => {
                    return (
                        <a href={e.link} target={"_blank"} >
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
    )
}