import styles from "../styles/NavBarFix.module.css"

import data from "../data/data.json"

export default function NavBarFix() {

    

    return (
        <section className={styles.navBarFix} >
            <ul>
                <li>
                    <a title="mon github" href={data.github.link} target="blank_">
                        <img className={styles.iconNav} src={data.github.image} alt="github" />
                    </a>
                </li>
                <li>
                    <a title="mon linkdin" href={data.linkedin.link} target="blank_">
                        <img className={styles.iconNav} src={data.linkedin.image} alt="linkdin" />
                    </a>
                </li>
                <li>
                    <a title="contactez moi par mail" href="#contacts">
                        <img className={styles.iconNav} src="/public/mail-icon.webp" alt="mail" />
                    </a>
                </li>
            </ul>
                <a href="#top" title="retour au top">
                    <img className={styles.iconTop} src="/public/arrow-white.webp" alt="flèche vers le haut" />
                </a>
        </section>
    )
}