import { connect } from '@/app/api/dbConfig/dbConfig'
import Jobs from '../../models/jobModel'
import { NextRequest, NextResponse } from 'next/server'



connect()

export async function GET(request) {

    try {

        const jobs = await Jobs.find().sort({ createdAt: -1 });


        return NextResponse.json({
            status: 200,
            jobs: jobs,
            success: true
        });



    }
    catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message,
            success: false

        })
    }

}



