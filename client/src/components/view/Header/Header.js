import React from "react"
import styles from "./header.module.css"
import Logo from "./sections/Logo";
import {connect} from "react-redux";
import {Button} from "antd";
import {withRouter} from "react-router";

function Header({isAuth, history}) {
    return (
        <div className={styles["header"]}>
            <Logo/>
            {isAuth ? <span>MY NAME</span> :
                <div className={styles["header-profile"]}>
                    <Button onClick={() => history.push("/login")}>SIGN IN</Button>
                    <Button onClick={() => history.push("/register")}>SIGN UP</Button>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.user.authenticated
    }
};

export default connect(mapStateToProps)(withRouter(Header));