import {useEffect, useReducer, useState} from "react";

export default function HelloReducer() {

    
    const countReducer = (state, action) => {
        switch(action) {
            case "inc":
                return state + 1
            case "dec":
                return state - 1
        }
    }

    const inputReducer = (iState, iAction) => {
        return iAction.target.value;
    }

    const [countState, countDispatch] = useReducer(countReducer, Math.round(Math.random() * 10))
    const [inputState, inputDispatch] = useReducer(inputReducer, "")
    const [formBool, setState] = useState(false) 

    useEffect( () => {
        if (inputState === "sarath") {
            document.getElementById("span-id").textContent = " this id is taken";
        }
    }, [inputState, formBool])


    return <div>
            <div>
                <p>{countState}</p>
                <button onClick={ () => {countDispatch("inc")}}>+</button><button onClick={ () => {countDispatch("dec")}}>-</button>
            </div>
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    document.getElementById("span-id").textContent = inputState;
                    setState(true);
                }}>
                    <label htmlFor="name"></label>
                    <input id="name" type="text" value={inputState} onChange={inputDispatch} />
                    <button type="submit">Submit</button>
                </form>
                <div>
                    <p>your name : <span id="span-id"></span></p>
                </div>
            </div>
        </div>

}
