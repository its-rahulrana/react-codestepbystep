import { useEffect } from "react";


function Counter({sum, sub}){

    const consoleRender = () => console.log("Funtion Called");

    useEffect(()=>{
        consoleRender();
    }, []);

    return(
        <div>
            <h3>Sum Counter: {sum}</h3>
            <h3>Sub Counter: {sub}</h3>
        </div>
    )
}

export default Counter;