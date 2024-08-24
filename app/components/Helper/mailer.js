import User from '@/app/api/models/userModel';
import nodemailer from 'nodemailer'
import bcryptjs from 'bcryptjs'

export const sendEmail = async ({ email, emailType, userId }) => {

    try {

        // /TODO configure mail for usage
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType == "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                $set: {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 3600000
                }
            })
        } else if (emailType == "RESET") {
            await User.findByIdAndUpdate(userId, {
                $set: {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000
                }
            })
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "982e308eb59a1c",
                pass: "79be1f1fde9087"
            }
        });
        const mailOptions = {
            from: 'jobportal@gmail.com', // sender address
            to: email, // list of receivers
            subject: emailType === "VERIFY" ? "Verify Your Email" : "Reset your Password", // Subject line

            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`
        }
        const info = await transport.sendMail(mailOptions)
        return info

    } catch (error) {
        throw new error(error.message)

    }

}