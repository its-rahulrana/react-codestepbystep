import { useEffect } from "react";


function Counter({sum, sub}){

    useEffect(()=>{
        console.log("Mounting Phase")
    },[])

    useEffect(()=>{
        console.log("Updating Phase")
    },[sum])

    useEffect(()=>{
        return ()=>{
            console.log("Unmount!")
        }
    },[])

    return(
        <div>
            <h3>Sum Counter: {sum}</h3>
            <h3>Sub Counter: {sub}</h3>
        </div>
    )
}

export default Counter;