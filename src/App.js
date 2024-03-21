import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Index from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Testimonials from './pages/Testimonials';
import Services from './pages/services';

import Blogs from './pages/Blogs';
import Blogview from './pages/Blogview';
import Sign from './pages/sign';
import Signup from './pages/sign up';
import Postblog from './pages/postblog';
import Admin from './pages/admin';




function ScrollToTop() {
  const { pathname } = useLocation();



  useEffect(() => {
    window.scrollTo(0, 0);




  }, [pathname]);

  return null;
}

const Navigateto = (path) => {
  const navigate = useNavigate()

  navigate(path)
}



function App() {





  return (
    <div className="App">



      <div>

        <BrowserRouter>
          <ScrollToTop />


          <Routes>
            {/* <Route path='/' exact component={Home} /> */}
            {/* <Route path='/blog/1' component={Blog} /> */}
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/Testimonials' element={<Testimonials />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:id' element={<Blogview />} />

            <Route path='/signin' element={<Sign />} />
            <Route path='/signUp' element={<Signup />} />
            <Route path='/postblog' element={<Postblog />} />
            <Route path='/admin' element={<Admin />} />







          </Routes>

         

        </BrowserRouter>
      </div>


    </div>
  );
}

export default App;
