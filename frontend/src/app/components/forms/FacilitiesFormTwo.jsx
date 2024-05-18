'use client';
import { useState, useTransition } from "react";
import InputField from "@/app/components/common/InputField";
import { IoAddCircleOutline } from "react-icons/io5";

const FacilitiesFormTwo = () => {

    // Administrative Area
    const [principalOfficeReq, setPrincipalOfficeReq] = useState('');
    const [principalOfficeAvail, setPrincipalOfficeAvail] = useState('');
    const [principalOfficeAreaReq, setPrincipalOfficeAreaReq] = useState('');
    const [principalOfficeAreaAvail, setPrincipalOfficeAreaAvail] = useState('');

    const [boardRoomReq, setBoardRoomReq] = useState('');
    const [boardRoomAvail, setBoardRoomAvail] = useState('');
    const [boardRoomAreaReq, setBoardRoomAreaReq] = useState('');
    const [boardRoomAreaAvail, setBoardRoomAreaAvail] = useState('');

    const [allOfficesReq, setAllOfficesReq] = useState('');
    const [allOfficesAvail, setAllOfficesAvail] = useState('');
    const [allOfficesAreaReq, setAllOfficesAreaReq] = useState('');
    const [allOfficesAreaAvail, setAllOfficesAreaAvail] = useState('');

    const [deptOfficesReq, setDeptOfficesReq] = useState('');
    const [deptOfficesAvail, setDeptOfficesAvail] = useState('');
    const [deptOfficesAreaReq, setDeptOfficesAreaReq] = useState('');
    const [deptOfficesAreaAvail, setDeptOfficesAreaAvail] = useState('');

    const [cabinsHodReq, setCabinsHodReq] = useState('');
    const [cabinsHodAvail, setCabinsHodAvail] = useState('');
    const [cabinsHodAreaReq, setCabinsHodAreaReq] = useState('');
    const [cabinsHodAreaAvail, setCabinsHodAreaAvail] = useState('');

    const [facultyCabinReq, setFacultyCabinReq] = useState('');
    const [facultyCabinAvail, setFacultyCabinAvail] = useState('');
    const [facultyCabinAreaReq, setFacultyCabinAreaReq] = useState('');
    const [facultyCabinAreaAvail, setFacultyCabinAreaAvail] = useState('');

    const [examControlOfficeReq, setExamControlOfficeReq] = useState('');
    const [examControlOfficeAvail, setExamControlOfficeAvail] = useState('');
    const [examControlOfficeAreaReq, setExamControlOfficeAreaReq] = useState('');
    const [examControlOfficeAreaAvail, setExamControlOfficeAreaAvail] = useState('');

    const [placementOfficeReq, setPlacementOfficeReq] = useState('');
    const [placementOfficeAvail, setPlacementOfficeAvail] = useState('');
    const [placementOfficeAreaReq, setPlacementOfficeAreaReq] = useState('');
    const [placementOfficeAreaAvail, setPlacementOfficeAreaAvail] = useState('');

    const [centralStoresReq, setCentralStoresReq] = useState('');
    const [centralStoresAvail, setCentralStoresAvail] = useState('');
    const [centralStoresAreaReq, setCentralStoresAreaReq] = useState('');
    const [centralStoresAreaAvail, setCentralStoresAreaAvail] = useState('');

    const [maintenanceRoomReq, setMaintenanceRoomReq] = useState('');
    const [maintenanceRoomAvail, setMaintenanceRoomAvail] = useState('');
    const [maintenanceRoomAreaReq, setMaintenanceRoomAreaReq] = useState('');
    const [maintenanceRoomAreaAvail, setMaintenanceRoomAreaAvail] = useState('');

    const [securityRoomReq, setSecurityRoomReq] = useState('');
    const [securityRoomAvail, setSecurityRoomAvail] = useState('');
    const [securityRoomAreaReq, setSecurityRoomAreaReq] = useState('');
    const [securityRoomAreaAvail, setSecurityRoomAreaAvail] = useState('');

    const [houseKeepingReq, setHouseKeepingReq] = useState('');
    const [houseKeepingAvail, setHouseKeepingAvail] = useState('');
    const [houseKeepingAreaReq, setHouseKeepingAreaReq] = useState('');
    const [houseKeepingAreaAvail, setHouseKeepingAreaAvail] = useState('');

    const [pantryReq, setPantryReq] = useState('');
    const [pantryAvail, setPantryAvail] = useState('');
    const [pantryAreaReq, setPantryAreaReq] = useState('');
    const [pantryAreaAvail, setPantryAreaAvail] = useState('');

    // Amenities Area
    const [toiletsReq, setToiletsReq] = useState('');
    const [toiletsAvail, setToiletsAvail] = useState('');
    const [toiletsAreaReq, setToiletsAreaReq] = useState('');
    const [toiletsAreaAvail, setToiletsAreaAvail] = useState('');

    const [boysCommonRoomReq, setBoysCommonRoomReq] = useState('');
    const [boysCommonRoomAvail, setBoysCommonRoomAvail] = useState('');
    const [boysCommonRoomAreaReq, setBoysCommonRoomAreaReq] = useState('');
    const [boysCommonRoomAreaAvail, setBoysCommonRoomAreaAvail] = useState('');

    const [girlsCommonRoomReq, setGirlsCommonRoomReq] = useState('');
    const [girlsCommonRoomAvail, setGirlsCommonRoomAvail] = useState('');
    const [girlsCommonRoomAreaReq, setGirlsCommonRoomAreaReq] = useState('');
    const [girlsCommonRoomAreaAvail, setGirlsCommonRoomAreaAvail] = useState('');

    const [cafeteriaReq, setCafeteriaReq] = useState('');
    const [cafeteriaAvail, setCafeteriaAvail] = useState('');
    const [cafeteriaAreaReq, setCafeteriaAreaReq] = useState('');
    const [cafeteriaAreaAvail, setCafeteriaAreaAvail] = useState('');

    const [stationaryStoreReq, setStationaryStoreReq] = useState('');
    const [stationaryStoreAvail, setStationaryStoreAvail] = useState('');
    const [stationaryStoreAreaReq, setStationaryStoreAreaReq] = useState('');
    const [stationaryStoreAreaAvail, setStationaryStoreAreaAvail] = useState('');

    const [sickRoomReq, setSickRoomReq] = useState('');
    const [sickRoomAvail, setSickRoomAvail] = useState('');
    const [sickRoomAreaReq, setSickRoomAreaReq] = useState('');
    const [sickRoomAreaAvail, setSickRoomAreaAvail] = useState('');

    // Investment on Equipment
    const [particulars, setParticulars] = useState('');
    const [department, setDepartment] = useState('');

    const [balanceSheet, setBalanceSheet] = useState(null);
    
    const [adhocDept, setAdhocDept] = useState('');
    const [adhocEquipCost, setAdhocEquipCost] = useState('');

    const [interimDept, setInterimDept] = useState('');
    const [interimEquipCost, setInterimEquipCost] = useState('');

    const [finalDept, setFinalDept] = useState('');
    const [finalEquipCost, setFinalEquipCost] = useState('');

    // Land Availability
    const [landCategory, setLandCategory] = useState('');
    const [areaReq, setAreaReq] = useState('');
    const [totalArea, setTotalArea] = useState('');

    const [hasBoundary, setHasBoundary] = useState(null);
    const [isContiguous, setIsContiguous] = useState(null);

    // Other Facilities (every question in this section is yes/no)
    const [languageLab, setLangLab] = useState(null);
    const [allWeatherRoad, setAllWeatherRoad] = useState(null);
    const [waterSupply, setWaterSupply] = useState(null);
    const [Generator, setGenerator] = useState(null);
    const [digiLibrary, setDigiLibrary] = useState(null);
    const [parking, setParking] = useState(null);
    const [medicalFacilities, setMedicalFacilities] = useState(null);
    const [insuranceFacilities, setInsuranceFacilities] = useState(null);
    const [reprographicFacilities, setReprographicFacilities] = useState(null);
    const [sewageDisposal, setSewageDisposal] = useState(null);
    const [telephoneFax, setTelephoneFax] = useState(null);
    const [noticeBoards, setNoticeBoards] = useState(null);
    const [counsellingFacilities, setCounsellingFacilities] = useState(null);
    const [institutionWebsite, setInstitutionWebsite] = useState(null);
    const [firstAidFacility, setFirstAidFacility] = useState(null);

    const [courtCases, setCourtCases] = useState(null);
    const [giveDetails, setGiveDetails] = useState('');

    function onSubmitHandler(e) {
        e.preventDefault();
        // Logic to handle submit
    }

    return (
        <form className="flex flex-col w-full">
            <h3 className="text-lg font-semibold w-full border-b gap-2 pb-2">Administrative Area</h3>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold">Principal or Director Office</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={principalOfficeReq}
                        setValue={setPrincipalOfficeReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={principalOfficeAvail}
                        setValue={setPrincipalOfficeAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={principalOfficeAreaReq}
                        setValue={setPrincipalOfficeAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={principalOfficeAreaAvail}
                        setValue={setPrincipalOfficeAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Board Rooms</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={boardRoomReq}
                        setValue={setBoardRoomReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={boardRoomAvail}
                        setValue={setBoardRoomAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={boardRoomAreaReq}
                        setValue={setBoardRoomAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={boardRoomAreaAvail}
                        setValue={setBoardRoomAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">All Inclusive Offices</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={allOfficesReq}
                        setValue={setAllOfficesReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={allOfficesAvail}
                        setValue={setAllOfficesAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={allOfficesAreaReq}
                        setValue={setAllOfficesAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={allOfficesAreaAvail}
                        setValue={setAllOfficesAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Department Offices</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={deptOfficesReq}
                        setValue={setDeptOfficesReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={deptOfficesAvail}
                        setValue={setDeptOfficesAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={deptOfficesAreaReq}
                        setValue={setDeptOfficesAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={deptOfficesAreaAvail}
                        setValue={setDeptOfficesAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Cabins for Head of Departments</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={cabinsHodReq}
                        setValue={setCabinsHodReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={cabinsHodAvail}
                        setValue={setCabinsHodAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={cabinsHodAreaReq}
                        setValue={setCabinsHodAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={cabinsHodAreaAvail}
                        setValue={setCabinsHodAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Cabins for Faculties</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={facultyCabinReq}
                        setValue={setFacultyCabinReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={facultyCabinAvail}
                        setValue={setFacultyCabinAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={facultyCabinAreaReq}
                        setValue={setFacultyCabinAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={facultyCabinAreaReq}
                        setValue={setFacultyCabinAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Examination Control Office</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={examControlOfficeReq}
                        setValue={setExamControlOfficeReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={examControlOfficeAvail}
                        setValue={setExamControlOfficeAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={examControlOfficeAreaReq}
                        setValue={setExamControlOfficeAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={examControlOfficeAreaAvail}
                        setValue={setExamControlOfficeAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Placement Office</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={placementOfficeReq}
                        setValue={setPlacementOfficeReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={placementOfficeAvail}
                        setValue={setPlacementOfficeAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={placementOfficeAreaReq}
                        setValue={setPlacementOfficeAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={placementOfficeAreaAvail}
                        setValue={setPlacementOfficeAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Central Stores</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={centralStoresReq}
                        setValue={setCentralStoresReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={centralStoresAvail}
                        setValue={setCentralStoresAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={centralStoresAreaReq}
                        setValue={setCentralStoresAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={centralStoresAreaAvail}
                        setValue={setCentralStoresAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Maintenance Rooms</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={maintenanceRoomReq}
                        setValue={setMaintenanceRoomReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={maintenanceRoomAvail}
                        setValue={setMaintenanceRoomAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={maintenanceRoomAreaReq}
                        setValue={setMaintenanceRoomAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={maintenanceRoomAreaAvail}
                        setValue={setMaintenanceRoomAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Security Rooms</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={securityRoomReq}
                        setValue={setSecurityRoomReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={securityRoomAvail}
                        setValue={setSecurityRoomAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={securityRoomAreaReq}
                        setValue={setSecurityRoomAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={securityRoomAreaAvail}
                        setValue={setSecurityRoomAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">House Keeping Rooms</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={houseKeepingReq}
                        setValue={setHouseKeepingReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={houseKeepingAvail}
                        setValue={setHouseKeepingAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value = {houseKeepingAreaReq}
                        setValue={setHouseKeepingAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={houseKeepingAreaAvail}
                        setValue={setHouseKeepingAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Pantry for Staff</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={pantryReq}
                        setValue={setPantryReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={pantryAvail}
                        setValue={setPantryAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={pantryAreaReq}
                        setValue={setPantryAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={pantryAreaAvail}
                        setValue={setPantryAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>

            <h3 className="text-lg font-semibold w-full border-b gap-2 pb-2 py-2">Amenities Area</h3>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Toilets (Ladies & Gents)</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={toiletsReq}
                        setValue={setToiletsReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={toiletsAvail}
                        setValue={setToiletsAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={toiletsAreaReq}
                        setValue={setToiletsAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={toiletsAreaAvail}
                        setValue={setToiletsAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Boys Common Room</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={boysCommonRoomReq}
                        setValue={setBoysCommonRoomReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={boysCommonRoomAvail}
                        setValue={setBoysCommonRoomAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={boysCommonRoomAreaReq}
                        setValue={setBoysCommonRoomAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={boysCommonRoomAreaAvail}
                        setValue={setBoysCommonRoomAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Girls Common Room</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={girlsCommonRoomReq}
                        setValue={setGirlsCommonRoomReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={girlsCommonRoomAvail}
                        setValue={setGirlsCommonRoomAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={girlsCommonRoomAreaReq}
                        setValue={setGirlsCommonRoomAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={girlsCommonRoomAreaAvail}
                        setValue={setGirlsCommonRoomAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Cafeteria</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={cafeteriaReq}
                        setValue={setCafeteriaReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={cafeteriaAvail}
                        setValue={setCafeteriaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={cafeteriaAreaReq}
                        setValue={setCafeteriaAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={cafeteriaAreaAvail}
                        setValue={setCafeteriaAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">Stationary Stores & Reprography</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={stationaryStoreReq}
                        setValue={setStationaryStoreReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={stationaryStoreAvail}
                        setValue={setSecurityRoomAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={stationaryStoreAreaReq}
                        setValue={setStationaryStoreAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={stationaryStoreAreaAvail}
                        setValue={setSecurityRoomAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h4 className="text-md font-semibold ">First Aid Cum Sick Room</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Number Required"
                        value={sickRoomReq}
                        setValue={setSickRoomReq}
                    />
                    <InputField 
                        label="Number Available"
                        value={sickRoomAvail}
                        setValue={setSickRoomAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Area Required (in sq.m)"
                        value={sickRoomAreaReq}
                        setValue={setSickRoomAreaReq}
                    />
                    <InputField 
                        label="Area Available (in sq.m)"
                        value={sickRoomAreaAvail}
                        setValue={setSickRoomAreaAvail}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>

            <h3 className="text-lg font-semibold w-full border-b gap-2 pb-2 py-2">Investment on Equipment</h3>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Paticulars"
                        value={particulars}
                        setValue={setParticulars}
                    />
                    <InputField 
                        label="Department"
                        value={department}
                        setValue={setDepartment}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Audited Balance Sheet Available?</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="audited"
                                onClick={(e) => setBalanceSheet(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="audited"
                                onClick={(e) => setBalanceSheet(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <dummy className="w-full"></dummy>
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <h3 className="text-md font-semibold">Fees</h3>
                <h4 className="text-md font-semibold">Adhoc Fees (for newly established Institutes)</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Department"
                        value={adhocDept}
                        setValue={setAdhocDept}
                    />
                    <InputField 
                        label="Equipment Cost"
                        value={adhocEquipCost}
                        setValue={setAdhocEquipCost}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <h4 className="text-md font-semibold">Interim Fees</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Department"
                        value={interimDept}
                        setValue={setInterimDept}
                    />
                    <InputField 
                        label="Equipment Cost"
                        value={interimEquipCost}
                        setValue={setInterimEquipCost}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <h4 className="text-md font-semibold">Final Fees</h4>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Department"
                        value={finalDept}
                        setValue={setFinalDept}
                    />
                    <InputField 
                        label="Equipment Cost"
                        value={finalEquipCost}
                        setValue={setFinalEquipCost}
                    />
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <h3 className="text-lg font-semibold w-full border-b gap-2 pb-2 py-2">Land Availability</h3>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Land Category"
                        value={landCategory}
                        setValue={setLandCategory}
                    />
                    <InputField 
                        label="Area Required (per Acre)"
                        value={areaReq}
                        setValue={setAreaReq}
                    />
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                    <InputField
                        label="Total Acre (in Acre)"
                        value={totalArea}
                        setValue={setTotalArea}
                    />
                    <dummy className="w-full"></dummy>
                    <dummy className="w-full"></dummy>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Whether the said land is demarcated by fencing or boundary wall for the institution (Tick the Appropriate Option)</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="boundary"
                                onClick={(e) => setHasBoundary(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="boundary"
                                onClick={(e) => setHasBoundary(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Whether the Land is Contiguous?</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="contiguous"
                                onClick={(e) => setIsContiguous(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="contiguous"
                                onClick={(e) => setIsContiguous(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                </div>
                <div>
                    <dummy className="w-full"></dummy>
                </div>
            </section>

            <h3 className="text-lg font-semibold w-full border-b gap-2 pb-2 py-2">Other Facilities</h3>
            <h5 className="text-md font-semibold w-full gap-2 pb-2 py-2">(Tick the Appropriate option based on Availiability)</h5>
            <section className="flex flex-col gap-5 w-full border-b py-4">
                <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Language Laboratory</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="language"
                                onClick={(e) => setLangLab(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="language"
                                onClick={(e) => setLangLab(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">All Weather Approach Road</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="road"
                                onClick={(e) => setAllWeatherRoad(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="road"
                                onClick={(e) => setAllWeatherRoad(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Portable Water Supply</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="water"
                                onClick={(e) => setWaterSupply(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="water"
                                onClick={(e) => setWaterSupply(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Electrical Generator</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="generator"
                                onClick={(e) => setGenerator(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="generator"
                                onClick={(e) => setGenerator(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Parking Facilities</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="parking"
                                onClick={(e) => setParking(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="parking"
                                onClick={(e) => setParking(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Digital Library</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="digilibrary"
                                onClick={(e) => setDigiLibrary(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="digilibrary"
                                onClick={(e) => setDigiLibrary(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Medical Facilities</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="medical"
                                onClick={(e) => setMedicalFacilities(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="medical"
                                onClick={(e) => setMedicalFacilities(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Insurance Facilities</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="insurance"
                                onClick={(e) => setInsuranceFacilities(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="insurance"
                                onClick={(e) => setInsuranceFacilities(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Reprographic Facilities</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="reprographic"
                                onClick={(e) => setReprographicFacilities(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="reprographics"
                                onClick={(e) => setReprographicFacilities(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Sewage Disposal</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="sewage"
                                onClick={(e) => setSewageDisposal(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="sewage"
                                onClick={(e) => setSewageDisposal(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Telephone & FAX</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="telephone"
                                onClick={(e) => setTelephoneFax(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="telephone"
                                onClick={(e) => setTelephoneFax(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Notice Boards</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="noticeBoard"
                                onClick={(e) => setNoticeBoards(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="noticeBoard"
                                onClick={(e) => setNoticeBoards(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Medical & Counselling Facilities</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="counselling"
                                onClick={(e) => setCounsellingFacilities(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="counselling"
                                onClick={(e) => setCounsellingFacilities(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Institution Website</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="website"
                                onClick={(e) => setInstitutionWebsite(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="website"
                                onClick={(e) => setInstitutionWebsite(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">First Aid Facilities</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="firstAid"
                                onClick={(e) => setFirstAidFacility(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="firstAid"
                                onClick={(e) => setFirstAidFacility(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <dummy className="w-full"></dummy>
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex items-center gap-4 justify-between">
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Court Cases (if any)</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center">
                            <input 
                                type="radio" name="courtCase"
                                onClick={(e) => setCourtCases(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="courtCases"
                                onClick={(e) => setCourtCases(false)}
                            /> 
                            <label>No</label>
                        </span>
                    </span>
                    <dummy className="w-full"></dummy>
                    <dummy className="w-full"></dummy>
                </div>
                <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-sm">Give Details</label>
                <textarea
                    rows="3"
                    value={giveDetails}
                    onChange={(e) => setGiveDetails(e.target.value)}
                    className="px-2 py-1 outline-none border-2 rounded-lg"
                ></textarea>
                <dummy className="w-full"></dummy>
                <dummy className="w-full"></dummy>
            </div>
                
                <div>
                    <dummy className="w-full"></dummy>
                </div>
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

export default FacilitiesFormTwo;