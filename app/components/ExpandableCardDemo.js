import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";

export function ExpandableCardDemo({ job }) {


    return (
        <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between">
                <Image
                    src={job.image} // Replace with the actual logo source
                    alt="Company Logo"
                    width={80}
                    height={80}
                    className="rounded-full"
                />
                <p className="text-gray-500 text-sm">
                    {new Date(job.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">{job.jobTitle}</h2>
            <p className="mt-1 text-blue-600 text-sm">{job.companyName}</p>
            <div className="mt-4 flex gap-2 flex-wrap">
                {job.jobType.map((type, index) => (
                    <span key={index} className="text-xs text-white bg-purple-500 px-3 py-1 rounded-full">
                        {type}
                    </span>
                ))}
                <span className="text-xs text-gray-800 bg-green-100 px-3 py-1 rounded-full">
                    {job.careerLevel}
                </span>
            </div>
            <p className="mt-4 text-gray-700 flex">
                <CiLocationOn></CiLocationOn> {job.location}
            </p>
            <p className="mt-2 text-gray-500 text-sm">
                {job.description.length > 100 ? `${job.description.substring(0, 100)}...` : job.description}
            </p>
            <div className="mt-6 flex justify-between">
                <Link href={`/job/${job.slug}`}>
                    <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200">
                        Apply
                    </button>
                </Link>
                <button className="px-6 py-2 text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200">
                    Contacts
                </button>
            </div>
        </div>
    );
}
