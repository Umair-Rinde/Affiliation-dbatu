'use client';
import { useState, useTransition } from "react";
import InputField from "@/app/components/common/InputField";
import { IoAddCircleOutline } from "react-icons/io5";

const TstaffForm = () => {
    const [branch, setBranch] = useState('');
    const [shift, setShift] = useState('');

    const [first, setFirst] = useState('');
    const [middle, setMiddle] = useState('');
    const [last, setLast] = useState('');

    const [post, setPost] = useState('');
    const [isappointed, setIsAppointed] = useState(null);
    const [doj, setDoj] = useState('');

    const [typef, setTypef] = useState(null);

    const [isApproved, setIsApproved] = useState(null);
    const [approvalno, setApprovalno] = useState('');
    const [doa, setDoa] = useState('');

    const [recognitionno, setRecognitionNo] = useState('');
    const [dor, setDor] = useState('');

    function addTeachingStaffDetails(e) {
        // Logic to add these to libraryDetails rows
        setBranch('');
        setShift('');
        setFirst('');
        setMiddle('');
        setLast('');
        setPost('');
        setIsAppointed(null);
        setDoj('');
        setTypef(null);
        setIsApproved(null);
        setApprovalno('');
        setDoa('');
        setRecognitionNo('');
        setDor('');
        e.preventDefault();
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        // Logic to handle submit
    }

    return (
        <form className="flex flex-col gap-5 w-full">
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Branch"
                        value={branch}
                        setValue={setBranch}
                    />
                    <InputField 
                        label="Shift Number"
                        value={shift}
                        setValue={setShift}
                    />
                    <dummy className="w-full"></dummy>
                </div>

                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="First Name"
                        value={first}
                        setValue={setFirst}
                    />
                    <InputField
                        label="Middle Name"
                        value={middle}
                        setValue={setMiddle}
                    />
                    <InputField
                        label="Last Name"
                        value={last}
                        setValue={setLast}
                    />
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Post"
                        value={post}
                        setValue={setPost}
                    />
                    <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Appointed from reserved category</label>
                        <span className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="isappointed"
                                onClick={(e) => setIsAppointed(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="isappointed"
                                onClick={(e) => setIsAppointed(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <InputField 
                        label="Date of Appointment or Joining"
                        value={doj}
                        setValue={setDoj}
                        type="date"
                    />
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Choose Type of Faculty</label>
                        <span className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="typef"
                                onClick={(e) => setTypef(true)}
                            /> 
                            <label className="mr-2">Full-Time</label>
                            <input
                                type="radio" name="typef"
                                onClick={(e) => setTypef(false)}
                            /> 
                            <label>Part-Time</label>
                            <input
                                type="radio" name="typef"
                                onClick={(e) => setTypef(false)}
                            /> 
                            <label>Visiting</label>
                            <input
                                type="radio" name="typef"
                                onClick={(e) => setTypef(false)}
                            /> 
                            <label>C.H.B</label>
                        </span>
                    </span>
                    <dummy className="w-full"></dummy>
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Approved by the Institute</label>
                        <span className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="isapproved"
                                onClick={(e) => setIsApproved(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="isapproved"
                                onClick={(e) => setIsApproved(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <InputField
                        label="University Approval Letter number"
                        value={approvalno}
                        setValue={setApprovalno}
                    />
                    <InputField 
                        label="Date on Approval Letter"
                        value={doa}
                        setValue={setDoa}
                        type="date"
                    />
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="University Recognition Letter number"
                        value={recognitionno}
                        setValue={setRecognitionNo}
                    />
                    <InputField 
                        label="Date on Recognition Letter"
                        value={dor}
                        setValue={setDor}
                        type="date"
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <AddAnotherFieldBtn onClick={addTeachingStaffDetails}/>           
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

const AddAnotherFieldBtn = ({onClick}) => (
    <button className="flex gap-2 items-center self-end text-sm px-4 py-1"
        onClick={onClick}
    >
        <IoAddCircleOutline className="text-lg"/>
        <span>Add another field</span>
    </button>
)

export default TstaffForm;