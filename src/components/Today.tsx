import styles from "../styles/Today.module.css"

export default function Today() {

    return (
        <section className={styles.today} >
            <h2>Actuellement</h2>
            <p>Je suis en formation à la <a title="le site de la wild" href="https://www.wildcodeschool.com/fr-fr/" target="blank_">Wild Code School</a> 🔥</p>
        </section>
    )
}