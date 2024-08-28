
'use client'

// import { useState } from 'react';
// import axios from 'axios';
// import { revalidatePath } from 'next/cache';
// import { useRouter } from 'next/navigation';
// import FormField from '@/app/components/Helper/FormField';
// import CheckboxGroup from '@/app/components/Helper/CheckboxGroup';
// import FileUpload from '@/app/components/Helper/FileUpload';

// export default function PostJob() {
//     const router = useRouter();
//     const [formData, setFormData] = useState({
//         jobType: [],
//         jobTitle: '',
//         companyName: '',
//         location: '',
//         description: '',
//         salary: '',
//         category: 'Development', // Default category
//         careerLevel: 'Entry Level', // Default career level
//         phone: '',
//         qualification: '',
//         gender: '',
//         experience: '',
//         address: '',
//         deadline: '',
//         location2: '',
//         image: null,
//     });


//     const handleChange = (e) => {
//         const { id, value, type, checked } = e.target;

//         if (type === "checkbox") {
//             setFormData((prevData) => ({
//                 ...prevData,
//                 jobType: checked
//                     ? [...prevData.jobType, value]
//                     : prevData.jobType.filter((typeItem) => typeItem !== value),
//             }));
//         } else {
//             setFormData((prevData) => ({
//                 ...prevData,
//                 [id]: value,
//             }));
//         }
//     };

//     const handleFileChange = (e) => {
//         setFormData(prevState => ({
//             ...prevState,
//             image: e.target.files[0] // Handle file input
//         }));
//     };
//     const handleFileUpload = async () => {
//         const formDataTemp = new FormData();
//         if (formData.image) {
//             formDataTemp.append('file', formData.image);
//         } else {
//             console.error("No image file selected.");
//             return;
//         }


//         try {
//             const res = await axios.post("/api/imageuploader",
//                 formDataTemp
//             )


//             if (res.status != 200) {
//                 throw new Error("Failed to upload")
//             }


//             return res.data.imageUrl


//         } catch (error) {
//             throw new Error("Failed to upload " + error)

//         }
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             let imageUrl = '';
//             if (formData.image) {
//                 imageUrl = await handleFileUpload();
//             }


//             const response = await axios.post('/api/jobs/addjob', {
//                 ...formData,
//                 image: imageUrl
//             });


//             alert(response.data.message); // Show success message

//             setFormData({
//                 jobType: [],
//                 jobTitle: '',
//                 companyName: '',
//                 location: '',
//                 description: '',
//                 salary: '',
//                 category: 'Development',
//                 careerLevel: 'Entry Level',
//                 phone: '',
//                 qualification: '',
//                 gender: '',
//                 experience: '',
//                 address: '',
//                 deadline: '',
//                 location2: '',
//                 image: null,
//             });

//             router.push('/')


//         } catch (error) {
//             console.error('Error posting job:', error);
//             alert('Failed to post job. Please try again.');
//         }
//     };


//     return (
//         // <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
//         //     <div className="bg-white p-8 rounded-lg shadow-lg max-w-[90%] w-full">
//         //         <h1 className="text-2xl font-bold mb-6 text-gray-800">Post a Job</h1>
//         //         <form onSubmit={handleSubmit}>
//         //             {/* Job Title */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">
//         //                     Job Title
//         //                 </label>
//         //                 <input
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="jobTitle"
//         //                     type="text"
//         //                     placeholder="Enter job title"
//         //                     value={formData.jobTitle}
//         //                     onChange={handleChange}
//         //                 />
//         //             </div>

//         //             {/* Company Name */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
//         //                     Company Name
//         //                 </label>
//         //                 <input
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="companyName"
//         //                     type="text"
//         //                     placeholder="Enter company name"
//         //                     value={formData.companyName}
//         //                     onChange={handleChange}
//         //                 />
//         //             </div>

//         //             {/* Location */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
//         //                     Location
//         //                 </label>
//         //                 <input
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="location"
//         //                     type="text"
//         //                     placeholder="Enter location"
//         //                     value={formData.location}
//         //                     onChange={handleChange}
//         //                 />
//         //             </div>

