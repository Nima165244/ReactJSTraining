import React, { Component } from 'react'
import {} from './product.css'

export class Product extends Component {
  render() {
    let {title, description, imageUrl,price} = this.props;
    return (
      <>
      <div >    
      <img src={imageUrl} alt="..." height={200} width={300}></img>
     
    <h5 className='h5'>{title}</h5>
    <p className='desc'>{description}</p>
    <p className='price'>{price}</p>
    <button className='btn'>Like</button>
    <button className='btn'>Share</button>
    <button className='btn'>Purchase</button>
    </div>
        
        </>
    )
  }
}

export default Product