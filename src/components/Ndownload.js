import { Rating } from '@mui/material';
import React from 'react'
import { Stack } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { ImageUrl } from "../components/Imag";
import Bar from './Bar';
import Footer from './Footer';

export default function Ndownload() {

    let lction = useLocation();
    const abc = lction.state?.ndown;
    console.log(abc[0].apkgamelik)
  return (
    <div className='h-100' style={{height:'100vh'}}><Bar/>
    {abc.map((e)=>(
<div className="container">

    <div className="row my-5">
    <h5 style={{color:'#ffac14'}}>{e.title}</h5>
      <div className='d-flex justify-content-around align-items-center m-3'>
      
                <div className="col-sm-4 p-1 text-center">
                  
                  <img
                    src={ImageUrl + e.apkImages[0]}
                    alt={e.imagesAlt}
                    height="150"
                    width="150"
                    style={{ borderRadius: "20px", padding: "3px" }}
                    className="mx-3"
                  />
                </div>
                <span className="vr mt-2" style={{width:'4px'}}></span>
                <div className="col-sm-7 p-1 ">
                  <h1 className='display-5 fw-bold'>Download {e.title}</h1>
                </div>
      </div>
               <h4 className="mt-5 text-decoration-underline">Latest Version of {e.title}</h4>
               <h5 className="my-3">{e.title} {e.version} APK Mod</h5>
              </div>
              <strong className="justify-content-center d-flex my-5">
                  <br />
                  <br />
                  <Link to={e.apkgamelink}>

                  <button
                    className="btn justify-content-center align-items-center d-flex text-white rounded-5"
                    style={{
                      height: "35px",
                      width: "280px",
                      backgroundColor: "#424242",
                    }}
                    // onClick={() => Download(e._id)}
                  >
                    <strong className="fa fa-download">
                      &nbsp; {e.title} &nbsp; {e.version}
                    </strong>
                  </button>
                  </Link>
                </strong>
                <br/>
                <h2 className="px-1 text-center my-5"> FAQ</h2>
                <div className="accordion my-5" id="accordionExample">
                  <div className="accordion-item my-2 border-0 shadow">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How To Get Free Minecraft On Android?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <span>
                          You need to pay to access Minecraft, as it is not a
                          free game. You cannot get Minecraft for free on
                          Android. You need to pay for it to get it on your
                          Android device. Minecraft APK free is just an
                          illusion. A free version of the Minecraft game has not
                          been produced yet. You can only get to download the
                          game and sign up on an existing account through the
                          Minecraft website.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item my-2 border-0 rounded rounded-3 shadow">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Is Minecraft Free On Android?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {/* add response text */}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item my-2 border-0 rounded rounded-3 shadow">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Who’s Your Daddy Minecraft Map?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">{/* Add any text*/}</div>
                    </div>
                  </div>
                  <div className="accordion-item my-2 border-0 rounded rounded-3 shadow">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How to Download Minecraft On Phone?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">{/* Add any text*/}</div>
                    </div>
                  </div>
                </div>
</div>
    ))}
    <Footer/>
    </div>
  )
}
