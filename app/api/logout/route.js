import { connect } from '@/app/api/dbConfig/dbConfig'
import User from '@/app/components/Helper/User'
import { NextRequest, NextResponse } from 'next/server'


connect()

export default async function GET(req) {

    try {

        const response = NextResponse.json({
            message: "Logout Successfully",
            success: true
        })
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        })
        return response

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}