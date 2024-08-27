"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ParticularJob({ params }) {
    const { id } = params;
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getJob = async () => {
            try {
                const response = await axios.get(`/api/jobs/getalljobs?slug=${id}`);
                if (response.data.success) {
                    setJob(response.data.jobs);
                } else {
                    setError(response.data.message);
                }
            } catch (error) {
                toast.error("Something went wrong");
                setError("An error occurred while fetching the job.");
            } finally {
                setLoading(false);
            }
        };

        getJob();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-6">
            {job ? (
                <div>
                    <h1 className="text-2xl font-bold">{job.title}</h1>
                    <p className="mt-2">{job.description}</p>
                    <p className="mt-2">Company: {job.companyName}</p>
                    <p className="mt-2">Location: {job.location}</p>
                    {/* Add more fields as needed */}
                </div>
            ) : (
                <p>Job not found.</p>
            )}
        </div>
    );
}
