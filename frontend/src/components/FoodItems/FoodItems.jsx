import React, { useContext, useState } from 'react'
import './FoodItems.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItems = ({id,name,price,description,image}) => {

  const [itemCount,setItemCount]= useState(0)
  const {cartItems,addToCart,removeFromCart,url}= useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={url+"/images/"+image} alt="" />
        {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
          {!cartItems[id]
            ?<p className="food-item-price">${price}</p>
            :<p className='food-item-price'>${cartItems[id]*price}</p>

          }
      </div>
      
    </div>
  )
}

export default FoodItems
