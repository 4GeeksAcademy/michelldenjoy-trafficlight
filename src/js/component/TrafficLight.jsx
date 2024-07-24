import React, { useState } from "react"
export default function TrafficLight() {
    const [button, setButton] = useState()
    const theButton = (color) => {
        setButton(color);
        console.log(color) 
    }
   
return (
        <div >
            <div className="d-flex flex-column align-items-center bg-dark w-25">
                <button onClick={() => theButton("red")} className={`btn btn-danger p-5 rounded-circle ${button === "red" ? "luz" : ""}`}></button>
                <button onClick={() => theButton("yellow")} className={`btn btn-warning p-5 rounded-circle ${button === "yellow" ? "luz" : ""}`} ></button>
                <button onClick={() => theButton("green")} className={`btn btn-success p-5 rounded-circle ${button === "green" ? "luz" : ""}`}></button>
            </div>

            <div className="prueba"></div>
        </div>
    )
};

