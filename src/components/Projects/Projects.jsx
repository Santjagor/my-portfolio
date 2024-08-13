import styles from './Projects.module.css'
import { projects } from '../../Data/Projects'

export default function Projects(props) {
    return (
        <div className={styles.section}>
            {projects.map(prct => {
                return (
                    <div key={prct.name} className={styles.project}>
                        <a href={prct.link} target='_blank'>
                            <img
                                name={prct.name}
                                onMouseEnter={props.changeTitle}
                                onMouseLeave={props.changeTitle}
                                className={styles.projectImage}
                                src={prct.image}
                                alt={prct.name}
                            />
                        </a>
                        <div className={styles.info}>
                            <p className={styles.text}>
                                {
                                    prct.description.split('\n').map((line, index) => (
                                        <p key={index}>
                                            {line}
                                            <br />
                                        </p>
                                    ))
                                }
                            </p>
                            <div className={styles.technologies}>
                                {prct.technologies.map(tech => {
                                    return (<img key={tech.name} className={styles.technologyImage} src={tech.image} alt={tech.name} />)
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}