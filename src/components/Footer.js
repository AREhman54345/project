import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";
import newlogo from '../Assets/newlogo.png'

export default function Footer() {
  const [data, setdata] = useState([])

  
  const navigation = useNavigate();
  const SCategory = () => {
    let sid = data[0]._id
axios
.post('https://apkserver.tech-east.com.pk/apk/getSubcategoriesData1', {
  subcategoriesdata: sid
})
.then((response) => {
  navigation('/Scategory' ,{state: {scate : response.data.doc}})

})
  }


  useEffect(() => {
    axios
      .get(`https://apkserver.tech-east.com.pk/apk/getAllSubcategories`)
      .then((getdata) => {
        setdata(getdata.data.doc)
      });
  }, []);
  // console.log(data)
  return (
    <div style={{ backgroundColor: "#424242" }}>
      <div className=" container">
        <div class="row">
          {/* Image */}

          <div className="col-md-3 py-2">
            <br/>
          <img
              src={newlogo}
              alt="logo"
              height="160"
              width="160"

              style={{borderRadius:'5px', background:'#ffac14'}}
            />
          </div>

          {/* 1st */}
          

          <div className="col-md-8 py-2 mx-2 row">
            <div>
              <h5 className="text-white">Applications</h5>
              
            </div>
            {data.map((e)=>(
            <ul class="list-group list-group-horizontal col-sm-3">
            <li class="list-group-item m-1 border-0 text-white" style={{ backgroundColor: "#424242",cursor:'pointer' }} onClick={()=>SCategory()}>{e.name}</li>
          </ul>

            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
