import {Link} from "react-router-dom"
import React from 'react'

export default function Houses({gameOfThrones}) {
    const housesList = gameOfThrones.map((house)=>{       
        return (
            <li><Link to={`/houses/${house.id}`}>{house.name}</Link></li>
        )
    })
    
    return (
        <div>
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <ul className="list">
                {housesList}
            </ul>
        </div>
    )
}
