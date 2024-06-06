import React from "react";

function ViewAnnexure() {
  return (
    <div className="container mx-auto mt-5">
      <h3 className="text-xl font-bold mb-4">View Annexure</h3>
      <div className="flex justify-between items-center mb-3">
        <input
          type="text"
          className="form-input w-1/4"
          placeholder="Search..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          + Add Custom Inputs
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full border-b">
            <th className="py-2 px-4 text-left">Sr. No.</th>
            <th className="py-2 px-4 text-left">Institutes</th>
            <th className="py-2 px-4 text-left">Date of Insert</th>
            <th className="py-2 px-4 text-left">Remarks</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-full border-b">
            <td className="py-2 px-4 text-left">1</td>
            <td className="py-2 px-4 text-left">Institute Name</td>
            <td className="py-2 px-4 text-left">24-02-2024</td>
            <td className="py-2 px-4 text-left"></td>
            <td className="py-2 px-4 text-left">
              <button className="text-blue-500">
                <i className="fas fa-eye"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>Showing 1 of 100 Entries</div>
        <div>
          Show{" "}
          <select className="form-select w-auto">
            <option>100</option>
            <option>50</option>
            <option>25</option>
          </select>{" "}
          entries
        </div>
      </div>
    </div>
  );
}

export default ViewAnnexure;
