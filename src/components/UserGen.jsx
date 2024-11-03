import UserDisplay from "./UserDisplay";

const userData = [
    {
        name: "sarath",
        age: 27,
        gender: "male"
    },
    {
        name: "divya",
        age: 21,
        gender: "female"
    }
]

const UserGen = () => {
    return <div>
        <h5>Hello i am from user gen component, i am responsible to pass data to other component</h5>
        <UserDisplay  userData = {userData} fromComponent = "usergen"/>
    </div>
}

export default UserGen;