import {useState, useContext} from "react";
import { todoArrContext } from "./Main";

export default function AddTodo() {

    let [todoInput, setTodoInput] = useState("");
    let [todoArr, setTodoArr]  = useContext(todoArrContext);
    return <form onSubmit={
        (e) => {
            e.preventDefault();
            setTodoArr([...todoArr, todoInput])
        }
    }>
                <input type="text" value={todoInput} id="todoInput" placeholder="Enter new todo" onChange={e => setTodoInput(e.target.value)} />
                <button type="submit">Add</button>
            </form>
}