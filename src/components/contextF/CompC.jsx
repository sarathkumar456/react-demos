import {useContext} from "react"
import { Data }  from "./ParentComp"


export default function CompC() {
    const {name, age, gender} = useContext(Data)
    console.log(Data)
    return <div>
        <h4>i a from CompC</h4>
        <p>{name} {age} {gender}</p>
    </div>
}