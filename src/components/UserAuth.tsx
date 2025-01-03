import { useState, ChangeEvent } from "react";

interface Props {
    handleSubmit: () => void;
}

function UserAuth({ handleSubmit }: Props) {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [referralCode, setReferralCode] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [referralCodeError, setReferralCodeError] = useState("");

    const onPhoneNumberChanged = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event?.target?.value;
        const isValid = /^\d{10}$/.test(value); // Regular expression for 10 digits

        if (isValid) {
          setPhoneNumber(value);
          setPhoneNumberError("");
        } else {
          setPhoneNumber(value);
          setPhoneNumberError("Invalid phone number! It should be a 10 digit number.");
        }
    }

    const onReferralCodeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event?.target?.value;
        const isValid = /^\s*$|^[a-zA-Z0-9]{6}$/.test(value);  // Regular expression for 6 alphanumeric characters or empty string

        if (isValid) {
          setReferralCode(value);
          setReferralCodeError("");
        } else {
          setReferralCode(value);
            setReferralCodeError("Invalid referral code! It should be a 6 character long alphanumeric code.");
        }

        console.log(referralCode, referralCodeError)
    }

    const onSubmit = () => {
        if (!phoneNumber || phoneNumberError || referralCodeError) {
            if (!phoneNumber) {
                setPhoneNumberError("Phone number is required!");
            }
            return;
        }
        handleSubmit();
    }

    return (
        <div className="card bg-warning">
            <div className="card-body">
                <h2 className="card-title text-primary-content">Login or Sign Up</h2>
                <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="input input-bordered w-full max-w-xs"
                    value={phoneNumber}
                    onChange={onPhoneNumberChanged}
                />
                {phoneNumberError? <p className="alert alert-error">{phoneNumberError}</p> : null }
                <input
                    type="text"
                    placeholder="Referral Code (optional)"
                    className="input input-bordered w-full max-w-xs"
                    onChange={onReferralCodeChanged}
                />
                {referralCodeError? <p className="alert alert-error">{referralCodeError}</p> : null }
                <button className="btn" onClick={onSubmit} >Submit</button>
            </div>
        </div>
    )
}

export default UserAuth;