import React, { useState } from 'react';
import CountDown from './countDown';


function Hello() {

    let timer = 10;

    setTimeout(() => {
        const messages = document.querySelector(".hello").children;
        messages[0].classList.add("anim-hiden");
        messages[1].classList.add("anim-hiden");
        setTimeout(() => {
            messages[0].classList.remove("show");
            messages[1].classList.add("show");
            setTimeout(() => {
                messages[1].classList.add("anim-show")
            }, 600)
        }, 700)
    }, 3000)




    return (
        <div className="hello">
            <p className="first-message show">Hello, Welcom to Tic Toc Toe Game ...</p>
            <p className="seccond-message">Are You Ready To Start ? </p>
            <CountDown />
        </div>
    )

}

export default Hello;