//         //             {/* Job Description */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//         //                     Job Description
//         //                 </label>
//         //                 <textarea
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="description"
//         //                     placeholder="Enter job description"
//         //                     rows="5"
//         //                     value={formData.description}
//         //                     onChange={handleChange}
//         //                 />
//         //             </div>

//         //             {/* Salary */}
//         //             <div className="mb-6">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
//         //                     Salary (Optional)
//         //                 </label>
//         //                 <input
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="salary"
//         //                     type="text"
//         //                     placeholder="Enter salary range"
//         //                     value={formData.salary}
//         //                     onChange={handleChange}
//         //                 />
//         //             </div>

//         //             {/* Job Type */}



//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2">
//         //                     Type
//         //                 </label>
//         //                 {["Full-Time", "Part-Time", "Contract", "Freelance", "Internship"].map((jobType) => (
//         //                     <div key={jobType}>
//         //                         <label className="inline-flex items-center">
//         //                             <input
//         //                                 type="checkbox"
//         //                                 className="form-checkbox"
//         //                                 id={jobType}
//         //                                 value={jobType}
//         //                                 checked={formData.jobType.includes(jobType)}
//         //                                 onChange={handleChange}
//         //                             />
//         //                             <span className="ml-2">{jobType}</span>
//         //                         </label>
//         //                     </div>
//         //                 ))}
//         //             </div>


//         //             {/* Career Level */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="careerLevel">
//         //                     Career Level
//         //                 </label>
//         //                 <select
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="careerLevel"
//         //                     value={formData.careerLevel}
//         //                     onChange={handleChange}
//         //                 >
//         //                     <option value="Entry Level">Entry Level</option>
//         //                     <option value="Mid Level">Mid Level</option>
//         //                     <option value="Senior Level">Senior Level</option>
//         //                     <option value="Managerial Level">Managerial Level</option>
//         //                     <option value="Executive Level">Executive Level</option>
//         //                 </select>
//         //             </div>

//         //             {/* Phone Number */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
//         //                     Phone Number
//         //                 </label>
//         //                 <input
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="phone"
//         //                     type="text"
//         //                     placeholder="Enter phone number"
//         //                     value={formData.phone}
//         //                     onChange={handleChange}
//         //                 />
//         //             </div>

//         //             {/* Qualification */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qualification">
//         //                     Qualification
//         //                 </label>
//         //                 <input
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="qualification"
//         //                     type="text"
//         //                     placeholder="Enter qualification"
//         //                     value={formData.qualification}
//         //                     onChange={handleChange}
//         //                 />
//         //             </div>

//         //             {/* Gender */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
//         //                     Gender
//         //                 </label>
//         //                 <input
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="gender"
//         //                     type="text"
//         //                     placeholder="Enter gender"
//         //                     value={formData.gender}
//         //                     onChange={handleChange}
//         //                 />
//         //             </div>

//         //             {/* Experience */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
//         //                     Experience
//         //                 </label>
//         //                 <input
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="experience"
//         //                     type="text"
//         //                     placeholder="Enter experience"
//         //                     value={formData.experience}
//         //                     onChange={handleChange}
//         //                 />
//         //             </div>

//         //             {/* Address */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
//         //                     Address
//         //                 </label>
//         //                 <input
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="address"
//         //                     type="text"
//         //                     placeholder="Enter address"
//         //                     value={formData.address}
//         //                     onChange={handleChange}
//         //                 />
//         //             </div>

//         //             {/* Application Deadline */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">
//         //                     Application Deadline
//         //                 </label>
//         //                 <input
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="deadline"
//         //                     type="date"
//         //                     value={formData.deadline}
//         //                     onChange={handleChange}
//         //                 />
//         //             </div>

//         //             {/* Location 2 */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location2">
//         //                     Secondary Location (Optional)
//         //                 </label>
//         //                 <input
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="location2"
//         //                     type="text"
//         //                     placeholder="Enter secondary location"
//         //                     value={formData.location2}
//         //                     onChange={handleChange}
//         //                 />
//         //             </div>

//         //             {/* Image Upload */}
//         //             <div className="mb-4">
//         //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
//         //                     Company Logo
//         //                 </label>
//         //                 <input
//         //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         //                     id="image"
//         //                     type="file"
//         //                     accept="image/*"
//         //                     onChange={handleFileChange}
//         //                 />
//         //             </div>

