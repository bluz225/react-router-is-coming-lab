import React from 'react'
import {useParams, Link} from "react-router-dom"

export default function House({gameOfThrones}) {
    const { id } = useParams()
    
    const house = gameOfThrones.find((house)=>{
        return house.id.toString() === id
    })
    
    const houseMembers = house.people.map((person)=>{
        return (
            <li><Link to={`/houses/${house.id}/members/${person.id}`}>{person.name}</Link></li>
        )
    })

    return (
        <div className="page">
            <div className="header">
                <h2>Members of a GoT House</h2>
            </div>
            <ul className="list">
                {houseMembers}
            </ul>
        </div>
    )
}
