
import React from 'react'
import { Routes,Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Accessories from '../pages/Accessories';
import Store from '../pages/Store';
import IPadPage from '../pages/IPadPage';

function Allroutes() {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/store" element={<Store/>}/>
    {/* <Route path="/mac" element={<h1>Home</h1>}/> */}
    <Route path="/ipad" element={<IPadPage/>}/> 
    {/* <Route path="/iphone" element={<h1>Home</h1>}/>
    <Route path="/watch" element={<h1>Home</h1>}/>
    <Route path="/airpods" element={<h1>Home</h1>}/>
    <Route path="/tv-home" element={<h1>Home</h1>}/>
    <Route path="/services" element={<h1>Home</h1>}/> */}
    <Route path="/accessories" element={<Accessories/>}/>
    {/* {/* <Route path="/support" element={<h1>Home</h1>}/>
    <Route path="/" element={<h1>Home</h1>}/> */}
    {/* <Route path="cart" element={<h1>Cart</h1>}/> */}
 </Routes>
  )
}

export default Allroutes

