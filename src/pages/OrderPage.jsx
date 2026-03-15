import { useState , useEffect } from 'react';
import { Link } from 'react-router'
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
                                            <div>${(order.totalCostCents / 100).toFixed(2)}</div>
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
                                                        Arriving on: {monthNames[(new Date(productOrdered.estimatedDeliveryTimeMs).getMonth())]} {(new Date(productOrdered.estimatedDeliveryTimeMs).getDate())}
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