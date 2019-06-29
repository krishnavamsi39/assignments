import React from 'react'
import './style.css'
function Success(){
    return(
        <>
        <p class="green">
            Well Done
        </p>

        </>
    )
}
function Info(){
    return(
        <>
        <p class="blue">
           Heads Up
        </p>

        </>
    )
}
function Warning(){
    return(
        <>
        <p class="yellow">
            Warning
        </p>

        </>
    )
}
function Error(){
    return(
        <>
        <p class="red">
            Oh Snap
        </p>

        </>
    )
}
export default Success;
export {Info,Warning,Error};