import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Link from "next/link";

export function FollowingPointerDemo() {
    return (
        <div className="w-80 mx-auto">
            {
                blogContent.map((item, index) => {
                    return <FollowerPointerCard key={index}>
                        <div className="relative overflow-hidden h-full rounded-2xl transition duration-300 group bg-white hover:shadow-2xl border border-gray-200">
                            <div className="p-6">
                                <h2 className="font-extrabold text-xl text-gray-900 mb-3">
                                    {item.title}
                                </h2>
                                <h3 className="text-base text-gray-800 mb-3">
                                    Role: <span className="font-semibold text-gray-900">{item.role}</span>
                                </h3>
                                <h4 className="text-base text-gray-800 mb-5">
                                    Pay: <span className="font-semibold text-gray-900">{item.pay}</span>
                                </h4>
                                <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-gray-500">{item.place}</p>
                                        <p className="text-xs text-gray-500">{item.date}</p>
                                    </div>
                                    <div className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg text-xs shadow-md hover:bg-blue-700 transition-all duration-200">
                                        <Link href={`/jobs`} passHref>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FollowerPointerCard>



                })
            }

        </div>
    );
}

const blogContent = [{
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Manu Arora",
    role: "developer",
    pay: "50000",
    date: "28th March, 2023",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
        "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image: "/demo/thumbnail.png",
    place: "banglore",
    authorAvatar: "/manu.png",
}];

const TitleComponent = ({
    title,
    avatar,
}) => (
    <div className="flex space-x-2 items-center">
        <Image
            src={avatar}
            height="20"
            width="20"
            alt="thumbnail"
            className="rounded-full border-2 border-white"
        />
        <p>{title}</p>
    </div>
);
