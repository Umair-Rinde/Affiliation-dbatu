'use client';
import { useEffect, useState } from "react";
import InputField from "@/app/components/common/InputField";
import SelectField from "../common/SelectField";

const BASE_API_URL = 'http://192.168.207.77:5000/api/v1';

const TstaffForm = () => {

    const [staffs, setStaffs] = useState([]);

    const [first, setFirst] = useState('');
    const [middle, setMiddle] = useState('');
    const [last, setLast] = useState('');

    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');
    const [specialization, setSpecialization] = useState('');

    const [qualification, setQualification] = useState('');
    const [doq, setDoq] = useState('');

    const [dob, setDob] = useState('');
    const [category, setCategory] = useState(null);

    const [typeOfAppoint, setTypeOfAppoint] = useState('');
    const [approvalNo, setApprovalno] = useState('');
    const [doa, setDoa] = useState('');

    const [cas, setCas] = useState(null);

    const [isApproved, setIsApproved] = useState(null);

    const [otherUni, setOtherUni] = useState(null);
    const [isApprovedFrom, setApprovedFrom] = useState('');

    const [experience, setExperience] = useState('');

    const [uid, setUid] = useState('');
    
    useEffect(() => {
        let universityId = localStorage.getItem('uid');
        if(universityId){
            setUid(universityId);
        }else{
            setUid("NA");
        }
    })

    function reset(){
        setFirst('');
        setMiddle('');
        setLast('');
        setDepartment('');
        setDesignation('');
        setSpecialization('');
        setQualification('');
        setDoq('');
        setDob('');
        setCategory('');
        setTypeOfAppoint('');
        setIsApproved(null);
        setApprovalno('');
        setDoa('');
        setCas('');
        setOtherUni(null);
        setApprovedFrom(null);
        setExperience('');
    }

    function saveStaffData(){
        let staffData = {
            firstName: first,
            middleName: middle,
            lastName: last,
            department,
            designation,
            specialization,
            qualification,
            dateOfQualification: doq,
            dateOfBirth: dob,
            category,
            typeOfAppointment : typeOfAppoint,
            approvedByInstitute: isApproved,
            approvalNo,
            ApprovedbyCAS: cas,
            dateOfApproval: doa,
            fromOtherUniversity: otherUni,
            dateofApprovalOfPrevious: isApprovedFrom,
            experience
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
        if(!(department && first && last && designation && department && specialization && qualification && doq && dob && category && typeOfAppoint && cas!=null && otherUni!=null && experience!=null)){
            let str = "";
            if(!(first && middle && last))
                str = "Please enter complete name";
            else if(!department) str = "Please enter department";
            else if(!designation) str = "Please enter designatiion";
            else if(!specialization) str = "Please enter specialization";
            else if(!qualification) str = "Please select highest qualification";
            else if(!doq) str = "Please enter date of acquiring higher qualification";
            else if(!dob) str = "Please enter date of birth";
            else if(!category) str = "Please select cast category";
            else if(!typeOfAppoint) str = "Please select type of appointment";
            else if(otherUni === null) str = "Please select if approval transferred from other university";
            else if(cas===null) str = "Please select if current designaition is under CAS"
            else if(!experience) str="Please enter experience";
            alert(str);
            return false;
        }
        if(typeOfAppoint.includes('University Approved') && !(approvalNo || doa)){
            alert("Please fill complete approval details!");
            return false;
        }
        if(otherUni && !isApprovedFrom){
            alert("Please fill the date of approval from other university!");
            return false;
        }
        return true;
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        if(staffs.length === 0){
            alert("Empty Staffs Data!");
        }

        console.log(staffs);

        const body = {
            staffs,
            uid,
        };
        try {
                // api call
            let res = await fetch(BASE_API_URL+"/configurations/ tstaff", {
                method: 'POST',
                headers: {'Content-Type': 'json/application'},
                body: JSON.stringify(body),
            });

            res = await res.json();
            console.log(res);
        } catch (error) {
            console.log("Can't connect to server!");
            console.warn(error);
        }
        
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
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Specialization</th>
                        <th></th>
                    </tr>
                    {staffs.map((staff,index) => (
                        <tr>
                            <td>{staff.firstName}</td>
                            <td>{staff.lastName}</td>
                            <td>{staff.department}</td>
                            <td>{staff.designation}</td>
                            <td>{staff.specialization}</td>
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
                    label="Designation"
                    value={designation}
                    setValue={setDesignation}
                />
                <InputField
                    label="Department"
                    value={department}
                    setValue={setDepartment}    
                />
                <InputField
                    label="Subject Specialization"
                    value={specialization}
                    setValue={setSpecialization}
                />
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
            {/* <InputField 
                    label=" Highest Qualification"
                    value={qualification}
                    setValue={setQualification}
            /> */}
            <SelectField
                label="Highest Qualification"
                selectLabel="select qualification"
                options={['Ph.D', 'M.Tech.', 'M.Arch.', 'M.Pharm.', 'M.A.', 'M.Sc.', 'B.Lib', 'M.Lib.', 'B.Arch', 'Other']}
                setOption={setQualification}
                currentOption={qualification}
             />
            <InputField 
                    label="Date of acquiring Highest Qualification"
                    value={doq}
                    setValue={setDoq}
                    type="date"
                />
                <dummy className="w-full"></dummy>
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField 
                        label="Date of Birth"
                        value={dob}
                        setValue={setDob}
                        type="date"
                    />
                <SelectField
                    label="Category"
                    selectLabel="Select Category"
                    options={['General', 'OBC', 'SC', 'ST', 'Other']}
                    setOption={setCategory}
                    currentOption={category}
                />
                <dummy className="w-full"></dummy>
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <SelectField
                    label="Type of Appointment"
                    selectLabel="Select Type of Appointment"
                    options={['University Approved (Regular)', 'University Approved (Ad-hoc)', 'Local Appointment (Full Time)', 'Local Appointment (Part Time)', 'Local Appointment (Visiting)']}
                    setOption={setTypeOfAppoint}
                    currentOption={typeOfAppoint}
                />
                {typeOfAppoint.includes("University Approved") ?
                    (<InputField
                        label="DBATU Approval Letter Number"
                        value={approvalNo}
                        setValue={setApprovalno}
                    />) : <dummy className="w-full"></dummy>
                }
                {typeOfAppoint.includes("University Approved") ?
                    (<InputField 
                        label="Date of Approval by DBATU"
                        value={doa}
                        setValue={setDoa}
                        type="date"
                    />) : <dummy className="w-full"></dummy>
                }
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Whether the current designation is under CAS?</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center"
                        >
                            <input 
                                type="radio" name="approved"
                                onClick={(e) => setCas(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="approved"
                                onClick={(e) => setCas(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                <dummy className="w-full"></dummy>
                <dummy className="w-full"></dummy>
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                    <label className="text-sm font-semibold">Was the Approval transferred from other University</label>
                    <span
                        className="px-2 py-1 flex gap-2 items-center"
                    >
                        <input 
                            type="radio" name="otherUni"
                            onClick={(e) => setOtherUni(true)}
                        /> 
                        <label className="mr-2">Yes</label>
                        <input
                            type="radio" name="otherUni"
                            onClick={(e) => setOtherUni(false)}
                        /> 
                        <label>No</label>
                    </span>
                </span>
                {   otherUni ?
                    (<InputField
                        label="Date of Approval from Earlier University"
                        value={isApprovedFrom}
                        setValue={setApprovedFrom}
                        type="date"
                    />) : 
                    (<dummy className="w-full"></dummy>)
                }
                <dummy className="w-full"></dummy>
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Total Experience"
                    value={experience}
                    setValue={setExperience}
                />
                <dummy className="w-full"></dummy>
                <dummy className="w-full"></dummy>
            </div>
            <div>
                <span className="flex items-left"><AddAnotherFieldBtn onClick={addTeachingStaffDetails}/></span>
            </div>

            <div className="flex items-center justify-center gap-3 my-5 font-semibold">
                <button className="px-4 py-1 bg-blue-600 hover:bg-blue-800 text-white rounded-lg"
                    onClick={onSubmitHandler}
                >Submit</button>
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
                    <td>department</td>
                    <td>{staff.department}</td>
                </tr>
                <tr>
                    <td>Designation</td>
                    <td>{staff.designation}</td>
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