import React from 'react'
import { Link } from 'react-router-dom'
//import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
    
    <div className='error'>
        <h2>Oops!..</h2>
        <p>Sorry, an unexpected error has occurred.<br/>
          <i>Not found!</i>
        </p>
    </div> 
    
    <div className="btn-footer">
            <Link to = "/" href="" className="brand-btn"> Back to Home!</Link>
          </div>
    </>
  )
}

export default Error