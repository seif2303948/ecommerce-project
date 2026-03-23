import { formatMoney } from '../../utils/money.js';
import { dateEstimater } from '../../utils/dateEstimater.js';
import { Link } from 'react-router'
import '../../css/orders.css'
export function OrderGrid({orderedProducts}){
    
    return(
        <>
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
                                            <div>
                                                {dateEstimater(order.orderTimeMs)}
                                            </div>
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
                                                        {<img src={productOrdered.product.image}/>}
                                                    </div>

                                                    <div className="product-details">
                                                    <div className="product-name">
                                                        {productOrdered.product.name}
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