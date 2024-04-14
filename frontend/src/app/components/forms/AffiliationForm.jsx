'use client';
import { useState } from "react";
import InputField from "../common/InputField";

const AffiliationForm = () => {
    const [yearOfEst, setYearOfEst] = useState('');
    const [firstAffi, setFirstAffi] = useState('');
    const [detailsOfAffi, setDetailsOfAffi] = useState('');

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');

    const [qualification, setQualification] = useState('');
    const [doa, setDoa] = useState('');
    const [doj, setDoj] = useState('');

    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [isApproved, setIsApproved] = useState(null);
    const [university, setUniversity] = useState('');

    function onSubmitHandler(e) {
        e.preventDefault();
        // Logic to handle submit
    }

    return (
        <form className="flex flex-col gap-5 w-full">
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField 
                    label="Year of Establishment"
                    value={yearOfEst}
                    setValue={setYearOfEst}
                />
                <InputField
                    label="Date of First Affiliation"
                    value={doa}
                    setValue={setDoa}
                    type="date"
                />
            </div>
            <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-sm">Details of Last Affiliation (with year of approval)</label>
                <textarea
                    rows="3"
                    value={detailsOfAffi}
                    onChange={(e) => setDetailsOfAffi(e.target.value)}
                    className="px-2 py-1 outline-none border-2 rounded-lg"
                ></textarea>
            </div>
            <h4 className="font-semibold text-xl pt-2 border-t">Registrar Details</h4>
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
                    label="Qualification"
                    value={qualification}
                    setValue={setQualification}
                />
                <InputField
                    label="Date of Appointment"
                    value={doa}
                    setValue={setDoa}
                    type="date"
                />
                <InputField 
                    label="Date of Joining"
                    value={doj}
                    setValue={setDoj}
                    type="date"
                />
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Phone Number"
                    value={phone}
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
            <div className="w-full flex gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                    <label className="text-sm font-semibold">Approved by the University</label>
                    <span
                        className="px-2 py-1 flex gap-2 items-center"
                    >
                        <input 
                            type="radio" name="approved"
                            onClick={(e) => setIsApproved(true)}
                        /> 
                        <label className="mr-2">Yes</label>
                        <input
                            type="radio" name="approved"
                            onClick={(e) => setIsApproved(false)}
                        /> 
                        <label>No</label>
                    </span>
                </span>
                <InputField 
                    label="Name of the Approved University"
                    value={university}
                    setValue={setUniversity}
                />
                <span className="flex flex-col gap-1 w-full">
                    <label className="text-sm font-semibold">Letter of Approval</label>
                    <span
                        className="px-2 py-1 flex gap-2 items-center justify-between"
                    >
                        <input type="file" className="w-60"/>
                        <button className="bg-blue-600 text-white px-1 py-0.5 rounded">save</button>
                        <button className="bg-gray-200 p-1 rounded">view</button>
                    </span>
                </span>
            </div>
            
            <div className="w-full flex flex-col gap-2 border-b pb-3">
                <label className="font-semibold">Academic Calendars</label>
                <span
                    className="px-2 py-1 flex gap-2 items-center"
                >
                    <span className="w-28">First Term</span>
                    <input type="file" className="w-60"/>
                    <button className="bg-blue-600 text-white px-1 py-0.5 rounded">save</button>
                    <button className="bg-gray-200 p-1 rounded">view</button>
                </span>
                <span
                    className="px-2 py-1 flex gap-2 items-center"
                >
                    <span className="w-28">Second Term</span>
                    <input type="file" className="w-60"/>
                    <button className="bg-blue-600 text-white px-1 py-0.5 rounded">save</button>
                    <button className="bg-gray-200 p-1 rounded">view</button>
                </span>
            </div>

            {/* Tables */}

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

export default AffiliationForm;