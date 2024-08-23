import Image from "next/image";
import { FlipWordsDemo } from "../flipWords";

export default function Hero() {
    return <div className="pt-[5rem] pb-[3rem]">
        <div className="w-[100%] h-[50%] flex flex-cols items-center
        justify-center">
            <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-[2rem]">

                <div>


                    <FlipWordsDemo></FlipWordsDemo>
                    <div className="mt-[1.5rem]">
                        <input type="text" placeholder="Search Job" className="w-[60%]
                         md:w-[70%] lg:w-[75%] px-5 py-4 outline-none
                          rounded-l-md bg-gray-200"/>
                        <button className="px-5 py-4 outline-none rounded-r-md bg-blue-500 text-white">Search</button>
                    </div>
                </div>
                <div className="hidden lg:block mx-auto">
                    <Image src="https://res.cloudinary.com/dhyczd7jv/image/upload/v1724409403/undraw_job_hunt_re_q203_1_z9tiiz.svg" width={500} height={300} alt="HeroImage"></Image>
                </div>

            </div>
        </div>
    </div>
}