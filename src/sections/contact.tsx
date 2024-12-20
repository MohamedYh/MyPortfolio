"use client";
import React, {useEffect, useRef, useState} from "react";
import "./contact.css";
import {
    FaArrowLeft,
    FaArrowRight,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaXTwitter} from "react-icons/fa6";
import {FiPhone} from "react-icons/fi";
import {GiPositionMarker} from "react-icons/gi";
import {sendEmail} from "@/functions/sendEmail";
import {BiArrowToLeft, BiArrowToRight} from "react-icons/bi";

function Contact() {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const profileSlider = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [lastPst, setLastPst] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        console.log(name, e.target.value);
        setFormData((prev: any) => ({...prev, [name]: value}));
    };


    function SwipeProfile() {
        if (profileSlider.current) {
            if (profileSlider.current.style.transform === "translateX(-50%)") {
                profileSlider.current.style.transform = "translateX(0)";
            } else {
                profileSlider.current.style.transform = "translateX(-50%)";
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await sendEmail(
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                'uKvBehjso2cVbjqaA',
                'service_kzwj795',
                'template_qs4345n'
            );
            toast(response)
        } catch (error) {
            toast.error((error as Error).message);
        }
    };


    return (
        <div
            style={{height: "fit-content", minHeight: "100vh"}}
            className="section"
        >
            <h1>Get In Touch</h1>
            <div className="contact_cntr">
                <div className="form_container">
                    <h1>Contact Me</h1>
                    <form onSubmit={handleSubmit} action="">
                        <div className="inputx">
                            <i></i>
                            <input
                                value={formData.name}
                                name="name"
                                onChange={handleChange}
                                placeholder="Your Name"
                                type="text"
                                required
                            />
                        </div>
                        <div className="inputx">
                            <i></i>
                            <input
                                placeholder="Your Email"
                                name="email"
                                onChange={handleChange}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                value={formData.email}
                                type="email"
                                required
                            />
                        </div>
                        <div className="inputx">
                            <i></i>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                name='message'
                                placeholder="Enter Your Message Here"
                                required
                            />
                        </div>
                        <input type="submit"/>
                    </form>
                </div>
                <div className="profile">
                    <div className='cntrpfl'>
                        <div onMouseEnter={() => setIsHovered(true)} // Track when the cursor enters the div
                             onMouseLeave={() => setIsHovered(false)} // Track when the cursor leaves the div
                             ref={profileSlider} className={'sliderprfl'}>
                            <div className={'cardprfl'}>
                                <div className="imgnm">
                                    <div className="img_cntr_prf">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="nmscd">
                                        <h2>Mohamed Aada</h2>
                                        <p id="jb">Web Developer</p>
                                        <p>5 years of experience</p>
                                        <p>About ↗</p>
                                    </div>
                                </div>
                                <div className="socialmediaicons">
                                    <FaFacebook
                                        onClick={() => {
                                            typeof window !== "undefined"
                                                ? (window.location.href =
                                                    "https://www.facebook.com/share/xhUBsGd3vEN5v7jZ/?mibextid=qi2Omg")
                                                : null;
                                        }}
                                    />
                                    <FaInstagram
                                        onClick={() => {
                                            typeof window !== "undefined"
                                                ? (window.location.href =
                                                    "https://www.instagram.com/dev_mohamed.y.a?igsh=MXM1ZzgxcDI1aW5ldw==")
                                                : null;
                                        }}
                                    />
                                    <FaYoutube
                                        onClick={() => {
                                            typeof window !== "undefined"
                                                ? (window.location.href =
                                                    "https://youtube.com/@yma.dev99?si=bUsqDUs1L61mdmSx")
                                                : null;
                                        }}
                                    />
                                    <FaGithub
                                        onClick={() => {
                                            typeof window !== "undefined"
                                                ? (window.location.href =
                                                    "https://www.facebook.com/share/xhUBsGd3vEN5v7jZ/?mibextid=qi2Omg")
                                                : null;
                                        }}
                                    />
                                    <FaLinkedin/>
                                    <FaXTwitter/>
                                </div>
                                <div className="hrzln"></div>
                                <p className="msgcntc">
                                    "I will be very happy to work with you and help achieve
                                    your future ideas."
                                </p>
                                <div className="hrzln"></div>
                                <div className="infr">
                                    <div className="chldinf">
                                        <div className="icnse">
                                            <FiPhone/>
                                        </div>
                                        <div>
                                            <p>Phone</p>
                                            <p>+(212) 777615601</p>
                                        </div>
                                    </div>
                                    <div className="chldinf">
                                        <div className="icnse">
                                            <MdOutlineMail/>
                                        </div>
                                        <div>
                                            <p>Email</p>
                                            <p>mohamedadyh00@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="chldinf">
                                        <div className="icnse">
                                            <GiPositionMarker/>
                                        </div>
                                        <div>
                                            <p>Address</p>
                                            <p>Morocco, Laayoune</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="aboutprfl">
                                <h2>About </h2>
                                <p>'My name is Mohamed Aada, I’m a dedicated Moroccan web developer with three years of
                                    experience
                                    and a deep mastery of web technologies. My passion for creating seamless,
                                    high-performance
                                    websites drives me to deliver exceptional results. I excel in both technical skills
                                    and
                                    soft
                                    skills, including effective communication and teamwork. Always eager to tackle new
                                    challenges,
                                    I’m committed to crafting intuitive solutions that exceed client expectations. Let’s
                                    connect and
                                    bring your digital vision to life!'</p>
                            </div>
                        </div>
                    </div>
                    {profileSlider.current ? profileSlider.current.style.transform != "translateX(-50%)" ?
                        <FaArrowRight style={{right: '0'}} onClick={SwipeProfile} /> : <FaArrowLeft onClick={SwipeProfile}/> : null}
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Contact;
