import styles from "../styles/Resume.module.css"

export default function Resume() {

    return (
        <div className={styles.resume} >
            <figure>
                <img src="https://portfolio-flavien-rousseau.netlify.app/src/assets/CV-DEV-10.2024.webp" alt="" />
            </figure>
            <button>Télécharger le CV</button>
        </div>
    )
}
