import axios from 'axios';
import React, { useState } from 'react'
import { Pagination, Stack } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Bar from '../components/Bar';
import Footer from '../components/Footer';
import { ImageUrl } from '../components/Imag';

export default function Scategory() {


  const [page, setpage] = useState([])
  let loc= useLocation();
    const categ = loc.state.scate.listings
    console.log(categ)

    let navigation = useNavigate();
    const Download = (_id) => {
      axios
        .get(`https://apkserver.tech-east.com.pk/apk/getSingleProduct${_id}`)
        .then((getdata) => {
          console.log(getdata.data.doc);
          navigation("/Download", { state: { rehman: getdata.data.doc } });
        });
    };
  return (
    <div>
      <Bar />
      <div className="container my-5">
        <h2 className="">Sub Categories</h2>
        <div className="progress w-100" style={{ height: "5px" }}>
          <div
            className="progress-bar bg-black"
            role="progressbar"
            style={{ width: "100%" }}
          />
        </div>

        <div className="row ">
          {categ.map((e) => (
            <div className="col-sm-8 col-lg-4 p-5" onClick={() => Download(e._id)} style={{cursor:'pointer'}}>
              <div className="d-flex">
                <div>
                  <img
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
                  <span>Version: 1.19.63.01</span>
                  <span>Mod: God Mode</span>
                  <span>Downloads: 1000+</span>
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
        <div className="justify-content-center d-flex">
          <Stack spacing={2}>
            <Pagination
              count={4}
              color="warning"
              onChange={(e, value) => setpage(value)}
            />
          </Stack>
        </div>
      </div>
      <Footer />
    </div>
  )
}
