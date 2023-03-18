import React, { useEffect } from "react";
import logooo from "../Assets/logooo.jpeg";
import sec from "../Assets/sec.jpeg";
import th from "../Assets/th.jpeg";
import shapes from "../Assets/shapes.PNG";
import axios from "axios";
import Home from "./Home";
import '../App.css'
import { ImageUrl } from "./Imag";
import { useNavigate } from "react-router-dom";

export default function Game(props) {

  let data = props.appdata

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
    <div className="container">
      <br />
      <br />
      <h2 className="justify-content-center d-flex">
        Best Uploaded &nbsp; <span style={{ color: "#ffac14" }}>Apps</span>
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

        <div className="col-sm-4 col-sm-8 col-lg-4 p-5 " onClick={() => Download(e._id)} style={{cursor:'pointer'}}>
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
              <strong>{e.title}<span style={{color:'red'}}>(New)</span></strong>
              <span>Version: {e.version}</span>
              <span>Mod: {e.name}</span>
              <span>Downloads: {e.numberOfDownloads}</span>
              <button
                className="btn border border-success border-2 position-relative p-0 justify-content-center align-items-center d-flex"
                style={{ height: "20px", width: "100px" }}
              >
                Download
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>
      <strong className="justify-content-center d-flex">
        <br />
        <br />
        <button
          className="btn justify-content-center align-items-center d-flex text-white rounded-5"
          style={{
            height: "35px",
            width: "210px",
            backgroundColor: "#ffac14",
          }}
        >
          <strong>Show More</strong>
        </button>
      </strong>
      {/* <Ads slot="7638965651642848"/> */}
    </div>
  );
}
