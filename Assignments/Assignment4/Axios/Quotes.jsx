import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios';

 
const Quotes = () => {

    const[quotes,setQuotes]=useState([])

 useEffect(()=>{
    axios
    .get("https://dummyjson.com/quotes")
    .then((response) => { 
        console.log(response.data)
        setQuotes(response.data.quotes);
      })
      .catch((error) => { 
        console.log("Error:", error); 
      });
  }, []);



  return (
    <div className='container'>
        <h2 className='text-center my-4'>QUOTES LIST</h2>
      <div className='col'>
        {quotes.map((q)=>(
            <div key={q.id} className='card w-50 shadow-sm col-md-6 mb-3 '>
                <div className='card-body'>
                    <h5 className=' text-center card-title'>{q.quote}</h5>
                     <h4 className="card-text">
                         <span className="badge bg-success ">{q.author}</span>
                    </h4>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Quotes
