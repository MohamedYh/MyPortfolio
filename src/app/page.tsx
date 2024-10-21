"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Portfolio from "@/sections/projects";
import Contact from "@/sections/contact";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [offset, setOffset] = useState(0);
    const imrf = useRef<HTMLDivElement>(null);

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
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div style={{ width: "fit-content", height: "fit-content" }}>
            <Hero />
            <About />
            <Portfolio />
            <Contact />
            <div ref={imrf} className="imgcntr"></div>
        </div>
    );
}
