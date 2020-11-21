import React from "react"
import styles from "./header.module.css"
import Logo from "./sections/Logo";
function Header() {
    return (
        <div className={styles["header"]}>
            <Logo/>
        </div>
    )
}

export default Header;