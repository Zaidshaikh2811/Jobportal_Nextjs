import { connect } from '@/app/api/dbConfig/dbConfig'
import Jobs from '../../models/jobModel'
import { NextRequest, NextResponse } from 'next/server'
import slugify from 'slugify';



connect()

export async function POST(request) {

    try {

        const reqBody = await request.json();

        // Validate the required fields
        const requiredFields = [
            'jobTitle', 'companyName', 'location', 'description',
            'jobType', 'category', 'careerLevel', 'phone',
            'qualification', 'gender', 'experience',
            'address', 'deadline'
        ];
        const missingFields = requiredFields.filter(field => !reqBody[field]);



        if (missingFields.length > 0) {
            return NextResponse.json({
                status: 400,
                success: false,
                message: `Missing required fields: ${missingFields.join(', ')}`
            });
        }
        let slug = slugify(reqBody.jobTitle, { lower: true });
        let existingJob = await Jobs.findOne({ slug });
        console.log(slug);

        // Ensure slug is unique
        let counter = 1;
        while (existingJob) {
            slug = `${slugify(reqBody.jobTitle, { lower: true })}-${counter}`;
            existingJob = await Jobs.findOne({ slug });
            counter++;
        }

        // Create a new job instance
        const newJob = new Jobs({ ...reqBody, slug });
        console.log(newJob);




        // Save the job to the database
        const savedJob = await newJob.save();

        return NextResponse.json({
            status: 201,
            success: true,
            message: 'Job posted successfully!',
            jobId: savedJob._id,
        });



    }
    catch (error) {
        return NextResponse.json({
            status: 500,
            success: false,
            message: error.message

        })
    }

}



