import {useState, useContext} from 'react'
import { todoArrContext } from './Main'

export default function TodoList() {

    let [todoArr, ] = useContext(todoArrContext)
    return <div>
        <ul>
            {
                todoArr.map( (ele) => (
                    <li key={ele}>{ele}</li>
                ))
            }
        </ul>
    </div>
}