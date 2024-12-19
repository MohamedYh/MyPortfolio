"use client";
import React, {useEffect, useRef, useState} from "react";
import "./projects.css";
import {projectsData} from "@/projectsData";
import {FaArrowLeft, FaArrowRight, FaReact, FaYoutube} from "react-icons/fa";
import {RiNextjsLine} from "react-icons/ri";
import {SiExpress, SiMysql, SiPrisma} from "react-icons/si";
import {LuFileJson2} from "react-icons/lu";
import {DiMongodb} from "react-icons/di";

export interface Project {
    name: string;
    images: string[];
    video: string;
    created_date: string;
    tools: string[];
}

function Projects() {
    const [isProjectOpened, setIsProjectOpened] = useState(-1);
    const [backClick, setBackClick] = useState(false);
    const [prjClick, setPrjClick] = useState(false);
    const [imgSlide, setImgSlide] = useState(0);
    const [index, setIndex] = useState<number>(0);
    const [lengths, setLengths] = useState<Array<number>>([]);
    const [prjLst, setPrjLst] = useState(0);
    const icons = [<FaReact/>];

    useEffect(() => {
        setLengths(projectsData.map((v, i) => v.images.length))
    }, []);
    useEffect(() => {
        console.log(lengths, index)
    }, [lengths, index]);

    const clr_icn_Scale = (tool: string) => {
        var clr = "";
        var icon = null;
        switch (tool) {
            case "React":
                clr = "#0287d0";
                icon = <FaReact/>;
                break;
            case "NextJs":
                clr = "#20232a";
                icon = <RiNextjsLine/>;
                break;
            case "ExpressJs":
                clr = "#adadad";
                icon = <SiExpress/>;
                break;
            case "External API":
                clr = "#adadad";
                icon = <LuFileJson2/>;
                break;
            case "MySQL":
                clr = "#f0910e";
                icon = <SiMysql/>;
                break;
            case "MongoDb":
                clr = "#006548";
                icon = <DiMongodb/>;
                break;
            case "Prisma":
                clr = "gray";
                icon = <SiPrisma/>;
                break;
        }
        return {color: clr, icon: icon};
    };

    function getTextColorBasedOnBackground(hex: string): string {
        const hexToRgb = (hex: string) => {
            hex = hex.replace(/^#/, "");

            let r = parseInt(hex.substring(0, 2), 16);
            let g = parseInt(hex.substring(2, 4), 16);
            let b = parseInt(hex.substring(4, 6), 16);

            return {r, g, b};
        };

        const getLuminance = (r: number, g: number, b: number) => {
            const [R, G, B] = [r, g, b].map((value) => {
                const normalized = value / 255;
                return normalized <= 0.03928
                    ? normalized / 12.92
                    : Math.pow((normalized + 0.055) / 1.055, 2.4);
            });
            return 0.2126 * R + 0.7152 * G + 0.0722 * B;
        };

        const {r, g, b} = hexToRgb(hex);

        const luminance = getLuminance(r, g, b);

        return luminance > 0.5 ? "black" : "white";
    }

    useEffect(() => {
        console.log(backClick, prjClick);
        if (backClick && prjClick) {
            setBackClick(false);
            setPrjClick(false);
        }
        if (backClick && !prjClick) {
            setIsProjectOpened(-1);
            setBackClick(false);
            setPrjClick(false);
        }
    }, [backClick, prjClick]);

    useEffect(() => {
        setImgSlide(0);
    }, [isProjectOpened]);

    const slider = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index + 1)
            const v = index + 1;
            for (let i = 0; i < projectsData.length; i++) {
                if (!slider.current) {
                    return;
                }
                const x = (v) % (lengths[i]);
                const vl = window.innerWidth/window.innerHeight < (4/3) ? `min(${-52.25*x}vw, ${-209*x}px)` : `${-19 * x}vw`
                const elements = slider.current.querySelectorAll(".draewrimgr") as unknown as HTMLDivElement[];
                elements[i].style.transform = `translateX(${vl})`;
            }

        }, 3500);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [index, slider]);

    return (
        <div className="section">
            <h1>Projects</h1>
            <div ref={slider} className="prjcts">
                {projectsData.length > 4 && window.innerWidth > 600 ? (
                    <>
                        <FaArrowLeft
                            onClick={() => {
                                setPrjLst(Math.max(prjLst - 1, 0));
                            }}
                            id="lft"
                        />
                        <FaArrowRight
                            onClick={() => {
                                setPrjLst(
                                    Math.min(
                                        prjLst + 1,
                                        Math.ceil(projectsData.length / 4) - 1
                                    )
                                );
                            }}
                            id="rght"
                        />
                    </>
                ) : null}
                {projectsData
                    .slice(
                        typeof window !== "undefined"
                            ? window.innerWidth > 600
                                ? prjLst * 4
                                : 0
                            : 0,
                        typeof window !== "undefined"
                            ? window.innerWidth > 600
                                ? Math.min(prjLst * 4 + 4, projectsData.length)
                                : projectsData.length
                            : 4
                    )
                    .map((x, i) => {
                        return (
                            <div
                                key={i}
                                onClick={() => {
                                    setIsProjectOpened(i);
                                }}
                                className="prjct"
                            >
                                <div className="tpr">
                                    <div className="img_prv_cntr">
                                        <div className={"draewrimgr"}>
                                            {x.images.map((image) => <img
                                                alt={""}
                                                src={image}
                                                style={{background: "grey"}}
                                            ></img>)}
                                        </div>
                                    </div>
                                    <div className="tools_container">
                                        {x.tools.map((v, j) => {
                                            return (
                                                <div
                                                    title={v}
                                                    style={{
                                                        backgroundColor:
                                                        clr_icn_Scale(v)
                                                            .color,
                                                        color: getTextColorBasedOnBackground(
                                                            clr_icn_Scale(v)
                                                                .color
                                                        ),
                                                    }}
                                                    className="toolicon"
                                                >
                                                    {clr_icn_Scale(v).icon}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <p className="txtprj">
                                        <span>{x.name}</span>
                                    </p>
                                    <p className="datep">{x.created_date}</p>
                                    <span
                                        style={{
                                            color: "transparent",
                                            fontSize: "1.5vw",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        {"T2G: A Website That Converts Tables Into Graphs".slice(
                                            x.name.length
                                        )}
                                    </span>
                                </div>
                                <div className="lfr">
                                    <p
                                        onClick={() => {
                                            typeof window !== "undefined"
                                                ? (window.location.href =
                                                    projectsData[
                                                        isProjectOpened
                                                        ].video)
                                                : null;
                                        }}
                                    >
                                        Learn More ↗
                                    </p>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <p className="msgtoclnt">
                "These projects are on GitHub, but they are private."
            </p>
        </div>
    );
}

export default Projects;
