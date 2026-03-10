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
        <Route path='/checkout' element ={<CheckoutPage/>}></Route>
        <Route path='/orders' element ={<OrderPage />}></Route>
        <Route path='/tracking' element ={<TrackingPage />}></Route>
      </Routes>
    </>
  )
}

export default App
