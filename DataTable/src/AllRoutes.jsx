// AllRoute.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Aboute from './Pages/Aboute';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Productdetail from './Components/Productdetail';
import Postdata from './Components/Postdata';


const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Aboute />} /> 
      <Route path='/addproduct' element={<Postdata/>} />
      <Route
        path='/product'
        element={
            <Product />

        }
      />
      <Route path='/login' element={<Login/>} />
      <Route
        path='/product/:id'
        element={

            <Productdetail />

        }
      />
    </Routes>
  );
};

export default AllRoute;
