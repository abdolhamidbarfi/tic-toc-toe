import React, { useEffect } from "react"

function CountDown() {

    const [count, setCount] = React.useState(1000);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count-1);
        }, 5);
        if (count === 0 ) {
            clearTimeout( timer)
        }
      });

      const startGame = () => {
          const getInfo = document.querySelector(".get-info-container").classList;
          const helloMessage = document.querySelector(".hello").classList
          getInfo.add("show")
          helloMessage.add("anim-hiden")
          const messageTimeOut = setTimeout(()=> {
            helloMessage.add("disply-none")
            getInfo.add("anim-show")
        },600)
      }
     

    return (
        <div className="timer">
            {count > 0 ? <span className="progressbar" ><span className="progress" style={{right: `${count/10}%`}}></span></span> : <button onClick={startGame}>Start</button>}
        </div>
    )
}
export default CountDown;