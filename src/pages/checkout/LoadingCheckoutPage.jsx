import { CheckoutPageHeader } from './CheckoutHeader';
import { numberOfSkeletonLoadingBoxesFun } from '../../utils/loading';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export function LoadingCheckoutPage({numberOfSkeletonLoadingBoxes}){
    let skeletonLoadingBoxes = numberOfSkeletonLoadingBoxesFun(numberOfSkeletonLoadingBoxes)
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