import {Route,Routes} from 'react-router-dom';
import Auth from './pages/Auth';
import Landing from './pages/Landing';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Checkout from './components/Checkout';

const RouterConfig = () => {
  const location= useLocation()
  return (
    <div className='bg-[#faf9fb]'>
      {location.pathname === '/' && <Navbar />}
      {location.pathname === '/home' && <Navbar />}
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/auth' element={<Auth/>} />
        <Route exact path='/home' element={<Homepage/>} />
        <Route exact path='/checkout' element={<Checkout/>} />
      </Routes>
      {location.pathname === '/' && <Footer />}
    </div>
  )
}

export default RouterConfig