import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import './style.css'; 



const Timer=()=>{
const[second,setSecond]=useState('00')
const[minute,setminute]=useState('00')
const[isActive,setIsActive]=useState(false)
const[counter,setCounter]=useState(0)
const stopTimer=()=>{
    setIsActive(false)
    setminute("00")
    setSecond("00")
    setCounter(0)

}
    useEffect(()=>{
        let intervalId;
        if(isActive){
            intervalId=setInterval(()=>{
                const secondCounter=counter%60;
                const minuteCounter=Math.floor(counter/60);
                const computedsecond=String(secondCounter).length===1 ? `0${secondCounter}`:secondCounter;
                const computedminute=String(minuteCounter).length===1 ? `0${minuteCounter}`:minuteCounter;
                setSecond(computedsecond);
                setminute(computedminute);
                setCounter(counter+1);
            },1000)
        }
        return ()=>clearInterval(intervalId)
    },[isActive,counter])
    return(
        <div className="container">
            <div className="time">
                <span className="minute">{second}</span>
                <span>:</span>
                <span className="second">{minute}</span>
            </div>
            <div className="buttons">
                <button onClick={()=>
                setIsActive(!isActive)
                } className="start">
                    {isActive ? "pause":"Start"}
                </button>
                <button onClick={stopTimer} className="reset">Reset</button>
            </div>
        </div>
    )
    
}
export default Timer