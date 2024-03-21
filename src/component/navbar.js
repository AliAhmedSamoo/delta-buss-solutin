import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import Cookies from 'js-cookie';

function Navbar() {
  const Navigate = useNavigate();

  const [manu, setmanu] = useState(false)

  const id = Cookies.get("id")
  const token = Cookies.get("Token")
  const name = Cookies.get("Name")
  const email = Cookies.get("email")
  const dsgvdrsfbhdfgbdcftgbh = Cookies.get("dsgvdrsfbhdfgbdcftgbh")

  return (
    <div>

      <nav class="container">
        <div class="navbar">




          <div className='fassbar'><img src='logo.png' alt='' class="logo" />

            <div className='navicon'> {!manu ? <>  <FaBars style={{ width: "30px", height: '30px' }} onClick={() => setmanu(true)} /></> : <>
              <ImCross style={{ width: "30px", height: '30px' }} onClick={() => setmanu(false)} /></>} </div>
          </div>
          <div class="main">
            <ul>
              <li><a href="#" class="lo" onClick={() => Navigate("/")}>Home</a></li>
              <li><a href="#" class="lo" onClick={() => Navigate("/services")}>Service</a></li>
              <li><a href="#" class="lo" onClick={() => Navigate("/about")}>About Us</a></li>
              <li><a href="#" class="lo" onClick={() => Navigate("/testimonials")}>Testimonials</a></li>
              <li><a href="#" class="lo" onClick={() => Navigate("/contact")}>Contact Us</a></li>
              <div class="button-center">

                {token !== "dskgfsdgfkgsdfkjg35464154845674987dsf@53" && <>
                  <li><button class="login" onClick={() => Navigate("/signin")}>Login</button></li>
                  <li><button class="ca" onClick={() => Navigate("/signUp")}>Create Account</button></li>
                </>}

                {token === "dskgfsdgfkgsdfkjg35464154845674987dsf@53" && <>
                  <li>

                    <div className='blogItem-author' style={{ textAlign: 'left' }}>
                      <img loading='lazzy' src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png" alt='avatar' />
                      <div>
                        <h6>{name}</h6>

                        <p className='nopading'>{email}</p>
                      </div>
                    </div>

                  </li>
              {dsgvdrsfbhdfgbdcftgbh === "dfbxfdbxfbgdfvdfxdscxsdcgdfsbcdfc54845674987dsf@53" && <>    <li><button class="login" onClick={() => Navigate("/admin")}>Admin</button></li></>}
                  <li><button class="ca" onClick={() => {

                    const allCookies = Cookies.get();
                    for (const cookieName in allCookies) {
                      Cookies.remove(cookieName);
                    }
                    Navigate('/signin')
                  }}>Log Out</button></li>
                </>}
              </div>
            </ul>

          </div>

          {manu === true && <>
            <div class="main2">
              <ul>
                <li><a href="" class="lo" onClick={() => Navigate("/")}>Home</a></li>
                <li><a href="" class="lo" onClick={() => Navigate("/services")}>Service</a></li>
                <li><a href="" class="lo" onClick={() => Navigate("/about")}>About Us</a></li>
                <li><a href="" class="lo" onClick={() => Navigate("/testimonials")}>Testimonials</a></li>
                <li><a href="" class="lo" onClick={() => Navigate("/contact")}>Contact Us</a></li>
                <div class="button-center">

                  {token !== "dskgfsdgfkgsdfkjg35464154845674987dsf@53" && <>
                    <li><button class="login" onClick={() => Navigate("/signin")}>Login</button></li>
                    <li><button class="ca" onClick={() => Navigate("/signUp")}>Create Account</button></li>
                  </>}

                  {token === "dskgfsdgfkgsdfkjg35464154845674987dsf@53" && <>
                    <li>

                      <div className='blogItem-author' style={{ textAlign: 'left' }}>
                        <img loading='lazzy' src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png" alt='avatar' />
                        <div>
                          <h6>{name}</h6>

                          <p className='nopading'>{email}</p>
                        </div>
                      </div>

                    </li>
                    <li><button class="ca" onClick={() => {

                      const allCookies = Cookies.get();
                      for (const cookieName in allCookies) {
                        Cookies.remove(cookieName);
                      }
                      Navigate('/signin')
                    }}>Log Out</button></li>
                  </>}
                </div>
              </ul>

            </div>
          </>}
        </div>


      </nav>


      {/* <nav>
        <div class="container">
          <div class="logo">
            <img src="./img/logo.png" alt="" />
          </div>

          <div class="links">
            <ul>
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>
          </div>

          <div class="hamburger-menu">
            <div class="bar"></div>
          </div>
        </div>
      </nav> */}



    </div>
  )
}

export default Navbar