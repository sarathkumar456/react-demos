import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { createContext, useEffect, useState } from "react";

export const todoArrContext = createContext();
export const todoArrState = createContext();

export default function Main(){
    let [todoArr, setTodoArr] = useState([]);

    // useEffect( () => {
    //     console.log(todoArr)
    // }, [todoArr])

    let todoStateObject = [todoArr, setTodoArr]
    return  <div>
                <todoArrContext.Provider value={todoStateObject}>
                    <AddTodo/>
                    <TodoList/>
                </todoArrContext.Provider>
            </div>
}