import React from "react";
import "./about.css";

function About() {
    const date = new Date();

    function numberToText(num: number) {
        if (num === 0) return "zero";

        const ones = [
            "",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ];
        const teens = [
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ];
        const tens = [
            "",
            "ten",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ];
        const thousands = ["", "thousand"];

        let numString = "";

        if (num >= 1000) {
            numString += ones[Math.floor(num / 1000)] + " thousand ";
            num %= 1000;
        }
        if (num >= 100) {
            numString += ones[Math.floor(num / 100)] + " hundred ";
            num %= 100;
        }
        if (num >= 20) {
            numString += tens[Math.floor(num / 10)] + " ";
            num %= 10;
        } else if (num >= 11 && num <= 19) {
            numString += teens[num - 11] + " ";
            num = 0;
        }
        if (num > 0 && num < 10) {
            numString += ones[num] + " ";
        }

        return numString.trim();
    }

    return (
        <div className="section">
            <h1>About Me</h1>
            <p>
                My name is Mohamed Aada, I’m a dedicated Moroccan web developer with{" "}
                {numberToText(date.getFullYear() - 2021)} years of experience
                and a deep mastery of web technologies. My passion for creating
                seamless, high-performance websites drives me to deliver
                exceptional results. I excel in both technical skills and soft
                skills, including effective communication and teamwork. Always
                eager to tackle new challenges, I’m committed to crafting
                intuitive solutions that exceed client expectations. Let’s
                connect and bring your digital vision to life!
            </p>
        </div>
    );
}

export default About;
