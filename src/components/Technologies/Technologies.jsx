import styles from './Technologies.module.css'

export default function Overlay() {
    return (
        <div className={styles.section}>
            <img className={styles.image} src="JavaScript.png" alt="JS" />
                <img className={styles.image} src="Node.png" alt="Node" />
                <img className={styles.image} src="React.png" alt="React" />
                <img className={styles.image} src="Redux.png" alt="Redux" />
                <img className={styles.image} src="ExpressJS.png" alt="ExpressJS" />
                <img className={styles.image} src="Postgresql.png" alt="PostgreSQL" />
        </div>
    )
}