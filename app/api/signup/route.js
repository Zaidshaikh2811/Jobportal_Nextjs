import { connect } from '@/app/api/dbConfig/dbConfig'
import User from '../models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import { sendEmail } from '@/app/components/Helper/mailer'
connect()

export async function POST(request) {

    try {

        const { name, email, password } = await request.json()
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json(
                { message: 'User already exists' },
                { status: 400 }

            )
        }
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        const userCreated = new User({ name, email, password: hashedPassword })


        const result = await userCreated.save()

            ;

        //send verification mail
        const mail = await sendEmail({ email, emailType: "VERIFY", userId: result._id })

        return NextResponse.json({
            message: 'User created successfully',
            user: result,
            success: true

        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }

}