import { useState, ChangeEvent } from "react";

interface Props {
    handleVerify: () => void;
}

function OTPVerification({ handleVerify }: Props) {
    const [otp, setOTP] = useState("");
    const [otpError, setOTPError] = useState("");

    const onVerify = () => {
        if (otp !== "1234") {
            setOTPError("Invalid OTP!");
            return;
        }
        handleVerify();
    }

    return (
        <div className="card bg-warning">
            <div className="card-body">
                <h2 className="card-title text-primary-content">Verify OTP</h2>
                <input
                    type="text"
                    placeholder="Enter OTP"
                    className="input input-bordered w-full max-w-xs"
                    value={otp}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setOTP(event?.target?.value)}
                />
                {otpError? <p className="alert alert-error">{otpError}</p> : null }
                <button className="btn" onClick={onVerify} >Verify</button>
            </div>
        </div>
    )
}

export default OTPVerification;