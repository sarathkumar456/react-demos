
import CredsChecker from "./CredsChecker"

const UserLogin = ({children, username, password}) => {
    return <div>
        {children}
        <CredsChecker username = {username} password = {password} />
    </div>
}

export default UserLogin;