"use client";
import { motion } from "framer-motion";

export default function Heading({ mainHeading, subHeading }) {
    return (
        <div className="text-center p-6">
            <motion.h1
                className="text-black text-[27px] sm:text-[35px] lg:text-[45px] text-opacity-90 font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {mainHeading}
            </motion.h1>
            <motion.p
                className="mt-[1rem] text-[15px] sm:text-[18px] lg:text-[20px] text-gray-800 text-opacity-80 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {subHeading}
            </motion.p>
        </div>
    );
}
