

function FollowingPointerDemo({ job }) {
    return (
        <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{job.title}</h2>
            <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">{job.company}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{job.location}</p>
            <p className="text-gray-700 dark:text-gray-200 mb-4">{job.description}</p>
            <a
                href={job.applyLink}
                className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition duration-200"
            >
                Apply Now
            </a>
        </div>
    );
}

export default JobCard;
