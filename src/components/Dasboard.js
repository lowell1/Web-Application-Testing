import React, {useState} from "react";
import {Display} from "./Display";

export const Dashboard = () => {
    const [state, setState] = useState({strikes: 0, balls: 0, fouls: 0, hits: 0});

    const handleClick = e => {
        setState({...state, [e.target.name]: state[e.target.name] + 1});

        if(e.target.name === "fouls" && state.strikes < 2) 
            setState({...state, strikes: state.strikes + 1});

        if (state.strikes >= 3 || state.balls >= 4 || e.target.name === "hits")
            setState({...state, strikes: 0, balls: 0});

        console.log(state);
    }

    return (
        <>
            <Display strikes={state.strikes} balls={state.balls} fouls={state.fouls} hits={state.fouls}/>
            <button name="strikes" onClick={handleClick}>strikes</button>
            <button name="balls" onClick={handleClick}>balls</button>
            <button name="fouls" onClick={handleClick}>fouls</button>
            <button name="hits" onClick={handleClick}>hits</button>
        </>
    )
}