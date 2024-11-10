import styles from "../styles/Resume.module.css"

export default function Resume() {

    return (
        <div className={styles.resume} >
            <figure>
                <img src="\public\CV-DEV-10.2024.webp" alt="CV à télécharger" />
            </figure>
            <button title="Téléchargement en cours de développement" >Télécharger le CV</button>
        </div>
    )
}
