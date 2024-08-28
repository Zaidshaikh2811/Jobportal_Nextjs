import { connect } from '@/app/api/dbConfig/dbConfig';
import Jobs from '../../models/jobModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request) {
    try {
        const url = new URL(request.url);
        const slug = url.searchParams.get('slug'); // Get the slug parameter from the query string


        let jobs;

        if (slug) {
            // If a slug is provided, search for the job with that slug
            jobs = await Jobs.findOne({ slug: slug });

            if (!jobs) {
                return NextResponse.json({
                    status: 404,
                    message: 'Job not found',
                    success: false
                });
            }
        } else {
            // If no slug is provided, return all jobs
            jobs = await Jobs.find().sort({ createdAt: -1 });
        }

        return NextResponse.json({
            status: 200,
            jobs: jobs,
            success: true
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message,
            success: false
        });
    }
}
