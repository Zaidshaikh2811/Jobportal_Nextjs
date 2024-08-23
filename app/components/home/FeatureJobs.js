import Heading from "../Helper/Heading";
import { FollowingPointerDemo } from "../Helper/JobCard";

export default function FeatureJobs() {
    return <div className="pt-20 pb-12">
        <Heading
            mainHeading="Featured Job Opportunities"
            subHeading="Discover your potential and enhance your career with our curated job listings. Find the right position that matches your skills and aspirations."
        />
        <div className="mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FollowingPointerDemo></FollowingPointerDemo>
        </div>
    </div>
}