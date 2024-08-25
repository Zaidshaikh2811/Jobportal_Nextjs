"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import {
    IconBrandGithub,
    IconBrandGoogle,

} from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AuthFormDemo() {
    const router = useRouter();

    const [loading, setLoading] = useState(false); // State for loading
    const [isSignup, setIsSignup] = useState(true); // State to toggle between login and signup
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        ConfirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (isSignup) {
            if (!formData.firstname) newErrors.firstname = "First name is required.";
            if (!formData.lastname) newErrors.lastname = "Last name is required.";
        }
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.password) newErrors.password = "Password is required.";
        if (isSignup) {
            if (!formData.ConfirmPassword) {
                newErrors.ConfirmPassword = "Confirm password is required.";
            } else if (formData.password !== formData.ConfirmPassword) {
                newErrors.ConfirmPassword = "Passwords do not match.";
            }
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setLoading(true); // Set loading to true
            try {
                if (isSignup) {
                    const signupData = {
                        name: `${formData.firstname} ${formData.lastname}`,
                        email: formData.email,
                        password: formData.password
                    };
                    await axios.post('http://localhost:3000/api/signup', signupData);
                    toast.success("Signup successful!");
                } else {
                    await axios.post('http://localhost:3000/api/login', { email: formData.email, password: formData.password });
                    toast.success("Login successful!");
                }
                router.push('/'); // Navigate to home on success
            } catch (error) {
                console.error(error);
                toast.error(isSignup ? "Signup failed. Please try again." : "Login failed. Please check your credentials.");
            } finally {
                setLoading(false); // Set loading to false
                setErrors({});
            }
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <div className="max-w-md w-full mx-auto mt-4 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                {isSignup ? "Welcome to JobPortal" : "Login to JobPortal"}
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {isSignup ? "Create your account" : "Login to your account"}
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                {isSignup && (
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input
                                id="firstname"
                                placeholder="Tyler"
                                type="text"
                                value={formData.firstname}
                                onChange={handleChange}
                            />
                            {errors.firstname && <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>}
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input
                                id="lastname"
                                placeholder="Durden"
                                type="text"
                                value={formData.lastname}
                                onChange={handleChange}
                            />
                            {errors.lastname && <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>}
                        </LabelInputContainer>
                    </div>
                )}
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </LabelInputContainer>
                {isSignup && (
                    <LabelInputContainer className="mb-8">
                        <Label htmlFor="ConfirmPassword">Confirm Password</Label>
                        <Input
                            id="ConfirmPassword"
                            placeholder="••••••••"
                            type="password"
                            value={formData.ConfirmPassword}
                            onChange={handleChange}
                        />
                        {errors.ConfirmPassword && <p className="text-red-500 text-xs mt-1">{errors.ConfirmPassword}</p>}
                    </LabelInputContainer>
                )}

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mt-4"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Processing..." : `${isSignup ? "Sign up" : "Login"} →`}
                    {loading ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <BottomGradient />
                    )}
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                <div className="flex flex-col space-y-4">
                    <button
                        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="button"
                        onClick={() => { signIn("github", { callbackUrl: process.env.NEXT_PUBLIC_URL }) }}
                    >
                        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            GitHub
                        </span>
                        <BottomGradient />
                    </button>
                    <button
                        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="button"
                        onClick={() => { signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_URL }) }}
                    >
                        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Google
                        </span>
                        <BottomGradient />
                    </button>

                </div>
            </form>

            <p className="text-sm text-center text-neutral-600 dark:text-neutral-300 mt-8">
                {isSignup
                    ? "Already have an account?"
                    : "Don't have an account yet?"}{" "}
                <button
                    type="button"
                    className="text-blue-600 dark:text-blue-400 font-semibold"
                    onClick={() => setIsSignup(!isSignup)}
                >
                    {isSignup ? "Login" : "Sign up"}
                </button>
            </p>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -top-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
        </>
    );
};

const LabelInputContainer = ({ children }) => {
    return <div className="flex-1 space-y-2">{children}</div>;
};
