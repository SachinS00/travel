import React from 'react';

const Notes = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Important <span className="text-purple">Notes</span></h2>
      
      <div className="border border-blue-500 rounded-lg overflow-hidden mb-8">
        <table className="w-full">
          <thead>
            <tr className="bg-[#291F5D] text-white">
              <th className="p-4 text-left">Point</th>
              <th className="p-4 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#F5F0FA]">
              <td className="p-4">Airlines Standard Policy</td>
              <td className="p-4">In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.</td>
            </tr>
            <tr>
              <td className="p-4">Flight/Hotel Cancellation</td>
              <td className="p-4">In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.</td>
            </tr>
            <tr className="bg-[#F5F0FA]">
              <td className="p-4">Trip Insurance</td>
              <td className="p-4">In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.</td>
            </tr>
            <tr>
              <td className="p-4">Hotel Check-In & Check Out</td>
              <td className="p-4">In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.</td>
            </tr>
            <tr className="bg-[#F5F0FA]">
              <td className="p-4">Visa Rejection</td>
              <td className="p-4">In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notes;