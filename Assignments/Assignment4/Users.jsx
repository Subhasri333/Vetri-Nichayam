import React from 'react'
import Data from "./assets/Users.json";


const Users = () => {
  return (
    <div className='container'>
        <div className='row'>
            {Data.map((D,index)=>(
                <div key={index} className='col-md-4 mb-4'>
                     <div className='card h-100 shadow-sm'>
                         <div className='card-body'>
                            <img src={D.picture} alt="profile"  className='w-100'/>
                        <h3 className='card-title text-primary fw-bold'>{D.name.title} {D.name.first} {D.name.last}</h3>
                        <p className='card-text mb-3'>{D.gender}</p>
                         <p className='card-text mb-3'>{D.cell}</p>
                         <p className='card-text mb-3'>{D.location.city} {D.location.state} {D.location.country} {D.location.passcode} </p>
                          <a href='#'className='card-text mb-3' >{D.email}</a>
                    </div>
                     </div>
                   
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Users
