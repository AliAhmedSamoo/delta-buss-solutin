import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import "./css/contact.css"

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import Cookies from 'js-cookie';



function Sign() {

  const [isVisible, setIsVisible] = useState(false);

  const Navigate = useNavigate()

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");





  const formsub = async (e) => {
    e.preventDefault()
  


    const hide = message.loading('Action in progress..', 1);




    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
  
    urlencoded.append("email", email);
    urlencoded.append("password", password);
  

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    await fetch("https://deltabusiness.io:1337/login", requestOptions)
      .then(response => response.json())
      .then(result => {

       
        if (result === 'user not found') {
          message.error("Please enter a correct Email Address" )
        } else if (result === "Password is incorrect.") {
          message.error("Please enter a correct Password"  )
        }else

        {
        
         Navigate("/")
         message.success("logged in" )
         Cookies.set('email', result.email, { expires: 7 }); // Expires in 7 days
         Cookies.set('id', result._id, { expires: 7 }); // Expires in 7 days
         Cookies.set('Name', result.name, { expires: 7 }); // Expires in 7 days
         Cookies.set('Token', "dskgfsdgfkgsdfkjg35464154845674987dsf@53", { expires: 7 }); // Expires in 7 days
         
      
      }
        if (result === '') {}

       
      })
      .catch(error => console.log('error', error));


  }















  const animatedElementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = animatedElementRef.current;
      if (element) {
        const top = element.getBoundingClientRect().top;
        console.log(" top " + top)
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight + 20);
        console.log(" height " + windowHeight)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div>



      <Navbar />

      <div style={{ height: "50px" }}></div>

      <div className="pattern-square"></div>
      <div className="front" >
        <div ref={animatedElementRef}
          className={`uper ${isVisible ? 'visible' : ''}`}

        >
          <h1 className="heading">Log In</h1>
          <h3 className="sub-line">At least, not exclusively. Reduced recruiting costs, more efficient and effective communication.</h3>


        </div>












      </div>

      <div className='contactus' style={{ padding: '200px 0' }}>
        <div className='contactformdiv'>
          <form className='contactusform' onSubmit={formsub}>
            <div className='insideform'><label>Email</label> <input type='email' name='email' value={email} onChange={(e) => setemail(e.target.value)} /></div>
            <div className='insideform'><label>Password</label> <input type='password' name='password' value={password} onChange={(e) => setpassword(e.target.value)} /></div>

            <button style={{ width: '100%', margin: '0' }} className="purchase">Login</button>

          </form>
        </div>

      </div>


      <footer className="main-foot">
        <div className="decoration">
          <h4>Services</h4>
          <a onClick={() => Navigate('/services')}>Business Consulting</a>
          <a onClick={() => Navigate('/services')}>Web Development</a>
          <a onClick={() => Navigate('/services')}>Digital Marketing</a>
          <a onClick={() => Navigate('/services')}>Content Creation</a>
          <a onClick={() => Navigate('/services')}>Project Management</a>
        </div>
        <div className="decoration">
          <h4>About Us</h4>

          <a onClick={() => Navigate('/testimonials')}>Client Testimonials</a>
          <a onClick={() => Navigate('/blogs')}>Blog</a>
          <a>Careers</a>
        </div>
        <div className="decoration">
          <h4>Contact Us</h4>
          <a onClick={() => Navigate('/contact')}>Contact Information</a>
          <a onClick={() => Navigate('/contact')}>Request a Quote</a>

          <a>FAQ</a>
        </div>
        <div className="decoration">
          <h4>Headquarters</h4>
          <div className="dection">
            <a>Delta Business Solutions</a>
            <a>511 Laredo Ln, Chanhassen, MN 55317</a>

            <a>Country</a>
          </div>
        </div>
      </footer>
      <footer className="main-foot">
        <div className='downfoot'>
          <div>
            <img src='logo.png' alt='' width={"100px"} />
          </div>
          <div style={{ display: 'flex', fontSize: '12px', paddingTop: '0' }}>Copyright © 2024 &#160; <div style={{ color: "#3894FF" }}> DELTA BUSINESS SOLUTIONS</div></div>
          <div className='downfootss'>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div className='socailbox'><FaFacebook /></div>
              <div className='socailbox'><FaInstagram /></div>
              <div className='socailbox'><FaTwitter /></div>
            </div>
            <div>
              <div onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }} className='socailbox addsa'><FaArrowUp /></div>
            </div>
          </div>

        </div>
      </footer>




    </div>
  )
}

export default Sign