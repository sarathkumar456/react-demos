const name = "sarath"

const Greeting = () => {
    let date = new Date()
    date = date.toLocaleDateString();
    return (
        <div>
            <h1>Hi {name} welcome to website</h1>
            <p>logged in date: {date}</p>
        </div>
    )
}

export default Greeting;