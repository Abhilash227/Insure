import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { InsuranceService } from "../Services/InsuranceService";
import { useNavigate } from "react-router-dom";
export default function MyForm() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const baseUrl = "http://localhost:4000";
  const sendEmail = async () => {
    let dataSend = {
      email: email,
    };

    InsuranceService.updateOTP(email);
    InsuranceService.SetFlagTwo(email);
    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
  };
  function onSubmit() {
    sendEmail();
  }
  async function onSub() {
    let res = await InsuranceService.getOtp();
    let VailidOTP = res.data[0].OTP;
    if (VailidOTP == otp) {
      navigate('/forgot-password');
    }
    else {
      setError("OTP is invalid");
    }
  }
  return (
    <>
      <h1 style={{ textAlign: 'center', paddingTop: '100px' }}>Enter Email address to send OTP</h1>
      <div style={{ backgroundColor: 'purple' }}>
        {/* <Heading >Senbad otp to the account</Heading> */}
        <div style={{ margin: '50px 500px', border: '4px double purple', borderRadius: '10px', width: '250px' }}>
          <FormControl id="email" >

            <Input type="email" placeholder="Receiver's Email Address" onChange={(e) => setEmail(e.target.value)} />
            <Input type="number" placeholder="OTP" onChange={(o) => setOtp(o.target.value)} />
            <p>
              <span style={{ color: 'white' }}>{error}</span>
            </p>
          </FormControl>
          <Button onClick={onSubmit} style={{ margin: '10px 45px' }}>Generate OTP</Button>
          <Button onClick={onSub} style={{ margin: '10px 45px' }}>Validate</Button>
        </div>
      </div>
    </>
  );
}