import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import "./css/contact.css"

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
import Subemail from '../component/subemail';



function Contact() {


  const [isVisible, setIsVisible] = useState(false);


  const Navigate = useNavigate()



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




  const [Name, setName] = useState("")
  const [Name2, setName2] = useState("")
  const [Email, setEmail] = useState("")
  const [CompanyName, setCompanyName] = useState("")
  const [Phone, setPhone] = useState("")
  const [Message, setMessage] = useState("")




  const sendemailopt = async (e) => {
    await e.preventDefault();




    const hide = message.loading('Action in progress..', 1);





    const url = 'https://api.sendinblue.com/v3/smtp/email';
    const apiKey = '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'; // Replace with your actual API key

    const data = {
      sender: {
        name: 'Delta Solution',
        email: 'info@deltasolution.pk'
      },
      to: [
        {
          email: "edevaan@yahoo.com",
          // name: name
        }
      ],
      subject: 'Contact Us Form Being Filled by : ' + Name + ', (Delta Solution)',
      htmlContent: '<div style="padding: 20px;height: fit-content;"><h1>Someone fill the Contact Us form on deltabusiness.io</h1><h3>name : ' + Name +' '+ ' '+' '+ Name +' </h3><h3>email : ' + Email + '</h3><h3>Company Name : ' + CompanyName + '</h3><h3>Phone : ' + Phone + '</h3><h3 style="margin: 0; margin-top: 50px;">Message: </h3> <p style=" margin: 0; ">' + Message + ' </p></div>'
    };

    const headers = {
      'Content-Type': 'application/json',
      'api-key': apiKey
    };

    await axios.post(url, data, { headers })
      .then(response => {

        setName("")
        setName2("")
        setEmail("")
        setCompanyName("")
        setPhone("")
        setMessage("")


        message.success("Thank you for Contacting Us ")
        console.log(response)
      }

      )
      .catch(error => {
        message.error("Something Went Wrong")

        console.log(error)
      }
      );

    // console.log(ali)


  }







  return (
    <div>



      <Navbar />

      <div style={{ height: "50px" }}></div>

      <div className="pattern-square"></div>
      <div className="front" >
        <div ref={animatedElementRef}
          className={`uper ${isVisible ? 'visible' : ''}`}

        >
          <h1 className="heading">Contact Us</h1>
          <h3 className="sub-line">Please reach out to us if you have questions about our enterprise offerings, or anything else.</h3>


        </div>












      </div>

      <div className='contactus'>
        <div className='contactformdiv'>
          <form className='contactusform' onSubmit={sendemailopt}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>  
            <div style={{ width: '49%' }} className='insideform'><label>First Name *</label> <input required value={Name} onChange={(e)=>setName(e.target.value)}  /></div>
              <div style={{ width: '45%' }} className='insideform'><label>Last Name *</label> <input required value={Name2} onChange={(e)=>setName2(e.target.value)}  /></div></div>
              <div className='insideform'><label>Email *</label> <input required value={Email} onChange={(e)=>setEmail(e.target.value)} /></div>
                                        <div className='insideform'><label>Company Name</label> <input required value={CompanyName} onChange={(e)=>setCompanyName(e.target.value)} /></div>
                                        <div className='insideform'><label>Phone</label> <input required value={Phone} onChange={(e)=>setPhone(e.target.value)} /></div>
                                        <div className='insideform'><label>Message</label> <textarea required value={Message} onChange={(e)=>setMessage(e.target.value)} /></div>
            <button style={{ width: '100%', margin: '0' }} className="purchase">Send</button>

          </form>
        </div>
        <div className='otherinfo'>
          <div>
            <h3 className='nopading'>Technical support</h3>
            <p className='nopading'>Found a persistent bug, or need help setting a new team member up? Can’t crack a feature? Let us know!</p>
          </div>

          <div>
            <h3 className='nopading'>General chat</h3>
            <p className='nopading'>Billing issues, customizations, plan changes--anything that doesn’t fit in the other two brackets, goes here. Start Chat</p>
          </div>

          <div>
            <h3 className='nopading'>Help Center</h3>
            <p className='nopading'>Want to share feedback on an existing feature or suggest a new one? Talk to us! Visit Help Center</p>
          </div>
        </div>
      </div>


      <footer>
        <div className="foot-white">
          <div className="foot-panel">
            <ul>
              <div className="presentation">
                <h5 className="m-head">DELTA BUSINESS SOLUTIONS</h5>
              </div>
              <div className="presentation">
                <h3 className="m-head">Empowering businesses with innovative solutions.<br />
                  Join us in shaping the future of your business.</h3>
                <h5 className="m-head">Subscribe To Our newsletter</h5>
              </div>

              <Subemail/>
            </ul>

          </div>
        </div>
      </footer>



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

export default Contact