import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default async function Nav() {
    return (
        <div className="h-[13vh] overflow-hidden shadow-md flex items-center">
            <div className="w-[90%] md:w-[80%] mx-auto flex items-center justify-between">
                <div className="w-[100px] md:w-[150px] lg:w-[200px]">
                    <Link href={"/"}>
                        <Image
                            src="https://res.cloudinary.com/dhyczd7jv/image/upload/v1724141722/Jobster_Logo_eghwyb.png"
                            alt="logo"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                        />
                    </Link>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <SignedOut>
                        <SignInButton>
                            <button className="px-4 sm:px-8 py-2 bg-blue-600 text-white rounded-md font-light transition duration-200 ease-linear shadow-md hover:bg-blue-700 hover:shadow-lg">
                                Log in
                            </button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                <div>
                    <Link href="/job/postjob">
                        <button className="inline-flex h-10 sm:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 sm:px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            Post Job
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
