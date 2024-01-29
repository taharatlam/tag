import axios from "axios";

const OTP_SERVICE_API_KEY = "542e8186-1cb2-11ed-9c12-0200cd936042";

export function sendOTP(phoneNumber) {
  return axios({
    method: "GET",
    url: `https://2factor.in/API/V1/${OTP_SERVICE_API_KEY}/SMS/${phoneNumber}/AUTOGEN3/OTPa`,
  });
}

export function verifyOTP(phoneNumber, userOTP) {
  return axios({
    method: "GET",
    url: `https://2factor.in/API/V1/${OTP_SERVICE_API_KEY}/SMS/VERIFY3/${phoneNumber}/${userOTP}`,
  });
}
