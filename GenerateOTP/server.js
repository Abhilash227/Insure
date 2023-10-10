const express = require("express");
const sql = require('msnodesqlv8');
const dotenv = require("dotenv");
const server = 'W-674PY03-2';
const driver = 'ODBC Driver 17 for SQL Server';
const db = 'Abhilash_DB';
const pwd = 'Password@123456-=';
const uid = 'SA'
const emailRoutes = require("./routes/emailRoutes");
const app = express();
const generatingOTP = require('./services/sendEmail').generatingOTP;
// const generateOTP = require("./services/generateOTP");

dotenv.config();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const conString = `Driver=${driver};Server=${server};Database=${db};uid=${uid};pwd=${pwd};`;

const otp = generatingOTP();

//Signup and login

app.use("/email", emailRoutes);

app.put("/setOtp/:email", (req, res) => {
  // const body = req.body;
  const email=req.params.email;
  const flag=req.params.flag;
  const query1 = `Update UserTable01 set OTP=${otp} where Email='${email}'`;
  console.log(otp);
  console.log(query1);
  // console.log(query1);
  sql.query(conString, query1, (err, rows) => {
      if (err) {
          res.status(400).send(err.message);
      }
      else {
          res.status(200).send("User updated successfully");
      }
  })
})
 
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});