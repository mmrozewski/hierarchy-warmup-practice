import React from "react"
import CarCard from "./CarCard"

export default function CarContainer(props) {

    const transformCarData = props.carData.map(car => <CarCard {...car}/>)
    return (
        <ul className="car-container">
            <h1>Cars!</h1>
            {transformCarData}
        </ul>
    )
}