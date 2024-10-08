import { NextRequest, NextResponse } from 'next/server';

import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


export async function POST(request) {



    try {

        const formData = await request.formData();
        const file = formData.get('file');

        // Ensure a file was provided
        if (!file) {
            return NextResponse.json({ error: 'Please select a file' }, { status: 400 });
        }

        // Convert file to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload image to Cloudinary
        const uploadResult = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream({ folder: 'jobportal' }, (error, result) => {
                if (error) reject(error);
                else resolve(result);
            });
            uploadStream.end(buffer);
        });

        // Generate URL for the uploaded image
        const imageUrl = cloudinary.url(uploadResult.public_id, {
            fetch_format: 'auto',
            quality: 'auto'
        });


        // Return the URL of the uploaded image
        return NextResponse.json({ imageUrl }, { status: 200, success: true });

    }
    catch (error) {
        return new Response(JSON.stringify(error), {
            status: 500,
            success: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });


    }

}

