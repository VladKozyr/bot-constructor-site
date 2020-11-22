import React from "react"
import {Switch, Route} from "react-router-dom";
import Button from "antd";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logoutUser} from "../_actions/auth_actions";


function Main({logoutUser}) {
    return (
        <div>
            <Link to={"/"} onClick={() => logoutUser()}>
                LOGOUT
            </Link>
        </div>
    )
}

const mapDispatchToProps = {
    logoutUser
};

export default connect(null, mapDispatchToProps)(Main);