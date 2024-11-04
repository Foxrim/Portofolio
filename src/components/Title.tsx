import styles from "../styles/Title.module.css"

export default function Title() {

    return (
        <div className={styles.titleDescriptionContainer} >
            <h1>Bienvenue.</h1>
            <div className={styles.description} >
                <p>Je m'appel <a href="#about">Flavien</a>. Je suis développeur <strong>Full Stack</strong>  situé en France, Vendée, Saint Denis la Chevasse. Passioné par le développement, je me spécialise dans le <strong>développement web</strong>.</p>
                <br />
                <p>Chaque jours est une nouvelle occasion pour affiner mon code.</p>
            </div>
            <hr className={styles.titleHrRight} />
            <hr className={styles.titleHrBottom}/>
        </div>
    )
}