import { useState , useEffect } from 'react';
import { Routes , Route } from 'react-router'
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderPage } from './pages/OrderPage';
import { TrackingPage } from './pages/TrakingPage';

function App() {
  let [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`/api/products`)
        .then((res) => res.json())
        .then((products) => setProducts(products))
    },[])
    
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
