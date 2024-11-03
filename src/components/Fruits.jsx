import { useState } from "react";



const Fruits = () => {

    let [fruits, setFruits] = useState(["APPLE", "BANANA"]);

    const handler = (op) => {
        if (op === "push") {
            setFruits([...fruits, String(Math.round(Math.random() * 10))])
        }
        else if (op === "pop") {
            setFruits(fruits.slice(0, fruits.length-1))
        }
    }

    return <div>
        <ul>
            {fruits.map( (f) => (
                <li key={f}>{f}</li>
            ))}
        </ul>
        <button onClick={() => handler('push')}>Push</button>
        <button onClick={() => handler('pop')}>Pop</button>
    </div>
}

export default Fruits;