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
                    console.log(response.data.jobs);

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

    if (loading) return <div className=" container">
        <div className="loader"></div>
    </div>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            {job ? (
                <div>
                    <h1 className="text-3xl font-bold mb-4">{job.jobTitle}</h1>
                    <p className="text-lg mb-4">{job.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="font-semibold">Company:</p>
                            <p>{job.companyName}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Location:</p>
                            <p>{job.location}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Job Type:</p>
                            <p>{job.jobType.join(', ')}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Salary:</p>
                            <p>{job.salary}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Experience Required:</p>
                            <p>{job.experience} years</p>
                        </div>
                        <div>
                            <p className="font-semibold">Qualification:</p>
                            <p>{job.qualification}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Gender:</p>
                            <p>{job.gender}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Career Level:</p>
                            <p>{job.careerLevel}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Deadline:</p>
                            <p>{new Date(job.deadline).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Contact:</p>
                            <p>{job.phone}</p>
                        </div>
                    </div>

                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                        Apply Now
                    </button>
                </div>
            ) : (
                <p className="text-gray-500">Job not found.</p>
            )}
        </div>
    );
}



