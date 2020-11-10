import React, {useEffect, useState} from "react"
import {Button, Input} from "antd";
import {loginUser} from "../../_actions/auth_actions";
import {connect} from "react-redux";
import useInputValue from "../../utils/hooks/useInputValue";
import {Link} from "react-router-dom";

function Login({loginUser, error}) {

    useEffect(() => {

    }, []);

    const email = useInputValue();
    const password = useInputValue();

    return (
        <div style={{width: "300px", margin: "10px"}}>
            <p>Email:</p>
            <Input placeholder={"Your email..."}
                   value={email.bind.value}
                   onChange={email.bind.onChange}/>
            <p>Password:</p>
            <Input.Password placeholder={"Your password..."}
                            value={password.bind.value}
                            onChange={password.bind.onChange}/>
            <Button onClick={() => loginUser(email.bind.value, password.bind.value)}
                    style={{marginTop: "20px", marginRight: "20px"}}>
                Login
            </Button>
            <Link to={"/"}>HOME</Link>
            <p>{error}</p>
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