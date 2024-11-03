import { useState } from "react";

const Calculator = () =>  {
    let [inputValue, setInput] = useState("")
    
    const handler = (event) => {
        event.preventDefault();
    }

    
    return <div>
        <form onSubmit={handler}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={inputValue} placeholder="Write ur name" onChange={(event) => {
                setInput(event.target.value);
                
            }}/>
            <button type="submit">submit</button>
        </form>
    </div>
}

export default Calculator;