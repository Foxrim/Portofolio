import Home from "./Home";
import Nav from "./Nav";
import Title from "./Title";

import styles from "../styles/Header.module.css"

export default function Header() {

    return (
        <>
        <header className={styles.header} >
            <Nav/>
            <div className={styles.titleHomeContainer} >
            <Title/>
            <Home/>
            </div>
        </header>
        </>
    )
}