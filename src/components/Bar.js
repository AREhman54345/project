import axios from 'axios';
import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import logooo from '../Assets/logooo.jpeg'
import newlogo from '../Assets/newlogo.png'

export default function Bar() {

  const [Word,setWord] = useState('');
  const navigation = useNavigate();

  const Searchgame = () => {
axios
.post('https://apkserver.tech-east.com.pk/apk/searchTitle1/', {
   title: Word
})
.then((response) => {
  navigation('/Sresult' ,{state: {special : response.data.doc.listings}})
})
  }
  
  return (
    <div style={{backgroundColor:'#ffac14'}}>
      <Navbar expand="lg" className="container" >
        &nbsp;
        &nbsp;
          <Navbar.Brand className="brand" href="/"> <img
              src={newlogo}
              alt="logo"
              height="80"
              width="80"

              style={{borderRadius:'5px', background:'#ffac14'}}
            /></Navbar.Brand>
            <strong>
                <Nav.Link href="/Games" className="text-white mx-4">Games</Nav.Link>
              </strong>
              <strong>
                <Nav.Link href="/Ap" className="text-white mx-4">Apps</Nav.Link>
              </strong>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
          <br/>
          <Navbar.Collapse>
            
            <Nav className="ms-auto justify-content-center p-1 navbar">
              {/* change */}
            <div className="d-flex">
                <input
                  placeholder="Search for your favourite"
                  className="mx-1 px-5 rounded rounded-5 border-0 w-100 text-white border-0"
                  style={{backgroundColor:'#ffcc74',color:'white'}}
                  onChange={(e)=>setWord(e.target.value)}
                />
                <button
                  className="px-3 rounded rounded-5 border-0" style={{backgroundColor:'#ffcc74'}}
                  onClick={()=>Searchgame()}
                >
                  <i class="fa fa-search text-white"></i>
                </button>

              </div>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
  )
}
