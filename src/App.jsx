import { useState , useEffect } from 'react';
import { Routes , Route } from 'react-router'
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrderPage } from './pages/order/OrderPage';
import { TrackingPage } from './pages/TrakingPage';

function App() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(()=>{
      fetch('/api/products')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((products) => setProducts(products))
    .catch((error) => {
      console.error(error);
    });
    },500);
  }, []);
  let [productsInCart, setProductsInCart] = useState([]);
    useEffect(() => {
        setTimeout(()=>{
          fetch(`/api/cart-items?expand=product`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
          .then((items) => setProductsInCart(items))
          .catch((error) => {
            console.error(error);
          });
        },500)
    },[])
    
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage products = {products} productsInCart = {productsInCart}/>}></Route>
        <Route path='/checkout' element ={<CheckoutPage productsInCart = {productsInCart}/>}></Route>
        <Route path='/orders' element ={<OrderPage productsInStock = {products} productsInCart = {productsInCart}/>}></Route>
        <Route path='/tracking' element ={<TrackingPage productsInCart = {productsInCart}/>}></Route>
      </Routes>
    </>
  )
}

export default App
