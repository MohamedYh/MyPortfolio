"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/sections/hero";
import Portfolio from "@/sections/projects";
import bcklsm from "../../public/bckstl.png";
import Contact from "@/sections/contact";
import {useEffect, useRef, useState} from "react";

export default function Home() {
    const [offset, setOffset] = useState(0);
    const imrf = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const onScroll = () => {
            setOffset(window.scrollY);
            if (window.scrollY == 0 && imrf.current) {
                imrf.current.style.opacity = "1";
            } else if (window.scrollY != 0 && imrf.current) {
                imrf.current.style.opacity = "0";
            }
            console.log(window.scrollY);
        };

        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const cursor = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleMouseMove = (e: any) => {
            if (cursor.current) {
                console.log(e.pageY);
                cursor.current.style.top = (e.pageY-35)+"px";
                cursor.current.style.left = (e.pageX-35)+"px";
            }
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);

        }
    },[cursor.current])

    return (
        <div style={{width: "fit-content", height: "fit-content"}}>
            <Hero/>
            <Portfolio/>
            <Contact/>
            <div className="imgcntr">
                <Image
                    ref={imrf}
                    src={bcklsm}
                    width={400}
                    height={400}
                    alt=""
                />
            </div>
            <div ref={cursor} className="cursor">
                <div className="point"></div>
            </div>
        </div>
    );
}
