import { useState , useEffect } from 'react';
import { Routes , Route } from 'react-router'
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderPage } from './pages/OrderPage';
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
    
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage products = {products}/>}></Route>
        <Route path='/checkout' element ={<CheckoutPage products = {products}/>}></Route>
        <Route path='/orders' element ={<OrderPage productsInStock = {products} />}></Route>
        <Route path='/tracking' element ={<TrackingPage />}></Route>
      </Routes>
    </>
  )
}

export default App
