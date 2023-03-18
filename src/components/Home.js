import React, { useEffect, useState } from "react";
import "../App.css";
import logooo from "../Assets/logooo.jpeg";
import sec from "../Assets/sec.jpeg";
import th from "../Assets/th.jpeg";
import Footer from "./Footer";
import Ads from "./Ads";
import Ygame from "./Ygame";
import { useNavigate } from "react-router-dom";
import Game from "./Game";
import Blogs from "./Blogs";
import shapes from "../Assets/shapes.PNG";
import shap from "../Assets/shap.PNG";
import axios from "axios";
import { Link, useNavigation } from "react-router-dom";
import Content from "./Content";
import { ImageUrl } from "./Imag";

export default function Home() {
  const [edit, setedit] = useState([]);
  const [ygames, setygames] = useState([]);
  const [apps, setapps] = useState([]);
  useEffect(() => {
    axios
      .post(`https://apkserver.tech-east.com.pk/apk/getFiles`)
      .then((getdata) => {
        setedit(getdata.data.doc.EditorsChoice);

        setygames(getdata.data.doc.Games);

        setapps(getdata.data.doc.Apps);
      });
  }, []);

  let navigation = useNavigate();
  const Download = (_id) => {
    axios
      .get(`https://apkserver.tech-east.com.pk/apk/getSingleProduct${_id}`)
      .then((getdata) => {
        console.log(getdata.data.doc);
        navigation("/Download", { state: { rehman: getdata.data.doc } });
      });
  };
  // console.log(edit);

  return (
    <div>
      <div className="container my-5">
        <h2 className="justify-content-center d-flex">
          Editor's &nbsp; <span style={{ color: "#ffac14" }}>Choice</span>
        </h2>
        <div className="progress w-100" style={{ height: "5px" }}>
          <div
            className="progress-bar bg-black"
            role="progressbar"
            style={{ width: "100%" }}
          />
        </div>

        <div className="row " >
          {edit.map((e) => (
            <div className="col-sm-8 col-lg-4 p-5 " onClick={() => Download(e._id)} style={{cursor:'pointer'}}>
              <div className="d-flex diva rounded">
                <div>
                  <img
                    // let v  = {e.apkImages.map((img) =>{return img})}
                    src={ImageUrl + e.apkImages[0]}
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
                  <span>Category: {e.categoryId.name} </span>
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
      </div>

      {/* 2nd Part */}
      <Ygame data={ygames} />

      {/* 3rd part */}
      <Game appdata={apps} />

      {/* Ads */}
      <Ads />
      <Content />

      {/* Our Blogs */}
      <Blogs />

      <Footer />
    </div>
  );
}
