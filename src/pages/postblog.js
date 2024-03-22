import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import "./css/contact.css"
import { v4 } from 'uuid';
import { imageDb } from "../firebase";
import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import Cookies from 'js-cookie';


function Postblog() {

    const [isVisible, setIsVisible] = useState(false);
    const Navigate = useNavigate()
    const id = Cookies.get("id")
    const token = Cookies.get("Token")
    const name = Cookies.get("Name")
    const email = Cookies.get("email")



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



    const [title, settitle] = useState("");
    const [category, setcategory] = useState("");
    const [description, setdescription] = useState("");
    const [cover, setcover] = useState("");
    const [Img, setImg] = useState(false)






    const handleChangeimage = async (e) => {
        console.log(e.target.files[0])
        setImg(e.target.files[0]);


        // const Carimageid = uuid();
        // await storage.ref(`images/${Carimageid}`).put(Img);
        // const Url = await storage.ref(`images`).child(Carimageid).getDownloadURL();
        // await alert(Url)
    }



    const formsub = async (e) => {
        e.preventDefault()



        const hide = message.loading('Action in progress..', 1);





        // const imgRef = ref(imageDb, `files/${v4()}`)
        // const aaaa = await uploadBytes(imgRef, Img)
        // // .then(value => {
        // //     console.log(value)
        // //     getDownloadURL(value.ref).then(url => {
        // //         aaa = url
        // //     })
        // // })

        // const aaa = await getDownloadURL(aaaa.ref).then(url => {
        //     setcover(url)
        // })

        const Carimageid = v4();
        const imgRef = ref(imageDb, `files/${Carimageid}`)
        const aaaa = await uploadBytes(imgRef, Img)
        const Url = await getDownloadURL(imgRef);
      

        // console.log(cover)


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();

        // urlencoded.append("title", title);
        urlencoded.append("category", category);
        urlencoded.append("title", title);
        urlencoded.append("description", description);
        urlencoded.append("authorName", name);
        urlencoded.append("authoremail", email);
        urlencoded.append("cover", Url);
        urlencoded.append("authorid", id);


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };


        await fetch("https://deltabusiness.io:1337/upload", requestOptions)
            .then(response => response.json())
            .then(result => {




                message.success(result)
                Navigate("/")


            })
            .catch(error => console.log('error', error));


    }




    return (

        <div>



            <Navbar />

            <div style={{ height: "50px" }}></div>

            <div className="pattern-square"></div>


            {token === "dskgfsdgfkgsdfkjg35464154845674987dsf@53" && <>
                <div className="front" >
                    <div ref={animatedElementRef}
                        className={`uper ${isVisible ? 'visible' : ''}`}

                    >
                        <h1 className="heading">New Blog Post</h1>
                        <h3 className="sub-line">Explore our latest insights and articles. Reduced recruiting costs, more efficient and effective communication.</h3>


                    </div>












                </div>

                <div className='contactus' style={{ padding: '200px 0' }}>
                    <div className='contactformdiv' style={{ width: '80%' }}>
                        <form className='contactusform' onSubmit={formsub}>

                            <div className='insideform'><label>Title</label> <input required value={title} onChange={(e) => settitle(e.target.value)} /></div>
                            <div className='insideform'><label>Category</label> <input required value={category} onChange={(e) => setcategory(e.target.value)} /></div>

                            <div className='insideform'><label>Cover Photo</label> <input accept="image/*" onChange={handleChangeimage} required type='file' /></div>

                            <div className='insideform'><label>Description</label> <textarea required value={description} onChange={(e) => setdescription(e.target.value)} /></div>

                            <div className='insideform'><label>Author Name</label> <input required disabled value={name} /></div>
                            <div className='insideform'><label>Author Email</label> <input disabled required value={email} /></div>




                            <button style={{ width: '100%', margin: '0' }} className="purchase">Post</button>

                        </form>
                    </div>

                </div>

            </>}

            {token !== "dskgfsdgfkgsdfkjg35464154845674987dsf@53" && <>
                <div className="front" >
                    <div ref={animatedElementRef}
                        className={`uper ${isVisible ? 'visible' : ''}`}

                    >
                        <h1 className="heading">New Blog Post</h1>
                        <h3 className="sub-line">You Need to login to post a Blog</h3>


                    </div>












                </div>



            </>}

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

export default Postblog