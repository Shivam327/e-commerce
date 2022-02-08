import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Book, Access, Computer, Electronic, Mobile, Fashion } from './Pages/product/';

import MainNavbar from './Components/Navbar/Navbar';
import ProductNav from './Components/Navbar/ProductNav';
import Homepage from './Pages/Homepage';
import Admin from './Pages/Admin';
import User from './Pages/User';
import Welcome from './Pages/Welcome';
import Cart from './Pages/Cart';
import Thankyou from './Pages/Thankyou.jsx';

function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 1000);
  }, []);

  return (
    <>
      {loaded ? (
        <Welcome />
      ) : (
        <>
          <MainNavbar />
          <ProductNav />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/user' element={<User />} />
            <Route path='/thankyou' element={<Thankyou />} />
            {/* Pages Path */}
            <Route path='/accsess' element={<Access />} />
            <Route path='/book' element={<Book />} />
            <Route path='/computer' element={<Computer />} />
            <Route path='/fashion' element={<Fashion />} />
            <Route path='/electronic' element={<Electronic />} />

            <Route path='/mobile' element={<Mobile />} />
          </Routes>
          <ToastContainer
            position='top-right'
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      )}
    </>
  );
}

export default App;
