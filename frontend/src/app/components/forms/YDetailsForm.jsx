'use client';
import { useState } from "react";
import InputField from "../common/InputField";

const YDetailsForm = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');

    const [address, setAddress] = useState('');

    const [taluka, setTaluka] = useState('');
    const [district, setDistrict] = useState('');
    const [Pin, setPin] = useState('');

    const [phone, setPhone] = useState('');
    const [fax, setFax] = useState('');

    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');

    const [registration, setRegistration] = useState('');
    const [year, setYear] = useState('');

    function onSubmitHandler(e) {
        e.preventDefault();
        // Logic to handle submit
    }

    return (
        <form className="flex flex-col gap-5 w-full">
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="First Name"
                    value={firstName}
                    setValue={setFirstName}
                />
                <InputField 
                    label="Middle Name"
                    value={middleName}
                    setValue={setMiddleName}
                />
                <InputField 
                    label="Last Name"
                    value={lastName}
                    setValue={setLastName}
                />
            </div>
            <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-sm">Address</label>
                <textarea
                    rows="3"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="px-2 py-1 outline-none border-2 rounded-lg"
                ></textarea>
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Taluka"
                    value={taluka}
                    setValue={setTaluka}
                />
                <InputField 
                    label="District"
                    value={district}
                    setValue={setDistrict}
                />
                <InputField 
                    label="Pin Code"
                    value={Pin}
                    setValue={setPin}
                />
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Phone Number (with STD code)"
                    value={phone}
                    setValue={setPhone}
                    type="number"
                />
                <InputField 
                    label="FAX Number (with STD code)"
                    value={fax}
                    setValue={setFax}
                />
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Email ID"
                    value={email}
                    setValue={setEmail}
                    type="email"
                />
                <InputField 
                    label="Website"
                    value={website}
                    setValue={setWebsite}
                />
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Registration Number"
                    value={registration}
                    setValue={setRegistration}
                />
                <InputField 
                    label="Year"
                    value={year}
                    setValue={setYear}
                />
            </div>
          
            <div className="flex items-center justify-center gap-3 my-5 font-semibold">
                <button className="px-4 py-1 bg-gray-200 hover:bg-gray-400 rounded-lg">Previous</button>
                <button className="px-4 py-1 bg-blue-600 hover:bg-blue-800 text-white rounded-lg"
                    onClick={onSubmitHandler}
                >Submit</button>
                <button className="px-4 py-1 bg-gray-200 hover:bg-gray-400 rounded-lg">Next</button>
            </div>
        </form>
    )
}

export default YDetailsForm;
