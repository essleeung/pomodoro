import React, { useState, useEffect } from 'react';

const CountDownDisplay = props => {
    const [remainingTime, setRemainingTime] = useState(0)
    const [cycles, setCycles] = useState(1)
    const [isActive, setIsActive] = useState(false)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    let handleInput = (e) => {
        console.log(e.target.value)
        //user inputs # of 25 min cycles & convert to seconds for the countdown   
        setRemainingTime(60 * 25)
        setCycles(e.target.value)
    }
    let toggle = () => {
        setIsActive(!isActive)
    }
    let reset = () => {
        setRemainingTime(0)
        setIsActive(false)
    }
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setRemainingTime(remainingTime => remainingTime - 1)
                setMin(Math.floor(remainingTime / 60).toString().padStart(2, '0'))
                //the remainder of remaining time in seconds (e.g. 1490secs % 60 yields a remainder of 0.83 of a min => 50 secs)
                setSec(Math.floor(remainingTime % 60).toString().padStart(2, '0'))
            }, 1000);
        } else if (!isActive && remainingTime !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, remainingTime]);


    return (
        <div className="container">
            <div className="timer">{min ? min : '00'} : {sec ? sec : '00'}</div>
            <input type="text" onChange={handleInput} placeholder="# of cycles" className="visible"></input>
            <div></div>
            <div className="buttonGroup">
                <button className="button" onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}</button>
                <button className="button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default CountDownDisplay