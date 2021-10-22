import React, { useEffect, useState } from "react"

import Refresh from "../images/refresh.js"
import { ThemeContext } from "../context/ThemeContext"

function Jokes() {
    const [joke, setJoke] = useState({})
    const [fetchNewJoke, setFetchNewJoke] = useState(1)
    const { isDark } = React.useContext(ThemeContext)
    useEffect(() => {
        async function fetchData() {
            try {
                const a = await fetch("https://v2.jokeapi.dev/joke/Programming")
                const data = await a.json()
                setJoke(data)
            } catch (e) {
                console.log(e)
            }
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
        <div
            className="joke"
            style={isDark ? { color: "rgb(199, 199, 199)" } : {}}
        >
            <div className={isDark ? "joke-title-dark" : "joke-title"}>
                Let's Laugh
            </div>
            <button
                title="Click me for new joke"
                className="refresh-btn"
                onClick={() => setFetchNewJoke(fetchNewJoke + 1)}
            >
                <Refresh
                    color={isDark ? "rgb(223, 222, 222)" : "#231f20"}
                    width={"1.1rem"}
                />
            </button>
            {joke && getJoke(joke)}
        </div>
    )
}

export default Jokes
