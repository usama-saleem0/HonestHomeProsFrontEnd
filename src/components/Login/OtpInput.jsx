import React, { useState } from "react";

const OTPInput = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));

  // Handle input changes
  const handleChange = (value, index) => {
    if (isNaN(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move to the next input
    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    // When all inputs are filled, call the onComplete function
    if (newOtp.every(num => num !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  // Handle backspace to move focus back
  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {otp.map((_, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "18px",
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
