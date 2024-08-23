import { authOptions } from "@/auth";

import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import User from "../Helper/User";



export default async function Nav() {
    const session = await getServerSession(authOptions)
    return (<div className="h-[13vh] overflow-hidden shadow-md  flex items-center">
        <div className="w-[90%] md:w-[80%] mx-auto flex items-center justify-between">
            <div className="w-[150px]  md:w-[250px] lg:[250px]">
                <Link href={"/"}>
                    <Image src="https://res.cloudinary.com/dhyczd7jv/image/upload/v1724141722/Jobster_Logo_eghwyb.png"
                        alt="logo" width={200} height={200}>

                    </Image>
                </Link>
            </div>
            <div className="flex items-center space-x-4">


                {
                    !session ? <Link href="/signup">
                        <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                            log in
                        </button>
                    </Link> : <User session={session}></User>



                }



            </div>
        </div>
    </div >)
}