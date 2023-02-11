import React from 'react'

export default function Home() {
  return (
  
  <div>
    <span style={{ backgroundImage: "url(gym-24699087.jpg)" }} className="fitness">
    <div   className="d-flex justify-content-center my-20 position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body-tertiary rounded  ">
        
    <div style={{ backgroundImage: "url(gym-24699087.jpg)" }} className='container d-flex justify-content-center p-3 mb-2 my-20 bg-primary text-white '>
  <div className="row g-4">
  <div className="col">
    <label for="first name" className='form label'>First Name</label>
    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
  </div>
  <div className="col">
    <label for="Last name" className='form label'>Last Name</label>
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label" >Email</label>
    <input type="email" className="form-control" placeholder='Enter Your Mail' id="inputEmail4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <button type="button" className="btn btn-danger">Add Member</button>
   </div> 
</div>
</div>
</span>
</div>

  )
}

