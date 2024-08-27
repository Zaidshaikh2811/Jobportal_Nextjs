"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function VerifyEmail() {
    const searchParams = useSearchParams();
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const tokenFromParams = searchParams.get('token');
        if (tokenFromParams) {
            setToken(tokenFromParams);
            verifyToken(tokenFromParams);
        } else {
            setError('No token provided');
            setLoading(false);
        }
    }, [searchParams]);

    const verifyToken = async (token) => {
        try {
            const response = await axios.post('http://localhost:3000/api/verifyemail', { token });

            if (!response.data.success) {
                setError(response.data.message);
                setLoading(false);

            }

            setSuccess('Email successfully verified!');
        } catch (err) {
            setError(err.response?.data?.message || 'Verification failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            {loading ? (
                <div style={{ margin: '2rem' }}>
                    <div className="spinner" />
                    <p>Loading...</p>
                </div>
            ) : error ? (
                <div>
                    <h5 style={{ color: 'red' }}>{error}</h5>
                </div>
            ) : (
                <div>
                    <h5 style={{ color: 'green' }}>{success}</h5>
                </div>
            )}
            <a href="/" style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                marginTop: '1rem',
                backgroundColor: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px'
            }}>
                Go to Home
            </a>
        </div>
    );
}
