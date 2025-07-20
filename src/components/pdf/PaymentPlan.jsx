import React from 'react';

const PaymentPlan = ({ paymentPlan }) => {
  return (
    <div className="pdf-page bg-white w-full min-h-screen p-6">
      <h2 className="text-2xl font-bold text-[#9333EA] mb-6">Payment Plan</h2>

      {/* Total Amount Box */}
      <div className="bg-[#F5F0FA] border border-gray-300 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm">Total Amount</span>
          <span className="text-sm">{paymentPlan?.totalAmount || '-'}</span>
        </div>
      </div>

      {/* TCS Box */}
      <div className="bg-[#F5F0FA] border border-gray-300 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm">TCS</span>
          <span className="text-sm">{paymentPlan?.tcs || 'Not Collected'}</span>
        </div>
      </div>

      {/* Installments Table */}
      {paymentPlan?.installments && paymentPlan.installments.length > 0 && (
        <div className="overflow-hidden border border-gray-300 rounded-lg mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[#291F5D] text-white">
                <th className="p-3 text-left text-sm font-bold">Installment</th>
                <th className="p-3 text-left text-sm font-bold">Amount</th>
                <th className="p-3 text-left text-sm font-bold">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentPlan.installments.map((installment, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-[#F5F0FA]' : 'bg-white'}>
                  <td className="p-3 text-sm">{installment.name || '-'}</td>
                  <td className="p-3 text-sm">{installment.amount || '-'}</td>
                  <td className="p-3 text-sm">{installment.dueDate || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Visa Details */}
      {paymentPlan?.visa && (
        <div>
          <h3 className="text-lg font-bold text-[#9333EA] mb-4">Visa Details</h3>
          <div className="border border-gray-300 rounded-lg p-4 mb-8">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <span className="font-bold text-sm">Visa Type:</span>
                <div className="text-sm">{paymentPlan.visa.type || '-'}</div>
              </div>
              <div>
                <span className="font-bold text-sm">Validity:</span>
                <div className="text-sm">{paymentPlan.visa.validity || '-'}</div>
              </div>
              <div>
                <span className="font-bold text-sm">Processing Date:</span>
                <div className="text-sm">{paymentPlan.visa.processingDate || '-'}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plan Pack Go */}
      <div className="text-center mt-12">
        <div className="text-2xl font-bold text-[#505191] mb-4">PLAN.PACK.GO!</div>
        <button className="bg-[#505191] text-white px-8 py-3 rounded-full font-bold hover:bg-[#404080]">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPlan;
