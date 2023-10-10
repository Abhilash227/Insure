const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const generateOTP = require("./generateOTP");
dotenv.config();
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'ushakshetty30@gmail.com',
    pass: 'vsam ynrn joks tzqr',
  },
});

const otp = generateOTP();
const generatingOTP = () =>{
  return otp;
}

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const otpnow = generatingOTP();
  var mailOptions = {
    from: 'ushakshetty30@gmail.com',
    to: email,
    subject: "OTP from Insure Company",
    text: `Your OTP is: ${otpnow}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
});
module.exports = { sendEmail,generatingOTP };