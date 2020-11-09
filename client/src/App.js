import React from 'react';
import {Link} from "react-router-dom";

function App(){
    return (
        <div>
            <Link to={"/login"}>
                LOGIN
            </Link>
            <div style={{width: "100px"}}>

            </div>
            <Link to={"/register"}>
                REGISTER
            </Link>
        </div>
    )
}

export default App;
