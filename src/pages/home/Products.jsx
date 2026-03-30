import { formatMoney } from '../../utils/money.js';
import { useState } from 'react';
export function Products({ filteredProducts , loadCart}){
    const [quantity , setQuantity] = useState(1);
   const [addedToCartClass, setAddedToCartClass] = useState("added-to-cart");
    const handleAddToCart = () => {
        setAddedToCartClass("added-to-cart successfully");
    
        addToCart();
    
        // reset after 2 seconds
        setTimeout(() => {
            setAddedToCartClass("added-to-cart");
        }, 2000);
    };

    let addToCart = ()=>{
        fetch(`/api/cart-items`,{
            method :`POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productId : filteredProducts.id, 
                quantity : quantity,
            })
        }).then(res => {
            if (!res.ok) throw new Error('Request failed');
            return res.json();
        })
        .then( data => {
            loadCart();
            return data;
        })
        .catch(err => console.error(err));
    }
    return(
        <>
            <div  className="product-container">
                <div className="product-image-container">
                    <img className="product-image"
                        data-testid = "product-image"
                    src={filteredProducts.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                    {filteredProducts.name}
                </div>

                <div className="product-rating-container">
                    <img className="product-rating-stars"
                    src={`images/ratings/rating-${filteredProducts.rating.stars * 10}.png`} 
                    data-testid = "product-rating"
                    />
                    <div className="product-rating-count link-primary">
                    {filteredProducts.rating.count}
                    </div>
                </div>

                <div className="product-price">
                    ${formatMoney(filteredProducts.priceCents)}
                </div>

                <div className="product-quantity-container">
                    <select value={quantity} onChange={(ev)=>{
                        const selectedQuantity = Number(ev.target.value);
                        setQuantity(selectedQuantity)
                    }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>

                <div className="product-spacer"></div>

                <div className={addedToCartClass}>
                    <img src="images/icons/checkmark.png" />
                    Added
                </div>

                <button className="add-to-cart-button button-primary"
                    data-testid = 'add-to-cart-btn'
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
            
        </>
    );
}