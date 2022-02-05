import React from "react";
import { useParams } from "react-router-dom";


function User(){
const{userid}=useParams();
alert("USER");
return(
    <div>
        MERHABA  Numaralı User
    </div>
);


}

export default User;