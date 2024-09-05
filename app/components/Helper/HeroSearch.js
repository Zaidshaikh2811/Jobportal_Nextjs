'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchJobHero() {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            setLoading(true);
            router.push(`/job/${searchQuery}`);
        }
    };

    return (
        <>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Job"
                className="w-full px-5 py-4 outline-none rounded-l-md bg-gray-200"
            />
            <button
                disabled={loading}
                onClick={handleSearch}
                className="px-5 py-4 outline-none rounded-r-md bg-blue-500 text-white"
            >
                {loading ? 'loading...' : 'Search'}
            </button>
        </>
    );
}
