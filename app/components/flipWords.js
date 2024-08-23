import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
    const words = ["innovative", "growth-oriented", "impactful", "exciting"];

    return (
        <div className="text-center">
            <h1 className="text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[60px] leading-[3rem] lg:leading-[4rem] font-extrabold">
                Discover  <span ><FlipWords className="text-blue-500" words={words} /></span> <br />
                and Elevate Your Career
            </h1>
            <p className="text-[16px] md:text-[18px] mt-4 text-gray-700">
                Discover top opportunities, connect with industry leaders, and take the next step in your career journey.
            </p>
        </div>
    );
}
