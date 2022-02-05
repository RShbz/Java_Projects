import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    let userid=6;
    return(
        <div>
                <p>NAVBAR </p>
            <ul>

            <li><Link to="/Home"> Home</Link> </li>
            <li><Link to={{pathname:'/user/'+userid}}>User</Link> </li>

        </ul> </div>
    );
}

export default Navbar;