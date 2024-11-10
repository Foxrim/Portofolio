import styles from "../styles/Nav.module.css"

import data from "../data/data.json"

export default function Nav() {

    return (
        <nav className={styles.nav} >
            <div>
                <img src="https://portfolio-flavien-rousseau.netlify.app/renard-logo.png" alt="renard" />
            </div>
           <ul>
            <li>
                <a title="mon github" href={data.github.link} target="blank_">
                    <img src={data.github.image} alt="github" />
                </a>
            </li>
            <li>
                <a title="mon linkdin" href={data.linkedin.link} target="blank_">
                    <img src={data.linkedin.image} alt="linkedin" />
                </a>
            </li>
            <li>
                <a title="contactez moi par mail" href="#contacts">
                    <img src="https://portfolio-flavien-rousseau.netlify.app/mail-icon.webp" alt="mail" />
                </a>
            </li>
           </ul>
        </nav>
    )
}