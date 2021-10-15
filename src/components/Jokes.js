import React, { useEffect, useState } from "react"
import axios from "axios"

import Refresh from "../images/refresh.svg"

function Jokes() {
    const [joke, setJoke] = useState({})
    const [fetchNewJoke, setFetchNewJoke] = useState(1)
    useEffect(() => {
        async function fetchData() {
            const a = await axios.get("https://v2.jokeapi.dev/joke/Programming")
            setJoke(a.data)
        }
        fetchData()
        return () => {}
    }, [fetchNewJoke])

    const getJoke = joke => {
        if (joke.type === "twopart") {
            return (
                <>
                    <div>{joke.setup}</div>
                    <div>{joke.delivery}</div>
                </>
            )
        } else {
            return <div>{joke.joke}</div>
        }
    }
    return (
        <div className="joke">
            <div className="joke-title">Let's Laugh together</div>
            <div
                title="Click me for new joke"
                className="refresh-btn"
                onClick={() => setFetchNewJoke(fetchNewJoke + 1)}
            >
                <img className="refresh-btn-img" src={Refresh} alt="Refresh" />
            </div>
            {joke && getJoke(joke)}
        </div>
    )
}

export default Jokes
