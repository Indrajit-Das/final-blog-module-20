import nodemailer from "nodemailer";

export async function SendMailer(toEmail, subject, text) {
    // Create Transporter
    let transpoter = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth: {
            user: "info@teamrabbil.com",
            pass: "~sR4[bhaC[Qs",
        },
        tls: { rejectUnauthorized: false },
    });

    //Prepair Mail
    let readyMail = {
        from: "eBlog<info@teamrabbil.com>",
        to: toEmail,
        subject: subject,
        text: text,
    };

    //Response Mail
    return await transpoter.sendMail(readyMail);
}
