import React, { useState } from 'react'

export default function ProductCard(props) {

    const [count, setCount] = useState(0)
    const increaseValue = () => setCount(count + 1)
    const decreaseValue = () => setCount(count - 1)

    // const decreaseValue = () => {
    //     if (count > 0) {
    //         setCount(count - 1)
    //     }
    //     else {
    //         setCount(0)
    //     }
    // }
    return (
        <div className='col-md-3'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.brandName}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.productName}</h6>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem facere earum distinctio aliquam veniam? Aut facere unde quam voluptates.
                    </p>
                    <a href="#" className="card-link">
                        {props.productType}
                    </a>


                </div>

                <div className="container text-center">

                    {
                        count > 0 ? (
                        <>
                            <button className="btn btn-dark mx-2" onClick={increaseValue}>+</button>
                            {count}
                            <button className="btn btn-dark mx-2" onClick={decreaseValue}>-</button>

                        </>) : ( <button className="btn btn-dark mx-2" onClick={increaseValue}>Add To Cart</button>)
                    }

                </div>
            </div>

        </div>
    )
}
