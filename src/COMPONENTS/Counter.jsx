
import React, { useState } from 'react'
export default function Counter() {
    const [ count, setCount ]= useState(0)
    const increaseValue = () => setCount(count+1)
    const decreaseValue = () => setCount(count-1)

    return (
        <>
            <div className="container text-center">
                <h1 className="">{count}</h1>
                <div>
                    <button className="btn btn-dark mx-2" onClick={increaseValue}>+</button>
                    <button className="btn btn-dark mx-2" onClick={decreaseValue}>-</button>
                </div>
            </div>
        </>
    )
}
