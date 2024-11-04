import styles from "../styles/ContactFormulaire.module.css"

export default function ContactFormulaire() {

    return (
        <form className={styles.formulaire} >
            <fieldset>
                <legend>Nom</legend>
                    <input className={styles.nameMail} placeholder="Votre nom..."  type="text" />
            </fieldset>
            <fieldset>
                <legend>Email</legend>
                    <input className={styles.nameMail} placeholder="Votre email..." type="text" />
            </fieldset>
            <fieldset className={styles.fieldsetContent}>
                <legend >Message</legend>
                    <textarea className={styles.content} placeholder="Votre message..." />
            </fieldset>
            <button>Envoyer</button>
        </form>
    )
}