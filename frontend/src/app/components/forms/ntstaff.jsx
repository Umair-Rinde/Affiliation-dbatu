'use client';
import { useState, useTransition } from "react";
import InputField from "../common/InputField";
import { setRequestMeta } from "next/dist/server/request-meta";

const NtStafform = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');

    const [designation, setDesignation] = useState('');
    const [qualification, setQualification] = useState('');
    const [doj, setDOJ] = useState('');

    const [fname, setFName] = useState('');
    const [mname, setMName] = useState('');
    const [lname, setLName] = useState('');

    const [design, setDesign] = useState('');
    const [qual, setQual] = useState('');
    const [joining, setJoining] = useState('');

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
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Designation"
                    value={designation}
                    setValue={setDesignation}
                />
                <InputField 
                    label="Qualification"
                    value={qualification}
                    setValue={setQualification}
                />
                <InputField 
                    label="Date of Joining"
                    value={doj}
                    setValue={setDOJ}
                    type="date"
                />
            </div>
            <h4 className="text-lg font-semibold mt-2">Supporting Staff</h4>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="First Name"
                    value={fname}
                    setValue={setFName}
                />
                <InputField 
                    label="Middle Name"
                    value={mname}
                    setValue={setMName}
                />
                <InputField 
                    label="Last Name"
                    value={lname}
                    setValue={setLName}
                />
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Designation"
                    value={design}
                    setValue={setDesign}
                />
                <InputField 
                    label="Qualification"
                    value={qual}
                    setValue={setQual}
                />
                <InputField 
                    label="Date of Joining"
                    value={joining}
                    setValue={setJoining}
                    type="date"
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

export default NtStafform;