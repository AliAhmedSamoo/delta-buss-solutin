import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import "./css/about.css"

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';


function About() {


const Navigate=useNavigate();



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

                    <h1 className="heading">   Empowering the world to design</h1>
                    <h3 className="sub-line">We are Block, a Digital Product Design & Branding Agency. As a team of Designers, Business Analysts,</h3>
                    <h3 className="s-line">Strategists, Content Writers, and Project Managers, we collaborate on a result-oriented design process.</h3>



                </div>



                <div className='aboutimages'>
                     <img loading='lazzy' src='https://block.codescandy.com/assets/images/about-img/about-img-1.jpg' alt='' />
                     <img loading='lazzy' src='https://block.codescandy.com/assets/images/about-img/about-img-2.jpg' alt='' />
                     <img loading='lazzy' src='https://block.codescandy.com/assets/images/about-img/about-img-3.jpg' alt='' />
                </div>



                <div className='aboutimages2'>
                    <table>
                        <tr>
                            <th>  <img loading='lazzy' src='https://block.codescandy.com/assets/images/award-logo/award-logo-1.svg' alt='' /></th>
                            <th className='mm'>  <img loading='lazzy' src='https://block.codescandy.com/assets/images/award-logo/award-logo-2.svg' alt='' /></th>
                            <th>  <img loading='lazzy' src='https://block.codescandy.com/assets/images/award-logo/award-logo-3.svg' alt='' /></th>
                        </tr>
                    </table>
                </div>



                <div className='aboutValues'>
                    <h1>Our Value</h1>

                    <div className='aboutvaluediv'>
                         <img loading='lazzy' src='https://media.licdn.com/dms/image/D5612AQEf6LeF26E1kg/article-cover_image-shrink_720_1280/0/1680614368660?e=2147483647&v=beta&t=mOHzEoTLfHAWBO_u7RUEGMPKbha42W7iwKV-KQoHhlA' alt='' />
                        <div>
                            <h4 className='nopading' style={{ color: '#blue' }}>01</h4>
                            <h2 className='nopading' style={{ color: "#fff" }}>Innovative Solutions for Business Success</h2>
                            <p className='nopading'>At Delta Business Solution, innovation is at the core of everything we do. We specialize in developing cutting-edge solutions that propel businesses forward in today's fast-paced world. Whether it's leveraging AI and automation or implementing the latest technology trends, our innovative approach ensures that our clients stay ahead of the curve and achieve their goals with confidence.</p>
                            <h5 className='nopading'>Explore More</h5>
                        </div>
                    </div>

                    <div className='aboutvaluediv2'>
                        <div>
                            <h4 className='nopading' style={{ color: '#blue' }}>02</h4>
                            <h2 style={{ color: "#fff" }} className='nopading'>Trusted Partnerships Built on Integrity</h2>
                            <p className='nopading'>Integrity forms the foundation of our relationships with clients. At Delta Business Solution, we prioritize honesty, transparency, and ethical practices in all our dealings. Our clients trust us to deliver results because we are committed to upholding the highest standards of integrity in every aspect of our work. With Delta Business Solution as your partner, you can rest assured that your business's best interests are always our top priority.</p>
                            <h5 className='nopading'>Explore More</h5>
                        </div>

                         <img loading='lazzy' src='https://block.codescandy.com/assets/images/about-img/about-value-img-2.jpg' alt='' />

                    </div>


                    <div className='aboutvaluediv'>
                         <img loading='lazzy' src='https://www.dprgroup.com/wp-content/uploads/2023/11/expertise-card-software-and-technology.jpg' alt='' />
                        <div>
                            <h4 className='nopading' style={{ color: '#blue' }}>03</h4>
                            <h2 style={{ color: "#fff" }} className='nopading'>Expertise Across Diverse Industries</h2>
                            <p className='nopading'>With a wealth of experience and expertise across various industries, Delta Business Solution brings a unique perspective to every client engagement. Our team comprises professionals with deep domain knowledge, allowing us to understand the specific challenges and opportunities facing different sectors. Whether you're in healthcare, finance, retail, or any other industry, we have the knowledge and skills to tailor solutions that meet your unique needs and drive success.</p>
                            <h5 className='nopading'>Explore More</h5>
                        </div>
                    </div>
                </div>


                <div>
                    <h4>
                        BEHIND THE Delta Solutions
                    </h4>

                    <h1 style={{ color: "#fff" }}>Our Leadership Team</h1>

                    <h4>Working from all around the world to build the Web of tomorrow.</h4>

                    <div className='teampics'>
                        <div className='imagescardabout'>
                             <img loading='lazzy' src='https://block.codescandy.com/assets/images/team/team-img-4.jpg' alt='' />
                            <h2 className='nopading' >Jitu Chauhna</h2>
                            <p className='nopading'>Co-Founder & CEO</p>
                            <div></div>
                        </div>

                        <div className='imagescardabout'>
                             <img loading='lazzy' src='https://block.codescandy.com/assets/images/team/team-img-4.jpg' alt='' />
                            <h2 className='nopading' >Jitu Chauhna</h2>
                            <p className='nopading'>Co-Founder & CEO</p>
                            <div></div>
                        </div>

                        <div className='imagescardabout'>
                             <img loading='lazzy' src='https://block.codescandy.com/assets/images/team/team-img-4.jpg' alt='' />
                            <h2 className='nopading' >Jitu Chauhna</h2>
                            <p className='nopading'>Co-Founder & CEO</p>
                            <div></div>
                        </div>

                        <div className='imagescardabout'>
                             <img loading='lazzy' src='https://block.codescandy.com/assets/images/team/team-img-4.jpg' alt='' />
                            <h2 className='nopading' >Jitu Chauhna</h2>
                            <p className='nopading'>Co-Founder & CEO</p>
                            <div></div>
                        </div>
                    </div>

                </div>

                <div style={{ marginTop: '50px' }}></div>

                <div className='aboutValues'>


                    <div className='aboutvaluediv3'>
                        <div className='ander'>
                            <h4 className='nopading' style={{ color: '#blue' }}>CAREERS / ALL OPEN POSITIONS</h4>
                            <h2 style={{ color: "#fff" }} className='nopading'>Become one of us</h2>
                            <p className='nopading'>Do you want to join our team and work remotely from anywhere you’d like? We can’t wait to hear from you!</p>
                            <button  style={{ margin: '0' }} onClick={()=>Navigate("/contact")} className="purchase">View Open POSITIONS</button>
                        </div>

                        <div className='joinsssss'>
                            <div>
                                 <img loading='lazzy' src='https://pnptc-media.s3.amazonaws.com/images/pexels-fauxels-3183150.2e16d0ba.fill-1200x800.jpg' alt='' />
                                 <img loading='lazzy' src='https://innovativesol.com/wp-content/uploads/2020/04/02182019-innovative-solutions-lifestyles-4.jpg' alt='' />
                            </div>

                             <img  loading='lazzy' src='https://antares.solutions/wp-content/uploads/2021/07/business-process-automation.jpg' alt='' />

                        </div>
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
                                <h3 className="m-head">Empowering businesses with innovative solutions.<br/>
                                    Join us in shaping the future of your business.</h3>
                                    <h5 className="m-head">Subscribe To Our newsletter</h5>
                            </div>

                            <div className="email-bar">
                                <input className="email-edit" type="email" id="email" name="email" placeholder="email" required />
                                <button className="subs">Subscribe</button>
                            </div>
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

export default About