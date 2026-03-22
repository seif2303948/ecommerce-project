import { formatMoney } from '../../utils/money';
import { dateEstimater , calculateFutureDayMilliseconds } from '../../utils/dateEstimater';
export function OrderSummary({productsInCart , deliveryOptions}){
    return(
        <div className="order-summary">
            {
                productsInCart.map((productIncart)=>{
                    return(
                        <div className="cart-item-container" key = {productIncart.id}>
                            <div className="delivery-date">
                                {
                                    deliveryOptions.length>0 && deliveryOptions.map((deliveryOption)=>{
                                        if(deliveryOption.id === productIncart.deliveryOptionId){
                                            return `Delivery date: ${calculateFutureDayMilliseconds(deliveryOption.deliveryDays).dayOfWeek}, ${dateEstimater(deliveryOption.estimatedDeliveryTimeMs)}`
                                        }
                                    })
                                }
                            </div>

                            <div className="cart-item-details-grid">
                                <img className="product-image"
                                    src={productIncart.product.image} />

                                <div className="cart-item-details">
                                    <div className="product-name">
                                    {productIncart.product.name}
                                    </div>
                                    <div className="product-price">
                                    ${formatMoney(productIncart.product.priceCents)}
                                    </div>
                                    <div className="product-quantity">
                                    <span>
                                        Quantity: <span className="quantity-label">{productIncart.quantity}</span>
                                    </span>
                                    <span className="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span className="delete-quantity-link link-primary">
                                        Delete
                                    </span>
                                    </div>
                                </div>

                                <div className="delivery-options">
                                    <div className="delivery-options-title">
                                    Choose a delivery option:
                                    </div>
                                    {
                                        deliveryOptions.map((deliveryOption) =>{
                                            return(
                                                <div className="delivery-option" key={deliveryOption.id}>
                                                    <input type="radio" 
                                                        className="delivery-option-input"
                                                        name={`delivery-option-${productIncart.id}`}
                                                        defaultChecked = {deliveryOption.id === productIncart.
                                                            deliveryOptionId}
                                                        />
                                                    <div>
                                                        <div className="delivery-option-date">
                                                        {calculateFutureDayMilliseconds(deliveryOption.deliveryDays).dayOfWeek}, {dateEstimater(deliveryOption.estimatedDeliveryTimeMs)}
                                                        </div>
                                                        <div className="delivery-option-price">
                                                        {
                                                            (deliveryOption.priceCents == 0 )?'FREE': `$${formatMoney(deliveryOption.priceCents)} -`
                                                        } Shipping
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}