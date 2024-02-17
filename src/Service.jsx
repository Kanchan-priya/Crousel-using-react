import React from 'react'

const Service = (props) => {
  return (
    <div className='container'>
    <div className='card'>
    <img className='product--image' src={props.url} alt="product name"/>
    <h2>{props.name}</h2>
    <p>{props.price}</p>
    <p className='product-dec'>{props.description}</p>
    <p>
      <button>Add to Cart</button>
    </p>
    </div>
  </div>
  )
}

export default Service