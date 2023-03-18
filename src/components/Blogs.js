import React from 'react'
import logooo from "../Assets/logooo.jpeg";
import sec from "../Assets/sec.jpeg";
import th from "../Assets/th.jpeg";
import shapes from '../Assets/shapes.PNG'

export default function Blogs() {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>

        <div className="container my-5">
          <br />
          <br />
          <h2 className="justify-content-center d-flex">
            Our Blogs
          </h2>
          <div className="progress w-100" style={{ height: "5px" }}>
            <div
              className="progress-bar bg-black"
              role="progressbar"
              style={{ width: "100%" }}
            />
          </div>

          <div className="row ">
              <div className="col-md-4 my-5">
                <div className="card">
                  <img src={th}
                  className='card-img-top'/>
                  <div className="card-body text-center">
                    <h5 className="card-title">Best OF Best</h5>
                    <p className='card-text'>Lorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit amet</p>
                    
                  </div>
                </div>
                
              </div>
              <div className="col-md-4 my-5">
                <div className="card">
                  <img src={th}
                  className='card-img-top'/>
                  <div className="card-body text-center">
                    <h5 className="card-title">Best OF Best</h5>
                    <p className='card-text'>Lorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit amet</p>
                    
                  </div>
                </div>
                
              </div>
              <div className="col-md-4 my-5">
                <div className="card">
                  <img src={th}
                  className='card-img-top'/>
                  <div className="card-body text-center">
                    <h5 className="card-title">Best OF Best</h5>
                    <p className='card-text'>Lorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit amet</p>
                    
                  </div>
                </div>
                
              </div>

              <div className="col-md-4 my-5">
                <div className="card">
                  <img src={th}
                  className='card-img-top'/>
                  <div className="card-body text-center">
                    <h5 className="card-title">Best OF Best</h5>
                    <p className='card-text'>Lorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit amet</p>
                    
                  </div>
                </div>
                
              </div>

              <div className="col-md-4 my-5">
                <div className="card">
                  <img src={th}
                  className='card-img-top'/>
                  <div className="card-body text-center">
                    <h5 className="card-title">Best OF Best</h5>
                    <p className='card-text'>Lorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit amet</p>
                    
                  </div>
                </div>
                
              </div>

              <div className="col-md-4 my-5">
                <div className="card">
                  <img src={th}
                  className='card-img-top'/>
                  <div className="card-body text-center">
                    <h5 className="card-title">Best OF Best</h5>
                    <p className='card-text'>Lorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit amet</p>
                    
                  </div>
                </div>
                
              </div>
        </div>
        
      </div>
      <img src={shapes} alt="logo" className="w-100" />
        </div>
  )
}
