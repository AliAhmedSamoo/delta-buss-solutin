import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import "./css/contact.css"
import axios from 'axios';
import { message } from 'antd';

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';




function Signup() {

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










    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [password, setpassword] = useState("");

    const [btn, setbtn] = useState(true);
    const [formmmmmmm, setformmmmmmm] = useState(true);

    const [myotp, setmyotp] = useState(true);

    const [enteredopt, setenteredopt] = useState("");







    // const Formsub = (e)=>{
    //     e.preventDefault()















    // }


    const sendemailopt = async (e) => {
        await e.preventDefault();

        await setbtn(false);


        const hide = message.loading('Action in progress..', 1);




        const randomNumber = () => {
            return Math.floor(Math.random() * 10);
        };

        const generateOtp = () => {
            let otp = '';
            for (let i = 0; i < 4; i++) {
                otp += randomNumber().toString();
            }
            return otp;
        };


        const myOtp = generateOtp();

        await setmyotp(myOtp)



        const url = 'https://api.sendinblue.com/v3/smtp/email';
        const apiKey = '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'; // Replace with your actual API key

        const data = {
            sender: {
                name: 'Delta Solution',
                email: 'info@deltasolution.pk'
            },
            to: [
                {
                    email: email,
                    // name: name
                }
            ],
            subject: 'OTP for Registration(Delta Solution) - ' + name + '',
            htmlContent: '<p><p>Greetings ' + name + '!<br><br>To continue with your registration, here is your OTP to be entered:<br><br><span style="font-size: 14pt;"><strong>' + myOtp + '</strong></span><br><br>Kindly do not share your OTP with anyone else and once you are done with registration, please delete your OTP!<br><br>Team Delta thanks for your trust on us and would love to see you action. In order to open a world of opportunities, you can continue registration.<br><br>Regards,<br>Delta Solution</p></p>'
        };

        const headers = {
            'Content-Type': 'application/json',
            'api-key': apiKey
        };

        const ali = await axios.post(url, data, { headers })
            .then(response => {

                setbtn(true);
                setformmmmmmm(false)
                message.success("OTP has been sent to " + email)
                console.log(response)
            }

            )
            .catch(error => {
                message.error("Error sending OTP to " + email, setTimeout(hide, 1))
                setbtn(true);
                console.log(error)
            }
            );

        // console.log(ali)


    }

    const formsub = async (e) => {
        e.preventDefault()
        await setbtn(false);


        const hide = message.loading('Action in progress..', 1);



        if (myotp === enteredopt) {




            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("name", name);
            urlencoded.append("email", email);
            urlencoded.append("password", password);
            urlencoded.append("phone", phone);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

           await fetch("http://deltabusiness.io:1337/signup", requestOptions)
                .then(response => response.text())
                .then(result => {

                    alert(result)
                  
                  if (result === '"Registration complete. Please log in to proceed."'){  Navigate("/signin") }
                  if (result === '"The email address provided is already in use. Please try a different one."'){
                    setenteredopt("")
                    setemail("")
                    setformmmmmmm(true)
                  }
                  
                    setbtn(true);
                })
                .catch(error => console.log('error', error));


            await setbtn(true);

        } else {
            message.error("The OTP you entered is incorrect. Please try again.", setTimeout(hide, 1))
            await setbtn(true);

        }





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
                    <h1 className="heading">Sign Up</h1>
                    <h3 className="sub-line">At least, not exclusively. Reduced recruiting costs, more efficient and effective communication.</h3>


                </div>












            </div>

            <div className='contactus' style={{ padding: '200px 0' }}>
                <div className='contactformdiv'>

                    {formmmmmmm ? (<>
                        <form className='contactusform' onSubmit={sendemailopt}>
                            <div className='insideform'><label> Full Name</label> <input required onChange={(e) => setname(e.target.value)} value={name} id='name' /></div>
                            <div className='insideform'><label>Email</label> <input required onChange={(e) => setemail(e.target.value)} value={email} id='email' type='email' /></div>
                            <div className='insideform'><label>Phone</label> <input required onChange={(e) => setphone(e.target.value)} value={phone} id='phone' type='number' /></div>

                            <div className='insideform'><label>Password</label> <input required onChange={(e) => setpassword(e.target.value)} value={password} id='password' type='password' /></div>

                            {btn ? (<> <button style={{ width: '100%', margin: '0' }} className="purchase">Sign Up</button>
                            </>) : (<>

                                <button disabled style={{ width: '100%', margin: '0' }} className="purchase">Please Wait</button>

                            </>)}
                        </form>

                    </>) : (<>
                        <form className='contactusform' onSubmit={formsub}>
                            <div className='insideform'><label> Enter OTP</label>
                                <label> <h5>"We have sent you the OTP via email. If it's not in your inbox, please make sure to also check your spam folder to ensure you don't miss it."</h5></label>
                                <input required onChange={(e) => setenteredopt(e.target.value)} value={enteredopt} id='name' /></div>

                            {btn ? (<> <button style={{ width: '100%', margin: '0' }} className="purchase">Sign Up</button>
                            </>) : (<>

                                <button disabled style={{ width: '100%', margin: '0' }} className="purchase">Please Wait</button>

                            </>)}
                        </form>

                    </>)}
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

export default Signup