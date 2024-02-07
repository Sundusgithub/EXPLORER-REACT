import React from 'react'
import UserForm from './UserForm'
export default function ContactSection() {
  return (
    <div className='container'>
        <h2 className='text-center mt-5 mb-1'>Contact Us</h2>
        <h5 className="text-center text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, esse?</h5>
       <div className="row">
        <div className="col-md-6">

            <img className="img-fluid"src="https://tse4.mm.bing.net/th?id=OIP.Fag_XOLkPHAUscGnplLqdAHaDt&pid=Api&P=0&h=220" alt="" srcset="" />
        </div>
        <div className="col-md-6"><UserForm/></div>
       </div>
      
    </div>
  )
}
