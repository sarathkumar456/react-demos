
const personInfo = [
    {
        name: 'sarath',
        age: 21,
        gender: 'male'
    },
    {
        name: 'divya',
        age: 11,
        gender: 'female'
    }
]

const ListGen = () => {

    return <div>
        <h5>Hi generating list ...</h5>
        <ul>
            {
                personInfo.map( (person) => (
                    <li key={person.name}>{person.name} information
                        {/* <ul>
                            <li key={name+index}>{name}</li>
                            <li key={age+index}>{age}</li>
                            <li key={gender+index}>{gender}</li>
                        </ul> */}
                        <ul>
                            {
                                Object.keys(person).map( (key) => (
                                    <li key={key}>{person[key]}</li>
                                ))
                            }
                        </ul>
                    </li>
                    
                ))
            }
        </ul>
        
    </div>
}

export default ListGen;