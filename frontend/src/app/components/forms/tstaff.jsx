'use client';
import { useState, useTransition } from "react";
import InputField from "@/app/components/common/InputField";
import { IoAddCircleOutline } from "react-icons/io5";

const TstaffForm = () => {

    const [staffs, setStaffs] = useState([]);

    const [branch, setBranch] = useState('');
    const [shift, setShift] = useState('');

    const [first, setFirst] = useState('');
    const [middle, setMiddle] = useState('');
    const [last, setLast] = useState('');

    const [post, setPost] = useState('');
    const [isAppointed, setIsAppointed] = useState(null);
    const [doj, setDoj] = useState('');

    const [typef, setTypef] = useState(null);

    const [isApproved, setIsApproved] = useState(null);
    const [approvalNo, setApprovalno] = useState('');
    const [doa, setDoa] = useState('');

    const [recognitionNo, setRecognitionNo] = useState('');
    const [dor, setDor] = useState('');

    function reset(){
        setBranch('');
        setShift('');
        setFirst('');
        setMiddle('');
        setLast('');
        setPost('');
        setIsAppointed(null);
        setDoj('');
        setTypef('');
        setIsApproved(null);
        setApprovalno('');
        setDoa('');
        setRecognitionNo('');
        setDor('');
    }

    function saveStaffData(){
        let staffData = {
            firstName: first,
            middleName: middle,
            lastName: last,
            branch,
            shiftNumber: shift,
            post,
            appointedFromReserved: isAppointed,
            dateOfAppointment: doj,
            typeOfFaculty: typef,
            approvedByInstitute: isApproved,
            approvalNo,
            dateOnApproval: doa,
            recognitionNo,
            dateOnRecognition: dor,
        };

        setStaffs((prev) => [...prev, staffData]);
    }

    function addTeachingStaffDetails(e) {
        // Logic to add these to teaching staff rows
        e.preventDefault();
        if(isValidData()){
            saveStaffData();
            reset();
        }
    }

    function isValidData(){
        if(!(branch && shift && first && middle && last && post && isAppointed!=null && doj && typef && isApproved!=null && approvalNo && doa && recognitionNo && dor)){
            alert("Please fill complete staff data");

            return false;
        }
        return true;
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        // Logic to handle submit
    }

    const [popup, setPopup] = useState(false);
    const [idx, setIdx] = useState(0);

    return (
        <form className="flex flex-col gap-5 w-full relative">
            {popup && <StaffDataPopup staff={staffs[idx]} setPopup={setPopup}/>}
            {staffs.length > 0 && (
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Branch</th>
                        <th>Post</th>
                        <th>Shift</th>
                        <th></th>
                    </tr>
                    {staffs.map((staff,index) => (
                        <tr>
                            <td>{staff.firstName}</td>
                            <td>{staff.lastName}</td>
                            <td>{staff.branch}</td>
                            <td>{staff.post}</td>
                            <td>{staff.shiftNumber==1? "first shift":"second shift"}</td>
                            <td className="text-center">
                                <button className="text-blue-400 p-1 text-sm rounded-lg font-bold"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIdx(index);
                                        setPopup(true);
                                    }}
                                >View</button>
                            </td>
                        </tr>
                    ))}
                </table>
            )}
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Branch"
                    value={branch}
                    setValue={setBranch}
                />
                <span className="flex flex-col gap-2 w-full">
                    <label className="text-sm font-semibold">Shift Number</label>
                    <span className="px-2 py-1 flex gap-2 items-center">
                        <input 
                            type="radio" name="shift"
                            value={1}
                            onClick={(e) => setShift(e.target.value)}
                        /> 
                        <label className="mr-2">First Shift</label>
                        <input
                            type="radio" name="shift"
                            value={2}
                            onClick={(e) => setShift(e.target.value)}
                        /> 
                        <label>Second Shift</label>
                    </span>
                </span>
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
                            type="radio" name="isAppointed"
                            onClick={(e) => setIsAppointed(true)}
                        /> 
                        <label className="mr-2">Yes</label>
                        <input
                            type="radio" name="isAppointed"
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
                            onClick={(e) => setTypef("Full-Time")}
                        /> 
                        <label className="mr-2">Full-Time</label>
                        <input
                            type="radio" name="typef"
                            onClick={(e) => setTypef("Part-Time")}
                        /> 
                        <label>Part-Time</label>
                        <input
                            type="radio" name="typef"
                            onClick={(e) => setTypef("Visiting")}
                        /> 
                        <label>Visiting</label>
                        <input
                            type="radio" name="typef"
                            onClick={(e) => setTypef("C.H.B.")}
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
                    value={approvalNo}
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
                    value={recognitionNo}
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

            <div>
                <span className="flex items-left"><AddAnotherFieldBtn onClick={addTeachingStaffDetails}/></span>
            </div>

            <div className="flex items-center justify-center gap-3 my-5 font-semibold">
                <button className="px-4 py-1 bg-blue-600 hover:bg-blue-800 text-white rounded-lg"
                    onClick={onSubmitHandler}
                >Submit</button>
                <button className="px-4 py-1 bg-blue-200 hover:bg-gray-400 rounded-lg">Save</button>
            </div>
        </form>
    )
}

