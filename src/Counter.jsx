import {useState} from 'react';

function Counter(){
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);

    return(
        <div style={{width:"300px", height:"300px", backgroundColor:"lightblue", color:"black"}}>
            <h3>Counter is {add}</h3>
            <button onClick={() => setAdd(add + 1)}>Add</button>
            <br/>
            <br/>
            <button onClick={() => setSub(sub - 1)}>Subtract</button>
            <h3>Subtract is {sub}</h3>
        </div>
    )
}

export default Counter;