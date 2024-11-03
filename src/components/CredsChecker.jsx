const ValidPassword = () => <h5>Valid Creds</h5>
const InvalidPassword = () => <h5>InValid Creds</h5>

const CredsChecker = ({username, password}) => {
    return username === password ? ValidPassword() : InvalidPassword()
}

export default CredsChecker;