const AddAnotherFieldBtn = ({onClick}) => (
    <button className="px-4 py-1 bg-blue-200 hover:bg-gray-400 rounded-lg"
        onClick={onClick}
    >
        <span>Add Another Field</span>
    </button>
)

const StaffDataPopup = ({staff, setPopup}) => {
    function closePopup(e){
        e.preventDefault();
        setPopup(false);
    }
    return (
        <div className="fixed w-screen h-screen flex items-center justify-center top-0 left-0 z-10 bg-[#0000005d]">
            <container className="flex flex-col gap-2 items-end bg-white p-2 rounded-xl">
            <button onClick={closePopup}
                className="text-sm bg-red-500 hover:bg-red-400 px-2 py-1 font-semibold rounded text-white "
            >close x</button>
            <table className="bg-white">
                <tr>
                    <td>First Name</td>
                    <td>{staff.firstName}</td>
                </tr>
                <tr>
                    <td>Middle Name</td>
                    <td>{staff.middleName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{staff.lastName}</td>
                </tr>
                <tr>
                    <td>Branch</td>
                    <td>{staff.branch}</td>
                </tr>
                <tr>
                    <td>Post</td>
                    <td>{staff.post}</td>
                </tr>
                <tr>
                    <td>Shift</td>
                    <td>{staff.shiftNumber==1 ? "First Shift": "Second Shift" }</td>
                </tr>
                <tr>
                    <td>Reserved Category</td>
                    <td>{staff.appointedFromReserved?"yes": "no"}</td>
                </tr>
                <tr>
                    <td>Date of Appointment</td>
                    <td>{staff.dateOfAppointment}</td>
                </tr>
                <tr>
                    <td>Type of Faculty</td>
                    <td>{staff.typeOfFaculty}</td>
                </tr>
                <tr>
                    <td>Approved by Institute</td>
                    <td>{staff.approvedByInstitute?"yes":"no"}</td>
                </tr>   
                <tr>
                    <td>University Approval Letter Number</td>
                    <td>{staff.approvalNo}</td>
                </tr>
                <tr>
                    <td>Date on Approval Letter</td>
                    <td>{staff.dateOnApproval}</td>
                </tr>
                <tr>
                    <td>University Recognition Letter Number</td>
                    <td>{staff.recognitionNo}</td>
                </tr>
                <tr>
                    <td>Date on Recognition Letter</td>
                    <td>{staff.dateOnRecognition}</td>
                </tr>
            </table>
            </container>
        </div>
    )
}

export default TstaffForm;