import React from "react"

function GetInfo() {

    const [playerNameA, setPlayerNameA] = React.useState("")
    const [playerNameB , setPlayerNameB] = React.useState("")

    const playerA = (e) => setPlayerNameA(e.target.value)
    const playerB = (e) => setPlayerNameB(e.target.value)


    const savePlayersName = (e) => {
        e.preventDefault()
       
    }

    return (
        <div className="get-info-container " >
            <form className="get-info-body" onSubmit={savePlayersName}>
                <div className="player">
                    <span>Player A:</span>
                    <input type={"text"} placeholder={"Player A Name"} onChange={playerA} />
                </div>
                <div className="player">
                    <span>Player B:</span>
                    <input type={"text"} placeholder={"Player B Name"} onChange={playerB} />
                </div>
                <button type={"submit"} >Start</button>
            </form>
        </div>
    )

}

export default GetInfo;