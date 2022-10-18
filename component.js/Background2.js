import React from 'react'
import './Background2.css'
import running from '../images/running.jpg'
import swimming from '../images/swimming.jpg'
import cycling from '../images/cycling.jpg'
import gymnatics from '../images/gymnatics.png'
import martial from '../images/martial arts.jpg'
import sandal from '../images/sandal.jpg'
import hat from '../images/hat.jpg'
import sports from '../images/sports.jpg'
import longBlazer from '../images/woman long blazer.jpg'
import eye from '../images/eye.png'
import heart from '../images/heart.png'
import swipe from '../images/reverse.png'
import lic from '../images/LIC.png'
import Slice from '../images/Slicepay.png'



function Background2() {
  return (
    <>
      <div className="container-fluid">
        <div className="row pt-5">
            <div className="col-12 mx-auto text-center fw-bolder fs-3">
                Shop By Activity
            </div>
            <div className="col-12 mx-auto text-center fs-6 lighter">
                There is something for everyone
            </div>
            <div className="col-12 ">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-2 my-5 col-10 mx-auto one"><img src={running} alt="" style={{width:"100%",height:"50%"}}   className="similar similar1"/></div>
                    <div className="col-md-2 my-5 col-10 mx-auto two"><img src={swimming} alt="" style={{width:"100%"}}               className="similar similar2"/></div>
                    <div className="col-md-2 my-5 col-10 mx-auto three"><img src={cycling} alt="" style={{width:"100%"}}              className="similar similar3"/></div>
                    <div className="col-md-2 my-5 col-10 mx-auto four"><img src={gymnatics} alt="" style={{width:"90%",height:"50%"}} className="similar similar4"/></div>
                    <div className="col-md-2 my-5 col-10 mx-auto four"><img src={martial} alt="" style={{width:"90%",height:"50%"}}   className="similar similar5"/></div>
                </div>
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-md-2 gx-1 bgk col-10 mx-auto overflow-hidden">
                <div className="row">
                    <div className="col-12">
                        <img src={sandal} alt="" style={{width:"100%",height:"100%",position:"relative"}}/>

                 <span><img src={heart} style={{width:"42px"}} alt="" className='hov'/>  </span><br />
                 <span><img src={eye} style={{width:"42px"}} alt="" className='hov2'/></span><br />
                 <span><img src={swipe} style={{width:"42px"}} alt="" className='hov2 hov3'/></span>  
                                 
        </div>
        <div className="text-light text-center fw-bold fs-5" style={{background:"rgb(98, 91, 91)"}}>Add to cart</div>
</div>
                    <div className="col-12 text-dark py-2 text-start belowText">
                        Combo Tennis Shorts & Tee <br /><span style={{color:"orangered"}}>Rs 1,600</span>&nbsp;&nbsp;&nbsp;<span style={{color:"gray"}}><del>1,800</del></span> <br />
                        <span style={{color:"gray"}}>(1,234 views)</span>
                    </div>
                </div>
                
            <div className="col-md-2 gx-1 bgk col-10 mx-auto">
                <div className="row">
                    <div className="col-12">
                    <img src={hat} alt="" style={{width:"100%",height:"25rem",position:"relative"}}/>
                    </div>
                    
                    <div className="col-12 text-dark py-2 text-start belowText">
                        Combo Tennis Shorts & Tee <br /><span style={{color:"orangered"}}>Rs 1,600</span>&nbsp;&nbsp;&nbsp;<span style={{color:"gray"}}><del>1,800</del></span> <br />
                        <span style={{color:"gray"}}>(1,234 views)</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2 gx-1 bgk col-10 mx-auto">
                <div className="row">
                    <div className="col-12">
                    <img src={sports} alt="" style={{width:"100%",height:"25rem",position:"relative"}}/>
                    </div>
                    
                    <div className="col-12 text-dark py-2 text-start belowText">
                        Combo Tennis Shorts & Tee <br /><span style={{color:"orangered"}}>Rs 1,600</span>&nbsp;&nbsp;&nbsp;<span style={{color:"gray"}}><del>1,800</del></span> <br />
                        <span style={{color:"gray"}}>(1,234 views)</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2 gx-1 bgk col-10 mx-auto">
                <div className="row">
                    <div className="col-12">
                    <img src={longBlazer} alt="" style={{width:"100%",height:"25rem",position:"relative"}}/>
                    </div>
                    
                    <div className="col-12 text-dark py-2 text-start belowText">
                        Combo Tennis Shorts & Tee <br /><span style={{color:"orangered"}}>Rs 1,600</span>&nbsp;&nbsp;&nbsp;<span style={{color:"gray"}}><del>1,800</del></span> <br />
                        <span style={{color:"gray"}}>(1,234 views)</span>
                    </div>
                </div>
            </div>
                
</div>

<div className="row my-4 py-2 px-2 mx-auto">
    <div className="col-md-6 col-10 mx-auto">
    <img src={lic} alt="" style={{width:"100%"}}/>
    </div>
    <div className="col-md-6 col-10 mx-auto">
    <img src={Slice} alt="" style={{width:"100%"}}/>
    </div>
</div>

      </div>
    </>
  )
}

export default Background2
