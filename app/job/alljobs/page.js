"use client";
import { ExpandableCardDemo } from "@/app/components/ExpandableCardDemo";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AllJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const getAllJobs = async () => {
            try {
                const responseJobs = await axios.get("/api/jobs/getalljobs");
                console.log(responseJobs.data.jobs);

                setJobs(responseJobs.data.jobs);
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                toast.error("Something went wrong");
                setLoading(false); // Ensure loading is set to false even if there's an error
            }
        };
        getAllJobs();
    }, []);

    if (loading) {
        return <p>Loading....</p>;
    }

    return (
        <div className="mt-12 w-[80%] mx-auto mb-12">
            <div className="mb-[2rem]">
                <h1>Show Result</h1>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                    <ExpandableCardDemo key={job._id} job={job} />
                ))}
            </div>
        </div>
    );
}
