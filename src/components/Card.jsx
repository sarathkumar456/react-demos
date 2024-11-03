
const Card = ({children, info: {name, age, gender}}) => {
    return (
        <div>
            {children}
            <ul>
                <li>{name}</li>  
                <li>{age}</li>
                <li>{gender}</li>
            </ul>
        </div>
    )
}

export default Card;