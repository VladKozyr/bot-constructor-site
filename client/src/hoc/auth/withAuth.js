import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {authUser, logoutUser} from "../../_actions/auth_actions";

function withAuth(SpecificComponent, option) {

    function AuthenticationCheck(props) {

        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {
            const token = window.localStorage.getItem("token");
            if (token == null) {
                if (option) {
                    props.history.push('/login')
                } else {
                    dispatch(logoutUser())
                }
            } else {
                dispatch(authUser(token)).then(response => {
                    console.log(response);
                    if (!response.isAuth) {
                        if (option) {
                            props.history.push('/login')
                        }
                    } else {
                        if (!option) {
                            props.history.push('/')
                            //TODO dispatch set state user profile
                        }
                    }
                })
            }
        }, []);

        return (
            <SpecificComponent {...props} user={user}/>
        )
    }

    return AuthenticationCheck
}

export default withAuth;



