'use client';
import { useState, useTransition } from "react";
import InputField from "@/app/components/common/InputField";
import { IoAddCircleOutline } from "react-icons/io5";

const FacilitiesFormOne = () => {

    // Library Books
    const [libraryBooks, setLibraryBooks] = useState([]);
    const [libNameOfCourse, setLibNameOfCourse] = useState('');
    const [numOfTitles, setNumOfTitles] = useState('');
    const [numOfVolumes, setNumOfVolumes] = useState('');
    const [numOfJournals, setNumOfJournals] = useState('');
    const [international, setInternational] = useState('');
    const [national, setNational] = useState('');

    // Computer Facilities
    const [compNameOfCourse, setCompNameOfCourse] = useState('');
    const [numOfPcs, setNumOfPcs] = useState('');
    const [peripheral, setPeripheral] = useState('');

    // Internet Facilities
    const [nameOfSource, setNameOfSource] = useState('');
    const [internetSpeed, setInternetSpeed] = useState('');
    const [internetType, setInternetType] = useState('');
    const [numOfTerminals, setNumOfTerminals] = useState('');

    // Wifi Facilities
    const [nameOfRouter, setNameOfRouter ] = useState('');
    const [wifiSpeed, setWifiSpeed] = useState('');
    const [wifiType, setWifiType] = useState('');
    const [supplier, setSupplier] = useState('');

    // Instructional Area
    const [existingPrograms, setExistingPrograms] = useState('');

    // Undergraduate
    const [numOfDivisions, setNumOfDivisions] = useState('');
    // classrooms
    const [classNosRequired, setClassNosRequired] = useState('');
    const [classNosAvail, setClassNosAvail] = useState('');
    const [classAreaRequired, setClassAreaRequired] = useState('');
    const [classAreaAvail, setClassAreaAvail] = useState('');
    // tutorial rooms
    const [tutorialNosRequired, setTutorialNosRequired] = useState('');
    const [tutorialNosAvail, setTutorialNosAvail] = useState('');
    const [tutorialAreaRequired, setTutorialAreaRequired] = useState('');
    const [tutorialAreaAvail, setTutorialAreaAvail] = useState('');
    // laboratories
    const [labNosRequired, setLabNosRequired] = useState('');
    const [labNosAvail, setLabNosAvail] = useState('');
    const [labAreaRequired, setLabAreaRequired] = useState('');
    const [labAreaAvail, setLabAreaAvail] = useState('');
    // drawing halls
    const [drawNosRequired, setDrawNosRequired] = useState('');
    const [drawNosAvail, setDrawNosAvail] = useState('');
    const [drawAreaRequired, setDrawAreaRequired] = useState('');
    const [drawAreaAvail, setDrawAreaAvail] = useState('');
    // workshops
    const [workNosRequired, setWorkNosRequired] = useState('');
    const [workNosAvail, setWorkNosAvail] = useState('');
    const [workAreaRequired, setWorkAreaRequired] = useState('');
    const [workAreaAvail, setWorkAreaAvail] = useState('');
    // seminar halls
    const [seminarNosRequired, setSeminarNosRequired] = useState('');
    const [seminarNosAvail, setSeminarNosAvail] = useState('');
    const [seminarAreaRequired, setSeminarAreaRequired] = useState('');
    const [seminarAreaAvail, setSeminarAreaAvail] = useState('');
    // Computer center
    const [compNosRequired, setCompNosRequired] = useState('');
    const [compNosAvail, setCompNosAvail] = useState('');
    const [compAreaRequired, setCompAreaRequired] = useState('');
    const [compAreaAvail, setCompAreaAvail] = useState('');
    // library & reading room
    const [libraryNosRequired, setLibraryNosRequired] = useState('');
    const [libraryNosAvail, setLibraryNosAvail] = useState('');
    const [libraryAreaRequired, setLibraryAreaRequired] = useState('');
    const [libraryAreaAvail, setLibraryAreaAvail] = useState('');
    // UG total
    const [totalNosRequired, setTotalNosRequired] = useState('');
    const [totalNosAvail, setTotalNosAvail] = useState('');
    const [totalAreaRequired, setTotalAreaRequired] = useState('');
    const [totalAreaAvail, setTotalAreaAvail] = useState('');

    // Postgraduate
    const [numOfDivisionsPg, setNumOfDivisionsPg] = useState('');
    // classrooms
    const [classNosRequiredPg, setClassNosRequiredPg] = useState('');
    const [classNosAvailPg, setClassNosAvailPg] = useState('');
    const [classAreaRequiredPg, setClassAreaRequiredPg] = useState('');
    const [classAreaAvailPg, setClassAreaAvailPg] = useState('');
    // tutorial rooms
    const [tutorialNosRequiredPg, setTutorialNosRequiredPg] = useState('');
    const [tutorialNosAvailPg, setTutorialNosAvailPg] = useState('');
    const [tutorialAreaRequiredPg, setTutorialAreaRequiredPg] = useState('');
    const [tutorialAreaAvailPg, setTutorialAreaAvailPg] = useState('');
    // laboratories
    const [labNosRequiredPg, setLabNosRequiredPg] = useState('');
    const [labNosAvailPg, setLabNosAvailPg] = useState('');
    const [labAreaRequiredPg, setLabAreaRequiredPg] = useState('');
    const [labAreaAvailPg, setLabAreaAvailPg] = useState('');
    // drawing halls
    const [drawNosRequiredPg, setDrawNosRequiredPg] = useState('');
    const [drawNosAvailPg, setDrawNosAvailPg] = useState('');
    const [drawAreaRequiredPg, setDrawAreaRequiredPg] = useState('');
    const [drawAreaAvailPg, setDrawAreaAvailPg] = useState('');
    // workshops
    const [workNosRequiredPg, setWorkNosRequiredPg] = useState('');
    const [workNosAvailPg, setWorkNosAvailPg] = useState('');
    const [workAreaRequiredPg, setWorkAreaRequiredPg] = useState('');
    const [workAreaAvailPg, setWorkAreaAvailPg] = useState('');
    // seminar halls
    const [seminarNosRequiredPg, setSeminarNosRequiredPg] = useState('');
    const [seminarNosAvailPg, setSeminarNosAvailPg] = useState('');
    const [seminarAreaRequiredPg, setSeminarAreaRequiredPg] = useState('');
    const [seminarAreaAvailPg, setSeminarAreaAvailPg] = useState('');
    // Computer center
    const [compNosRequiredPg, setCompNosRequiredPg] = useState('');
    const [compNosAvailPg, setCompNosAvailPg] = useState('');
    const [compAreaRequiredPg, setCompAreaRequiredPg] = useState('');
    const [compAreaAvailPg, setCompAreaAvailPg] = useState('');
    // library & reading room
    const [libraryNosRequiredPg, setLibraryNosRequiredPg] = useState('');
    const [libraryNosAvailPg, setLibraryNosAvailPg] = useState('');
    const [libraryAreaRequiredPg, setLibraryAreaRequiredPg] = useState('');
    const [libraryAreaAvailPg, setLibraryAreaAvailPg] = useState('');
    // UG total
    const [totalNosRequiredPg, setTotalNosRequiredPg] = useState('');
    const [totalNosAvailPg, setTotalNosAvailPg] = useState('');
    const [totalAreaRequiredPg, setTotalAreaRequiredPg] = useState('');
    const [totalAreaAvailPg, setTotalAreaAvailPg] = useState('');


    function addLibraryDetails(e) {
        // Logic to add these to libraryDetails rows
        setLibNameOfCourse('');
        setNumOfTitles('');
        setNumOfVolumes('');
        setNumOfJournals('');
        setInternational('');
        setNational('');
        e.preventDefault();
    }

    function addLibraryDetails(e) {
        e.preventDefault();
        // Logic to add these to libraryDetails rows
        setLibNameOfCourse('');
        setNumOfTitles('');
        setNumOfVolumes('');
        setNumOfJournals('');
        setInternational('');
        setNational('');
    }

    function addComputerDetails(e){
        e.preventDefault();
        // Logic to add computer details rows
        setCompNameOfCourse('');
        setNumOfPcs('');
        setPeripheral('');
    }

    function addInternetDetails(e){
        e.preventDefault();
        // Logic to add internet details
        setNameOfSource('');
        setInternetSpeed('');
        setInternetType('');
        setNumOfTerminals('');
    }

    function addWifiDetails(e){
        e.preventDefault();
        setNameOfRouter('');
        setWifiSpeed('');
        setWifiType('');
        setSupplier('');
    }

    const UGForm = () => <div>hii</div>

    function onSubmitHandler(e) {
        e.preventDefault();
        // Logic to handle submit
    }

    return (
        <form className="flex flex-col w-full">
            <section className="flex flex-col gap-5 w-full border-b py-5">
                <h4 className="text-lg font-semibold">Details of Library Books</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Name of Course"
                        value={libNameOfCourse}
                        setValue={setLibNameOfCourse}
                    />
                    <InputField 
                        label="Total no. of Titles"
                        value={numOfTitles}
                        setValue={setNumOfTitles}
                        type="number"
                    />
                    <InputField 
                        label="Total no. of Volumes"
                        value={numOfVolumes}
                        setValue={setNumOfVolumes}
                    />
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="No. of Journals"
                        value={numOfJournals}
                        setValue={setNumOfJournals}
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
            <section className="flex flex-col gap-5 w-full border-b py-5">
                <h4 className="text-lg font-semibold">Details of Computer Facilities</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Name of source available"
                        value={compNameOfCourse}
                        setValue={setCompNameOfCourse}
                    />
                    <InputField 
                        label="No. of PCs with latest configuration"
                        value={numOfPcs}
                        setValue={setNumOfPcs}
                        type="number"
                    />
                    <InputField 
                        label="Peripheral"
                        value={peripheral}
                        setValue={setPeripheral}
                    />
                </div>
                <AddAnotherFieldBtn onClick={addComputerDetails} />
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-5">
                <h4 className="text-lg font-semibold">Details of Internet Facilities</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Name of source available"
                        value={nameOfSource}
                        setValue={setNameOfSource}
                    />
                    <InputField 
                        label="Speed (mb/s)"
                        value={internetSpeed}
                        setValue={setInternetSpeed}
                        type="number"
                    />
                    <InputField 
                        label="Type"
                        value={internetType}
                        setValue={setInternetType}
                    />
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="No. of Terminals"
                        value={numOfTerminals}
                        setValue={setNumOfTerminals}
                        type="number"
                    />
                    <dummy className="w-full"></dummy>
                    <dummy className="w-full"></dummy>
                </div>
                <AddAnotherFieldBtn onClick={addInternetDetails} />
            </section>
            <section className="flex flex-col gap-5 w-full border-b-2 py-5">
                <h4 className="text-lg font-semibold">Details of Wifi Facilities</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Name of source available"
                        value={nameOfRouter}
                        setValue={nameOfRouter}
                    />
                    <InputField 
                        label="Speed (mb/s)"
                        value={wifiSpeed}
                        setValue={setWifiSpeed}
                        type="number"
                    />
                    <InputField 
                        label="Type"
                        value={wifiType}
                        setValue={setWifiType}
                    />
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Supplier"
                        value={supplier}
                        setValue={setSupplier}
                    />
                    <dummy className="w-full"></dummy>
                    <dummy className="w-full"></dummy>
                </div>
                <AddAnotherFieldBtn onClick={addInternetDetails} />
            </section>
            <section className="flex flex-col gap-5 w-full border-b-2 py-5">
                <h4 className="text-lg font-semibold">Instructional Area (Carpet Area)</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Existing Programs"
                        value={existingPrograms}
                        setValue={setExistingPrograms}
                    />
                    <dummy className="w-full"></dummy>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col w-full py-5 gap-3">
                <h4 className="text-lg font-semibold">Undergraduate (U.G.)</h4>
                <div className="w-full flex items-center gap-4 justify-between border-b pb-5">
                    <InputField
                        label="No. of Divisions"
                        value={numOfDivisions}
                        setValue={setNumOfDivisions}
                    />
                    <dummy className="w-full"></dummy>
                    <dummy className="w-full"></dummy>
                </div>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Class Rooms</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={classNosRequired}
                            setValue={setClassNosRequired}
                        />
                        <InputField
                            label="Nos. Available"
                            value={classNosAvail}
                            setValue={setClassNosAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={classAreaRequired}
                            setValue={setClassAreaRequired}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={classAreaAvail}
                            setValue={setClassAreaAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Tutorial Rooms</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={tutorialNosRequired}
                            setValue={setTutorialNosRequired}
                        />
                        <InputField
                            label="Nos. Available"
                            value={tutorialNosAvail}
                            setValue={setTutorialNosAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={tutorialAreaRequired}
                            setValue={setTutorialAreaRequired}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={tutorialAreaAvail}
                            setValue={setTutorialAreaAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Laboratories</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={labNosRequired}
                            setValue={setLabNosRequired}
                        />
                        <InputField
                            label="Nos. Available"
                            value={labNosAvail}
                            setValue={setLabNosAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={labAreaRequired}
                            setValue={setLabAreaRequired}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={labAreaAvail}
                            setValue={setLabAreaAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Drawing Halls</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={drawNosRequired}
                            setValue={setDrawNosRequired}
                        />
                        <InputField
                            label="Nos. Available"
                            value={drawNosAvail}
                            setValue={setDrawNosAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={drawAreaRequired}
                            setValue={setDrawAreaRequired}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={drawAreaAvail}
                            setValue={setDrawAreaAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Workshop</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={workNosRequired}
                            setValue={setWorkNosRequired}
                        />
                        <InputField
                            label="Nos. Available"
                            value={workNosAvail}
                            setValue={setWorkNosAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={workAreaRequired}
                            setValue={setWorkAreaRequired}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={workAreaAvail}
                            setValue={setWorkAreaAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Seminar Halls</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={seminarNosRequired}
                            setValue={setSeminarNosRequired}
                        />
                        <InputField
                            label="Nos. Available"
                            value={seminarNosAvail}
                            setValue={setSeminarNosAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={seminarAreaRequired}
                            setValue={setSeminarAreaRequired}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={seminarAreaAvail}
                            setValue={setSeminarAreaAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Computer Centers</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={compNosRequired}
                            setValue={setCompNosRequired}
                        />
                        <InputField
                            label="Nos. Available"
                            value={compNosAvail}
                            setValue={setCompNosAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={compAreaRequired}
                            setValue={setCompAreaRequired}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={compAreaAvail}
                            setValue={setCompAreaAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Library & Reading Room</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={libraryNosRequired}
                            setValue={setLibraryNosRequired}
                        />
                        <InputField
                            label="Nos. Available"
                            value={libraryNosAvail}
                            setValue={setLibraryNosAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={libraryAreaRequired}
                            setValue={setLibraryAreaRequired}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={libraryAreaAvail}
                            setValue={setLibraryAreaAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Total</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={totalNosRequired}
                            setValue={setTotalNosRequired}
                        />
                        <InputField
                            label="Nos. Available"
                            value={totalNosAvail}
                            setValue={setTotalNosAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={totalAreaRequired}
                            setValue={setTotalAreaRequired}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={totalAreaAvail}
                            setValue={setTotalAreaAvail}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
            </section>
            <section className="flex flex-col w-full py-5 gap-3">
                <h4 className="text-lg font-semibold">Postgraduate (P.G.)</h4>
                <div className="w-full flex items-center gap-4 justify-between border-b pb-5">
                    <InputField
                        label="No. of Divisions"
                        value={numOfDivisionsPg}
                        setValue={setNumOfDivisionsPg}
                    />
                    <dummy className="w-full"></dummy>
                    <dummy className="w-full"></dummy>
                </div>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Class Rooms</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={classNosRequiredPg}
                            setValue={setClassNosRequiredPg}
                        />
                        <InputField
                            label="Nos. Available"
                            value={classNosAvailPg}
                            setValue={setClassNosAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={classAreaRequiredPg}
                            setValue={setClassAreaRequiredPg}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={classAreaAvailPg}
                            setValue={setClassAreaAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Tutorial Rooms</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={tutorialNosRequiredPg}
                            setValue={setTutorialNosRequiredPg}
                        />
                        <InputField
                            label="Nos. Available"
                            value={tutorialNosAvailPg}
                            setValue={setTutorialNosAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={tutorialAreaRequiredPg}
                            setValue={setTutorialAreaRequiredPg}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={tutorialAreaAvailPg}
                            setValue={setTutorialAreaAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Laboratories</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={labNosRequiredPg}
                            setValue={setLabNosRequiredPg}
                        />
                        <InputField
                            label="Nos. Available"
                            value={labNosAvailPg}
                            setValue={setLabNosAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={labAreaRequiredPg}
                            setValue={setLabAreaRequiredPg}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={labAreaAvailPg}
                            setValue={setLabAreaAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Drawing Halls</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={drawNosRequiredPg}
                            setValue={setDrawNosRequiredPg}
                        />
                        <InputField
                            label="Nos. Available"
                            value={drawNosAvailPg}
                            setValue={setDrawNosAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={drawAreaRequiredPg}
                            setValue={setDrawAreaRequiredPg}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={drawAreaAvailPg}
                            setValue={setDrawAreaAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Workshop</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={workNosRequiredPg}
                            setValue={setWorkNosRequiredPg}
                        />
                        <InputField
                            label="Nos. Available"
                            value={workNosAvailPg}
                            setValue={setWorkNosAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={workAreaRequiredPg}
                            setValue={setWorkAreaRequiredPg}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={workAreaAvailPg}
                            setValue={setWorkAreaAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Seminar Halls</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={seminarNosRequiredPg}
                            setValue={setSeminarNosRequiredPg}
                        />
                        <InputField
                            label="Nos. Available"
                            value={seminarNosAvailPg}
                            setValue={setSeminarNosAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={seminarAreaRequiredPg}
                            setValue={setSeminarAreaRequiredPg}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={seminarAreaAvailPg}
                            setValue={setSeminarAreaAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Computer Centers</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={compNosRequiredPg}
                            setValue={setCompNosRequiredPg}
                        />
                        <InputField
                            label="Nos. Available"
                            value={compNosAvailPg}
                            setValue={setCompNosAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={compAreaRequiredPg}
                            setValue={setCompAreaRequiredPg}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={compAreaAvailPg}
                            setValue={setCompAreaAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full border-b py-5">
                    <h5 className="font-semibold">Library & Reading Room</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={libraryNosRequiredPg}
                            setValue={setLibraryNosRequiredPg}
                        />
                        <InputField
                            label="Nos. Available"
                            value={libraryNosAvailPg}
                            setValue={setLibraryNosAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={libraryAreaRequiredPg}
                            setValue={setLibraryAreaRequiredPg}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={libraryAreaAvailPg}
                            setValue={setLibraryAreaAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
                <section className="flex flex-col gap-5 w-full py-5">
                    <h5 className="font-semibold">Total</h5>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Nos. Required"
                            value={totalNosRequiredPg}
                            setValue={setTotalNosRequiredPg}
                        />
                        <InputField
                            label="Nos. Available"
                            value={totalNosAvailPg}
                            setValue={setTotalNosAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                    <div className="w-full flex items-center gap-4 justify-between">
                        <InputField
                            label="Area(sq.m) Required"
                            value={totalAreaRequiredPg}
                            setValue={setTotalAreaRequiredPg}
                        />
                        <InputField
                            label="Area(sq.m) Available"
                            value={totalAreaAvailPg}
                            setValue={setTotalAreaAvailPg}
                        />
                        <dummy className="w-full"></dummy>
                    </div>
                </section>
            </section>
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

export default FacilitiesFormOne;