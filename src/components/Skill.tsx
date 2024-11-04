import styles from "../styles/Skill.module.css"
import SkillConfig from "../types/types.ts"

export default function Skill( {icon, name, level} : SkillConfig) {

    return (
        <div className={styles.skillCard} >
            <figure>
                <img src={icon} alt={name} />
            </figure>
            <h4>{name}</h4>
            <p>{level}</p>
        </div>
    )
}