'use client'
import React, { useState } from 'react';

export default function ContactUs() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (field) => (e) => {
        setFormState((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add an API call or email service here to send form data.
        alert('Form submitted! Thank you for contacting us.');
        setFormState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="max-w-4xl mx-auto py-10 px-6 bg-gray-100 rounded-lg shadow-md mt-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
            <p className="text-center text-lg text-gray-600 mb-8">
                We love to hear from you! Whether you have a question about our services, need assistance, or just want to give feedback, feel free to reach out. We are here to help.
            </p>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        value={formState.name}
                        onChange={handleChange('name')}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        value={formState.email}
                        onChange={handleChange('email')}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        value={formState.subject}
                        onChange={handleChange('subject')}
                        placeholder="Enter subject"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        value={formState.message}
                        onChange={handleChange('message')}
                        placeholder="Write your message here"
                        rows="5"
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div className="mt-10 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Details</h2>
                <p className="text-gray-600">
                    Email: <a href="mailto:zaidshaikh2811@gmail.com" className="text-blue-600 hover:underline">zaidshaikh2811@gmail.com</a>
                </p>
                <p className="text-gray-600">
                    Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+123 456 7890</a>
                </p>
                <p className="text-gray-600">
                    Address: 123 Main Street, Solapur, India
                </p>
            </div>
        </div>
    );
}
