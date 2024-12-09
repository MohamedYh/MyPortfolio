"use client";
import React from "react";
import "./contact.css";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import { MdOutlineAlternateEmail, MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { GiPositionMarker } from "react-icons/gi";

function Contact() {
    return (
        <div
            style={{ height: "fit-content", minHeight: "100vh" }}
            className="section"
        >
            <h1>Contact</h1>
            <div className="contact_cntr">
                <div className="form_container">
                    <h1>Contact Me</h1>
                    <form action="">
                        <div className="inputx">
                            <i></i>
                            <input placeholder="Your Name" type="text" />
                        </div>
                        <div className="inputx">
                            <i></i>
                            <input
                                placeholder="Your Email"
                                type="email"
                                pattern="^[a-z][a-z0-9_.]*@(gmail|yahoo).com$/gm"
                            />
                        </div>
                        <div className="inputx">
                            <i></i>
                            <textarea
                                id="message"
                                placeholder="Enter Your Message Here"
                            />
                        </div>
                        <input type="submit" />
                    </form>
                </div>
                <div className="profile">
                    <div className="imgnm">
                        <div className="img_cntr_prf">
                            <img src="" alt="" />
                        </div>
                        <div className="nmscd">
                            <h2>Mohamed Aada</h2>
                            <p id="jb">Web Developer</p>
                            <p>5 years of experience</p>
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
                        <FaLinkedin />
                        <FaXTwitter />
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
                                <FiPhone />
                            </div>
                            <div>
                                <p>Phone</p>
                                <p>+(212) 777615601</p>
                            </div>
                        </div>
                        <div className="chldinf">
                            <div className="icnse">
                                <MdOutlineMail />
                            </div>
                            <div>
                                <p>Email</p>
                                <p>mohamedadyh00@gmail.com</p>
                            </div>
                        </div>
                        <div className="chldinf">
                            <div className="icnse">
                                <GiPositionMarker />
                            </div>
                            <div>
                                <p>Address</p>
                                <p>Morocco, Laayoune</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
