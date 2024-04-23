'use client';
import { useState, useTransition } from "react";
import InputField from "@/app/components/common/InputField";
import { IoAddCircleOutline } from "react-icons/io5";

const FacilitiesFormOne = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');

    const [designation, setDesignation] = useState('');
    const [experience, setExperience] = useState('');
    const [highestDegree, setHighestDegree] = useState('');

    const [specification, setSpecification] = useState('');
    const [totalExperience, setTotalExperience] = useState('');
    const [dob, setDob] = useState('');

    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [isApproved, setIsApproved] = useState(null);
    const [university, setUniversity] = useState('');

    // Library Details
    const [libraryBooks, setLibraryBooks] = useState([]);
    const [libNameOfCourse, setLibNameOfCourse] = useState('');
    const [noOfTitles, setNoOfTitles] = useState('');
    const [noOfVolumes, setNoOfVolumes] = useState('');
    const [noOfJournals, setNoOfJournals] = useState('');
    const [international, setInternational] = useState('');
    const [national, setNational] = useState('');

    function onSubmitHandler(e) {
        e.preventDefault();
        // Logic to handle submit
    }

    function addLibraryDetails(e) {
        // Logic to add these to libraryDetails rows
        setLibNameOfCourse('');
        setNoOfTitles('');
        setNoOfVolumes('');
        setNoOfJournals('');
        setInternational('');
        setNational('');
        e.preventDefault();
    }

    return (
        <form className="flex flex-col gap-5 w-full">
            <section className="flex flex-col gap-5 w-full border-b py-6">
                <h4 className="text-lg font-semibold">Details of Library Books</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Name of Course"
                        value={libNameOfCourse}
                        setValue={setLibNameOfCourse}
                    />
                    <InputField 
                        label="Total no. of Titles"
                        value={noOfTitles}
                        setValue={setNoOfTitles}
                        type="number"
                    />
                    <InputField 
                        label="Total no. of Volumes"
                        value={noOfVolumes}
                        setValue={setNoOfVolumes}
                    />
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="No. of Journals"
                        value={noOfJournals}
                        setValue={setNoOfJournals}
                    />
                    <dummy className="w-full"></dummy>
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="International"
                        value={international}
                        setValue={setInternational}
                    />
                    <InputField 
                        label="National"
                        value={national}
                        setValue={setNational}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <AddAnotherFieldBtn onClick={addLibraryDetails}/>
            </section>
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

const AddAnotherFieldBtn = (onClick) => (
    <button className="flex gap-2 items-center self-end text-sm px-4 py-1"
        onClick={onClick}
    >
        <IoAddCircleOutline className="text-lg"/>
        <span>Add another field</span>
    </button>
)

export default FacilitiesFormOne;