import { useState , useEffect } from 'react';
import { Link } from 'react-router'
import '../css/header.css'

function Header({setText = () => {}, productsInCart = []}){
    let [numOfItemsInCart, setNumOfItemsInCart] = useState(0);
    useEffect(()=>{
        if (productsInCart && productsInCart.length > 0) {
            let numOfItems = 0;
            productsInCart.forEach((productInCart)=>{
            numOfItems += productInCart.quantity;
            setNumOfItemsInCart(numOfItems);
        })
        }
    },[productsInCart])
/* 
    useEffect(() => {
        setTimeout(()=>{
            fetch(`/api/cart-items`)
            .then((res) => res.json())
            .then((items) => {
                let numOfItems = 0;
                items.map((item) =>{
                    numOfItems += item.quantity;
                })
                setNumOfItemsInCart(`${numOfItems}`);
            })
        })
    },[])
     */
    function textSave(ev){
        setText(ev.target.value);
    }
    return(
        <>
            <div className="header">
                <div className="left-section">
                    <Link to="/" className="header-link">
                    <img className="logo"
                        src="images/logo-white.png" />
                    <img className="mobile-logo"
                        src="images/mobile-logo-white.png" />
                    </Link>
                </div>

                <div className="middle-section">
                    <input 
                        className="search-bar" 
                        type="text" 
                        placeholder="Search"
                        onChange={textSave}
                    />
                    <button className="search-button">
                    <img className="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div className="right-section">
                    <Link className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                    </Link>

                    <Link className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src="images/icons/cart-icon.png" />
                    <div className="cart-quantity">{numOfItemsInCart}</div>
                    <div className="cart-text">Cart</div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;