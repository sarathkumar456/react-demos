
import Card from "./Card"

const UserDisplay = ({userData, fromComponent}) => {
    return <div>
        <ul>
            {fromComponent}
            {
                userData.map( (info) => (
                    <li key={info.name}>{info.name} Information
                        <Card info = {info}>
                            <p>I am from the Card Component of {info.name}</p>
                        </Card>
                    </li>
                ))
            }
        </ul>
    </div>

}

export default UserDisplay;