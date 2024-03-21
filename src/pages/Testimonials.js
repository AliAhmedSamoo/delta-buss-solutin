import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import "./css/Testimonials.css"

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import Subemail from '../component/subemail';



function Testimonials() {

const Navigate = useNavigate()


  const [isVisible, setIsVisible] = useState(false);



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

      <div style={{height:"50px"}}></div>

      <div className="pattern-square"></div>
      <div className="front">
        <div ref={animatedElementRef}
          className={`uper ${isVisible ? 'visible' : ''}`}>
          <h1 className="heading">Testimonials</h1>
          <h3 className="sub-line">Discover what people are saying about us and our services.</h3>



        </div>




      </div>


      <div className='Testimonialsdiv'>


        <div className="testmmooo">
          <p className='nopading' style={{height:'150px'}}>"Working with Delta Business Solution was a game-changer for our company. Their team's expertise and dedication helped us streamline our processes and achieve significant growth. Highly recommend!"</p>
          <div>
             <img loading='lazzy' src='https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png' alt='' width={"40%"} />

          </div>

          <div className='testomggg'>
             <img loading='lazzy' src='2x/Afzal A..jpg' alt='' />
          </div>
          <div><h3>Afzal A.</h3></div>
          <div>position</div>
        </div>

        <div className="testmmooo">
          <p className='nopading'  style={{height:'150px'}}>"Delta Business Solution exceeded our expectations with their professionalism and attention to detail. From start to finish, they guided us through the project with clear communication and exceptional service. 5 stars!"</p>
          <div>
             <img loading='lazzy' src='https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png' alt='' width={"40%"} />

          </div>

          <div className='testomggg'>
             <img loading='lazzy' src='2x/Frank A (1).jpg' alt='' />
          </div>
          <div><h3>Frank A.</h3></div>
          <div>position</div>
        </div>

        <div className="testmmooo">
          <p className='nopading' style={{height:'150px'}}>"I couldn't be happier with the results Delta Business Solution delivered. Their innovative solutions and strategic approach transformed our business for the better. Thank you for your outstanding work!"</p>
          <div>
           <img loading='lazzy' src='https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png' alt='' width={"40%"}/>
        
          </div>

          <div className='testomggg'>
             <img loading='lazzy' src='2x/Julie L..jpg' alt=''/>
          </div>
          <div><h3>Julie L.</h3></div>
          <div>position</div>
        </div>


        <div className="testmmooo">
          <p className='nopading'  style={{height:'150px'}}>"Choosing Delta Business Solution was one of the best decisions we made for our business. Their knowledgeable team provided invaluable insights and support throughout the entire process. We look forward to continuing our partnership."</p>
          <div>
           <img loading='lazzy' src='https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png' alt='' width={"40%"}/>
        
          </div>

          <div className='testomggg'>
             <img loading='lazzy' src='2x/Kelly R..jpg' alt=''/>
          </div>
          <div><h3>Kelly R.</h3></div>
          <div>position</div>
        </div>


        <div className="testmmooo">
          <p className='nopading' style={{height:'150px'}}>"Delta Business Solution is the real deal. Their commitment to our success was evident from day one, and their expertise in web design helped us create a website that truly stands out. We're thrilled with the results and highly recommend their services."</p>
          <div>
           <img loading='lazzy' src='https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png' alt='' width={"40%"}/>
        
          </div>

          <div className='testomggg'>
             <img loading='lazzy' src='2x/Sarik A..jpg' alt=''/>
          </div>
          <div><h3>Sarik A.</h3></div>
          <div>position</div>
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
                                <h3 className="m-head">Empowering businesses with innovative solutions.<br/>
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

export default Testimonials