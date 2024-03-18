import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import "./css/about.css"

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';




function Services() {
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



    return (
        <div>


            <div>

                <Navbar />

                <div style={{ height: "50px" }}></div>

                <div className="pattern-square"></div>

                <div className="front">
                    <div ref={animatedElementRef}
                        className={`uper ${isVisible ? 'visible' : ''}`}>

                        <h1 className="heading">   We provide client-centric services</h1>
                        <h3 className="sub-line">Maximize your website's capabilities and reach its full potential with our services.</h3>
                        {/* <h3 className="s-line">Strategists, Content Writers, and Project Managers, we collaborate on a result-oriented design process.</h3> */}



                    </div>









                    <div className='aboutValues'>
                        <h1>Our Services</h1>

                        <div className='aboutvaluediv'>
                            <img loading='lazzy' src='Services/AI & Automation.jpg' alt='' />
                            <div>
                                <h4 className='nopading' style={{ color: '#blue' }}>01</h4>
                                <h2 className='nopading' style={{ color: "#fff" }}>AI & Automation</h2>
                                <p className='nopading'>Experience streamlined operations and heightened productivity with our cutting-edge AI and automation solutions. From optimizing supply chains to enhancing customer service, we specialize in tailoring innovations to suit your business needs. Let us propel your business forward in the digital age.</p>
                                <h5 className='nopading'>Explore More</h5>
                            </div>
                        </div>

                        <div className='aboutvaluediv2'>
                            <div>
                                <h4 className='nopading' style={{ color: '#blue' }}>02</h4>
                                <h2 style={{ color: "#fff" }} className='nopading'>Artboard</h2>
                                <p className='nopading'>Elevate your visual communication with our professional artboard design services. At Delta Business Solution, we specialize in creating stunning and impactful artboards tailored to your specific needs. Whether you're designing presentations, marketing materials, or prototypes, our expert team ensures top-notch quality and attention to detail. Let us bring your ideas to life with creativity and precision.</p>
                                <h5 className='nopading'>Explore More</h5>
                            </div>

                            <img loading='lazzy' src='Services/Artboard 2 copy 2-100.jpg' alt='' />

                        </div>


                        <div className='aboutvaluediv'>
                            <img loading='lazzy' src='Services/Business Planning.jpg' alt='' />
                            <div>
                                <h4 className='nopading' style={{ color: '#blue' }}>03</h4>
                                <h2 className='nopading' style={{ color: "#fff" }}>Business Planning</h2>
                                <p className='nopading'>Crafting a roadmap for success is effortless with our tailored business planning services. Let us guide you towards your goals with precision and efficiency.</p>
                                <h5 className='nopading'>Explore More</h5>
                            </div>
                        </div>

                        <div className='aboutvaluediv2'>
                            <div>
                                <h4 className='nopading' style={{ color: '#blue' }}>04</h4>
                                <h2 style={{ color: "#fff" }} className='nopading'>Consultant Service</h2>
                                <p className='nopading'>Unlock the full potential of your business with Delta Business Solution's expert consulting services. Our seasoned consultants bring a wealth of industry knowledge and practical experience to the table, providing personalized strategies to address your unique challenges and capitalize on opportunities.</p>
                                <h5 className='nopading'>Explore More</h5>
                            </div>

                            <img loading='lazzy' src='Services/Consultant Service.jpg' alt='' />

                        </div>


                        <div className='aboutvaluediv'>
                            <img loading='lazzy' src='Services/Content Creation.jpg' alt='' />
                            <div>
                                <h4 className='nopading' style={{ color: '#blue' }}>05</h4>
                                <h2 className='nopading' style={{ color: "#fff" }}>Content Creation</h2>
                                <p className='nopading'>Let Delta Business Solution take your content to new heights with our exceptional content creation services. From captivating copy to engaging multimedia, our team of creative professionals is dedicated to crafting content that resonates with your audience and achieves your business objectives.</p>
                                <h5 className='nopading'>Explore More</h5>
                            </div>
                        </div>

                        <div className='aboutvaluediv2'>
                            <div>
                                <h4 className='nopading' style={{ color: '#blue' }}>06</h4>
                                <h2 style={{ color: "#fff" }} className='nopading'>E-Commerce</h2>
                                <p className='nopading'>Step into the digital marketplace with confidence, supported by Delta Business Solution's comprehensive e-commerce services. Our team specializes in creating tailored solutions to help you thrive in the competitive world of online retail.</p>
                                <h5 className='nopading'>Explore More</h5>
                            </div>

                            <img loading='lazzy' src='Services/E-Commerce.jpg' alt='' />

                        </div>


                        <div className='aboutvaluediv'>
                            <img loading='lazzy' src='Services/General Sales.jpg' alt='' />
                            <div>
                                <h4 className='nopading' style={{ color: '#blue' }}>07</h4>
                                <h2 className='nopading' style={{ color: "#fff" }}>General Sales</h2>
                                <p className='nopading'>Transform your sales strategy and drive revenue growth with Delta Business Solution's expert sales services. Our seasoned professionals specialize in analyzing market trends, identifying target audiences, and implementing effective sales techniques to maximize your business's profitability.</p>
                                <h5 className='nopading'>Explore More</h5>
                            </div>
                        </div>

                        <div className='aboutvaluediv2'>
                            <div>
                                <h4 className='nopading' style={{ color: '#blue' }}>08</h4>
                                <h2 style={{ color: "#fff" }} className='nopading'>Marketing</h2>
                                <p className='nopading'>Experience the power of strategic marketing with Delta Business Solution. Our dedicated team of marketing specialists is committed to crafting innovative campaigns that captivate audiences, drive engagement, and ultimately, boost your bottom line.</p>
                                <h5 className='nopading'>Explore More</h5>
                            </div>

                            <img loading='lazzy' src='Services/Marketing.jpg' alt='' />

                        </div>


                        <div className='aboutvaluediv'>
                            <img loading='lazzy' src='Services/Project Management.jpg' alt='' />
                            <div>
                                <h4 className='nopading' style={{ color: '#blue' }}>09</h4>
                                <h2 className='nopading' style={{ color: "#fff" }}>Project Management</h2>
                                <p className='nopading'>Simplify your project journey and ensure success with Delta Business Solution's expert project management services. Our seasoned professionals bring a wealth of experience to the table, overseeing every aspect of your project from initiation to completion.</p>
                                <h5 className='nopading'>Explore More</h5>
                            </div>
                        </div>

                        <div className='aboutvaluediv2'>
                            <div>
                                <h4 className='nopading' style={{ color: '#blue' }}>10</h4>
                                <h2 style={{ color: "#fff" }} className='nopading'>Software on-Boarding</h2>
                                <p className='nopading'>Embark on a smooth transition to new software solutions with Delta Business Solution's specialized onboarding services. Our tailored approach ensures that your team adopts the software seamlessly, minimizing disruptions and maximizing productivity.</p>
                                <h5 className='nopading'>Explore More</h5>
                            </div>

                            <img loading='lazzy' src='Services/Software on-Boarding.jpg' alt='' />

                        </div>


                        <div className='aboutvaluediv'>
                            <img loading='lazzy' src='Services/Technology Implementation.jpg' alt='' />
                            <div>
                                <h4 className='nopading' style={{ color: '#blue' }}>11</h4>
                                <h2 className='nopading' style={{ color: "#fff" }}>Technology Implementation</h2>
                                <p className='nopading'>Experience a smooth transition to new technologies with Delta Business Solution's expert implementation services. Our seasoned team specializes in guiding businesses through the adoption of cutting-edge technologies, ensuring a seamless integration process.</p>
                                <h5 className='nopading'>Explore More</h5>
                            </div>
                        </div>

                        <div className='aboutvaluediv2'>
                            <div>
                                <h4 className='nopading' style={{ color: '#blue' }}>12</h4>
                                <h2 style={{ color: "#fff" }} className='nopading'>Web Design</h2>
                                <p className='nopading'>Elevate your online presence with Delta Business Solution's professional web design services. Our team of expert designers combines creativity with functionality to deliver visually stunning and user-friendly websites tailored to your brand.</p>
                                <h5 className='nopading'>Explore More</h5>
                            </div>

                            <img loading='lazzy' src='Services/Web Design.jpg' alt='' />

                        </div>



                    </div>



                    <div style={{ marginTop: '50px' }}></div>

                    <div className='aboutValues'>


                        <div className='aboutvaluediv3'>
                            <div className='ander'>
                                <h4 className='nopading' style={{ color: '#blue' }}>HIRE US / CONSULTATION REQUEST</h4>
                                <h2 style={{ color: "#fff" }} className='nopading'>Engage Our Services</h2>
                                <p className='nopading'>Ready to elevate your business with our expertise? Reach out to us for a consultation!</p>
                                {/* <button style={{ margin: '0' }} className="purchase">Request Consultation</button> */}

                                <div className='blogItem-author'>
                                    <img loading='lazzy' src="2x/Afzal A..jpg" alt='avatar' />
                                    <div>
                                        <h6>Hamza A.</h6>
                                        <p className='nopading'>+92 321 XXXXX</p>
                                        <p className='nopading'>example@xyz.com</p>
                                    </div>
                                </div>

                            </div>


                            <div className='joinsssss' >


                                <div className='contactformdiv2'>
                                    <form className='contactusform'>
                                        <div className='insideform'><label>Name *</label> <input /></div>
                                        <div className='insideform'><label>Email *</label> <input /></div>
                                        <div className='insideform'><label>Company Name</label> <input /></div>
                                        <div className='insideform'><label>Phone</label> <input /></div>
                                        <div className='insideform'><label>Message</label> <textarea /></div>
                                        <button style={{ width: '100%', margin: '0' }} className="purchase">Send</button>

                                    </form>
                                </div>

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
                                    <h3 className="m-head">Empowering businesses with innovative solutions.<br />
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


        </div>
    )
}

export default Services