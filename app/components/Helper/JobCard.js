// import Image from "next/image";
// // import { FollowerPointerCard } from "../ui/following-pointer";
// import { FollowerPointerCard } from "@/components/ui/following-pointer";

// export function FollowingPointerDemo() {
//     return (
//         (<div className="w-80 mx-auto">
//             <FollowerPointerCard
//                 title={
//                     <TitleComponent title={blogContent.author} avatar={blogContent.authorAvatar} />
//                 }>
//                 <div
//                     className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
//                     <div
//                         className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
//                         <Image
//                             src={blogContent.image}
//                             alt="thumbnail"
//                             layout="fill"
//                             objectFit="cover"
//                             className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `} />
//                     </div>
//                     <div className=" p-4">
//                         <h2 className="font-bold my-4 text-lg text-zinc-700">
//                             {blogContent.title}
//                         </h2>
//                         <h2 className="font-normal my-4 text-sm text-zinc-500">
//                             {blogContent.description}
//                         </h2>
//                         <div className="flex flex-row justify-between items-center mt-10">
//                             <span className="text-sm text-gray-500">{blogContent.date}</span>
//                             <div
//                                 className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
//                                 Read More
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </FollowerPointerCard>
//         </div>)
//     );
// }

// const blogContent = {
//     slug: "amazing-tailwindcss-grid-layouts",
//     author: "Manu Arora",
//     date: "28th March, 2023",
//     title: "Amazing Tailwindcss Grid Layout Examples",
//     description:
//         "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
//     image: "/demo/thumbnail.png",
//     authorAvatar: "/manu.png",
// };

// const TitleComponent = ({
//     title,
//     avatar
// }) => (
//     <div className="flex space-x-2 items-center">
//         <Image
//             src={avatar}
//             height="20"
//             width="20"
//             alt="thumbnail"
//             className="rounded-full border-2 border-white" />
//         <p>{title}</p>
//     </div>
// );



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
