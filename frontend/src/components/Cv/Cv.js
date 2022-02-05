import React ,{useState, useEffect}from "react";
import ReactDom from "react-dom";
//import { useState } from "react";

function Cv() {
    console.log("cvs");
    const[error,setError]=useState(null);
    const[isLoaded,setIsLoaded]=useState(false);
    const[cvList,setCvList]=useState([]);

    useEffect(()=>{
        fetch("/cvs")
        .then(res=>res.json)
        .then((
            result)=>
            {
                setIsLoaded(true);
                cvList(result);
            },
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])

    if(error){
        return <div> ERROR!!!!!!!! </div>

    }
    else if(!isLoaded)
    {
        return <div>LOADİNG </div>

    }
    else
   return ( 
              <form> <ul>
                    {this.cvList.map(cvs=> ( alert(cvs.name)
                            

                    ))}
                </ul></form> 
        );
    }

    export default Cv;

    
