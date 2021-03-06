import React, { useEffect, useState } from "react"

import Refresh from "../images/refresh.js"
import { ThemeContext } from "../context/ThemeContext"

function Jokes() {
    const [joke, setJoke] = useState({})
    const [dark, setDark] = React.useState(false)
    const [fetchNewJoke, setFetchNewJoke] = useState(1)
    const { isDark } = React.useContext(ThemeContext)

    useEffect(() => {
        setDark(isDark)
    }, [isDark])

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
                    <div>
                        {joke.delivery}{" "}
                        {joke.delivery ? <span>&#128514;</span> : ""}
                    </div>
                </>
            )
        } else {
            return (
                <div>
                    {joke.joke} {joke.joke ? <span>&#128514;</span> : ""}
                </div>
            )
        }
    }
    return (
        <div className="joke" style={dark ? { color: "#C7C7C7" } : {}}>
            <div className={dark ? "joke-title-dark" : "joke-title"}>
                Let's Laugh
            </div>
            <button
                title="Click me for new joke"
                className={dark ? "refresh-btn-dark" : "refresh-btn"}
                onClick={() => setFetchNewJoke(fetchNewJoke + 1)}
            >
                <Refresh
                    color={dark ? "rgb(223, 222, 222)" : "#231f20"}
                    width={"1.1rem"}
                />
            </button>
            <div>{joke && getJoke(joke)}</div>
        </div>
    )
}

export default Jokes
