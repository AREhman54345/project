import React, { useEffect, useState } from 'react'
import logooo from "../Assets/logooo.jpeg";
import sec from "../Assets/sec.jpeg";
import th from "../Assets/th.jpeg";
import shap from "../Assets/shap.PNG";
import Home from './Home';
import Ads from './Ads';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'
import { ImageUrl } from './Imag';

export default function Ygame(props) {
let data = props.data

// let lction = useLocation();
// const abc = lction.state?.rehman;

// const [stitle, setstitle] = useState('')
//   const load = () =>{
//     setstitle(abc[0].googlePageTitle)
//   }
//   // console.log(abc.ckEditiorText)
//   useEffect(()=>{
//     document.title = stitle
//     load()
//   },[stitle])

//   console.log(abc[0].googlePageTitle)
 
  let navigation = useNavigate()
  const Download = (_id) =>{
    axios
      .get(`https://apkserver.tech-east.com.pk/apk/getSingleProduct${_id}`)
      .then((getdata) => {
        console.log(getdata.data.doc)
        navigation('/Download' ,{state: {rehman : getdata.data.doc}})
      
      });
    
  }
  return (
    <div style={{ backgroundColor: "#ffac14" }}>



        <div className="container my-5">

        {/* <div className='justify-content-between d-flex'>
        <div className='m-2 align-middle'>

<h5>Best</h5>
        </div>
        <div className="m-2">

<h5>not good</h5>
        </div>
      </div> */}



          <br />
          <br />
          <h2 className="justify-content-center d-flex">
            Best Uploaded &nbsp; <span className="text-white">Games</span>
          </h2>
          <div className="progress w-100" style={{ height: "5px" }}>
            <div
              className="progress-bar bg-black"
              role="progressbar"
              style={{ width: "100%" }}
            />
          </div>

          <div className="row ">
            {data.map((e)=>(
              <div className="col-sm-8 col-lg-4 p-5" onClick={() => Download(e._id)} style={{cursor:'pointer'}}>
              <div className="d-flex diva rounded">
                <div>
                  <img
                    src={ImageUrl+e.apkImages[0]}
                    alt="logo"
                    height="95"
                    width="95"
                    style={{ borderRadius: "20px", padding: "3px" }}
                  />
                </div>
                &nbsp; &nbsp;
                <div className="d-flex flex-column gap-1">
                  <strong>{e.title} <span style={{color:'red'}}>(New)</span></strong>
                  <span>Version: {e.version}</span>
                  <span>Category: {e.categoryId.name}</span>
                  <span>Downloads: {e.numberOfDownloads}</span>
                  <button
                    className="btn  position-relative p-0 justify-content-center align-items-center d-flex text-white"
                    style={{ height: "20px", width: "100px", backgroundColor:'#0d6b0d'}}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
            ))}
            

            
          </div>
        </div>
        <div>
          <img
            src={shap}
            alt="logo"
            className="w-100"
            /* style={{marginBottom:'-3px'}} removing thin line  (that was actually chrome issue.) */
          />
        </div>
      </div>
  )
}
