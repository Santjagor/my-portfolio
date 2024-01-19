import styles from './Technologies.module.css'

export default function Overlay(props) {
    const technologies = [
        { name: "JavaScript", image: "JavaScript.png" },
        { name: "NodeJS", image: "Node.png" },
        { name: "React", image: "React.png" },
        { name: "Redux", image: "Redux.png" },
        { name: "Bootstrap", image: "Bootstrap.png" },
        { name: "ExpressJS", image: "ExpressJS.png" },
        { name: "PostgreSQL", image: "Postgresql.png" },
        { name: "Photoshop", image: "PSD.png" },
        { name: "AfterEffects", image: "AfterEffects.png" },
        { name: "CorelDraw", image: "CorelDraw.png" },
        { name: "VegasPro", image: "VegasPro.png" },
        { name: "Excel", image: "Excel.png" },
        { name: "Word", image: "Word.png" },
    ]
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