import styles from "../styles/Nav.module.css"

import data from "../data/data.json"

export default function Nav() {

    return (
        <nav className={styles.nav} >
            <div>
                <img src="https://portfolio-flavien-rousseau.netlify.app/src/assets/renard-logo.png" alt="" />
            </div>
           <ul>
            <li>
                <a title="mon github" href={data["link-github"]} target="blank_">
                    <img src="../src/assets/github-mark-white.png" alt="" />
                </a>
            </li>
            <li>
                <a title="mon linkdin" href={data["link-linkdin"]} target="blank_">
                    <img src="../src/assets/linkedin-white.png" alt="" />
                </a>
            </li>
            <li>
                <a title="contactez moi par mail" href="#contacts">
                    <img src="../src/assets/email-blanc.png" alt="" />
                </a>
            </li>
           </ul>
        </nav>
    )
}