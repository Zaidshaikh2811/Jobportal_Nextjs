import Image from "next/image";
import { FlipWordsDemo } from "../flipWords";

export default function Hero() {
    return <div className="pt-[5rem] pb-[3rem]">
        <div className="w-full h-[50%] flex flex-col items-center justify-center">
            <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-[2rem]">
                <div className="text-center lg:text-left">
                    <FlipWordsDemo />
                    <div className="mt-[1.5rem] flex justify-center lg:justify-start ">
                        <div className="flex w-full max-w-md mx-auto">
                            <input
                                type="text"
                                placeholder="Search Job"
                                className="w-full px-5 py-4 outline-none rounded-l-md bg-gray-200"
                            />
                            <button className="px-5 py-4 outline-none rounded-r-md bg-blue-500 text-white">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block mx-auto">
                    <Image
                        src="https://res.cloudinary.com/dhyczd7jv/image/upload/v1724409403/undraw_job_hunt_re_q203_1_z9tiiz.svg"
                        width={500}
                        height={300}
                        alt="HeroImage"
                    />
                </div>
            </div>
        </div>
    </div>
}