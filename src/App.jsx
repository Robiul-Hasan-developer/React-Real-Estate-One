import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import ScrollToTop from './components/common/srollTop/ScrollToTop';

import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/service/Service';
import Pricing from './components/pricing/Pricing';
import Contact from './components/home/contact/Contact';
import Sidebar from './components/common/sidebar/Sidebar';
import Blog from './components/blog/Blog';


function App() {

  return (
    <>
    <Sidebar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>  </Route>
          <Route path="/about" element={<About/>}>  </Route>
          <Route path="/services" element={<Service/>}>  </Route>
          <Route path="/blog" element={<Blog/>}>  </Route>
          <Route path="/pricing" element={<Pricing/>}>  </Route>
          <Route path="/contact" element={<Contact/>}>  </Route>
        </Routes>
    </BrowserRouter>

    <ScrollToTop/>
    </>
  )
}

export default App
