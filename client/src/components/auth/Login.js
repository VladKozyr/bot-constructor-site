import React, {useEffect, useState} from "react"
import {Button, Input} from "antd";
import {loginUser} from "../../_actions/auth_actions";
import {connect} from "react-redux";
import useInputValue from "../../utils/hooks/useInputValue";
import {Link} from "react-router-dom";
import gear1 from "./assets/gear1.png";
import gear2 from "./assets/gear2.png";
import "./login.css"

function Login({loginUser, error}) {

    useEffect(() => {

    }, []);

    const email = useInputValue();
    const password = useInputValue();

    return (
        <div>
            <img src={gear1} alt="gear1" className="gear-grey" />
            <img src={gear2} alt="gear2" className="gear-red" />
            <style>{'body { background-color: #FEFBFB; }'}</style>

            <div className="login-form">
                <p className="header">Sign in</p>
                <p className="field-name">E-mail:</p>
                <Input style={{width: '80%'}}
                   className="text-field"
                   placeholder={"your email"}
                   value={email.bind.value}
                   onChange={email.bind.onChange}
                />
                <p className="field-name">Password:</p>
                <Input.Password style={{width: '80%'}}
                                className="text-field"
                                placeholder={"your password"}
                                value={password.bind.value}
                                onChange={password.bind.onChange}
                />
                <p align="center" className="small-text">
                    Don't have an account yet?&nbsp;
                    <Link className="link" to={"/register"}>
                        Sign up
                    </Link>
                </p>
                <Button type="primary"
                        block
                        className="register"
                        shape="round"
                        onClick={() => loginUser(email.bind.value, password.bind.value)}
                        style={{marginTop: "20px", marginRight: "20px"}}>
                    Sign in
                </Button>
                <p>{error}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.user.error
    }
};

const mapDispatchToProps = {
    loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);