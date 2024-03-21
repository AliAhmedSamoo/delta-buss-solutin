import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import "./css/blog.css"

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import Subemail from '../component/subemail';
import Cookies from 'js-cookie';





function Blogs() {

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

  const id = Cookies.get("id")
  const token = Cookies.get("Token")
  const name = Cookies.get("Name")
  const email = Cookies.get("email")




  // const blogList = [
  //   {
  //     id: 1,
  //     title: '7 CSS tools you should be using ',
  //     category: 'development',
  //     subCategory: ['frontend', 'ui/ux', 'design'],
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     authorName: 'John Doe',
  //     authorAvatar: '/assets/images/author.jpg',
  //     createdAt: 'June 03, 2021',
  //     cover: '/assets/images/designer-1.jpg',
  //   },
  //   {
  //     id: 2,
  //     title: 'Milan Places That Highlight The City',
  //     category: 'travel',
  //     subCategory: ['vacation', 'holidays', 'sight seeing'],
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     authorName: 'John Doe',
  //     authorAvatar: '/assets/images/author.jpg',
  //     createdAt: 'June 03, 2021',
  //     cover: '/assets/images/f67396fc3cfce63a28e07ebb35d974ac.jpg',
  //   },
  //   {
  //     id: 3,
  //     title: 'Online Shopping – An Alternative to Shopping in the Mall',
  //     category: 'shopping',
  //     subCategory: ['e-commerce store', 'clothing', 'shopping store'],
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     authorName: 'John Doe',
  //     authorAvatar: '/assets/images/author.jpg',
  //     createdAt: 'June 03, 2021',
  //     cover: '/assets/images/fQwuyKJ9qxjSbr6REcgtmW-1200-80.jpg',
  //   },
  //   {
  //     id: 4,
  //     title: 'ADVENTURE IN YOU',
  //     category: 'adventure',
  //     subCategory: ['adrenaline', 'stay-fit', 'lifestyle'],
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     authorName: 'John Doe',
  //     authorAvatar: '/assets/images/author.jpg',
  //     createdAt: 'June 03, 2021',
  //     cover: '/assets/images/graphic-design-trends.png',
  //   },
  //   {
  //     id: 5,
  //     title: 'Loaded BBQ Baked Potatoes',
  //     category: 'cooking',
  //     subCategory: ['bbq', 'food', 'lifestyle'],
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     authorName: 'John Doe',
  //     authorAvatar: '/assets/images/author.jpg',
  //     createdAt: 'June 03, 2021',
  //     cover: '/assets/images/make-it-personal.jpg',
  //   },
  //   {
  //     id: 6,
  //     title: 'Beyond the Beach',
  //     category: 'travel',
  //     subCategory: ['beaches', 'sea', 'holidays'],
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     authorName: 'John Doe',
  //     authorAvatar: '/assets/images/author.jpg',
  //     createdAt: 'June 03, 2021',
  //     cover:
  //       '/assets/images/Purple-Combination-colors-graphic-design-predictions-1024x576-1024x576.jpg',
  //   },
  //   {
  //     id: 7,
  //     title: 'Art & Perception',
  //     category: 'art',
  //     subCategory: ['skill', 'design', 'passion'],
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     authorName: 'John Doe',
  //     authorAvatar: '/assets/images/author.jpg',
  //     createdAt: 'June 03, 2021',
  //     cover: '/assets/images/Synthwave-Postmodern.jpg',
  //   },
  // ];

  const [blogList, setblogList] = useState([]);

  useEffect(() => {


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");



    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://deltabusiness.io:1337/blog", requestOptions)
        .then(response => response.json())
        .then(result => setblogList(result))
        .catch(error => console.log('error', error));

   


}, [])




  return (
    <div>

      <Navbar />

      <div style={{ height: "50px" }}></div>

      <div className="pattern-square"></div>

      <div className="front">
        <div ref={animatedElementRef}
          className={`uper ${isVisible ? 'visible' : ''}`}>

          <h1 className="heading"> Our articles on agency</h1>
          <h3 className="sub-line">At least, not exclusively. Reduced recruiting costs, more efficient and effective</h3>
          <h3 className="s-line">communication.</h3>
          {token === "dskgfsdgfkgsdfkjg35464154845674987dsf@53" && <>
            <div className="button-2" style={{ marginBottom: '50px' }}>
              <button className="purchase" onClick={() => Navigate("/postblog")}>Post A Blog</button>

            </div>
          </>}
        </div>


      </div>



      <div>


        <div className='blogList-wrap'>
          {blogList.map((blog) => (


            <div className='blogItem-wrap'>
              <img loading='lazzy' className='blogItem-cover nopading' src={blog.cover} alt='cover' />

              <p className='chip'>{blog.category}</p>
              <h3 className='nopading'>{blog.title}</h3>
              <p className='blogItem-desc nopading'>{blog.description}</p>
              <footer>
                <div className='blogItem-author'>
                  <img loading='lazzy' src={blog.authorAvatar} alt='avatar' />
                  <div>
                    <h6>{blog.authorName}</h6>
                    <p className='nopading'>{blog.timestamp}</p>
                  </div>
                </div>

              </footer>
            </div>




          ))}
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

              <Subemail />
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

export default Blogs