
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
    return <div className="pt-[5rem] pb-[3rem] bg-[#111111]">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[4rem]
         items-start pb-[2rem] border-b-2 border-white border-opacity-10">

            <div>
                <h1 className="text-[24px] text-white mb-[1rem] font-bold uppercase">Jobster</h1>
                <p className="text-[14px] text-white text-opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sunt accusamus consequuntur modi quidem recusandae!</p>
                <div className="mt-[1.5rem] flex items-center space-x-3">
                    <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full
                     flex items-center justify-center flex-col">
                        <FaFacebookF className="text-white" />

                    </div>
                    <div className="w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full
                     flex items-center justify-center flex-col">
                        <FaTwitter className="text-white" />

                    </div>
                    <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full
                     flex items-center justify-center flex-col">
                        <FaYoutube className="text-white" />

                    </div>
                    <div className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full
                     flex items-center justify-center flex-col">
                        <FaInstagram className="text-white" />

                    </div>


                </div>


            </div>
            <div>
                <h1 className="text-[22px] 2-fit text-white font-semibold mb-[1.5rem] ">
                    About Us
                </h1>
                <div className="text-[15px] 2-fit text-white  hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">Job</div>
                <div className="text-[15px] 2-fit text-white  hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">Privacy</div>
                <div className="text-[15px] 2-fit text-white  hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">Policy</div>
                <div className="text-[15px] 2-fit text-white  hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">Application</div>
                <div className="text-[15px] 2-fit text-white  hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">Candidates</div>
            </div>
            <div>
                <h1 className="text-[22px] 2-fit text-white font-semibold mb-[1.5rem]">
                    Quick Link
                </h1>
                <div className="text-[15px] 2-fit text-white  hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">All Jobs</div>
                <div className="text-[15px] 2-fit text-white  hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">Job Details</div>
                <div className="text-[15px] 2-fit text-white  hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">How To Apply</div>
                <div className="text-[15px] 2-fit text-white  hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">Resume</div>

            </div>
            <div>
                <h1 className="text-[22px] 2-fit text-white font-semibold mb-[1.5rem]">
                    Get in Touch
                </h1>
                <div className="text-[15px] 2-fit text-white  hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">+123 345 6789</div>
                <div className="text-[15px] 2-fit text-white  hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">xyz@gmail.com</div>
                <div className="text-[15px] 2-fit text-white  hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">India</div>


            </div>
        </div>
        <h1 className="mt-[2rem] text-[14px] w-[80%] text-white opacity-50 mx-auto">XYZ</h1>
    </div>
}