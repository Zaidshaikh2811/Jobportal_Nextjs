import { HoverEffect } from "@/components/ui/card-hover-effect";
import { MdOutlineDesignServices } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";



export function CardHoverEffectDemo() {
    return (
        <div className="w-[95vw] mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Development",

        link: "https://stripe.com",
    },
    {
        title: "Marketing",

        link: "https://netflix.com",
    },
    {
        title: "Design",
        icon: <MdOutlineDesignServices />,
        link: "https://google.com",
    },
    {
        title: "Finance",
        icon: <CiMoneyCheck1 />,
        link: "https://meta.com",
    },
    {
        title: "Human Resources",

        link: "https://amazon.com",
    },
    {
        title: "Automotive Jobs",

        link: "https://microsoft.com",
    },
    {
        title: "Customer Services",

        link: "https://microsoft.com",
    },
    {
        title: "Health and Care",

        link: "https://microsoft.com",
    },
    {
        title: "Project Management",

        link: "https://microsoft.com",
    },
];
