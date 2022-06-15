import React from 'react'
import {useParams} from "react-router-dom"

export default function Member({gameOfThrones}) {
    
    const { houseId, memberId } = useParams()
    
    const foundPerson = gameOfThrones.find(house => house.id.toString() === houseId)
        .people.find(person => person.id.toString() === memberId);

    return (
        <div className="page">
            <div className="header">
                <h2>
                    <a href={`https://awoiaf.westeros.org/index.php/${foundPerson.wikiSuffix}`}>
                    {foundPerson.name}
                    </a>
                </h2>
            </div>
            <div className="desc">
                {foundPerson.description}
            </div>
        </div>
    )
}
