import { useState , useEffect } from 'react';
import { numberOfSkeletonLoadingBoxesFun } from '../utils/loading.js';
import { formatMoney } from '../utils/money.js';
import { dateEstimater } from '../utils/dateEstimater.js';
import { Link } from 'react-router'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import  Header  from '../components/Header.jsx'
import '../css/orders.css'
export function OrderPage({productsInStock}){
    let [orderedProducts , setOrderedProducts] = useState([]);
    useEffect(()=>{
        fetch(`/api/orders`)
        .then((res)=> res.json())
        .then((products) => setOrderedProducts(products))
    },[])
    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    if(productsInStock.length > 0){
        return(
            <>
                <Header/>
                <div className="orders-page">
                    <div className="page-title">Your Orders</div>
                    <div className="orders-grid">
                        {
                            orderedProducts.map((order) =>{
                                return(
                                    <div className="order-container" key={order.id}>
                                        <div className="order-header">
                                            <div className="order-header-left-section">
                                            <div className="order-date">
                                                <div className="order-header-label">Order Placed:</div>
                                                <div>{monthNames[(new Date(order.orderTimeMs).getMonth())]} {(new Date(order.orderTimeMs).getDate())}</div>
                                            </div>
                                            <div className="order-total">
                                                <div className="order-header-label">Total:</div>
                                                <div>${formatMoney(order.totalCostCents)}</div>
                                            </div>
                                            </div>

                                            <div className="order-header-right-section">
                                            <div className="order-header-label">Order ID:</div>
                                            <div>{order.id}</div>
                                            </div>
                                        </div>
                                        {
                                            order.products.map((productOrdered) =>{
                                                return(
                                                    <div className="order-details-grid" key={productOrdered.productId}>
                                                        <div className="product-image-container">
                                                            {
                                                                productsInStock.map((productInStock) => {
                                                                    if(productInStock.id === productOrdered.productId){
                                                                        return(
                                                                            <img src={productInStock.image}  key={productInStock.id}/>
                                                                        );
                                                                    }
                                                                })
                                                            }
                                                        </div>

                                                        <div className="product-details">
                                                        <div className="product-name">
                                                            {
                                                                productsInStock.map((productInStock) => {
                                                                    if(productInStock.id === productOrdered.productId){
                                                                        return(
                                                                            <span key={productInStock.id}>
                                                                                {productInStock.name}
                                                                            </span>
                                                                        );
                                                                    }
                                                                })
                                                            }
                                                        </div>
                                                        <div className="product-delivery-date">
                                                            Arriving on: {dateEstimater(productOrdered.estimatedDeliveryTimeMs)}
                                                        </div>
                                                        <div className="product-quantity">
                                                            Quantity: {productOrdered.quantity}
                                                        </div>
                                                        <button className="buy-again-button button-primary">
                                                            <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                                            <span className="buy-again-message">Add to Cart</span>
                                                        </button>
                                                        </div>

                                                        <div className="product-actions">
                                                        <Link to="/tracking">
                                                            <button className="track-package-button button-secondary">
                                                            Track package
                                                            </button>
                                                        </Link>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>

                                )
                            })
                        }         
                    </div>
                </div>
            </>
        );

    }
    else{
        let skeletonLoadingBoxes =numberOfSkeletonLoadingBoxesFun(3);
        return(
            <>
                <Header/>
                <div className="orders-page">
                    <div className="page-title">Your Orders</div>
                    <div className="orders-grid">
                        {
                            skeletonLoadingBoxes.map((theNumberOfSkeletonLoadingBox) =>{
                                return(
                                    <div className="order-container" key={theNumberOfSkeletonLoadingBox}>
                                        <div className="order-header">
                                            <Skeleton width={800} height={40} />
                                        </div>
                                        <div className="order-details-grid" >
                                            <div className="product-image-container">
                                                <Skeleton width={110} height={110} />
                                            </div>

                                            <div className="product-details">
                                            <div className="product-name">
                                                {
                                                    <Skeleton width={330} height={20} />
                                                }
                                            </div>
                                            <div className="product-delivery-date">
                                                <Skeleton width={150} height={20} />
                                            </div>
                                            <div className="product-quantity">
                                                <Skeleton width={90} height={20} />
                                            </div>
                                                <Skeleton width={140} height={30} />
                                            </div>

                                            <div className="product-actions">
                                                <Skeleton width={220} height={35} />
                                            </div>
                                        </div>
                                        
                                    </div>

                                )
                            })
                        }         
                    </div>
                </div>
            </>
        );

    }
}