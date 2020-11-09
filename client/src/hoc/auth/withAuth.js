import React, {useEffect} from "react"
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {authenticateUser, logoutUser} from "../../_actions/auth_actions";
const jwt = require('jsonwebtoken');

function withAuth(ComposedComponent)
{
    function AuthenticationCheck(props) {
        useEffect(() => {
            let token = localStorage.getItem("user");
            if(token != null) {
                token = token.slice(7);
                try {
                    jwt.verify(token, "secret")
                } catch (e) {
                    console.log(e);
                    props.history.push('/login');
                }
                authenticateUser();
            } else {
                logoutUser();
                props.history.push('/login');
            }
        }, []);

        return <ComposedComponent {...props}/>
    }

    return  connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthenticationCheck));
}

const mapStateToProps =  (state) => {
    return {
        isAuth: state.user.authenticated
    }
};

const mapDispatchToProps = {
    authenticateUser,
    logoutUser
};

export default withAuth;



