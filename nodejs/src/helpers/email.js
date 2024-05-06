const nodemailer = require('nodemailer');
let dotenv = require('dotenv').config();

if (
  process.env.EMAILSERVICE == undefined ||
  process.env.EMAIL == undefined ||
  process.env.PASSWORDEMAIL == undefined
) {
  console.log('Error: Missing email environment variables');
  process.exit(1);
}

function sendEmail(firstName, lastName, from_email, subject, body) {
  const mail = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORDEMAIL,
    },
  });
  emailBody = "First Name: " + firstName + "\n"
        + "Last Name: " + lastName + "\n\n"
        + "From: " + from_email + "\n\n"
        + body;
  let mailOptions = {
    from: from_email,
    to: 'p.petit@paul-petit.fr',
    subject: subject,
    text: emailBody,
  };
  mail.sendMail(mailOptions, function (error) {
    if (error) {
      console.log(error);
      return false;
    }
    return true;
  });
}

module.exports = { sendEmail };