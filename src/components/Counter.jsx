import { useEffect, useState } from "react";

const Counter = () => {

    let [count, setCount] = useState(() => {
        const initValue = 0;
        return initValue
    });

    let [dummy, setDummy] = useState(0);
    
    useEffect( () => {
        // document.title = count > 5 ? `Incrment ${count}` : document.title
        document.title = Math.random()

    }, [count]);

    const handler = (op) => {
        if (op === "inc")  {
            setCount((prev) => {return prev+1})
        }
        else if (op === "dec") {
            setCount(count-1)
        }
    }
    console.log(count)
    return <div>
        <p>{count}</p>
        <button onClick={() => handler('inc')}>+</button>
        <button onClick={() => handler('dec')}>-</button>
        <button onClick={() => {setDummy(Math.random()*10)}}>change dummy</button>
    </div>;
}

export default Counter;