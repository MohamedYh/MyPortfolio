import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Portfolio from "@/sections/projects";
import Contact from "@/sections/contact";

export default function Home() {
    return (
        <div style={{ width: "fit-content", height: "fit-content" }}>
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </div>
    );
}