//         //             {/* Submit Button */}
//         //             <div className="flex items-center justify-between">
//         //                 <button
//         //                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         //                     type="submit"
//         //                 >
//         //                     Post Job
//         //                 </button>
//         //             </div>
//         //         </form>
//         //     </div>


//         // </div>
//         <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
//             <div className="bg-white p-8 rounded-lg shadow-lg max-w-[90%] w-full">
//                 <h1 className="text-2xl font-bold mb-6 text-gray-800">Post a Job</h1>
//                 <form onSubmit={handleSubmit}>
//                     <FormField id="jobTitle" label="Job Title" value={formData.jobTitle} onChange={handleChange} placeholder="Enter job title" />
//                     <FormField id="companyName" label="Company Name" value={formData.companyName} onChange={handleChange} placeholder="Enter company name" />
//                     <FormField id="location" label="Location" value={formData.location} onChange={handleChange} placeholder="Enter location" />
//                     <FormField id="description" label="Job Description" value={formData.description} onChange={handleChange} placeholder="Enter job description" type="textarea" />
//                     <FormField id="salary" label="Salary (Optional)" value={formData.salary} onChange={handleChange} placeholder="Enter salary range" />
//                     <CheckboxGroup options={["Full-Time", "Part-Time", "Contract", "Freelance", "Internship"]} selectedOptions={formData.jobType} onChange={handleChange} />
//                     <FormField id="careerLevel" label="Career Level" type="select" value={formData.careerLevel} onChange={handleChange} options={["Entry Level", "Mid Level", "Senior Level", "Managerial Level", "Executive Level"]} />
//                     <FormField id="phone" label="Phone Number" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
//                     <FormField id="qualification" label="Qualification" value={formData.qualification} onChange={handleChange} placeholder="Enter qualification" />
//                     <FormField id="gender" label="Gender" value={formData.gender} onChange={handleChange} placeholder="Enter gender" />
//                     <FormField id="experience" label="Experience" value={formData.experience} onChange={handleChange} placeholder="Enter experience" />
//                     <FormField id="address" label="Address" value={formData.address} onChange={handleChange} placeholder="Enter address" />
//                     <FormField id="deadline" label="Application Deadline" type="date" value={formData.deadline} onChange={handleChange} />
//                     <FormField id="location2" label="Secondary Location (Optional)" value={formData.location2} onChange={handleChange} placeholder="Enter secondary location" />
//                     <FileUpload id="image" label="Company Logo" onChange={handleFileChange} />

//                     <div className="flex items-center justify-between">
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//                             Post Job
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }


'use client';
import React, { useState, useCallback } from 'react';
import { IoTrashBin } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import CheckboxGroup from '@/app/components/Helper/CheckboxGroup';
import FormField from '@/app/components/Helper/FormField';
import FileUpload from '@/app/components/Helper/FileUpload';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ArrayInputField = ({ items, onChange, onRemove, onAdd, placeholder }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">{placeholder}</label>
        {items.map((item, index) => (
            <div key={index} className="flex mb-2">
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    value={item}
                    onChange={(e) => onChange(index, e.target.value)}
                    placeholder={placeholder}
                />
                <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                    <IoTrashBin />
                </button>
            </div>
        ))}
        <button
            type="button"
            onClick={onAdd}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
            <IoMdAdd />
        </button>
    </div>
);

