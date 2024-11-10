import styles from "../styles/Nav.module.css"

import data from "../data/data.json"

export default function Nav() {

    return (
        <nav className={styles.nav} >
            <div>
                <img src="/public/renard-logo.png" alt="" />
            </div>
           <ul>
            <li>
                <a title="mon github" href={data.github.link} target="blank_">
                    <img src={data.github.image} alt="" />
                </a>
            </li>
            <li>
                <a title="mon linkdin" href={data.linkedin.link} target="blank_">
                    <img src={data.linkedin.image} alt="" />
                </a>
            </li>
            <li>
                <a title="contactez moi par mail" href="#contacts">
                    <img src="/public/mail-icon.webp" alt="" />
                </a>
            </li>
           </ul>
        </nav>
    )
}