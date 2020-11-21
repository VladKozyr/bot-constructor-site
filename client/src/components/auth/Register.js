import React from "react"
import useInputValue from "../../utils/hooks/useInputValue";
import {registerUser} from "../../_actions/auth_actions";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import "./register.css"
import gear1 from "./assets/gear1.png"
import gear2 from "./assets/gear2.png"
import {Button, Input} from "antd";


function Register({registerUser, history}) {
    const name = useInputValue();
    const email = useInputValue();
    const password = useInputValue();
    const passwordProve = useInputValue();

    return (
        <div>
            <img src={gear1} alt="gear1" className="gear-grey" />
            <img src={gear2} alt="gear2" className="gear-red" />

            <style>{'body {background-color: #FEFBFB;}'}</style>
            <div className="register-form" >
                <p className="header">Sign up</p>
                <p className="field-name">Name:</p>
                <Input style={{width: '80%'}}
                       className="text-field"
                       placeholder={"your name"}
                       value={name.bind.value}
                       onChange={name.bind.onChange}
                />
                <p className="field-name"> E-mail:</p>
                <Input style={{width: '80%'}}
                       className="text-field"
                       placeholder={"your e-mail"}
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
                <p className="field-name">Password</p>
                <Input.Password style={{width: '80%'}}
                                className="text-field"
                                placeholder={"repeat password"}
                                value={passwordProve.bind.value}
                                onChange={passwordProve.bind.onChange}
                />
                <p align="center" className="small-text">
                    Already have an account?&nbsp;
                    <Link className="link" to={"/login"}>
                        Sign in
                    </Link>
                </p>
                <Button type="primary"
                        block
                        className="register"
                        shape="round"
                        onClick={() => {
                            registerUser(
                                name.bind.value,
                                email.bind.value,
                                password.bind.value,
                                passwordProve.bind.value);
                            history.push("/login");
                        }}>
                    Create account
                </Button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    registerUser
};

export default connect(null, mapDispatchToProps)(withRouter(Register));