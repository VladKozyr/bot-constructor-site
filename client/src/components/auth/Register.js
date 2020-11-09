import React from "react"
import {Button, Input} from "antd";
import useInputValue from "../../utils/hooks/useInputValue";
import {registerUser} from "../../_actions/auth_actions";
import {connect} from "react-redux";

function Register({registerUser}) {

    const name = useInputValue();
    const email = useInputValue();
    const password = useInputValue();
    const passwordProve = useInputValue();

    return (
        <div style={{width: "300px", margin: "10px"}}>
            <p>Name:</p>
            <Input placeholder={"Your name..."}
                   value={name.bind.value}
                   onChange={name.bind.onChange}/>
            <p>Email:</p>
            <Input placeholder={"Your email..."}
                   value={email.bind.value}
                   onChange={email.bind.onChange}/>
            <p>Password:</p>
            <Input placeholder={"Your password..."}
                   value={password.bind.value}
                   onChange={password.bind.onChange}/>
            <p>Password:</p>
            <Input placeholder={"Repeat password..."}
                   value={passwordProve.bind.value}
                   onChange={passwordProve.bind.onChange}/>
            <Button
                onClick={() => registerUser(name.bind.value, email.bind.value, password.bind.value, passwordProve.bind.value)}
                style={{marginTop: "20px"}}>Register</Button>
        </div>
    )
}

const mapDispatchToProps = {
    registerUser
};

export default connect(null, mapDispatchToProps)(Register);