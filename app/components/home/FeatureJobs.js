import Link from "next/link";
import Heading from "../Helper/Heading";
import { FollowingPointerDemo } from "../Helper/JobCard";

export default function FeatureJobs() {
    return <div className="pt-20 pb-12">
        <Heading
            mainHeading="Featured Job Opportunities"
            subHeading="Discover your potential and enhance your career with our curated job listings. Find the right position that matches your skills and aspirations."
        />
        <div className="mt-12 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FollowingPointerDemo></FollowingPointerDemo>

        </div>
        <Link href="/job/alljobs" className="flex w-fit mx-auto mt-10">

            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                View All Jobs
            </button>


        </Link>
    </div>
}