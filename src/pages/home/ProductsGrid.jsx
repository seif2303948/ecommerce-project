import { formatMoney } from '../../utils/money.js';
export function ProductsGrid({text , products , loadCart}){
    let filteredProducts = products.filter((product) =>
            product.keywords.some((keyword)=>{
                return keyword.toLowerCase().includes(text.toLowerCase());
            })
        )
    return(
        <>
            {   
                filteredProducts.map((product) =>{
                    return(
                        <div key = {product.id} className="product-container">
                            <div className="product-image-container">
                                <img className="product-image"
                                src={product.image} />
                            </div>
            
                            <div className="product-name limit-text-to-2-lines">
                                {product.name}
                            </div>
            
                            <div className="product-rating-container">
                                <img className="product-rating-stars"
                                src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
                                <div className="product-rating-count link-primary">
                                {product.rating.count}
                                </div>
                            </div>
            
                            <div className="product-price">
                                ${formatMoney(product.priceCents)}
                            </div>
            
                            <div className="product-quantity-container">
                                <select>
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
            
                            <div className="added-to-cart">
                                <img src="images/icons/checkmark.png" />
                                Added
                            </div>
            
                            <button className="add-to-cart-button button-primary"
                                onClick={()=>{
                                    fetch(`/api/cart-items`,{
                                        method :`POST`,
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            productId : product.id,
                                            quantity : 1,
                                        })
                                    }).then(res => {
                                        if (!res.ok) throw new Error('Request failed');
                                        return res.json();
                                    })
                                    .then( data => {
                                        loadCart()
                                        return data;
                                    })
                                    .then(data => console.log(data))
                                    .catch(err => console.error(err));
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    )
                })
                
            }
            
        </>
    );
    
}