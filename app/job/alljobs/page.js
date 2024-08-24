import { FollowingPointerDemo } from "@/app/components/Helper/JobCard";


export default function AllJobs() {
    return <div className="mt-12 w-[80%] mx-auto mb-12">
        <div className="mb-[2rem] ">
            <h1>Show Result </h1>
        </div>
        <div className="space-y-8">
            <FollowingPointerDemo></FollowingPointerDemo>
        </div>
    </div>
}