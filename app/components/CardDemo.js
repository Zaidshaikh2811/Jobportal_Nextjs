import { HoverEffect } from "@/components/ui/card-hover-effect";

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
        description:
            "Innovating and building digital infrastructure for seamless internet experiences.",
        link: "https://stripe.com",
    },
    {
        title: "Marketing",
        description:
            "Leading global streaming services with a diverse range of award-winning content.",
        link: "https://netflix.com",
    },
    {
        title: "Design",
        description:
            "Crafting cutting-edge internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Finance",
        description:
            "Creating advanced tech solutions to enhance global connectivity.",
        link: "https://meta.com",
    },
    {
        title: "Human Resources",
        description:
            "Spearheading e-commerce and AI advancements for a modern world.",
        link: "https://amazon.com",
    },
    {
        title: "Automotive Jobs",
        description:
            "Driving innovation in software, electronics, and personal computing.",
        link: "https://microsoft.com",
    },
    {
        title: "Customer Services",
        description:
            "Enhancing user experiences through advanced tech solutions.",
        link: "https://microsoft.com",
    },
    {
        title: "Health and Care",
        description:
            "Innovating tech solutions for health and wellness.",
        link: "https://microsoft.com",
    },
    {
        title: "Project Management",
        description:
            "Leading and managing tech projects for a connected future.",
        link: "https://microsoft.com",
    },
];
