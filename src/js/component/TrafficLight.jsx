import React, { useState } from "react"
export default function TrafficLight() {
    const [color, setcolor] = useState()
    const theButton = (color) => {
        setcolor(color);
    }

    return (
        <div >
            <div className="d-flex flex-column align-items-center bg-dark w-25">
                <button onClick={() => theButton("red")} className={`btn btn-danger p-5 rounded-circle ${color === "red" ? "luz" : ""}`}></button>
                <button onClick={() => theButton("yellow")} className={`btn btn-warning p-5 rounded-circle ${color === "yellow" ? "luz" : ""}`} ></button>
                <button onClick={() => theButton("green")} className={`btn btn-success p-5 rounded-circle ${color === "green" ? "luz" : ""}`}></button>
            </div>

            <div className="prueba"></div>
        </div>
    )
};

