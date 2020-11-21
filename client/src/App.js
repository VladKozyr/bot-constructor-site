import React from 'react';
import {Link} from "react-router-dom";

function App() {
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
            <div>
                <Link to={"/my-bots"}>
                    MY BOTS
                </Link>
            </div>
        </div>
    )
}

export default App;
