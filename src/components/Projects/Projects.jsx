import styles from './Projects.module.css'
import { projects } from '../../Data/Data'

export default function Overlay(props) {
    return (
        <div className={styles.section}>
            {projects.map(prct => {
                return (
                    <div key={prct.name} className={styles.project}>
                        <a href="https://supermarketshop.vercel.app/" target='_blank'>
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
                            <p className={styles.text}>{prct.description}</p>
                            <div className={styles.technologies}>
                                {prct.technologies.map(tech => {
                                    return (<img key={tech.name} className={styles.technologyImage} src={tech.image} alt={tech.name} />)
                                })}
                            </div>
                        </div>
                    </div>)
            })}
        </div>
    )
}