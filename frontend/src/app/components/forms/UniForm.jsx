'use client';
import { useState } from "react";
import InputField from "../common/InputField";
import { BASE_API_URL } from "@/configs/api";

const UniForm = () => {
    const [name, setName] = useState('');

    const [address, setAddress] = useState('');

    const [taluka, setTaluka] = useState('');
    const [district, setDistrict] = useState('');
    const [pin, setPinCode] = useState('');

    const [phone, setPhone] = useState('');
    const [fax, setFax] = useState('');

    const [unicode, setUnicode] = useState('');
    const [aicte, setAicte] = useState('');
    const [dte, setDte] = useState('');

    async function onSubmitHandler(e) {
        e.preventDefault();
        const body ={
            name,
            address,
            taluka,
            district,
            pin,
            phone,
            fax,
            unicode,
            aicte,
            dte
        }
        let res = await fetch(BASE_API_URL+"/configurations/university",{
            method:'Post',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(body)
        })
        res =await res.json();
        console.log(res);
    }

    return (
        <form className="flex flex-col gap-5 w-full">
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Name"
                    value={name}
                    setValue={setName}
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
                    value={pin}
                    setValue={setPinCode}
                    type="number"
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
                        label="FAX number (with STD code)"
                        value={fax}
                        setValue={setFax}
                        type="number"
                    />
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField 
                        label="University Code/ID"
                        value={unicode}
                        setValue={setUnicode}
                        type="number"
                    />
                <InputField 
                        label="AICTE Code/ID"
                        value={aicte}
                        setValue={setAicte}
                        type="number"
                    />
                <InputField 
                        label="DTE Code"
                        value={dte}
                        setValue={setDte}
                        type="number"
                    />    
            </div>
                {/*<span className="w-full"></span>*/}
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

export default UniForm;