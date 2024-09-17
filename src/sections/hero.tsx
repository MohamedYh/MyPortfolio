"use client";
import React from "react";
import "./hero.css";
import Image from "next/image";
import { GoArrowDown } from "react-icons/go";
import { HiOutlineViewList } from "react-icons/hi";
import ImgDev from "../../public/devimage.png";

function Hero() {
    return (
        <div className="section">
            <div className="nav" id="nav">
                <h1>Mohamed Aada</h1>
                <ul id="ul">
                    <li
                        onClick={() => {
                            const r = document.getElementById("ul");
                            if (typeof window !== "undefined") {
                                if (r && window.innerWidth <= 600) {
                                    r.style.display =
                                        r.style.display == "none"
                                            ? "flex"
                                            : "none";
                                }
                            }
                            document
                                .getElementsByClassName("section")[1]
                                .scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        About Me
                    </li>
                    <li
                        onClick={() => {
                            const r = document.getElementById("ul");
                            if (typeof window !== "undefined") {
                                if (r && window.innerWidth <= 600) {
                                    r.style.display =
                                        r.style.display == "none"
                                            ? "flex"
                                            : "none";
                                }
                            }
                            document
                                .getElementsByClassName("section")[2]
                                .scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Projects
                    </li>
                    <li
                        onClick={() => {
                            const r = document.getElementById("ul");
                            if (typeof window !== "undefined") {
                                if (r && window.innerWidth <= 600) {
                                    r.style.display =
                                        r.style.display == "none"
                                            ? "flex"
                                            : "none";
                                }
                            }
                            document
                                .getElementsByClassName("section")[3]
                                .scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Contact
                    </li>
                </ul>
                <HiOutlineViewList
                    onClick={() => {
                        const v = document.getElementById("ul");
                        if (v) {
                            v.style.display =
                                v.style.display == "none" ? "flex" : "none";
                        }
                    }}
                />
            </div>
            <div className="mncnrt">
                <div className="txtcntr">
                    <p className="txthdr">
                        Mohamed Aada, Full-Stack Web Developer
                    </p>
                    <div
                        onClick={() => {
                            document
                                .getElementsByClassName("section")[1]
                                .scrollIntoView({ behavior: "smooth" });
                        }}
                        className="scrlbtn"
                    >
                        <GoArrowDown />
                        <p>Scroll For More</p>
                    </div>
                </div>
                <Image src={ImgDev} width={400} height={400} alt="" />
            </div>
            {}
        </div>
    );
}

export default Hero;
