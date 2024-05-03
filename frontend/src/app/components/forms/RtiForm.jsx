'use client';
import { useState } from "react";
import InputField from "@/app/components/common/InputField";


const BASE_API_URL = 'http://localhost:5000/api/v1';

const RtiForm = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');

    const [designation, setDesignation] = useState('');
    const [totalExperience, setTotalExperience] = useState('');
    const [qualification, setQualification] = useState('');

    const [phoneNumber, setPhone] = useState('');
    const [email, setEmail] = useState('');

    async function onSubmitHandler(e) {
        e.preventDefault();
        // Logic to handle submit
        if(!firstName || !middleName || !lastName || !designation || !totalExperience || !qualification || !phoneNumber || !email){
            alert("Incomplete details");
            return;
        }

        const body = {
            firstName,
            middleName,
            lastName,
            designation,
            totalExperience,
            qualification,
            phoneNumber,
            email
        };

        // api call
        let res = await fetch(BASE_API_URL+"/configurations/rti", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        });

        res = await res.json();
        console.log(res);
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
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Designation"
                    value={designation}
                    setValue={setDesignation}
                />
                <InputField 
                    label="Total Experience"
                    value={totalExperience}
                    setValue={setTotalExperience}
                    type="number"
                />
                <InputField 
                    label="Qualification"
                    value={qualification}
                    setValue={setQualification}
                />
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Phone Number"
                    value={phoneNumber}
                    setValue={setPhone}
                    type="number"
                />
                <InputField 
                    label="Email Id"
                    value={email}
                    setValue={setEmail}
                    type="email"
                />
                <span className="w-full"></span>
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

export default RtiForm;