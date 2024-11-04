import styles from "../styles/Contact.module.css"
import ContactFormulaire from "./ContactFormulaire"
// import Networks from "./Networks"
import TitleContact from "./TitleContact"

export default function Contact() {

    return (
        <section id="contacts" className={styles.contact} >
            <div className={styles.titleContact} >
                <TitleContact/>
            </div>
            <div className={styles.contacts} >
            <ContactFormulaire/>
            {/* <Networks/> */}
            </div>
        </section>
    )
}