"use client"

import Link from "next/link";
import Heading from "../Helper/Heading";
import { ExpandableCardDemo } from "../ExpandableCardDemo";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export default function FeatureJobs() {




    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    function SkeletonLoader() {
        return (
            <div className="animate-pulse">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center bg-neutral-100 dark:bg-neutral-800 rounded-xl">
                    <div className="flex gap-4 flex-col md:flex-row w-full">
                        <div className="h-6 bg-gray-300 dark:bg-neutral-700 w-1/2 rounded"></div>
                        <div className="h-6 bg-gray-300 dark:bg-neutral-700 w-1/3 rounded"></div>
                        <div className="h-6 bg-gray-300 dark:bg-neutral-700 w-1/4 rounded"></div>
                    </div>
                </div>
            </div>
        );
    }
    useEffect(() => {
        // Fetch featured jobs from the API
        const fetchFeaturedJobs = async () => {
            try {
                console.log("fetching");

                const response = await axios.get('http://localhost:3000/api/jobs/featuredjobs');



                if (!response.data.success) {
                    toast.error("Something Went Wrong")
                    throw new Error('Network response was not ok');
                }


                setJobs(response.data.jobs || []); // Adjust based on the actual response structure
            } catch (error) {
                toast.error('Failed to fetch featured jobs:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchFeaturedJobs();
    }, []);



    return <div className="pt-20 pb-12">
        <Heading
            mainHeading="Featured Job Opportunities"
            subHeading="Discover your potential and enhance your career with our curated job listings. Find the right position that matches your skills and aspirations."
        />
        <div className="mt-12 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {loading ? (
                // Render loading skeletons while fetching data
                Array.from({ length: 4 }).map((_, index) => <SkeletonLoader key={index} />)
            ) : (
                jobs.map((job) => <ExpandableCardDemo job={job} key={job._id} />)
            )}
        </div>
        <Link href="/job/alljobs" className="flex w-fit mx-auto mt-10">

            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                View All Jobs
            </button>


        </Link>
    </div>
}