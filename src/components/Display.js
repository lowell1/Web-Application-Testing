import React from "react"

export const Display = props => {
    return (
        <>
            <div>Fouls: {props.fouls}</div>
            <div>Balls: {props.balls}</div>
            <div>Strikes: {props.strikes}</div>
            <div>Hits {props.hits}</div>
        </>
    )
}