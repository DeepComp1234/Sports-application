import React from 'react'
import logo from '../images/Screenshot (106).png'
import './Navbar.css'

function Navbar() {
  return (
    <>

    <div className="row d-flex justify-content-center">
        <div className="col-md-3 col-10 dropdown">
       
          <span className="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            English
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">French</a></li>
            <li><a className="dropdown-item" href="#">India</a></li>
          
            <li><a className="dropdown-item" href="#">Britain</a></li>
            <li><a className="dropdown-item" href="#">Brazilian</a></li>
            <li><a className="dropdown-item" href="#">Chinese</a></li>
            <li><a className="dropdown-item" href="#">Japanese</a></li>
          </ul>
        
        </div>
        <div className="col-md-3 col-10 ">
        <span className="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            USD
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Rupees</a></li>
            <li><a className="dropdown-item" href="#">Riyal</a></li>
          
            <li><a className="dropdown-item" href="#">Derum</a></li>
            <li><a className="dropdown-item" href="#">Euro</a></li>
            <li><a className="dropdown-item" href="#">RTS</a></li>
            <li><a className="dropdown-item" href="#">Yan</a></li>
          </ul>
        </div>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
   <img src={logo} alt="undefined" style={{width:"5rem"}} className="mx-2"/>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link active fw-bolder fs-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bolder fs-5" href="#">School uniforms</a>
        </li>

        

        <li className="nav-item">
          <a className="nav-link active fw-bolder fs-5" href="#">Corporate</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bolder fs-5" href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bolder fs-5" href="#">Blogs</a>
        </li>
      </ul>

      <form className="d-flex justify-content-center">
        <ul className='logos'>
        <i class="fa-solid fa-magnifying-glass  mx-4 text-dark my-auto"></i>
        <i class="fa-regular fa-heart mx-4 text-dark my-auto"></i>
        <i class="fa-solid fa-cart-shopping mx-4 my-auto"></i>
        <i class="fa-regular fa-user mx-4 text-dark my-auto"></i> 
        </ul>
      </form>

    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar