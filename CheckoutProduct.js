import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";
import FlipMove from 'react-flip-move';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket
        
        dispatch({
           
            type: 'REMOVE_FROM_BASKET',
            id: id,
           
        })
      
    }

    return (
        <div className='checkoutproduct'>
            <img className='checkoutProduct_image' src={image} />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className="checkoutProduct_price"><small>$</small> <strong>{price}</strong></p>

            <div className="checkoutProduct_rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))
                }
            </div>
            {!hideButton && (
               <button onClick={removeFromBasket}>Remove From Basket</button>
               )}
            </div>
        </div>
    )
}

export default CheckoutProduct
