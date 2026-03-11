import { Routes , Route } from 'react-router'
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderPage } from './pages/OrderPage';
import { TrackingPage } from './pages/TrakingPage';

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
