import React from 'react'
import './style.css'
function Circle(){
    return(
        <div class="fle" >
        <img src="assets/images/img_avatar.png" class="circle">
            </img>
            <p class="para">Circular image</p>
            </div>
    );
}
function Rounded(){
    return(
        <div class="fle">
        <img src="assets/images/img_avatar.png" class="rounded">
        </img>
        <p class="para"> Rounded image</p></div>
    );
}
function Normal(){
    return(
        <div class="fle">
        <img src="assets/images/img_avatar.png" class="normal">
        </img>
<p class="para">Normal image</p>
    </div>);
}
export default Circle;
export {Rounded,Normal};