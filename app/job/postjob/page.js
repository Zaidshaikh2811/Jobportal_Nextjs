
'use client'

import { useState } from 'react';
import axios from 'axios';
import { revalidatePath } from 'next/cache';

export default function PostJob() {
    const [formData, setFormData] = useState({
        jobType: [],
        jobTitle: '',
        companyName: '',
        location: '',
        description: '',
        salary: '',
        category: 'Development', // Default category
        careerLevel: 'Entry Level', // Default career level
        phone: '',
        qualification: '',
        gender: '',
        experience: '',
        address: '',
        deadline: '',
        location2: '',
        image: null,
    });
    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                jobType: checked
                    ? [...prevData.jobType, value]
                    : prevData.jobType.filter((typeItem) => typeItem !== value),
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [id]: value,
            }));
        }
    };

    const handleFileChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            image: e.target.files[0] // Handle file input
        }));
    };
    const handleFileUpload = async () => {
        const formDataTemp = new FormData();
        if (formData.image) {
            formDataTemp.append('file', formData.image);
        } else {
            console.error("No image file selected.");
            return;
        }


        try {
            const res = await axios.post("/api/imageuploader",
                formDataTemp
            )


            if (res.status != 200) {
                throw new Error("Failed to upload")
            }


            return res.data.imageUrl


        } catch (error) {
            throw new Error("Failed to upload " + error)

        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageUrl = '';
            if (formData.image) {
                imageUrl = await handleFileUpload();
            }
            console.log(formData, imageUrl);

            const response = await axios.post('/api/jobs/addjob', {
                ...formData,
                image: imageUrl
            });
            console.log(response);

            alert(response.data.message); // Show success message
            // revalidatePath("/")
            setFormData({
                jobType: [],
                jobTitle: '',
                companyName: '',
                location: '',
                description: '',
                salary: '',
                category: 'Development',
                careerLevel: 'Entry Level',
                phone: '',
                qualification: '',
                gender: '',
                experience: '',
                address: '',
                deadline: '',
                location2: '',
                image: null,
            }); // Reset form
        } catch (error) {
            console.error('Error posting job:', error);
            alert('Failed to post job. Please try again.');
        }
    };


    return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-[90%] w-full">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Post a Job</h1>
                <form onSubmit={handleSubmit}>
                    {/* Job Title */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">
                            Job Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="jobTitle"
                            type="text"
                            placeholder="Enter job title"
                            value={formData.jobTitle}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Company Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                            Company Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="companyName"
                            type="text"
                            placeholder="Enter company name"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Location */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="location"
                            type="text"
                            placeholder="Enter location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Job Description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Job Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            placeholder="Enter job description"
                            rows="5"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Salary */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
                            Salary (Optional)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="salary"
                            type="text"
                            placeholder="Enter salary range"
                            value={formData.salary}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Job Type */}



                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Type
                        </label>
                        {["Full-Time", "Part-Time", "Contract", "Freelance", "Internship"].map((jobType) => (
                            <div key={jobType}>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        id={jobType}
                                        value={jobType}
                                        checked={formData.jobType.includes(jobType)}
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2">{jobType}</span>
                                </label>
                            </div>
                        ))}
                    </div>


                    {/* Career Level */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="careerLevel">
                            Career Level
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="careerLevel"
                            value={formData.careerLevel}
                            onChange={handleChange}
                        >
                            <option value="Entry Level">Entry Level</option>
                            <option value="Mid Level">Mid Level</option>
                            <option value="Senior Level">Senior Level</option>
                            <option value="Managerial Level">Managerial Level</option>
                            <option value="Executive Level">Executive Level</option>
                        </select>
                    </div>

                    {/* Phone Number */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="text"
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Qualification */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qualification">
                            Qualification
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="qualification"
                            type="text"
                            placeholder="Enter qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Gender */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                            Gender
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="gender"
                            type="text"
                            placeholder="Enter gender"
                            value={formData.gender}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Experience */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
                            Experience
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="experience"
                            type="text"
                            placeholder="Enter experience"
                            value={formData.experience}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            type="text"
                            placeholder="Enter address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Application Deadline */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">
                            Application Deadline
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="deadline"
                            type="date"
                            value={formData.deadline}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Location 2 */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location2">
                            Secondary Location (Optional)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="location2"
                            type="text"
                            placeholder="Enter secondary location"
                            value={formData.location2}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Company Logo
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="image"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Post Job
                        </button>
                    </div>
                </form>
            </div>


        </div>
    );
}
