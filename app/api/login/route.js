import { connect } from '@/app/api/dbConfig/dbConfig'
import User from '../models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


connect()

export async function POST(request) {

    try {

        const reqBody = await request.json()


        const { email, password } = reqBody

        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 400 })
        }
        const isValidPassword = await bcryptjs.compare(password, user.password)

        if (!isValidPassword) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 400 })
        }
        const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
            expiresIn: '1h',
        })
        const resp = NextResponse.json({
            message: "Logged In",
            success: true,
        })
        resp.cookies.set("token", token, {
            httpOnly: true
        })

        return resp

    }
    catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message

        })
    }

}



