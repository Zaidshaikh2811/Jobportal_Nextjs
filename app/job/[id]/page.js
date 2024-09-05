"use client";

import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import { MdOutlineLocalHospital } from 'react-icons/md';

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
                    setError(response.data.message || "Job not found.");
                }
            } catch (error) {
                toast.error("An error occurred while fetching the job.");
                setError("An error occurred while fetching the job.");
            } finally {
                setLoading(false);
            }
        };

        getJob();
    }, [id]);

    if (loading) {
        return (
            <div className="container">
                <div className="loader"></div>
            </div>
        );
    }

    if (error) {
        return <p className="text-red-500">Error: {error}</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            {job ? (
                <>
                    <Head>
                        <title>{`${job.jobTitle} Job Posting`}</title>
                    </Head>

                    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-10">
                        {/* Job Title and Company Info */}
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-800">{job.jobTitle}</h1>
                                <div className="text-lg text-gray-600">{job.companyName}</div>
                            </div>
                            <Image src="/google-logo.png" alt="Google Logo" width={80} height={80} />
                        </div>

                        {/* Location, Posted Date, Salary, and Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div className="flex items-center text-gray-700">
                                <FaMapMarkerAlt className="w-6 h-6 mr-2 text-blue-600" />
                                {job.location}
                            </div>
                            <div className="flex items-center text-gray-700">
                                <FaCalendarAlt className="w-6 h-6 mr-2 text-blue-600" />
                                {`Posted ${new Date().getDate() - new Date(job.postedDate).getDate()} days ago`}
                            </div>
                            <div className="flex items-center text-gray-700">
                                <FaDollarSign className="w-6 h-6 mr-2 text-blue-600" />
                                {job.salary}
                            </div>
                            <div className="flex items-center text-gray-700">
                                <MdOutlineLocalHospital className="w-6 h-6 mr-2 text-blue-600" />
                                Vision Medical Life Dental 401K
                            </div>
                        </div>

                        {/* About the Role */}
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the business and the role</h2>
                            <p className="text-gray-700 mb-4">{job.description}</p>
                            <p className="text-gray-700">
                                This re-design and exciting new vision has created the need for a brand new UI/UX Designer to assist in improving and designing a forward-thinking Front End experience for the user.
                            </p>
                        </div>

                        {/* Job Tasks and Responsibilities */}
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job tasks and responsibilities</h2>
                            <p className="text-gray-700 mb-4">
                                As the UI/UX Designer, you will act as the creative and user translator for the rest of the team. You will be collaborating and working closely with the Product Manager and the development teams and the clients to ensure the front end is always easy to use and ahead of the game.
                            </p>
                            <p className="text-gray-700">
                                As the UX lead, you will be required to present to both internal and external stakeholders, to ensure all concepts, designs, and changes are presented clearly. Research must be completed thoroughly and utilize customer knowledge and insights as well as market trends.
                            </p>
                        </div>

                        {/* Skills and Experience */}
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills and experience</h2>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Must have strong knowledge of contemporary framework</li>
                                <li>Must have proven design capabilities</li>
                                <li>Must be an engaging and capable demonstrator and presenter</li>
                                <li>Team player and possess the ability to multi-task</li>
                                <li>Ideally you will have worked with Government and Education Client</li>
                                <li>Road mapping experience a must</li>
                            </ul>
                            <p className="text-gray-700">
                                All of the above is crucial for you to be able to succeed in this role, however, we are looking for someone who has the energy and passion to bring together new ideas and a developing team.
                            </p>
                        </div>

                        {/* Apply Now Button */}
                        <div className="text-center">
                            <button className="w-full md:w-1/3 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <p className="text-gray-500">Job not found.</p>
            )}
        </div>
    );
}
