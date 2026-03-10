import { Routes , Route } from 'react-router'
import { HomePage } from './HomePage';
import { CheckoutPage } from './CheckOutPage';
import { OrderPage } from './OrderPage';
import { TrackingPage } from './TrakingPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/checkout.html' element ={<CheckoutPage/>}></Route>
        <Route path='/orders.html' element ={<OrderPage />}></Route>
        <Route path='/tracking.html' element ={<TrackingPage />}></Route>
      </Routes>
    </>
  )
}

export default App
