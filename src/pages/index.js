import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import "./css/index.css"
import { useNavigate } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";




function Index() {


const Navigate = useNavigate()




  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);







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




  const animatedElementRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = animatedElementRef2.current;
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible2(top < windowHeight + 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  const animatedElementRef3 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = animatedElementRef3.current;
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible3(top < windowHeight + 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const animatedElementRef4 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = animatedElementRef4.current;
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible4(top < windowHeight + 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const animatedElementRef5 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = animatedElementRef5.current;
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible5(top < windowHeight + 2000);
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

      <div style={{height:"50px"}}></div>

      <div className="pattern-square"></div>
      <div className="front">
        <div ref={animatedElementRef}
          className={`uper ${isVisible ? 'visible' : ''}`}>
          <h1 className="heading">Transform Your Vision into Reality with Delta Business Solutions</h1>
          <h3 className="sub-line">Delta Business Solutions offers innovative business solutions to kickstart your projects effortlessly.</h3>
          <h3 className="s-line">Rely on Our Expertise for Swift Development of Strategies and Solutions, Bringing Your Vision to Life.</h3>

          <div className="button-2">
            <button className="purchase" onClick={()=>Navigate("/services")}>Explore More</button>

          </div>

        </div>

        <div ref={animatedElementRef} className={`slidleft visible`}>
          <div style={{ display: 'flex', gap: '50px' }}>
            <div className='imgss'>
               <img loading='lazzy' src='Services/AI & Automation.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Artboard 2 copy 2-100.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Business Planning.jpg' alt='asd' />
               <img loading='lazzy' src='Services/Consultant Service.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Content Creation.jpg' alt='sad' />
               <img loading='lazzy' src='Services/E-Commerce.jpg' alt='sad' />
            </div>

            <div className='imgss'>
               <img loading='lazzy' src='Services/General Sales.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Marketing.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Project Management.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Software on-Boarding.jpg' alt='asd' />
               <img loading='lazzy' src='Services/Technology Implementation.jpg' alt='asd' />
               <img loading='lazzy' src='Services/Web Design.jpg' alt='sad' />
            </div>

          </div>
        </div>


        <div ref={animatedElementRef} className={`slidleft ${isVisible ? 'visible' : ''}`}>

          <div style={{ display: 'flex', gap: '50px' }}>
            <div className='imgss2'>
               <img loading='lazzy' src='Services/Web Design.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Technology Implementation.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Software on-Boarding.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Project Management.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Marketing.jpg' alt='sad' />
               <img loading='lazzy' src='Services/General Sales.jpg' alt='sad' />

            </div>

            <div className='imgss2'>
               <img loading='lazzy' src='Services/E-Commerce.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Content Creation.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Consultant Service.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Business Planning.jpg' alt='sad' />
               <img loading='lazzy' src='Services/Artboard 2 copy 2-100.jpg' alt='sad' />
               <img loading='lazzy' src='Services/AI & Automation.jpg' alt='sad' />
            </div>

          </div>
        </div>




        <div ref={animatedElementRef2} className={`card ${isVisible2 ? 'visible' : ''}`}>
          <div className="card-1">


            <div className="title">
               <img loading='lazzy' src='https://cdn-icons-png.flaticon.com/512/3347/3347800.png' alt='' width={"60px"} />
              <h3>Customized Solutions</h3>
            </div>
            <div className="discription">Delta Business Solutions offers tailored solutions to meet your specific project requirements, ensuring flexibility and efficiency.</div>
          </div>
          <div className="card-1">
            <div className="title">
               <img loading='lazzy' src='https://cdn-icons-png.flaticon.com/512/1445/1445107.png' alt='' width={"60px"} />
              <h3>Expert Guidance</h3>
            </div>
            <div className="discription">Benefit from Delta Business Solutions' experienced team providing expert guidance throughout your project journey.</div>
          </div>
          <div className="card-1">
            <div className="title">
               <img loading='lazzy' src='https://cdn-icons-png.flaticon.com/512/2167/2167512.png' alt='' width={"60px"} />
              <h3>Innovative Solutions</h3>
            </div>
            <div className="discription">Delta Business Solutions leverages innovative technologies and approaches to solve complex business challenges.</div>
          </div>
        </div>


        <div ref={animatedElementRef3}
          className={`uper2 ${isVisible3 ? 'visible' : ''}`}>
          <h1 className="heading">Elevate Your Business with Delta Business Solutions</h1>
          <h3 className="sub-line">Delta Business Solutions offers cutting-edge solutions and stunning landing pages to drive your business forward.</h3>
          <h3 className="s-line">Our comprehensive services provide everything you need to establish a strong online presence and achieve your business goals.</h3>

        </div>



        <div ref={animatedElementRef4}
          className={`services ${isVisible4 ? 'visible' : ''}`}>

          <div className='carddd'>
             <img loading='lazzy' src='Services/AI & Automation.jpg' alt='sad' />
            <h3>AI & Automation</h3>
          </div>

          <div className='carddd'>
             <img loading='lazzy' src='Services/Artboard 2 copy 2-100.jpg' alt='sad' />
            <h3>Artboard</h3>
          </div>

          <div className='carddd'>
             <img loading='lazzy' src='Services/Business Planning.jpg' alt='sad' />
            <h3>Business Planning</h3>
          </div>

          <div className='carddd'>
             <img loading='lazzy' src='Services/Consultant Service.jpg' alt='sad' />
            <h3>Consultant Service</h3>
          </div>

          <div className='carddd'>
             <img loading='lazzy' src='Services/Content Creation.jpg' alt='sad' />
            <h3>Content Creation</h3>
          </div>

          <div className='carddd'>
             <img loading='lazzy' src='Services/E-Commerce.jpg' alt='sad' />
            <h3>E-Commerce</h3>
          </div>

          <div className='carddd'>
             <img loading='lazzy' src='Services/General Sales.jpg' alt='sad' />
            <h3>General Sales</h3>
          </div>

          <div className='carddd'>
             <img loading='lazzy' src='Services/Marketing.jpg' alt='sad' />
            <h3>Marketing</h3>
          </div>

          <div className='carddd'>
             <img loading='lazzy' src='Services/Project Management.jpg' alt='sad' />
            <h3>Project Management</h3>
          </div>

          <div className='carddd'>
             <img loading='lazzy' src='Services/Software on-Boarding.jpg' alt='sad' />
            <h3>Software on-Boarding</h3>
          </div>

          <div className='carddd'>
             <img loading='lazzy' src='Services/Technology Implementation.jpg' alt='sad' />
            <h3>Technology Implementation</h3>
          </div>

          <div className='carddd'>
             <img loading='lazzy' src='Services/Web Design.jpg' alt='sad' />
            <h3>Web Design</h3>
          </div>

       
       

       




        </div>


      </div>













      <footer>
        <div className="foot-white">
          <div className="foot-panel">
            <ul>
              <div className="presentation">
                <h3 className="m-head">Empowering businesses with innovative solutions.</h3>
              </div>
              <div className="presentation">
                <h3 className="m-head">Join us in shaping the future of your business.</h3>
              </div>
              <div className="foot-btn">
                <button className="btn-3" onClick={()=>{Navigate("/services")}}>Get Started</button>
                <a className="line-a">Contact us for more information.</a>
              </div>
            </ul>
           
          </div>
        </div>
      </footer>



      <div className="foot-2">
        <div className="foot-heading">Discover Delta Business Solutions Features</div>
      </div>
      <div className="sec-foot">
        <div className="line-1">
          <div className="head-4">
             <img loading='lazzy' src='https://cdn-icons-png.flaticon.com/512/1568/1568479.png' alt='' width={"60px"} />
            <h3>Built with Innovation</h3>
            <h5 className="sec-row">Delta Business Solutions leverages cutting-edge technologies and innovative solutions to empower your projects.</h5>
          </div>
          <div className="head-4">
             <img loading='lazzy' src='https://cdn-icons-png.flaticon.com/512/2752/2752493.png' alt='' width={"60px"} />
            <h3>Integrity-driven Approach</h3>
            <h5 className="sec-row">At Delta Business Solutions, we prioritize integrity, ensuring transparent and trustworthy services for every client.</h5>
          </div>
          <div className="head-4">
             <img loading='lazzy' src='https://cdn-icons-png.flaticon.com/256/11142/11142185.png' alt='' width={"60px"} />
            <h3>Excellence in Execution</h3>
            <h5 className="sec-row">Experience excellence in every aspect of your project with Delta Business Solutions' meticulous attention to detail and top-notch execution.</h5>
          </div>
        </div>

        <div className="line-1">
          <div className="head-4">
             <img loading='lazzy' src='https://cdn-icons-png.flaticon.com/256/6005/6005330.png' alt='' width={"60px"} />
            <h3>Customizable Solutions</h3>
            <h5 className="sec-row">Delta Business Solutions offers customizable solutions tailored to your specific needs, ensuring flexibility and adaptability.</h5>
          </div>
          <div className="head-4">
             <img loading='lazzy' src='https://cdn-icons-png.flaticon.com/512/747/747046.png' alt='' width={"60px"} />
            <h3>Expert Guidance</h3>
            <h5 className="sec-row">Benefit from Delta Business Solutions' extensive expertise and guidance throughout your project journey, maximizing your potential for success.</h5>
          </div>
          <div className="head-4">
             <img loading='lazzy' src='https://cdn-icons-png.flaticon.com/256/9290/9290117.png' alt='' width={"60px"} />
            <h3>Reliable Support</h3>
            <h5 className="sec-row">Count on Delta Business Solutions' dedicated support team to assist you every step of the way. Contact us for any inquiries or assistance.</h5>
          </div>
        </div>

        <div className="line-1">
          <div className="head-4">
             <img loading='lazzy' src='https://cdn-icons-png.flaticon.com/512/7870/7870722.png' alt='' width={"60px"} />
            <h3>Continuous Innovation</h3>
            <h5 className="sec-row">Stay ahead of the curve with Delta Business Solutions' commitment to continuous innovation and improvement, ensuring your projects are always at the forefront of technology.</h5>
          </div>
          <div className="head-4">
             <img loading='lazzy' src='https://cdn-icons-png.flaticon.com/512/1583/1583257.png' alt='' width={"60px"} />
            <h3>Responsive Design</h3>
            <h5 className="sec-row">Delta Business Solutions ensures your website is responsive and mobile-friendly, delivering a seamless experience across all devices.</h5>
          </div>
          <div className="head-4">
             <img loading='lazzy' src='https://cdn-icons-png.flaticon.com/512/2039/2039060.png' alt='' width={"60px"} />
            <h3>Personalized Service</h3>
            <h5 className="sec-row">Experience personalized service and attention to detail with Delta Business Solutions, where every client is treated uniquely.</h5>
          </div>
        </div>
      </div>



      <div ref={animatedElementRef5}
        className={`email-panel ${isVisible5 ? 'visible' : ''}`}>
        <div className="dec-email">
          <div className="sub-new">
             <img loading='lazzy' src='https://freepngimg.com/save/67802-computer-icons-outlook.com-html-client-email/1211x1011' alt='' width={"70px"} />

            <h1>Subscribe to our newsletter</h1>
          </div>
          <a className="para-line">Enjoy using Block Template and stay tuned for the latest updates and news.</a>
          <div className="email-bar">
            <input className="email-edit" type="email" id="email" name="email" placeholder="email" required />
            <button className="subs">Subscribe</button>
          </div>
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
                <a>123 Main Street, City, State, Zip</a>

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

export default Index