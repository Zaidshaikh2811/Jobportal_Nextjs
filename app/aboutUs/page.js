import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
    return (
        <div className="max-w-6xl mx-auto py-10 px-6 bg-gray-100 rounded-lg shadow-md mt-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>

            {/* Introduction */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
                <p className="text-lg text-gray-600">
                    We are a passionate team of professionals dedicated to providing innovative solutions. Our mission is to make a positive impact on the world through our cutting-edge products and exceptional service.
                </p>
            </section>

            {/* Mission Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600">
                    Our mission is to deliver high-quality solutions that solve real-world problems and make life easier for our customers. We strive to continuously innovate, improve, and push the boundaries of what’s possible.
                </p>
            </section>

            {/* Vision Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600">
                    Our vision is to be a global leader in our industry by consistently exceeding expectations and setting new standards for excellence. We aim to inspire change, empower people, and make the world a better place.
                </p>
            </section>

            {/* Our Team Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
                <p className="text-lg text-gray-600 mb-4">
                    Behind every successful company is a great team. Here are the amazing people that make our company thrive.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Team Member 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <Image
                            src="https://via.placeholder.com/150"
                            alt="Team Member 1"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                        <p className="text-gray-600">CEO & Founder</p>
                        <p className="text-sm text-gray-500 mt-2">
                            John is a visionary leader with over 15 years of experience in the industry. He founded the company with a mission to change the world for the better.
                        </p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <Image
                            src="https://via.placeholder.com/150"
                            alt="Team Member 2"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                        <p className="text-gray-600">Chief Technology Officer</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Jane is the driving force behind our technology. With her expertise, she ensures that we stay ahead of the curve.
                        </p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <Image
                            src="https://via.placeholder.com/150"
                            alt="Team Member 3"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Alex Johnson</h3>
                        <p className="text-gray-600">Head of Marketing</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Alexs creative strategies have helped us reach a global audience and establish a strong brand presence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <section className="text-center mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-lg text-gray-600">
                    Have any questions? We’re here to help. Reach out to us at <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>.
                </p>
            </section>
        </div>
    );
}
