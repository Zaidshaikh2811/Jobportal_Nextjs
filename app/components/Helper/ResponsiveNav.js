"use client";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function ResponsiveNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    return (
        <>
            {/* Component */}
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white">

                <Link href={"/"}>
                    <Image
                        src="https://res.cloudinary.com/dhyczd7jv/image/upload/v1724141722/Jobster_Logo_eghwyb.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className="w-auto h-auto"
                    />
                </Link>
                <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    <li><a className={`text-sm ${pathname === "/" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-500"}`} href="#">Home</a></li>
                    <li class="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><a className={`text-sm ${pathname === "/aboutUs" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-500"}`} href="#">About Us</a></li>
                    <li class="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><a className={`text-sm ${pathname === "/services" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-500"}`} href="#">Services</a></li>
                    <li class="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><a className={`text-sm ${pathname === "/job/postjob" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-500"}`} href="/job/postjob">Post Job</a></li>
                    <li class="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><a className={`text-sm ${pathname === "/contact" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-500"}`} href="#">Contact</a></li>
                </ul>

                <div className=" lg:hidden">
                    <button
                        className="navbar-burger flex items-center text-blue-600 p-3"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="block h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:flex lg:items-center">



                    <SignedOut>
                        <SignInButton>
                            <button
                                className="py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"

                            >
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton>
                            <button
                                className="ml-3 py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"

                            >
                                Sign up
                            </button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="navbar-menu relative z-50 lg:hidden">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 transition-opacity duration-300"></div>
                    <nav
                        className={`fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <Link href={"/"}>
                                <Image
                                    src="https://res.cloudinary.com/dhyczd7jv/image/upload/v1724141722/Jobster_Logo_eghwyb.png"
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    className="w-auto h-auto"
                                />
                            </Link>
                            <button
                                className="text-gray-600 hover:text-gray-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div>



                            <ul>
                                <li>
                                    <Link
                                        className={`text-sm ${pathname === "/" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-500"}`}
                                        href="#"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`text-sm ${pathname === "/aboutUs" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-500"}`}
                                        href="#"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`text-sm ${pathname === "/Services" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-500"}`}
                                        href="#"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`text-sm ${pathname === "/job/postjob" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-500"}`}
                                        href="/job/postjob"
                                    >
                                        Post-Job
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`text-sm ${pathname === "/Contact" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-500"}`}
                                        href="#"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}
