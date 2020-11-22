import {AUTHENTICATED, AUTHENTICATION_ERROR, UNAUTHENTICATED} from "../_actions/auth_actions";

const initialState = {
    authenticated: false,
    profile: {},
    error: ""
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATED:
            return {
                ...state,
                authenticated: true,
            };
        case UNAUTHENTICATED:
            return {
                ...state,
                authenticated: false
            };
        case AUTHENTICATION_ERROR:
            return {
                ...state,
                error: action.payload.toString()
            };
        default:
            return state;
    }
}