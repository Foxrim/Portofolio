import styles from "../styles/About.module.css"
import Resume from "./Resume"
import SkillContainer from "./SkillContainer"
import TitleAbout from "./TitleAbout"

export default function About() {

    return (
        <section id="about" className={styles.about} >
            <div className={styles.titleAbout} >
                <TitleAbout/>
            </div>
            <div className={styles.skillResume} >
                <SkillContainer/>
                <hr className={styles.hrCenter} />
                <Resume/>
            </div>
        </section>
    )
}