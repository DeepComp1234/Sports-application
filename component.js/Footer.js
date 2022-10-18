import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
      <div className="conatiner p-3 bg-dark">
        <div className="row d-flex justify-content-center px-0">
            <div className="col-md-3 col-10 mx-auto ">
                <div className="row bg-dark text-white fs-4 main-text px-4">Sign up today and get <br />Rs. 200 off on your first order <br />
                <input type="email" class="form-control my-4" placeholder="enter your e-mail" />
                <div className="col-12 pb-4 ">
                    <div className="row ">
                        <div className="col-2"><i class="fa-brands fa-facebook-f"></i></div>
                        <div className="col-2"><i class="fa-brands fa-instagram"></i></div>
                        <div className="col-2"><i class="fa-brands fa-youtube"></i></div>
                        <div className="col-2"><i class="fa-brands fa-twitter"></i></div>
                        <div className="col-2"><i class="fa-brands fa-pinterest-p"></i></div>
                    </div>
                </div>
                </div>
               
            </div>
            <div className="col-md-2 col-5 mx-auto text-white bg-dark">
                <div className="row ">
                    <div className="col-12 py-3 fw-bolder">Collection</div>
                    <div className="col-12  ho">Clothing</div>
                    <div className="col-12  ho">Tops</div>
                    <div className="col-12  ho">Sweaters</div>
                    <div className="col-12  ho">Dresses</div>
                    <div className="col-12  ho">Shoes</div>
                </div>
            </div>
            <div className="col-md-2 col-5 text-white bg-dark mx-auto">
            <div className="row ">
                    <div className="col-12 py-3 fw-bolder">Company</div>
                    <div className="col-12 ho">About Toppers</div>
                    <div className="col-12 ho">Careers & Toppers</div>
                    <div className="col-12 ho">Contact Us</div>
                    <div className="col-12 ho">Git Cards</div>
                    <div className="col-12 ho">Blog</div>
                </div>
            </div>
            <div className="col-md-2 col-5 mx-auto text-white bg-dark">
            <div className="row ">
                    <div className="col-12 py-3 fw-bolder">Need Help</div>
                    <div className="col-12 ho">Order Status</div>
                    <div className="col-12 ho">Shipping & Delivery</div>
                    <div className="col-12 ho">FAQ & Helps</div>
                    <div className="col-12 ho">Terms & Conditions</div>
                    <div className="col-12 ho">Legal & Privacy</div>
                </div>
            </div>
            <div className="col-md-2 col-5 mx-auto text-white bg-dark">
            <div className="row ">
                    <div className="col-12 py-3 fw-bolder">Exclusive Services</div>
                    <div className="col-12 ho"><i class="fa-solid fa-phone"></i>&nbsp; <span>Call us: +1 666 888</span> </div>
                    <div className="col-12 ho"><i class="fa-regular fa-message"></i>&nbsp; <span>Send Us an Email</span> </div>
                    <div className="col-12 ho"><i class="fa-sharp fa-solid fa-location-dot"></i>&nbsp;  <span>See our stories</span></div>
                  
                </div>
            </div>
        </div>
        {/* ------------ */}
        <div className="row">

        </div>
      </div>
    </>
  )
}

export default Footer
