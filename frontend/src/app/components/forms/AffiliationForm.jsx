"use client";
import { useState } from "react";
import InputField from "../common/InputField";

const AffiliationForm = () => {
  const [yearOfEst, setYearOfEst] = useState("");
  const [firstAffi, setFirstAffi] = useState("");
  const [detailsOfAffi, setDetailsOfAffi] = useState("");

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const [qualification, setQualification] = useState("");
  const [doa, setDoa] = useState("");
  const [doj, setDoj] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isApproved, setIsApproved] = useState(null);
  const [university, setUniversity] = useState("");

  const [insType, setInsType] = useState("");
  const [mioIns, setMioIns] = useState(null);
  const [mioType, setMioType] = useState("");

  const [local, setLocal] = useState(null);
  const [dolm, setDoLM] = useState("");

  const [governing, setGoverning] = useState(null);
  const [doLm, setDolM] = useState("");

  const [aicte, setAICTE] = useState("");
  const [NoC, setNOC] = useState("");
  const [AcdY, setAcdYear] = useState("");

  const [fy, setFirsyear] = useState("");
  const [sy, setSecondyear] = useState("");
  const [ty, setThirdyear] = useState("");
  const [fty, setFourthyear] = useState("");
  const [total, setTotal] = useState("");

  const [Fy, setFirsYear] = useState("");
  const [Sy, setSecondYear] = useState("");
  const [Ty, setThirdYear] = useState("");
  const [Fty, setFourthYear] = useState("");
  const [Total, setTotaL] = useState("");

  const [NoCourse, setNocourse] = useState("");

  const [FY, setFirstyear] = useState("");
  const [SY, setSeconDyear] = useState("");
  const [TY, setThirDyear] = useState("");
  const [FTY, setFourtHyear] = useState("");
  const [TOTAL, setTOTAL] = useState("");

  const [FirstY, setFirsTYear] = useState("");
  const [SecY, setSecondYeaR] = useState("");
  const [ThirdY, setThirdYeaR] = useState("");
  const [FourthY, setFourthYeaR] = useState("");
  const [TOtal, setTOTal] = useState("");

  const [nocourse, setNoCourse] = useState("");
  const [YoA, setYearOA] = useState("");
  const [aicteA, setAicte] = useState("");

  const [GR, setGovGR] = useState("");
  const [UA, setUAffiliation] = useState("");

  const [Nocourse, setNoCoursE] = useState("");
  const [YOA, setYOA] = useState("");
  const [AicteA, setAictE] = useState("");

  const [Gr, setGovGr] = useState("");
  const [Ua, setUaffiliation] = useState("");

  const [AY, setAY] = useState("");

  const [Nc, setNc] = useState("");

  const [FirStY, setFirSTYear] = useState("");
  const [SeCY, setSeconDYeaR] = useState("");
  const [ThirDY, setThirDYeaR] = useState("");
  const [FourtHY, setFourtHYeaR] = useState("");
  const [TOtaL, setTOTaL] = useState("");

  const [NC, setNC] = useState("");

  const [FiRStY, setFiRSTYear] = useState("");
  const [SECY, setSecoNDYeaR] = useState("");
  const [ThiRDY, setThiRDYeaR] = useState("");
  const [FourTHY, setFourTHYeaR] = useState("");
  const [TOtAL, setToTAL] = useState("");

  const [Ay, setAy] = useState("");

  const [Ncourse, setNcourse] = useState("");

  const [FIRST, setFIRST] = useState("");
  const [SEC, setSECOND] = useState("");
  const [THIRD, setTHIRD] = useState("");
  const [FOURTH, setFOURTH] = useState("");
  const [TOT, setTOT] = useState("");

  const [NCOURSE, setNCORSE] = useState("");

  const [FIRSTY, setFIRSTY] = useState("");
  const [SECONDY, setSECONDY] = useState("");
  const [THIRDY, setTHIRDY] = useState("");
  const [FOURTHY, setFOURTHY] = useState("");
  const [TOTA, setTOTA] = useState("");

  const [NAME, setNAME] = useState("");
  const [Sanctioned, setSanctioned] = useState("");

  const [required, setRequired] = useState("");
  const [approve, setApprove] = useState("");

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
        <label className="font-semibold text-sm">
          Details of Last Affiliation (with year of approval)
        </label>
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
        <InputField label="Last Name" value={lastName} setValue={setLastName} />
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
            <input
              type="radio"
              name="approved"
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
          <span className="px-2 py-1 flex gap-2 items-center justify-between">
            <input type="file" className="w-60" />
            <button className="bg-blue-600 text-white px-1 py-0.5 rounded">
              save
            </button>
            <button className="bg-gray-200 p-1 rounded">view</button>
          </span>
        </span>
      </div>

      <h4 className="text-lg font-semibold mt-2">About Institute</h4>
      <div className="w-full flex items-center gap-4 justify-between">
        <InputField
          label="Institute Type"
          value={insType}
          setValue={setInsType}
        />
        <span className="flex flex-col gap-2 w-full">
          <label className="text-sm font-semibold">Minority Institute</label>
          <span className="px-2 py-1 flex gap-2 items-center">
            <input
              type="radio"
              name="approved"
              onClick={(e) => setMioIns(true)}
            />
            <label className="mr-2">Yes</label>
            <input
              type="radio"
              name="approved"
              onClick={(e) => setMioIns(false)}
            />
            <label>No</label>
          </span>
        </span>
        <InputField
          label="Minority Type"
          value={mioType}
          setValue={setMioType}
        />
      </div>
      <div className="w-full flex items-center gap-4 justify-between">
        <span className="flex flex-col gap-2 w-full">
          <label className="text-sm font-semibold">
            Local Managing Commitee Constituted
            <br>(as per Maharashtra university act 1994)</br>
          </label>
          <span className="px-2 py-1 flex gap-2 items-center">
            <input
              type="radio"
              name="approved"
              onClick={(e) => setLocal(true)}
            />
            <label className="mr-2">Yes</label>
            <input
              type="radio"
              name="approved"
              onClick={(e) => setLocal(false)}
            />
            <label>No</label>
          </span>
        </span>
        <InputField
          label="Date of Last Meeting"
          value={dolm}
          setValue={setDoLM}
          type="date"
        />
      </div>

      <div className="w-full flex items-center gap-4 justify-between">
        <span className="flex flex-col gap-2 w-full">
          <label className="text-sm font-semibold">
            Governing Body Constituted
          </label>
          <span className="px-2 py-1 flex gap-2 items-center">
            <input
              type="radio"
              name="approved"
              onClick={(e) => setGoverning(true)}
            />
            <label className="mr-2">Yes</label>
            <input
              type="radio"
              name="approved"
              onClick={(e) => setGoverning(false)}
            />
            <label>No</label>
          </span>
        </span>
        <InputField
          label="Date of Last Meeting"
          value={doLm}
          setValue={setDolM}
          type="date"
        />
      </div>

      <div className="w-full flex flex-col gap-2 border-b pb-3">
        <label className="font-semibold">Academic Calendars</label>
        <span className="px-2 py-1 flex gap-2 items-center">
          <span className="w-28">First Term</span>
          <input type="file" className="w-60" />
          <button className="bg-blue-600 text-white px-1 py-0.5 rounded">
            save
          </button>
          <button className="bg-gray-200 p-1 rounded">view</button>
        </span>
        <span className="px-2 py-1 flex gap-2 items-center">
          <span className="w-28">Second Term</span>
          <input type="file" className="w-60" />
          <button className="bg-blue-600 text-white px-1 py-0.5 rounded">
            save
          </button>
          <button className="bg-gray-200 p-1 rounded">view</button>
        </span>
      </div>
      <div className="w-full flex flex-col gap-2 border-b pb-3">
        <h4 className="text-lg font-semibold mt-2">Under Graduate</h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField
            label="AICTE approved existing course"
            value={aicte}
            setValue={setAICTE}
          />
          <InputField label="Name of Course" value={NoC} setValue={setNOC} />
          <InputField
            label="Academic Year"
            value={AcdY}
            setValue={setAcdYear}
          />
        </div>

        <h4 className="text-lg font-semibold mt-2">
          Sanctioned Intake (Year-Wise)
        </h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="1st Year" value={fy} setValue={setFirsyear} />
          <InputField label="2nd Year" value={sy} setValue={setSecondyear} />
          <InputField label="3rd Year" value={ty} setValue={setThirdyear} />
          <InputField label="4th Year" value={fty} setValue={setFourthyear} />
          <InputField label="Total" value={total} setValue={setTotal} />
        </div>

        <h4 className="text-lg font-semibold mt-2">
          Actual Admmitted (Year-Wise)
        </h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="1st Year" value={Fy} setValue={setFirsYear} />
          <InputField label="2nd Year" value={Sy} setValue={setSecondYear} />
          <InputField label="3rd Year" value={Ty} setValue={setThirdYear} />
          <InputField label="4th Year" value={Fty} setValue={setFourthYear} />
          <InputField label="Total" value={Total} setValue={setTotaL} />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 border-b pb-3">
        <h4 className="text-lg font-semibold mt-2">Post Graduate</h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField
            label="Name of Course"
            value={NoCourse}
            setValue={setNocourse}
          />
        </div>

        <h4 className="text-lg font-semibold mt-2">
          Sanctioned Intake (Year-Wise)
        </h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="1st Year" value={FY} setValue={setFirstyear} />
          <InputField label="2nd Year" value={SY} setValue={setSeconDyear} />
          <InputField label="3rd Year" value={TY} setValue={setThirDyear} />
          <InputField label="4th Year" value={FTY} setValue={setFourtHyear} />
          <InputField label="Total" value={TOTAL} setValue={setTOTAL} />
        </div>

        <h4 className="text-lg font-semibold mt-2">
          Actual Admmitted (Year-Wise)
        </h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="1st Year" value={FirstY} setValue={setFirsTYear} />
          <InputField label="2nd Year" value={SecY} setValue={setSecondYeaR} />
          <InputField label="3rd Year" value={ThirdY} setValue={setThirdYeaR} />
          <InputField
            label="4th Year"
            value={FourthY}
            setValue={setFourthYeaR}
          />
          <InputField label="Total" value={TOtal} setValue={setTOTal} />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 border-b pb-3">
        <h3 className="text-lg font-semibold mt-2">
          First Affiliation for existing courses
        </h3>
        <h4 className="text-lg font-semibold mt-2">Under Graduate</h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField
            label="Name of Course"
            value={nocourse}
            setValue={setNoCourse}
          />
          <InputField
            label="Year of Affiliation"
            value={YoA}
            setValue={setYearOA}
          />
          <InputField
            label="AICTE Approval no."
            value={aicteA}
            setValue={setAicte}
          />
        </div>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField
            label="Government G.R. no."
            value={GR}
            setValue={setGovGR}
          />
          <InputField
            label="University Affiliation Letter no."
            value={UA}
            setValue={setUAffiliation}
          />
        </div>

        <h4 className="text-lg font-semibold mt-2">Post Graduate</h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField
            label="Name of Course"
            value={Nocourse}
            setValue={setNoCoursE}
          />
          <InputField
            label="Year of Affiliation"
            value={YOA}
            setValue={setYOA}
          />
          <InputField
            label="AICTE Approval no."
            value={AicteA}
            setValue={setAictE}
          />
        </div>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField
            label="Government G.R. no."
            value={Gr}
            setValue={setGovGr}
          />
          <InputField
            label="University Affiliation Letter no."
            value={Ua}
            setValue={setUaffiliation}
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 border-b pb-3">
        <h3>New Courses/Increase in Intake</h3>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="Academic Year" value={AY} setValue={setAY} />
        </div>
        <h4 className="text-lg font-semibold mt-2">Under Graduate</h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="Name of Course" value={Nc} setValue={setNc} />
        </div>
        <h4 className="text-lg font-semibold mt-2">
          Proposed Intake (Year-Wise)
        </h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="1st Year" value={FirStY} setValue={setFirSTYear} />
          <InputField label="2nd Year" value={SeCY} setValue={setSeconDYeaR} />
          <InputField label="3rd Year" value={ThirDY} setValue={setThirDYeaR} />
          <InputField
            label="4th Year"
            value={FourtHY}
            setValue={setFourtHYeaR}
          />
          <InputField label="Total" value={TOtaL} setValue={setTOTaL} />
        </div>
        <h4 className="text-lg font-semibold mt-2">Post Graduate</h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="Name of Course" value={NC} setValue={setNC} />
        </div>
        <h4 className="text-lg font-semibold mt-2">
          Proposed Intake (Year-Wise)
        </h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="1st Year" value={FiRStY} setValue={setFiRSTYear} />
          <InputField label="2nd Year" value={SECY} setValue={setSecoNDYeaR} />
          <InputField label="3rd Year" value={ThiRDY} setValue={setThiRDYeaR} />
          <InputField
            label="4th Year"
            value={FourTHY}
            setValue={setFourTHYeaR}
          />
          <InputField label="Total" value={TOtAL} setValue={setToTAL} />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 border-b pb-3">
        <h3>Courses For Extension of Affiliation</h3>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="Academic Year" value={Ay} setValue={setAy} />
        </div>
        <h4 className="text-lg font-semibold mt-2">Under Graduate</h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField
            label="Name of Course"
            value={Ncourse}
            setValue={setNcourse}
          />
        </div>
        <h4 className="text-lg font-semibold mt-2">
          Proposed Intake (Year-Wise)
        </h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="1st Year" value={FIRST} setValue={setFIRST} />
          <InputField label="2nd Year" value={SEC} setValue={setSECOND} />
          <InputField label="3rd Year" value={THIRD} setValue={setTHIRD} />
          <InputField label="4th Year" value={FOURTH} setValue={setFOURTH} />
          <InputField label="Total" value={TOT} setValue={setTOT} />
        </div>
        <h4 className="text-lg font-semibold mt-2">Post Graduate</h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField
            label="Name of Course"
            value={NCOURSE}
            setValue={setNCORSE}
          />
        </div>
        <h4 className="text-lg font-semibold mt-2">
          Proposed Intake (Year-Wise)
        </h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="1st Year" value={FIRSTY} setValue={setFIRSTY} />
          <InputField label="2nd Year" value={SECONDY} setValue={setSECONDY} />
          <InputField label="3rd Year" value={THIRDY} setValue={setTHIRDY} />
          <InputField label="4th Year" value={FOURTHY} setValue={setFOURTHY} />
          <InputField label="Total" value={TOTA} setValue={setTOTA} />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 border-b pb-3">
        <h4>Faculty Streangth on Existing Programme</h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="Name of Course" value={NAME} setValue={setNAME} />
          <InputField
            label="Sanctioned Intake"
            value={Sanctioned}
            setValue={setSanctioned}
          />
        </div>
        <h4>Faculty Streangth</h4>
        <div className="w-full flex items-center gap-4 justify-between">
          <InputField label="Required" value={required} setRequired={setNAME} />
          <InputField label="Approved" value={approve} setValue={setApprove} />
        </div>
      </div>

      {/* Tables */}

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

export default AffiliationForm;