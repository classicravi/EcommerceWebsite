import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home';
import CustomNavbar from './Components/Navbar/CustomNavbar';
import Product from './Pages/Product/Product';
import {Routes,Route} from 'react-router-dom';
import CartPage from './Pages/CartPage/CartPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{overflow: 'hidden'}}>
    <CustomNavbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/mycart' element={<CartPage />} />
    </Routes>
    {/* <Product /> */}
    {/*<Home />*/}
    </div>
  )
}

export default App