export default function PostJob() {
    const [formState, setFormState] = useState({
        jobTitle: '',
        companyName: '',
        location: '',
        salary: '',
        benefits: '',
        jobType: [],
        description: '',
        aboutRole: [''],
        jobTasks: [''],
        skills: [''],
        category: 'Development', // Default category
        careerLevel: 'Entry Level', // Default career level
        image: null,
    });

    const router = useRouter();


    const handleChange = (field) => (e) => {
        setFormState({
            ...formState,
            [field]: e.target.value,
        });
    };

    const handleArrayChange = (arrayName, index, value) => {
        setFormState((prev) => {
            const newArray = [...prev[arrayName]];
            newArray[index] = value;
            return { ...prev, [arrayName]: newArray };
        });
    };

    const handleArrayAdd = (arrayName) => () => {
        setFormState((prev) => ({
            ...prev,
            [arrayName]: [...prev[arrayName], '']
        }));
    };

    const handleArrayRemove = (arrayName, index) => () => {
        setFormState((prev) => ({
            ...prev,
            [arrayName]: prev[arrayName].filter((_, i) => i !== index)
        }));
    };

    const handleCheckboxChange = useCallback((selectedOptions) => {
        setFormState((prev) => ({ ...prev, jobType: selectedOptions }));
    }, []);

    const handleFileChange = (e) => {
        setFormState((prev) => ({
            ...prev,
            image: e.target.files[0]
        }));
    };

    const handleFileUpload = async (file) => {
        const formData = new FormData();
        if (file) {
            formData.append('file', file);
        } else {
            console.error("No image file selected.");
            return '';
        }

        try {
            const { data } = await axios.post("/api/imageuploader", formData);
            return data.imageUrl;
        } catch (error) {
            console.error("Failed to upload image:", error);
            return '';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            let imageUrl = '';
            if (formState.image) {
                imageUrl = await handleFileUpload(formState.image);
            }


            const response = await axios.post('/api/jobs/addjob', {
                ...formState,
                image: imageUrl
            });

            alert(response.data.message); // Show success message

            setFormState({
                jobTitle: '',
                companyName: '',
                location: '',
                salary: '',
                benefits: '',
                jobType: [],
                description: '',
                aboutRole: [''],
                jobTasks: [''],
                skills: [''],
                careerLevel: '',
                category: '',
                image: null,
            });

            router.push('/');

        } catch (error) {
            console.error('Error posting job:', error);
            alert('Failed to post job. Please try again.');
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Post a Job</h1>
            <form onSubmit={handleSubmit}>
                <FormField id="jobTitle" label="Job Title" value={formState.jobTitle} onChange={handleChange('jobTitle')} placeholder="Enter job title" />
                <FormField id="companyName" label="Company Name" value={formState.companyName} onChange={handleChange('companyName')} placeholder="Enter company name" />
                <FormField id="location" label="Location" value={formState.location} onChange={handleChange('location')} placeholder="Enter location" />
                <FormField id="salary" label="Salary" value={formState.salary} onChange={handleChange('salary')} placeholder="Enter salary" />
                <FormField id="benefits" label="Benefits" value={formState.benefits} onChange={handleChange('benefits')} placeholder="Enter benefits" />
                <FormField id="careerLevel" label="Career Level" type="select" value={formState.careerLevel} onChange={handleChange('careerLevel')} options={["Entry Level", "Mid Level", "Senior Level", "Managerial Level", "Executive Level"]} />
                <FormField id="category" label="Category" type="select" value={formState.category} onChange={handleChange('category')} options={['Development', 'Marketing', 'Design', 'Finance', 'Human Resources', 'Automotive Jobs', 'Customer Services', 'Health and Care', 'Project Management']} />





                <CheckboxGroup
                    options={["Full-Time", "Part-Time", "Contract", "Freelance", "Internship"]}
                    selectedOptions={formState.jobType}
                    onChange={handleCheckboxChange}
                />
                <FormField id="description" label="Job Description" type="textarea" value={formState.description} onChange={handleChange('description')} placeholder="Enter job description" />

                <ArrayInputField
                    items={formState.aboutRole}
                    onChange={(index, value) => handleArrayChange('aboutRole', index, value)}
                    onRemove={(index) => handleArrayRemove('aboutRole', index)}
                    onAdd={handleArrayAdd('aboutRole')}
                    placeholder="About the role"
                />

                <ArrayInputField
                    items={formState.jobTasks}
                    onChange={(index, value) => handleArrayChange('jobTasks', index, value)}
                    onRemove={(index) => handleArrayRemove('jobTasks', index)}
                    onAdd={handleArrayAdd('jobTasks')}
                    placeholder="Job tasks and responsibilities"
                />

                <ArrayInputField
                    items={formState.skills}
                    onChange={(index, value) => handleArrayChange('skills', index, value)}
                    onRemove={(index) => handleArrayRemove('skills', index)}
                    onAdd={handleArrayAdd('skills')}
                    placeholder="Skills and experience"
                />
                <FileUpload id="image" label="Company Logo" onChange={handleFileChange} />
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Post Job
                    </button>
                </div>
            </form>
        </div>
    );
}
