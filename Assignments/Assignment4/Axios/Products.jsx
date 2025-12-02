import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios';

const Products = () => {
    const[products,setProduct]=useState([])
    useEffect(()=>{
         axios
    .get("https://fakestoreapi.com/products") 
    .then((response)=>{
        console.log(response.data)
        setProduct(response.data);
    })
    .catch((error)=>{
        console.log("Error :", error);
    })
    },[]);
   

  return (
    <div className='container'>
      <h2 className='text-center my-4'>PRODUCTS LIST</h2>
      <div className='row'>
        {products.map((p)=>(
            <div className='col-md-4 mb-3' key={p.id}>
                <div className='card h-100 shadow-sm'>
                    <img src= {p.image}
                    className='card-image-100'
                    style={{height:"200px", padding: "40px"}} />
                    <div className='card-body'>
                            <h3 className='card-title'>{p.title}</h3>
                            <p className='card-text'> {p.description}</p>
                            <p className="card-text">
  <span className="badge bg-primary">${p.price}</span>
</p>

                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Products
