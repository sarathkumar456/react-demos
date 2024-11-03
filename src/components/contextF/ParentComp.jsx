import CompA from "./CompA";
import { createContext } from "react";

export const Data = createContext()

function ParentComp() {

    const data = {name: "sarath", age: 21, gender: "male"}
    
    return <div>
        <h4>i a from ParentComp</h4>
        <Data.Provider value={data}>
            <CompA/>
        </Data.Provider>
        
    </div>
}

export default ParentComp;