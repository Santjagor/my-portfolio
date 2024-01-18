import styles from './Technologies.module.css'

export default function Overlay(props) {
    const technologies = [
        { name: "JavaScript", src: "JavaScript.png" },
        { name: "NodeJS", src: "Node.png" },
        { name: "React", src: "React.png" },
        { name: "Redux", src: "Redux.png" },
        { name: "ExpressJS", src: "ExpressJS.png" },
        { name: "PostgreSQL", src: "Postgresql.png" },
    ]
    return (
        <div className={styles.section}>
            {technologies.map(tech => {
                return (<img
                    name={tech.name}
                    onMouseEnter={props.changeTitle}
                    onMouseLeave={props.changeTitle}
                    className={styles.image}
                    src={tech.src}
                    alt={tech.name}
                />)
            })}
        </div>
    )
}