import { CheckoutPageHeader } from './CheckoutHeader';
import { PaymentSummary } from './PaymentSummary';
import { OrderSummary } from './OrderSummary';
import { useState , useEffect } from 'react';
import { LoadingCheckoutPage } from './LoadingCheckoutPage';
import '../../css/checkout.css'

export function CheckoutPage({productsInCart}){
    let [deliveryOptions , setDeliveryOptions] = useState([]);
    let [paymentSummary , setPaymentSummary] = useState(null);
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
        setTimeout(()=>{
            fetch('/api/payment-summary')
            .then((res)=>{
                if(!res.ok){
                    console.log(`HTTP error ! status : ${res.status}`)
                }
                return res.json();
            })
            .then((items) => setPaymentSummary(items))
            .catch((error)=>{console.log(error)})
        },500)
    },[]);
    
    if(productsInCart.length > 0 && paymentSummary){
        return(
            <>
                <CheckoutPageHeader numberOfItems = {paymentSummary.totalItems}/>
                <div className="checkout-page">

                    <div className="page-title">Review your order</div>

                    <div className="checkout-grid">
                        <OrderSummary productsInCart={productsInCart} deliveryOptions={deliveryOptions}/>
                        {paymentSummary?  <PaymentSummary paymentSummary = {paymentSummary}/>: null}
                    </div>
                </div>
            </>
        );
    }
    else{
        return(
            <LoadingCheckoutPage/>
        );
    }
}