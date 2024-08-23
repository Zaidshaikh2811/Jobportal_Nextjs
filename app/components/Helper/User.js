"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";

export default function User({ session }) {
    return (
        <div className="flex items-center space-x-4">
            {/* User Image */}
            <div className="relative w-12 h-12">
                <Image
                    src={session?.user?.image || "/default-avatar.png"}
                    alt="user"
                    width={48}
                    height={48}
                    className="object-cover rounded-full border-2 border-gray-300 dark:border-gray-700"
                />
            </div>

            {/* Log Out Button */}
            <button
                onClick={() => signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/signup` })}
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
                Log Out
            </button>
        </div>
    );
}
