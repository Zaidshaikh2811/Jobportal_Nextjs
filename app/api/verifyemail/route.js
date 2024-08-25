import { connect } from '@/app/api/dbConfig/dbConfig'
import User from '../models/userModel'
import { NextRequest, NextResponse } from 'next/server'


connect()

export async function POST(request) {
    try {
        //verify email
        const reqBody = await request.json()
        const { token } = reqBody
        if (!token) {
            return NextResponse.json({

                message: 'Token Not Found',
                success: false
            })
        }

        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gte: Date.now() }
        })

        if (!user) {
            return NextResponse.json({
                status: 400,
                message: 'No User Found',
                success: false
            })
        }

        user.isVerified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined

        await user.save()

        return NextResponse.json({
            status: 201,
            message: 'Email Verified Successfully',
            success: true
        })


    }
    catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message,
            success: false

        })
    }
}