require('dotenv').config();
var nodemailer = require("nodemailer");

module.exports = (request) => {
    // console.log(process.env.EMAIL,process.env.PASSWORD,process.env.SENDTO);
    // transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    // mail options
    const mailOptions = {
        from: `${request.body.name}`,
        to: process.env.SENDTO,
        subject: `${request.body.name}: ${request.body.email}`,
        text: `Message Body\n${request.body.message}`
    }
    // use the transporter to send email
    transporter.sendMail(mailOptions, (err, res) => {console.log(process.env.EMAIL,process.env.PASSWORD,process.env.SENDTO);
    })

    return true;
}
