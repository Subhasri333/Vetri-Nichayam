import React from 'react'
import Data from "./assets/companies.json";

const List_exercise1 = () => {
  return (
     <div className='container'>
      <div className='row'>
        {Data.map((D,i) => (
          <div key={i} className='col-md-4 mb-4'>
            <div className='card h-100 shadow-sm'>
              <div className='card-body'>
                <h3 className='card-title text-primary fw-bold'>{D.company}</h3>
                <p className='card-text mb-3'>
                  <strong>Location : </strong>{D.location}
                </p>
                <h6 className='fw-semibold mb-2'><strong>Employee Details :</strong></h6>
                <div className='d-flex flex-wrap align-items-center justify-content-center gap-2'>
                  {D.employees.map((e,index)=>(
                    <div key={index}>
                      <h6>{e.name} : {e.role}</h6>
                      <h6></h6>
                      <div>
                        {e.skills.map((s,i)=>(
                          <span key={i} className='me-2 mb-2 badge text-bg-success '>{s}</span>
                        ))}
                          </div>
                    </div>   
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
}

    

export default List_exercise1

