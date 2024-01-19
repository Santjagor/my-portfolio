import styles from './Technologies.module.css'
import { technologies } from '../../Data/Technologies'

export default function Technologies(props) {
    return (
        <div className={styles.section}>
            {technologies.map(tech => {
                return (<img
                    key={tech.name}
                    name={tech.name}
                    onMouseEnter={props.changeTitle}
                    onMouseLeave={props.changeTitle}
                    className={styles.image}
                    src={tech.image}
                    alt={tech.name}
                />)
            })}
        </div>
    )
}