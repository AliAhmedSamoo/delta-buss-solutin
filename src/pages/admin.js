import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import "./css/admin.css"

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import Subemail from '../component/subemail';
import Cookies from 'js-cookie';
import { message } from 'antd';



function Admin() {
    const [isVisible, setIsVisible] = useState(false);

    const Navigate = useNavigate()

    const animatedElementRef = useRef(null);

    const dsgvdrsfbhdfgbdcftgbh = Cookies.get("dsgvdrsfbhdfgbdcftgbh")

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

    const [User, setuser] = useState([]);
    const [apblogs, setapblogs] = useState([]);
    const [blogList, setblogList] = useState([]);



    useEffect(() => {


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");



        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://deltabusiness.io:1337/user", requestOptions)
            .then(response => response.json())
            .then(result => setuser(result))
            .catch(error => console.log('error', error));

        fetch("https://deltabusiness.io:1337/apblog", requestOptions)
            .then(response => response.json())
            .then(result => setapblogs(result))
            .catch(error => console.log('error', error));

        fetch("https://deltabusiness.io:1337/blog", requestOptions)
            .then(response => response.json())
            .then(result => setblogList(result))
            .catch(error => console.log('error', error));



    }, [])



    return (

        <>
             {dsgvdrsfbhdfgbdcftgbh === "dfbxfdbxfbgdfvdfxdscxsdcgdfsbcdfc54845674987dsf@53" && <>

            <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>


                <Navbar />

                <div style={{ height: "50px" }}></div>

                <div className="pattern-square"></div>

                <div className="front">
                    <div ref={animatedElementRef}
                        className={`uper ${isVisible ? 'visible' : ''}`}>

                        <h1 className="heading"> Users</h1>

                    </div>


                </div>

                <div className='userdisplay'>

                    {User.map((user, index) => (
                        <div key={index} className='userboxxx'>
                            <div className='blogItem-author' style={{ textAlign: 'left' }}>
                                <img loading='lazy' src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png" alt='avatar' />
                                <div>
                                    <h6>{user.name}</h6>
                                    <p className='nopading'>{user.email}</p>
                                    <button className='bbttnn'
                                        onClick={async () => {

                                            var myHeaders = new Headers();
                                            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                                            var urlencoded = new URLSearchParams();
                                            urlencoded.append("_id", user._id);


                                            var requestOptions = {
                                                method: 'POST',
                                                headers: myHeaders,
                                                body: urlencoded,
                                                redirect: 'follow'
                                            };

                                            await fetch("https://deltabusiness.io:1337/dtluser", requestOptions)
                                                .then(response => response.json())
                                                .then(result => {
                                                    setuser(result)



                                                })
                                                .catch(error => console.log('error', error));


                                        }}

                                    >Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}



                </div>


                <div className="front" style={{ marginTop: '80px' }}>
                    <div ref={animatedElementRef}
                        className={`uper ${isVisible ? 'visible' : ''}`}>

                        <h1 className="heading"> Blogs for Approval</h1>

                    </div>


                </div>







                <div>


                    <div className='blogList-wrap'>
                        {apblogs.map((blog) => (


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

                                <div className='bttttof' style={{ width: '100%' }}><button className='bbttnn3'

                                    onClick={async () => {

                                        var myHeaders = new Headers();
                                        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                                        var urlencoded = new URLSearchParams();
                                        urlencoded.append("_id", blog._id);


                                        var requestOptions = {
                                            method: 'POST',
                                            headers: myHeaders,
                                            body: urlencoded,
                                            redirect: 'follow'
                                        };

                                        await fetch("https://deltabusiness.io:1337/dtlapblog", requestOptions)
                                            .then(response => response.json())
                                            .then(result => {
                                                setapblogs(result)



                                            })
                                            .catch(error => console.log('error', error));


                                    }}



                                >Remove</button><button className='bbttnn2'

                                    onClick={() => {




                                        const hide = message.loading('Action in progress..', 1);




                                        var myHeaders = new Headers();
                                        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                                        var urlencoded = new URLSearchParams();

                                        // urlencoded.append("title", title);
                                        urlencoded.append("category", blog.category);
                                        urlencoded.append("title", blog.title);
                                        urlencoded.append("description", blog.description);
                                        urlencoded.append("authorName", blog.authorName);
                                        urlencoded.append("authoremail", blog.authoremail);
                                        urlencoded.append("cover", blog.cover);
                                        urlencoded.append("authorid", blog.authorid);
                                        urlencoded.append("_id", blog._id);


                                        var requestOptions = {
                                            method: 'POST',
                                            headers: myHeaders,
                                            body: urlencoded,
                                            redirect: 'follow'
                                        };

                                        fetch("https://deltabusiness.io:1337/uploadblog", requestOptions)
                                            .then(response => response.json())
                                            .then(result => {



                                                // Navigate("/")
                                                setapblogs(result)
                                                message.success("Approved")



                                            })
                                            .catch(error => console.log('error', error));












                                    }}







                                >Approve</button></div>
                            </div>




                        ))}
                    </div>


                </div>


                <div className="front" style={{ marginTop: '80px' }}>
                    <div ref={animatedElementRef}
                        className={`uper ${isVisible ? 'visible' : ''}`}>

                        <h1 className="heading"> Blogs</h1>

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

                                <div className='bttttof' style={{ width: '100%' }}><button className='bbttnn3'

                                    onClick={async () => {

                                        var myHeaders = new Headers();
                                        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                                        var urlencoded = new URLSearchParams();
                                        urlencoded.append("_id", blog._id);


                                        var requestOptions = {
                                            method: 'POST',
                                            headers: myHeaders,
                                            body: urlencoded,
                                            redirect: 'follow'
                                        };

                                        await fetch("https://deltabusiness.io:1337/dtlblog", requestOptions)
                                            .then(response => response.json())
                                            .then(result => {
                                                setblogList(result)



                                            })
                                            .catch(error => console.log('error', error));


                                    }}



                                >Remove</button>
                                </div>
                            </div>




                        ))}
                    </div>


                </div>

            </div>
        </>}</>

    )
}

export default Admin