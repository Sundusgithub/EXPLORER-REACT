import React from 'react'

export default function ProductCard(props) {
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
            </div>

        </div>
    )
}
