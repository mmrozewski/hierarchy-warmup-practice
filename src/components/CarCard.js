import React from "react"

export default function CarCard({title, description, image}) {

    return (
        <li className="car-card">
            <h2 className="title">{title}</h2>
            <p className="car-descrip">{description}</p>
            <img className= "car-pic" src={image}></img>
            
        </li>
    )
}