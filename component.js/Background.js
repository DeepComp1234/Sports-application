import React from 'react'
import './Background.css'
import styled from 'styled-components'
import img from '../images/backg.png'
import shoe from '../images/shoe.jpg'
import bottle from '../images/bottle.jpg'
import bag from '../images/bag.jpg'
import boxingGlubs from '../images/boxing glubs.png'
import shock from '../images/shock.jpg'
import ball from '../images/ball.jpg'
import leftarrow from '../images/left arrow.png'
import rightarrow from '../images/right arrow.png'
import secondleftarrow from '../images/secondleft.png'
import secondrightarrow from '../images/secondright.png'
import baketball from '../images/basketball.jpg'
import punchonp from '../images/boxingonp.jpg'
import cricket from '../images/cricket.jpg'
import football from '../images/football.jpg'
import flower from '../images/flower.png'
import lemon from '../images/lemon.png'
import flower2 from '../images/flower2.png'


const Backgr = styled.section`
min-width:100vw;
height: 100vh;
background-size: cover;
background-image:url(${img});
background-repeat: no-repeat;
  `
  
function Background() {
  return (
    <>

    <div className="container-fluid ">
        <div className="row text-center">
            <div className="col bg-dark text-light">
                Free Delivery on Order above 1000, Don't Miss
                <span className='ms-5 shop'>SHOP NOW <i className="fa-sharp fa-solid fa-arrow-right"></i></span>
            </div>
        </div>
       <div className="row overflow-hidden">
        <Backgr className='col-12 d-flex align-items-end px-5'>
          <div className="row py-5">
            <div className="col-12  py-5 ">
              <span className='bigf '>Play the game.<br />Your rules</span> <span className='bigf2'>Your way</span>
              <br /><span className='uniform'>Made to fit school uniform that gives you the edge</span><br />
              <button className='btn btn-outline-light my-3'>EXPLORE NOW</button>
            </div>
          </div>
        </Backgr>
        </div>

      <div className="row">
        <div className="col-12 textitem text-center ">
          Shop by items
        </div>
        <div className="col-12 lightertext text-center">
          Your Games, Your rules 
        </div>
        <div className="col-12 px-1 py-4 d-flex justify-content-center ">
          <div className="row d-flex justify-content-center  py-5 px-4">
          <span className='leftarrow'><img src={leftarrow} alt="" className='leftarrow' style={{zIndex:"-10"}}/></span>
            <div className="col-2 slider text-center">
              <img src={shoe} alt="" style={{width:"100%",borderRadius:"60%"}}/>
              <span className=' text-dark fs-6 fw-bold'>Shoe</span>
            </div>
            <div className="col-2 slider text-center">
              <img src={bottle} alt="" style={{width:"100%",borderRadius:"60%",height:"40%"}}/>
              <span className=' text-dark fs-6 fw-bold pe-4'>Bottle</span>
              </div>
            <div className="col-2 slider text-center">
            <img src={bag} alt="" style={{width:"100%",height:"40%",borderRadius:"60%"}}/>
            <span className=' text-dark fs-6 fw-bold'>Bag</span>
            </div>
            <div className="col-2 slider text-center">
            <img src={boxingGlubs} alt="" style={{width:"100%",height:"40%",borderRadius:"60%"}}/>
            <span className=' text-dark fs-6 fw-bold'>Boxing Glubs</span>
            </div>
            <div className="col-2 slider text-center">
            <img src={shock} alt="" style={{width:"100%",height:"40%",borderRadius:"60%"}}/>
            <span className=' text-dark fs-6 fw-bold'>Sock</span>
            </div>
            <div className="col-2 slider text-center">
            <img src={ball} alt="" style={{width:"100%",height:"40%",borderRadius:"60%"}}/>
            <span className=' text-dark fs-6 fw-bold '>Ball</span>
            </div>
            <span className='rightarrow'><img src={rightarrow} alt="" className='rightarrow'style={{zIndex:"-10"}}/></span>
          </div>
        </div>
      </div>

      <div className="row py-1">
        <div className="col-12 text-dark fw-bolder fs-2 py-2 text-center">
          Games You Love 
        </div>
        <div className='col-md-7 col-10 lightertext text-end fs-6 pe-5'>
          Top Sale This Week
          </div>
          <div className="col-3"></div>
          <div className="col-2">
            <div className="row p-0">
              <div className="col-6 text-end p-2"><img src={secondleftarrow} alt="" className='secondleftarrow '/></div>
              <div className="col-6 p-2"><img src={secondrightarrow} alt="" className='secondleftarrow '/></div>
            </div>
          </div>
      </div>

      <div className="row">
        <div className="col-md-2 col-10 gx-1 mx-sm-auto rounded-3"><img src={baketball}alt="" className='setimage '/><span className='text-dark fs-6 fw-bold py-3'>Basketball</span></div>
        <div className="col-md-2 col-10 gx-1 mx-sm-auto rounded-3"><img src={punchonp} alt="" className='setimage '/><span className='text-dark fs-6 fw-bold py-3'>Boxing</span></div>
        <div className="col-md-2 col-10 gx-1 mx-sm-auto rounded-3"><img src={cricket}  alt="" className='setimage '/><span className='text-dark fs-6 fw-bold py-3'>Cricket</span></div>
        <div className="col-md-2 col-10 gx-1 mx-sm-auto rounded-3"><img src={football} alt="" className='setimage '/><span className='text-dark fs-6 fw-bold py-3'>Soccer</span></div>
      </div>

        <div className="row py-2 mt-5 mb-5 backpink">
          <div className="col-12 text-dark fw-bolder fs-3 py-2 text-center"> What makes Us Different</div>
          <div className='col-12 lightertext lightertext2  text-center fs-6 pe-5'>
          Helping people manage anxiety, pain and sleepness
          </div>
          <div className="col-md-3 col-10 mx-auto text-center pt-5 d-flex justify-content-center">
            <div className="row">
              <div className="col-12 p-1"><img src={flower} alt="" style={{width:'10%'}}/></div>
              <div className="col-12 p-1 fw-bold fs-3 text-dark">Locally <br /> Secured</div>
              <div className="col-12 p-1 lightertext">I'm a paragraph. Click here to add your own text edit me. Let your user get to know you.</div>
            </div>
          </div>
          <div className="col-md-3 col-10 mx-auto text-center pt-5">
            <div className="row">
              <div className="col-12 p-1"><img src={lemon} alt="" style={{width:'10%'}}/></div>
              <div className="col-12 p-1 fw-bold fs-3 text-dark">100% <br /> Sustainable fabrics</div>
              <div className="col-12 p-1 lightertext">I'm a paragraph. Click here to add your own text edit me. Let your user get to know you.</div>
            </div>
          </div>
          <div className="col-md-3 col-10 mx-auto text-center pt-5">
            <div className="row">
              <div className="col-12 p-1"><img src={flower2} alt="" style={{width:'10%'}}/></div>
              <div className="col-12 p-1 fw-bold fs-3 text-dark">Best Of The <br /> Class Material </div>
              <div className="col-12 p-1 lightertext">I'm a paragraph. Click here to add your own text edit me. Let your user get to know you.</div>
            </div>
          </div> 
          
        </div>




    </div>
    </>
  )
}

export default Background