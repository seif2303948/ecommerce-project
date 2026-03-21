import { useState , useEffect } from 'react';
import { Link } from 'react-router'
import { numberOfSkeletonLoadingBoxesFun } from '../utils/loading';
import { formatMoney } from '../utils/money';
import { dateEstimater , calculateFutureDayMilliseconds } from '../utils/dateEstimater';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../css/checkout.css'
import '../css/checkout-header.css'


function CheckoutPageHeader(){
    return(
        <>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/">
                            <img className="logo" src="images/logo.png" />
                            <img className="mobile-logo" src="images/mobile-logo.png" />
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link className="return-to-home-link"
                            to="/">3 items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>
        </>
    );
}
export function CheckoutPage({productsInCart}){
    let [deliveryOptions , setDeliveryOptions] = useState([]);
    useEffect(() =>{
        setTimeout(()=>{
            fetch(`/api/delivery-options?expand=estimatedDeliveryTime`)
            .then((res)=>{
                if(!res.ok){
                    console.log(`HTTP error ! status : ${res.status}`)
                }
                return res.json()
            })
            .then((items) => setDeliveryOptions(items))
            .catch((error)=>{console.log(error)})
            },500)
    },[]);
    
    if(productsInCart.length > 0){
        return(
            <>
                <CheckoutPageHeader/>
                <div className="checkout-page">

                    <div className="page-title">Review your order</div>

                    <div className="checkout-grid">
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
                                                    {formatMoney(productIncart.product.priceCents)}
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
                                                                            (deliveryOption.priceCents == 0 )?'FREE': `${formatMoney(deliveryOption.priceCents)} -`
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
    
                        <div className="payment-summary">
                            <div className="payment-summary-title">
                            Payment Summary
                            </div>
    
                            <div className="payment-summary-row">
                            <div>Items (3):</div>
                            <div className="payment-summary-money">$42.75</div>
                            </div>
    
                            <div className="payment-summary-row">
                            <div>Shipping &amp; handling:</div>
                            <div className="payment-summary-money">$4.99</div>
                            </div>
    
                            <div className="payment-summary-row subtotal-row">
                            <div>Total before tax:</div>
                            <div className="payment-summary-money">$47.74</div>
                            </div>
    
                            <div className="payment-summary-row">
                            <div>Estimated tax (10%):</div>
                            <div className="payment-summary-money">$4.77</div>
                            </div>
    
                            <div className="payment-summary-row total-row">
                            <div>Order total:</div>
                            <div className="payment-summary-money">$52.51</div>
                            </div>
    
                            <button className="place-order-button button-primary">
                            Place your order
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else{
        let skeletonLoadingBoxes = numberOfSkeletonLoadingBoxesFun(3)
        return(
            <>
                <CheckoutPageHeader/>
                <div className="checkout-page">
                    <div className="page-title">
                        Review your order
                    </div>
                    <div className="checkout-grid">
                        <div className="order-summary">
                            {
                                skeletonLoadingBoxes.map((theNumberOfSkeletonLoadingBox)=>{
                                    return(  
                                        <div className="cart-item-container" key = {theNumberOfSkeletonLoadingBox}>
                                            <div className="delivery-date">
                                            <Skeleton width={260} height={23}/>
                                            </div>

                                            <div className="cart-item-details-grid">
                                            <Skeleton width={100} height={100}/>

                                            <div className="cart-item-details">
                                                <div className="product-name">
                                                    <Skeleton width={270} height={23}/>
                                                </div>
                                                <div className="product-price">
                                                    <Skeleton width={50} height={23}/>
                                                </div>
                                                <div className="product-quantity">
                                                <Skeleton width={170} height={23}/>
                                                </div>
                                            </div>

                                            <div className="delivery-options">
                                                <div className="delivery-options-title">
                                                    <Skeleton width={170} height={23}/>
                                                </div>
                                                <div className="delivery-option">
                                                    <Skeleton width={170} height={40}/>
                                                </div>
                                                <div className="delivery-option">
                                                    <Skeleton width={170} height={40}/>
                                                </div>
                                                <div className="delivery-option">
                                                    <Skeleton width={170} height={40}/>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
    
                        <div className="payment-summary">
                            <div className="payment-summary-title">
                                <Skeleton width={150} height={20}/>
                            </div>
    
                            <div className="payment-summary-row">
                            <Skeleton width={310} height={20}/>
                            </div>
    
                            <div className="payment-summary-row">
                            <Skeleton width={310} height={20}/>
                            </div>
    
                            <div className="payment-summary-row subtotal-row">
                            <Skeleton width={310} height={20}/>
                            </div>
    
                            <div className="payment-summary-row">
                            <Skeleton width={310} height={20}/>
                            </div>
    
                            <div className="payment-summary-row total-row">
                            <Skeleton width={310} height={30}/>
                            </div>
                            
                            <Skeleton  className='place-order-button'/>
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}