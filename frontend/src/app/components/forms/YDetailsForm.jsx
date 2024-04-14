"use client";
import { useState } from "react";
import InputField from "../common/InputField";

const HoiForm = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const [address, setAddress] = useState("");
  // const [experience, setExperience] = useState('');
  // const [highestDegree, setHighestDegree] = useState('');

  const [taluka, setTaluka] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");

  const [phonenumber, setPhoneNumber] = useState("");
  const [faxnumber, setFaxNumber] = useState("");

  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const [registrationnumber, setRegistrationNumber] = useState("");
  const [year, setYear] = useState("");

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
        <InputField label="Last Name" value={lastName} setValue={setLastName} />
      </div>
      <div className="w-full flex items-center gap-4 justify-between">
        <InputField label="Address" value={address} setValue={setAddress} />
      </div>
      <div className="w-full flex items-center gap-4 justify-between">
        <InputField label="Taluka" value={taluka} setValue={setTaluka} />
        <InputField label="District" value={district} setValue={setDistrict} />
        <InputField label="Pincode" value={pincode} setValue={setPincode} />
      </div>
      <div className="w-full flex items-center gap-4 justify-between">
        <InputField
          label="Phone Number"
          value={phonenumber}
          setValue={setPhoneNumber}
        />
        <InputField
          label="Fax Number"
          value={faxnumber}
          setValue={setFaxNumber}
          type="number"
        />
      </div>
      <div className="w-full flex items-center gap-4 justify-between">
        <InputField
          label="Email"
          value={email}
          setValue={setEmail}
          type="email"
        />
        <InputField label="Website" value={website} setValue={setWebsite} />
      </div>
      <div className="w-full flex items-center gap-4 justify-between">
        <InputField
          label="Ragistration Number"
          value={registrationnumber}
          setValue={setRegistrationNumber}
          type="number"
        />
        <InputField
          label="Year"
          value={year}
          setValue={setYear}
          type="number"
        />
        <span className="w-full"></span>
      </div>
      {/* <div className="w-full flex gap-4 justify-between">
        <span className="flex flex-col gap-2 w-full">
          <label className="text-sm font-semibold">
            Approved by the University
          </label>
          <span className="px-2 py-1 flex gap-2 items-center">
            <input
              type="radio"
              name="approved"
              onClick={(e) => setIsApproved(true)}
            />
            <label className="mr-2">Yes</label>
            { <input
              type="radio"
              name="approved"
              onClick={(e) => setIsApproved(false)}
            /> }
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
          <span className="px-2 py-1 flex gap-2 items-center justify-between">
            <input type="file" className="w-60" />
            <button className="bg-blue-600 text-white px-1 py-0.5 rounded">
              save
            </button>
            <button className="bg-gray-200 p-1 rounded">view</button>
          </span>
        </span>
      </div> */}
      <div className="flex items-center justify-center gap-3 my-5 font-semibold">
        <button className="px-4 py-1 bg-gray-200 hover:bg-gray-400 rounded-lg">
          Previous
        </button>
        <button
          className="px-4 py-1 bg-blue-600 hover:bg-blue-800 text-white rounded-lg"
          onClick={onSubmitHandler}
        >
          Submit
        </button>
        <button className="px-4 py-1 bg-gray-200 hover:bg-gray-400 rounded-lg">
          Next
        </button>
      </div>
    </form>
  );
};

export default HoiForm;
