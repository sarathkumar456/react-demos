import Footer from "./components/Footer"
import Header from "./components/header"
import MainContent from "./components/MainContent"
import Expressions from "./components/Expressions"
import Greeting from "./components/Greeting"
import ListGen from "./components/ListsGen"
import UserGen from "./components/UserGen"
import UserLogin from "./components/UserLogin"
import Grid from "./components/Grid"
// import "./css/index.css"
import Mover from "./components/Mover"
import Counter from "./components/Counter"
import Fruits from "./components/Fruits"
import Calculator from "./components/calculator"
import ParentComp from "./components/contextF/ParentComp"
import HelloReducer from "./components/HelloReducer"
import Main from "./components/todoApp/Main"
let [username, password] = ["sarath", "sarath"]

const DemoApp = () => {
  return (
    <div>
      <Main/>
      {/* <HelloReducer/> */}
      {/* <ParentComp/> */}
      {/* <Calculator/> */}
      {/* <Fruits/> */}
      {/* <Counter/> */}
      {/* <Mover/> */}
      {/* <Header/>
      <MainContent/>
      <Footer/>
      <Expressions/>
      <Greeting/>
      <ListGen/>
      <UserGen/>
      <UserLogin username="sarath" password="arath">
        <div>
          <header>Hi welcome back</header>
          <p>we will check ur creds pleas wait ...</p>
          { username === password ? <p>{username}</p> : <p>invalid</p>}
        </div>
      </UserLogin>
      <Grid/> */}
    </div>
  )
}

export default DemoApp;