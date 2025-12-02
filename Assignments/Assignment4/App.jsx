import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Products from './Axios/Products';
import Quotes from './Axios/Quotes';
import Navbar from './Navbar';
import Users from './Users';
import List_exercise1 from './List_exercise1';

function App() {
  return (
    <div>
      {/* <Effect /> */}
      {/* <List_exercise1 /> */}
      {/* <Users /> */}
      {/* <Get /> */}
      {/* <Products /> */}
      {/* <Quotes /> */}
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<List_exercise1 />} />
        <Route  path="/products" element={<Products />}/>
         <Route  path="/quotes" element={<Quotes />}/>
          <Route  path="/userlist" element={<Users />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

