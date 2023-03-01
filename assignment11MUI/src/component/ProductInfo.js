import React, { Component } from 'react'
import Product from './Product'
import {} from './product.css';


export class ProductInfo extends Component {
  products = [
    {
        "title": "Brown eggs",
        "type": "dairy",
        "description": "Raw organic brown eggs in a basket",
        "url": "https://thumbs.dreamstime.com/b/brown-eggs-basket-12468247.jpg",
        "price": "Rs.28",
        "rating": 4
    }, 
    {
        "title": "Sweet fresh stawberry",
        "type": "fruit",
        "description": "Sweet fresh stawberry on the wooden table",
        "url": "https://tse1.mm.bing.net/th/id/OIP.KEU1tGg3y2Wp85bTPUI43gHaEo?pid=ImgDet&rs=1",
        "price": "Rs.29",
        "rating": 4
    },
    {
        "title": "Carrot",
        "type": "vegetable",
        "description": "Fresh Carrot on the wooden table",
        "url": "https://tse1.mm.bing.net/th/id/OIP.mwU2HNG7hfYk4OfPAbi0LwAAAA?pid=ImgDet&rs=1",
        "price": "Rs.19",
        "rating": 4
    }, {
        "title": "Fresh Grapes",
        "type": "fruit",
        "description": "Fresh grapes on the wooden table",
        "url": "https://tse4.mm.bing.net/th/id/OIP.UnC0FFv8SrZQ3AtEsKe5vwHaE7?pid=ImgDet&rs=1",
        "price": "Rs.40",
        "rating": 4,
       
    }, 
    {
        "title": "Sweet fresh stawberry",
        "type": "fruit",
        "description": "Sweet fresh stawberry on the wooden table",
        "url": "https://tse1.mm.bing.net/th/id/OIP.KEU1tGg3y2Wp85bTPUI43gHaEo?pid=ImgDet&rs=1",
        "price": "Rs.29",
        "rating": 4
    },
    {
        "title": "Carrot",
        "type": "vegetable",
        "description": "Fresh Carrot on the wooden table",
        "url": "https://tse1.mm.bing.net/th/id/OIP.mwU2HNG7hfYk4OfPAbi0LwAAAA?pid=ImgDet&rs=1",
        "price": "Rs.19",
        "rating": 4
    }, {
        "title": "Fresh Grapes",
        "type": "fruit",
        "description": "Fresh grapes on the wooden table",
        "url": "https://tse4.mm.bing.net/th/id/OIP.UnC0FFv8SrZQ3AtEsKe5vwHaE7?pid=ImgDet&rs=1",
        "price": "Rs.40",
        "rating": 4
    }
    
  ]
  constructor()
  {
      super();
      this.state = {
          products: this.products
      }
  }
  render() {
    return (
        <div>
        <h2 align="center" className='heading'>Shopping Cart</h2><br/><br/>
        
        {this.state.products.map((element)=>{
             return <div className='features' key={element.price}>
             <Product  title={element.title} price={element.price} description={element.description} imageUrl={element.url}/> 
         </div>
        })}
            
        </div>
     
    )
  }
}

export default ProductInfo