import { BsArrowThroughHeartFill, BsArrowUpCircleFill, BsArrowRightCircleFill, BsArrowLeftCircleFill, BsArrowDownCircleFill } from "react-icons/bs";
import "../css/mover.css"

const iconSize = 25;


const Handler = (direction) => {
    
    switch (direction) {
        case "up":
            document.getElementById("movingobject").style.marginBottom = "20px";
            break;
        case "down":
            document.getElementById("movingobject").style.marginTop = "20px";
            break;
        case "left":
            document.getElementById("movingobject").style.marginRight = "20px";
            break;
        case "right":
            document.getElementById("movingobject").style.marginLeft = "20px"
            break;
    }
}
const MovingObject = () => {
    return <BsArrowThroughHeartFill size = {45}/>
}
const Mover = () => {
    return <div>
        <div className="mover">
                <BsArrowUpCircleFill size={iconSize} onClick={() => {Handler('up')}}/>
                <BsArrowDownCircleFill size={iconSize} onClick={() => {Handler('down')}}/>
                <BsArrowLeftCircleFill size={iconSize} onClick={() => {Handler('left')}}/>
                <BsArrowRightCircleFill size={iconSize} onClick={() => {Handler('right')}}/>
            </div>
            <div id="movingobject">
                <MovingObject/>
            </div>
    </div>
}



export default Mover